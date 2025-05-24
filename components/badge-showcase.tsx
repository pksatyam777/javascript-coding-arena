"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BADGES, getUserStats } from "@/lib/user-progress"
import { Trophy, Target, Zap } from "lucide-react"

export default function BadgeShowcase() {
  const stats = getUserStats()

  const getBadgeProgress = (badgeId: string) => {
    switch (badgeId) {
      case "speedDemon":
        return { current: stats.fastSolves, target: 10 }
      case "perfectionist":
        return { current: stats.perfectSolves, target: 15 }
      case "consistent":
        return { current: stats.currentStreak, target: 7 }
      case "nightOwl":
        return { current: stats.nightOwlSolves, target: 10 }
      case "earlyBird":
        return { current: stats.earlyBirdSolves, target: 10 }
      case "weekendWarrior":
        return { current: stats.weekendSolves, target: 15 }
      default:
        return null
    }
  }

  const earnedBadges = Object.entries(BADGES).filter(([id]) => stats.earnedBadges.includes(id))
  const availableBadges = Object.entries(BADGES).filter(([id]) => !stats.earnedBadges.includes(id))

  return (
    <div className="space-y-6">
      {/* Earned Badges */}
      {earnedBadges.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              Earned Badges ({earnedBadges.length})
            </CardTitle>
            <CardDescription>Badges you've unlocked through your achievements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {earnedBadges.map(([id, badge]) => (
                <div key={id} className="flex items-center gap-3 p-3 rounded-lg border bg-muted/30">
                  <div
                    className={`w-10 h-10 rounded-full ${badge.color} flex items-center justify-center text-white text-lg`}
                  >
                    {badge.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm">{badge.name}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Available Badges */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-500" />
            Available Badges ({availableBadges.length})
          </CardTitle>
          <CardDescription>Badges you can earn by completing specific challenges</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
            {availableBadges.map(([id, badge]) => {
              const progress = getBadgeProgress(id)
              return (
                <div key={id} className="flex items-start gap-3 p-4 rounded-lg border">
                  <div
                    className={`w-12 h-12 rounded-full ${badge.color} opacity-40 flex items-center justify-center text-white text-lg`}
                  >
                    {badge.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium">{badge.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{badge.description}</p>
                    {progress && (
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Progress</span>
                          <span>
                            {Math.min(progress.current, progress.target)}/{progress.target}
                          </span>
                        </div>
                        <Progress
                          value={(Math.min(progress.current, progress.target) / progress.target) * 100}
                          className="h-2"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-purple-500" />
            Your Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center p-4 rounded-lg bg-muted/30">
              <div className="text-2xl font-bold text-blue-500">{stats.currentStreak}</div>
              <div className="text-sm text-muted-foreground">Current Streak</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/30">
              <div className="text-2xl font-bold text-green-500">{stats.fastSolves}</div>
              <div className="text-sm text-muted-foreground">Fast Solves</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/30">
              <div className="text-2xl font-bold text-purple-500">{stats.perfectSolves}</div>
              <div className="text-sm text-muted-foreground">Perfect Solves</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/30">
              <div className="text-2xl font-bold text-orange-500">{stats.successRate}%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
