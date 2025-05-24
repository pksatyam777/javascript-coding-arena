'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  ArrowLeft,
  Play,
  RotateCcw,
  CheckCircle,
  XCircle,
  Lightbulb,
  Clock,
  Target,
  Trophy,
  Eye,
  EyeOff
} from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import CodeEditor from '@/components/monaco-editor';
import CongratulationsDialog from '@/components/congratulations-dialog';
import { problems, type Problem } from '@/lib/problems';
import {
  getUserProgress,
  updateUserProgress,
  trackProblemAttempt,
  trackHintUsage,
  isProblemUnlocked,
  getNextUnlockedProblem
} from '@/lib/user-progress';

export default function ProblemDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const problemId = params.id as string;

  const [problem, setProblem] = useState<Problem | null>(null);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState<{
    passed: boolean;
    message: string;
  } | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [startTime, setStartTime] = useState(Date.now());
  const [showHints, setShowHints] = useState(false);
  const [hintsViewed, setHintsViewed] = useState(false);
  const [currentHintIndex, setCurrentHintIndex] = useState(0);
  const [attempts, setAttempts] = useState(0);

  // Congratulations dialog state
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [congratsData, setCongratsData] = useState<{
    solveTime: number;
    attempts: number;
    hintsUsed: boolean;
    newBadges: string[];
    isFirstAttempt: boolean;
    nextProblemId?: string | null;
  } | null>(null);

  useEffect(() => {
    // Find the problem
    const foundProblem = problems.find((p) => p.id === problemId);
    if (!foundProblem) {
      router.push('/dashboard');
      return;
    }

    // Check if problem is unlocked
    if (!isProblemUnlocked(problemId, problems)) {
      router.push('/dashboard');
      return;
    }

    setProblem(foundProblem);
    setCode(foundProblem.starterCode || '// Write your solution here\n\n');
    setStartTime(Date.now());

    // Check if already completed
    const progress = getUserProgress();
    setIsCompleted(!!progress.completedProblems[problemId]);

    // Load existing stats if available
    if (progress.problemStats[problemId]) {
      setAttempts(progress.problemStats[problemId].attempts || 0);
      setHintsViewed(progress.problemStats[problemId].hintsViewed || false);
    }
  }, [problemId, router]);

  const runCode = async () => {
    if (!problem) return;

    setIsRunning(true);
    setOutput('');
    setTestResults(null);

    try {
      // Track attempt
      trackProblemAttempt(problemId, startTime);
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      // Create a function that combines user code with test code
      const fullCode = `
        ${code}
        
        ${problem.testCode}
      `;

      // Execute the code in a safe environment
      const result = await executeCode(fullCode);

      if (result.success) {
        setTestResults({ passed: true, message: 'All tests passed! 🎉' });
        setOutput('✅ All tests passed successfully!');

        // Mark as completed and update progress
        if (!isCompleted) {
          const solveTime = Math.round((Date.now() - startTime) / (1000 * 60)); // minutes
          const isFirstAttempt = newAttempts === 1;

          // Get current badges before updating progress
          const currentProgress = getUserProgress();
          const currentBadges = currentProgress.earnedBadges || [];

          // Update progress and get new state
          const updatedProgress = updateUserProgress(
            problemId,
            problems,
            startTime
          );
          const newBadges = updatedProgress.earnedBadges.filter(
            (badge) => !currentBadges.includes(badge)
          );

          // Get next problem
          const nextProblemId = getNextUnlockedProblem(problem.level, problems);

          setIsCompleted(true);

          // Show congratulations dialog
          setCongratsData({
            solveTime,
            attempts: newAttempts,
            hintsUsed: hintsViewed,
            newBadges,
            isFirstAttempt,
            nextProblemId
          });
          setShowCongratulations(true);
        }
      } else {
        setTestResults({
          passed: false,
          message: result.error || 'Tests failed'
        });
        setOutput(`❌ ${result.error}`);
      }
    } catch (error) {
      setTestResults({ passed: false, message: 'Runtime error occurred' });
      setOutput(
        `❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }

    setIsRunning(false);
  };

  const executeCode = async (
    code: string
  ): Promise<{ success: boolean; error?: string }> => {
    return new Promise((resolve) => {
      try {
        // Create a new function to execute the code safely
        const func = new Function(code);
        func();
        resolve({ success: true });
      } catch (error) {
        resolve({
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    });
  };

  const resetCode = () => {
    if (
      problem &&
      confirm(
        'Are you sure you want to reset your code? This action cannot be undone.'
      )
    ) {
      setCode(problem.starterCode || '// Write your solution here\n\n');
      setOutput('');
      setTestResults(null);
      setStartTime(Date.now());
    }
  };

  const toggleHints = () => {
    if (!showHints && !hintsViewed) {
      trackHintUsage(problemId);
      setHintsViewed(true);
    }
    setShowHints(!showHints);
  };

  const nextHint = () => {
    if (problem && currentHintIndex < problem.hints.length - 1) {
      setCurrentHintIndex((prev) => prev + 1);
    }
  };

  const prevHint = () => {
    if (currentHintIndex > 0) {
      setCurrentHintIndex((prev) => prev - 1);
    }
  };

  if (!problem) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg">Loading problem...</div>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-500';
      case 'intermediate':
        return 'bg-yellow-500';
      case 'advanced':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-6 px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="pl-0"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <div className="flex items-center gap-4">
            {isCompleted && (
              <Badge className="bg-green-500 text-white">
                <CheckCircle className="h-3 w-3 mr-1" />
                Completed
              </Badge>
            )}
            <ThemeToggle />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Problem Description */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl">{problem.title}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge
                        className={`${getDifficultyColor(
                          problem.level
                        )} text-white`}
                      >
                        {problem.level.charAt(0).toUpperCase() +
                          problem.level.slice(1)}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Target className="h-4 w-4" />
                        Attempts: {attempts}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {problem.description}
                </CardDescription>
              </CardContent>
            </Card>

            <Tabs defaultValue="examples" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="examples">Examples</TabsTrigger>
                <TabsTrigger value="constraints">Constraints</TabsTrigger>
                <TabsTrigger value="hints">Hints</TabsTrigger>
                <TabsTrigger value="tags">Tags</TabsTrigger>
              </TabsList>

              <TabsContent value="examples" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Examples</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {problem.examples ? (
                      <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                        <code>{problem.examples}</code>
                      </pre>
                    ) : (
                      <p className="text-muted-foreground">
                        No examples provided.
                      </p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="constraints" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Constraints</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {problem.constraints && problem.constraints.length > 0 ? (
                      <ul className="space-y-2">
                        {problem.constraints.map((constraint, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-muted-foreground">•</span>
                            <span className="text-sm">{constraint}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground">
                        No constraints specified.
                      </p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="hints" className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Lightbulb className="h-5 w-5" />
                        Hints
                      </CardTitle>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={toggleHints}
                        className="flex items-center gap-2"
                      >
                        {showHints ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                        {showHints ? 'Hide' : 'Show'} Hints
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {showHints ? (
                      <div className="space-y-4">
                        {hintsViewed && (
                          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3">
                            <p className="text-sm text-yellow-800 dark:text-yellow-200">
                              💡 Viewing hints may affect your achievement
                              progress.
                            </p>
                          </div>
                        )}

                        <div className="bg-muted p-4 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">
                              Hint {currentHintIndex + 1} of{' '}
                              {problem.hints.length}
                            </span>
                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={prevHint}
                                disabled={currentHintIndex === 0}
                              >
                                Previous
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={nextHint}
                                disabled={
                                  currentHintIndex === problem.hints.length - 1
                                }
                              >
                                Next
                              </Button>
                            </div>
                          </div>
                          <p className="text-sm">
                            {problem.hints[currentHintIndex]}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <p className="text-muted-foreground">
                        Click "Show Hints" to reveal helpful tips for solving
                        this problem.
                      </p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tags" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Tags</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {problem.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Code Editor and Output */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Code Editor</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={resetCode}
                      className="flex items-center gap-2"
                    >
                      <RotateCcw className="h-4 w-4" />
                      Reset
                    </Button>
                    <Button
                      onClick={runCode}
                      disabled={isRunning}
                      className="flex items-center gap-2"
                    >
                      {isRunning ? (
                        <Clock className="h-4 w-4 animate-spin" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                      {isRunning ? 'Running...' : 'Run Code'}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <CodeEditor
                  value={code}
                  onChange={setCode}
                  language="javascript"
                  height="400px"
                />
              </CardContent>
            </Card>

            {/* Output */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  {testResults?.passed ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : testResults?.passed === false ? (
                    <XCircle className="h-5 w-5 text-red-500" />
                  ) : null}
                  Output
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-32 w-full">
                  <pre className="text-sm font-mono whitespace-pre-wrap">
                    {output || 'Run your code to see the output...'}
                  </pre>
                </ScrollArea>

                {testResults && (
                  <div className="mt-4">
                    <Separator className="mb-4" />
                    <div
                      className={`p-3 rounded-lg ${
                        testResults.passed
                          ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                          : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
                      }`}
                    >
                      <p
                        className={`text-sm font-medium ${
                          testResults.passed
                            ? 'text-green-800 dark:text-green-200'
                            : 'text-red-800 dark:text-red-200'
                        }`}
                      >
                        {testResults.message}
                      </p>

                      {testResults.passed && !isCompleted && (
                        <div className="mt-2 flex items-center gap-2 text-green-700 dark:text-green-300">
                          <Trophy className="h-4 w-4" />
                          <span className="text-sm">
                            Problem completed! Progress saved.
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Congratulations Dialog */}
        {showCongratulations && congratsData && (
          <CongratulationsDialog
            isOpen={showCongratulations}
            onClose={() => setShowCongratulations(false)}
            problemTitle={problem.title}
            problemLevel={problem.level}
            solveTime={congratsData.solveTime}
            attempts={congratsData.attempts}
            hintsUsed={congratsData.hintsUsed}
            newBadges={congratsData.newBadges}
            isFirstAttempt={congratsData.isFirstAttempt}
            nextProblemId={congratsData.nextProblemId}
          />
        )}
      </div>
    </div>
  );
}
