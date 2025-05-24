'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Award,
  Code,
  BookOpen,
  ChevronRight,
  Trophy,
  Play,
  Lock,
  Flame,
  Home
} from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import BadgeShowcase from '@/components/badge-showcase';
import {
  getUserProgress,
  getLevelStats,
  getNextUnlockedProblem,
  getUserStats,
  BADGES
} from '@/lib/user-progress';
import { problems } from '@/lib/problems';

export default function Dashboard() {
  const [progress, setProgress] = useState<Record<string, boolean>>({});
  const [totalCompleted, setTotalCompleted] = useState(0);
  const [unlockedLevels, setUnlockedLevels] = useState<Record<string, boolean>>(
    {}
  );
  const [userStats, setUserStats] = useState<any>({});
  const router = useRouter();

  useEffect(() => {
    const userProgress = getUserProgress();
    const stats = getUserStats();
    setProgress(userProgress.completedProblems || {});
    setUnlockedLevels(userProgress.unlockedLevels || { beginner: true });
    setTotalCompleted(Object.keys(userProgress.completedProblems || {}).length);
    setUserStats(stats);
  }, []);

  const beginnerStats = getLevelStats('beginner', problems);
  const intermediateStats = getLevelStats('intermediate', problems);
  const advancedStats = getLevelStats('advanced', problems);

  const overallProgress =
    problems.length > 0 ? (totalCompleted / problems.length) * 100 : 0;

  const getNextProblemForLevel = (level: string) => {
    return getNextUnlockedProblem(level, problems);
  };

  const recentBadges = userStats.earnedBadges?.slice(-3) || [];

  return (
    <div className="container mx-auto py-10 px-4">
      {/* Header with Theme Toggle and Back to Landing */}
      <div className="flex justify-between items-center mb-10">
        <header className="text-center flex-1">
          <h1 className="text-4xl font-bold mb-2">
            JavaScript Challenge Arena
          </h1>
          <p className="text-xl text-muted-foreground">
            Solve 100 JavaScript problems and earn badges from beginner to
            advanced
          </p>
        </header>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={() => router.push('/')}
            className="hidden sm:flex"
          >
            <Home className="h-4 w-4 mr-2" />
            Home
          </Button>
          <ThemeToggle />
        </div>
      </div>

      <Tabs defaultValue="dashboard" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="badges">Badges & Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-8">
          {/* Overall Progress Card */}
          <Card className="col-span-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                Your Progress
              </CardTitle>
              <CardDescription>
                Track your journey from beginner to JavaScript master
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-sm font-medium">
                    {totalCompleted}/{problems.length} Problems
                  </span>
                </div>
                <Progress value={overallProgress} className="h-2" />

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="text-center p-3 rounded-lg bg-muted/30">
                    <div className="text-lg font-bold text-blue-500 flex items-center justify-center gap-1">
                      <Flame className="h-4 w-4" />
                      {userStats.currentStreak || 0}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Current Streak
                    </div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/30">
                    <div className="text-lg font-bold text-green-500">
                      {userStats.fastSolves || 0}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Fast Solves
                    </div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/30">
                    <div className="text-lg font-bold text-purple-500">
                      {userStats.perfectSolves || 0}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Perfect Solves
                    </div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/30">
                    <div className="text-lg font-bold text-orange-500">
                      {userStats.successRate || 0}%
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Success Rate
                    </div>
                  </div>
                </div>

                {/* Recent Badges */}
                {recentBadges.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-sm font-medium mb-3">Recent Badges</h3>
                    <div className="flex flex-wrap gap-2">
                      {recentBadges.map((badgeId: string) => {
                        const badge = BADGES[badgeId as keyof typeof BADGES];
                        return (
                          <Badge
                            key={badgeId}
                            className={`${badge.color} text-white`}
                          >
                            {badge.icon} {badge.name}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Milestone Badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge
                    variant={totalCompleted >= 5 ? 'default' : 'outline'}
                    className={
                      totalCompleted >= 5
                        ? 'bg-green-500 text-white'
                        : 'opacity-40'
                    }
                  >
                    <Award className="h-3 w-3 mr-1" /> Beginner
                  </Badge>
                  <Badge
                    variant={totalCompleted >= 20 ? 'default' : 'outline'}
                    className={
                      totalCompleted >= 20
                        ? 'bg-blue-500 text-white'
                        : 'opacity-40'
                    }
                  >
                    <Award className="h-3 w-3 mr-1" /> Intermediate
                  </Badge>
                  <Badge
                    variant={totalCompleted >= 50 ? 'default' : 'outline'}
                    className={
                      totalCompleted >= 50
                        ? 'bg-purple-500 text-white'
                        : 'opacity-40'
                    }
                  >
                    <Award className="h-3 w-3 mr-1" /> Advanced
                  </Badge>
                  <Badge
                    variant={totalCompleted >= 80 ? 'default' : 'outline'}
                    className={
                      totalCompleted >= 80
                        ? 'bg-orange-500 text-white'
                        : 'opacity-40'
                    }
                  >
                    <Award className="h-3 w-3 mr-1" /> Expert
                  </Badge>
                  <Badge
                    variant={totalCompleted >= 100 ? 'default' : 'outline'}
                    className={
                      totalCompleted >= 100
                        ? 'bg-red-500 text-white'
                        : 'opacity-40'
                    }
                  >
                    <Award className="h-3 w-3 mr-1" /> Master
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Beginner Challenges */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-500" />
                  Beginner Challenges
                </CardTitle>
                <CardDescription>Fundamentals of JavaScript</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>Completed</span>
                    <span className="font-medium">
                      {beginnerStats.completed}/{beginnerStats.total}
                    </span>
                  </div>
                  <Progress
                    value={beginnerStats.completionPercentage}
                    className="h-2"
                  />

                  <div className="flex items-center justify-between text-sm">
                    <span>Unlocked</span>
                    <span className="font-medium">
                      {beginnerStats.unlocked}/{beginnerStats.total}
                    </span>
                  </div>
                  <Progress
                    value={beginnerStats.unlockedPercentage}
                    className="h-1"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <Link href="/problems/beginner" className="w-full">
                  <Button className="w-full" variant="outline">
                    View All Problems <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                {getNextProblemForLevel('beginner') && (
                  <Link
                    href={`/problem/${getNextProblemForLevel('beginner')}`}
                    className="w-full"
                  >
                    <Button className="w-full">
                      <Play className="h-4 w-4 mr-2" />
                      Continue
                    </Button>
                  </Link>
                )}
              </CardFooter>
            </Card>

            {/* Intermediate Challenges */}
            <Card
              className={`hover:shadow-lg transition-shadow ${
                !unlockedLevels.intermediate ? 'opacity-70' : ''
              }`}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-green-500" />
                    Intermediate Challenges
                  </CardTitle>
                  {!unlockedLevels.intermediate && (
                    <Lock className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
                <CardDescription>
                  {unlockedLevels.intermediate
                    ? 'Dive deeper into arrays, objects, and functions with intermediate challenges'
                    : 'Complete all beginner problems to unlock intermediate challenges'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>Completed</span>
                    <span className="font-medium">
                      {intermediateStats.completed}/{intermediateStats.total}
                    </span>
                  </div>
                  <Progress
                    value={intermediateStats.completionPercentage}
                    className="h-2"
                  />

                  <div className="flex items-center justify-between text-sm">
                    <span>Unlocked</span>
                    <span className="font-medium">
                      {intermediateStats.unlocked}/{intermediateStats.total}
                    </span>
                  </div>
                  <Progress
                    value={intermediateStats.unlockedPercentage}
                    className="h-1"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                {unlockedLevels.intermediate ? (
                  <>
                    <Link href="/problems/intermediate" className="w-full">
                      <Button className="w-full" variant="outline">
                        View All Problems{' '}
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                    {getNextProblemForLevel('intermediate') && (
                      <Link
                        href={`/problem/${getNextProblemForLevel(
                          'intermediate'
                        )}`}
                        className="w-full"
                      >
                        <Button className="w-full">
                          <Play className="h-4 w-4 mr-2" />
                          Continue
                        </Button>
                      </Link>
                    )}
                  </>
                ) : (
                  <Button className="w-full" disabled>
                    <Lock className="h-4 w-4 mr-2" />
                    Locked
                  </Button>
                )}
              </CardFooter>
            </Card>

            {/* Advanced Challenges */}
            <Card
              className={`hover:shadow-lg transition-shadow ${
                !unlockedLevels.advanced ? 'opacity-70' : ''
              }`}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-purple-500" />
                    Advanced Challenges
                  </CardTitle>
                  {!unlockedLevels.advanced && (
                    <Lock className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
                <CardDescription>
                  {unlockedLevels.advanced
                    ? 'Tackle complex algorithms and advanced problem-solving challenges'
                    : 'Complete all intermediate problems to unlock advanced challenges'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>Completed</span>
                    <span className="font-medium">
                      {advancedStats.completed}/{advancedStats.total}
                    </span>
                  </div>
                  <Progress
                    value={advancedStats.completionPercentage}
                    className="h-2"
                  />

                  <div className="flex items-center justify-between text-sm">
                    <span>Unlocked</span>
                    <span className="font-medium">
                      {advancedStats.unlocked}/{advancedStats.total}
                    </span>
                  </div>
                  <Progress
                    value={advancedStats.unlockedPercentage}
                    className="h-1"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                {unlockedLevels.advanced ? (
                  <>
                    <Link href="/problems/advanced" className="w-full">
                      <Button className="w-full" variant="outline">
                        View All Problems{' '}
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                    {getNextProblemForLevel('advanced') && (
                      <Link
                        href={`/problem/${getNextProblemForLevel('advanced')}`}
                        className="w-full"
                      >
                        <Button className="w-full">
                          <Play className="h-4 w-4 mr-2" />
                          Continue
                        </Button>
                      </Link>
                    )}
                  </>
                ) : (
                  <Button className="w-full" disabled>
                    <Lock className="h-4 w-4 mr-2" />
                    Locked
                  </Button>
                )}
              </CardFooter>
            </Card>
          </div>

          {/* Level Unlock Requirements */}
          {(!unlockedLevels.intermediate || !unlockedLevels.advanced) && (
            <Card className="mt-8 border-dashed">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  Level Unlock Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {!unlockedLevels.intermediate && (
                  <div className="flex items-center gap-4">
                    <div className="bg-muted p-3 rounded-full">
                      <Lock className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium">Intermediate Level</h3>
                      <p className="text-sm text-muted-foreground">
                        Complete all {beginnerStats.total} beginner problems to
                        unlock.
                        <span className="ml-2 font-medium">
                          Progress: {beginnerStats.completed}/
                          {beginnerStats.total}
                        </span>
                      </p>
                      <Progress
                        value={
                          (beginnerStats.completed / beginnerStats.total) * 100
                        }
                        className="h-1 mt-2"
                      />
                    </div>
                  </div>
                )}

                {!unlockedLevels.advanced && (
                  <div className="flex items-center gap-4">
                    <div className="bg-muted p-3 rounded-full">
                      <Lock className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium">Advanced Level</h3>
                      <p className="text-sm text-muted-foreground">
                        Complete all {intermediateStats.total} intermediate
                        problems to unlock.
                        <span className="ml-2 font-medium">
                          Progress: {intermediateStats.completed}/
                          {intermediateStats.total}
                        </span>
                      </p>
                      <Progress
                        value={
                          (intermediateStats.completed /
                            intermediateStats.total) *
                          100
                        }
                        className="h-1 mt-2"
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="badges">
          <BadgeShowcase />
        </TabsContent>
      </Tabs>
    </div>
  );
}
