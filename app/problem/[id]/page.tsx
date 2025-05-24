"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Play,
  FileText,
  Lightbulb,
  ArrowRight,
  Lock,
  Trophy,
  Eye,
  Timer,
} from "lucide-react"
import MonacoEditor from "@/components/monaco-editor"
import { ThemeToggle } from "@/components/theme-toggle"
import { problems } from "@/lib/problems"
import {
  getUserProgress,
  updateUserProgress,
  isProblemUnlocked,
  isLevelUnlocked,
  trackHintUsage,
  trackProblemAttempt,
  BADGES,
} from "@/lib/user-progress"

export default function ProblemPage() {
  const params = useParams()
  const router = useRouter()
  const problemId = params.id as string

  const [code, setCode] = useState("")
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)
  const [isRunning, setIsRunning] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [startTime, setStartTime] = useState(Date.now())
  const [hintsViewed, setHintsViewed] = useState(false)
  const [newBadges, setNewBadges] = useState<string[]>([])
  const [showBadgeAlert, setShowBadgeAlert] = useState(false)

  const problem = problems.find((p) => p.id === problemId)

  useEffect(() => {
    if (!problem) {
      router.push("/")
      return
    }

    const levelUnlocked = isLevelUnlocked(problem.level)
    if (!levelUnlocked) {
      router.push("/")
      return
    }

    const unlocked = isProblemUnlocked(problemId, problems)
    setIsUnlocked(unlocked)

    if (!unlocked) {
      router.push(`/problems/${problem.level}`)
      return
    }

    const userProgress = getUserProgress()
    setCompleted(!!userProgress.completedProblems?.[problemId])
    setStartTime(Date.now())

    setCode(problem.starterCode || `// Write your solution for "${problem.title}" here\n\n`)
  }, [problem, problemId, router])

  if (!problem) {
    return null
  }

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardHeader className="text-center">
            <Lock className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <CardTitle>Problem Locked</CardTitle>
            <CardDescription>You need to complete the previous problem to unlock this challenge.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Link href={`/problems/${problem.level}`} className="w-full">
              <Button className="w-full">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Problems
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    )
  }

  const runCode = () => {
    setIsRunning(true)
    setResult(null)

    // Track attempt
    trackProblemAttempt(problemId, startTime)

    try {
      const userFunction = new Function(code + `\n${problem.testCode}`)
      userFunction()

      setResult({
        success: true,
        message: "🎉 All tests passed! Great job!",
      })

      if (!completed) {
        const oldProgress = getUserProgress()
        const updatedProgress = updateUserProgress(problemId, problems, startTime)
        setCompleted(true)

        // Check for new badges
        const earnedNewBadges = updatedProgress.earnedBadges.filter(
          (badge) => !oldProgress.earnedBadges.includes(badge),
        )

        if (earnedNewBadges.length > 0) {
          setNewBadges(earnedNewBadges)
          setShowBadgeAlert(true)
          setTimeout(() => setShowBadgeAlert(false), 5000)
        }
      }
    } catch (error) {
      setResult({
        success: false,
        message: error instanceof Error ? error.message : "An error occurred",
      })
    } finally {
      setIsRunning(false)
    }
  }

  const handleHintView = () => {
    if (!hintsViewed) {
      setHintsViewed(true)
      trackHintUsage(problemId)
    }
  }

  const getNextProblem = () => {
    const levelProblems = problems.filter((p) => p.level === problem.level)
    const currentIndex = levelProblems.findIndex((p) => p.id === problemId)
    return currentIndex < levelProblems.length - 1 ? levelProblems[currentIndex + 1] : null
  }

  const nextProblem = getNextProblem()
  const isNextUnlocked = nextProblem ? isProblemUnlocked(nextProblem.id, problems) : false

  const elapsedTime = Math.round((Date.now() - startTime) / (1000 * 60))

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-6 px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <Link href={`/problems/${problem.level}`}>
            <Button variant="ghost" className="pl-0">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to {problem.level.charAt(0).toUpperCase() + problem.level.slice(1)} Problems
            </Button>
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Timer className="h-4 w-4" />
              {elapsedTime}m
            </div>
            <ThemeToggle />
          </div>
        </div>

        {/* New Badge Alert */}
        {showBadgeAlert && newBadges.length > 0 && (
          <Alert className="mb-6 border-yellow-500 bg-yellow-50 dark:bg-yellow-950">
            <Trophy className="h-4 w-4" />
            <AlertTitle>New Badge{newBadges.length > 1 ? "s" : ""} Earned!</AlertTitle>
            <AlertDescription>
              <div className="flex flex-wrap gap-2 mt-2">
                {newBadges.map((badgeId) => {
                  const badge = BADGES[badgeId as keyof typeof BADGES]
                  return (
                    <Badge key={badgeId} className={`${badge.color} text-white`}>
                      {badge.icon} {badge.name}
                    </Badge>
                  )
                })}
              </div>
            </AlertDescription>
          </Alert>
        )}

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Problem Description */}
          <div className="lg:col-span-2">
            <Card className="h-fit">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{problem.title}</CardTitle>
                  {completed && <CheckCircle className="h-6 w-6 text-green-500" />}
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">{problem.level}</Badge>
                  {problem.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="description">
                      <FileText className="h-4 w-4 mr-2" />
                      Description
                    </TabsTrigger>
                    <TabsTrigger value="hints" onClick={handleHintView}>
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Hints {hintsViewed && <Eye className="h-3 w-3 ml-1" />}
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="description" className="mt-4 space-y-4">
                    <div className="prose prose-sm max-w-none dark:prose-invert">
                      <p className="text-foreground">{problem.description}</p>

                      {problem.examples && (
                        <div>
                          <h3 className="text-lg font-medium mt-4 mb-2">Examples:</h3>
                          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm border">
                            <code>{problem.examples}</code>
                          </pre>
                        </div>
                      )}

                      {problem.constraints && (
                        <div>
                          <h3 className="text-lg font-medium mt-4 mb-2">Constraints:</h3>
                          <ul className="list-disc pl-5 space-y-1">
                            {problem.constraints.map((constraint, i) => (
                              <li key={i} className="text-foreground">
                                {constraint}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  <TabsContent value="hints" className="mt-4">
                    <div className="space-y-3">
                      <Alert className="border-yellow-500 bg-yellow-50 dark:bg-yellow-950">
                        <Eye className="h-4 w-4" />
                        <AlertTitle>Viewing Hints</AlertTitle>
                        <AlertDescription>
                          Using hints will be tracked in your progress. Try solving independently first!
                        </AlertDescription>
                      </Alert>
                      {problem.hints.map((hint, i) => (
                        <div key={i} className="p-4 bg-muted/50 rounded-md border">
                          <p className="font-medium text-sm text-muted-foreground">Hint {i + 1}:</p>
                          <p className="mt-1 text-foreground">{hint}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Code Editor */}
          <div className="lg:col-span-3">
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>Solution</CardTitle>
                <CardDescription>Write your JavaScript code below and run it to test your solution</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <MonacoEditor value={code} onChange={setCode} language="javascript" height="450px" />
              </CardContent>
              <CardFooter className="flex flex-col items-stretch gap-4">
                <Button onClick={runCode} disabled={isRunning} className="w-full" size="lg">
                  <Play className="mr-2 h-4 w-4" />
                  {isRunning ? "Running Tests..." : "Run Code"}
                </Button>

                {result && (
                  <Alert variant={result.success ? "default" : "destructive"} className="border-2">
                    {result.success ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                    <AlertTitle className="font-semibold">{result.success ? "Success!" : "Error"}</AlertTitle>
                    <AlertDescription className="mt-1">{result.message}</AlertDescription>
                  </Alert>
                )}

                {/* Next Problem Button */}
                {completed && nextProblem && (
                  <div className="pt-2">
                    {isNextUnlocked ? (
                      <Link href={`/problem/${nextProblem.id}`} className="w-full">
                        <Button className="w-full" variant="outline">
                          Next Problem: {nextProblem.title}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    ) : (
                      <Alert>
                        <CheckCircle className="h-4 w-4" />
                        <AlertTitle>Problem Completed!</AlertTitle>
                        <AlertDescription>
                          Great job! You've unlocked the next problem: <strong>{nextProblem.title}</strong>
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>
                )}

                {/* Level Completed */}
                {completed && !nextProblem && (
                  <Alert>
                    <Trophy className="h-4 w-4" />
                    <AlertTitle>Level Completed!</AlertTitle>
                    <AlertDescription>
                      Congratulations! You've completed all problems in the {problem.level} level.
                      {problem.level === "beginner" && <p className="mt-2">You've unlocked the Intermediate level!</p>}
                      {problem.level === "intermediate" && <p className="mt-2">You've unlocked the Advanced level!</p>}
                    </AlertDescription>
                  </Alert>
                )}
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
