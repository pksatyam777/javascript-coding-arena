"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, CheckCircle, Circle, Lock, Trophy, Play } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { problems } from "@/lib/problems"
import {
  getUserProgress,
  isProblemUnlocked,
  getLevelStats,
  getNextUnlockedProblem,
  isLevelUnlocked,
} from "@/lib/user-progress"

export default function ProblemsPage() {
  const params = useParams()
  const router = useRouter()
  const level = params.level as string
  const [progress, setProgress] = useState<Record<string, boolean>>({})
  const [isLevelLocked, setIsLevelLocked] = useState(true)

  useEffect(() => {
    const userProgress = getUserProgress()
    setProgress(userProgress.completedProblems || {})
    setIsLevelLocked(!isLevelUnlocked(level))
  }, [level])

  // Redirect if level is locked
  useEffect(() => {
    if (isLevelLocked) {
      router.push("/")
    }
  }, [isLevelLocked, router])

  // Filter problems by level
  const levelProblems = problems.filter((problem) => problem.level === level)
  const stats = getLevelStats(level, problems)
  const nextUnlocked = getNextUnlockedProblem(level, problems)

  // Get level title and description
  const getLevelInfo = () => {
    switch (level) {
      case "beginner":
        return {
          title: "Beginner Challenges",
          subtitle: `${levelProblems.length} Problems`,
          description: "Master the fundamentals of JavaScript with these beginner-friendly challenges",
          color: "text-blue-500",
        }
      case "intermediate":
        return {
          title: "Intermediate Challenges",
          subtitle: `${levelProblems.length} Problems`,
          description: "Dive deeper into arrays, objects, and functions with intermediate challenges",
          color: "text-green-500",
        }
      case "advanced":
        return {
          title: "Advanced Challenges",
          subtitle: `${levelProblems.length} Problems`,
          description: "Tackle complex algorithms and advanced problem-solving challenges",
          color: "text-purple-500",
        }
      default:
        return {
          title: "Challenges",
          subtitle: "",
          description: "JavaScript coding challenges",
          color: "text-foreground",
        }
    }
  }

  const levelInfo = getLevelInfo()

  const handleProblemClick = (problemId: string) => {
    if (isProblemUnlocked(problemId, problems)) {
      router.push(`/problem/${problemId}`)
    }
  }

  const handleContinueClick = () => {
    if (nextUnlocked) {
      router.push(`/problem/${nextUnlocked}`)
    }
  }

  if (isLevelLocked) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardHeader className="text-center">
            <Lock className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <CardTitle>Level Locked</CardTitle>
            <CardDescription>
              {level === "intermediate"
                ? "Complete all beginner problems to unlock intermediate challenges."
                : "Complete all intermediate problems to unlock advanced challenges."}
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Link href="/" className="w-full">
              <Button className="w-full">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-10 px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <Link href="/">
            <Button variant="ghost" className="pl-0">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
          <ThemeToggle />
        </div>

        {/* Level Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-3xl font-bold">{levelInfo.title}</h1>
            <Badge variant="secondary" className="text-sm">
              {levelInfo.subtitle}
            </Badge>
          </div>
          <p className="text-muted-foreground text-lg mb-6">{levelInfo.description}</p>

          {/* Progress Card */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  Your Progress
                </CardTitle>
                <div className="text-right">
                  <div className="text-sm font-medium">
                    {stats.completed}/{stats.total} completed
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stats.unlocked}/{stats.total} unlocked
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Completion Progress</span>
                  <span>{stats.completionPercentage.toFixed(1)}%</span>
                </div>
                <Progress value={stats.completionPercentage} className="h-3" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Unlocked Problems</span>
                  <span>{stats.unlockedPercentage.toFixed(1)}%</span>
                </div>
                <Progress value={stats.unlockedPercentage} className="h-2" />
              </div>
              {nextUnlocked && (
                <div className="pt-2">
                  <Button onClick={handleContinueClick} className="w-full" size="sm">
                    <Play className="h-4 w-4 mr-2" />
                    Continue Next Problem
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Problems Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {levelProblems.map((problem, index) => {
            const isCompleted = progress[problem.id]
            const isUnlocked = isProblemUnlocked(problem.id, problems)
            const isLocked = !isUnlocked

            return (
              <Card
                key={problem.id}
                className={`flex flex-col transition-all duration-200 ${
                  isLocked ? "opacity-60 cursor-not-allowed" : "hover:shadow-lg cursor-pointer"
                }`}
                onClick={() => handleProblemClick(problem.id)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className={`text-lg leading-tight ${isLocked ? "text-muted-foreground" : ""}`}>
                      {index + 1}. {problem.title}
                    </CardTitle>
                    <div className="flex-shrink-0">
                      {isCompleted ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : isLocked ? (
                        <Lock className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <Circle className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                  <CardDescription className={`line-clamp-2 ${isLocked ? "text-muted-foreground/60" : ""}`}>
                    {isLocked
                      ? "Complete the previous problem to unlock"
                      : `${problem.description.substring(0, 120)}...`}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-1">
                    {!isLocked ? (
                      <>
                        {problem.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {problem.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{problem.tags.length - 3}
                          </Badge>
                        )}
                      </>
                    ) : (
                      <Badge variant="outline" className="text-xs opacity-50">
                        <Lock className="h-3 w-3 mr-1" />
                        Locked
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleProblemClick(problem.id)
                    }}
                    variant={isCompleted ? "outline" : "default"}
                    disabled={isLocked}
                  >
                    {isLocked ? (
                      <>
                        <Lock className="h-4 w-4 mr-2" />
                        Locked
                      </>
                    ) : isCompleted ? (
                      "Review Solution"
                    ) : (
                      "Solve Challenge"
                    )}
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {levelProblems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No problems found for this level.</p>
          </div>
        )}

        {/* Unlock Information */}
        {stats.unlocked < stats.total && (
          <Card className="mt-8 border-dashed">
            <CardContent className="pt-6">
              <div className="text-center space-y-2">
                <Lock className="h-8 w-8 mx-auto text-muted-foreground" />
                <h3 className="font-semibold">More Problems to Unlock!</h3>
                <p className="text-sm text-muted-foreground">
                  Complete problems in order to unlock the next challenges. You have {stats.total - stats.unlocked} more
                  problems to discover in this level.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
