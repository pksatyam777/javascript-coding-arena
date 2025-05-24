'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Trophy,
  Star,
  Zap,
  Target,
  ChevronRight,
  RotateCcw
} from 'lucide-react';
import { BADGES } from '@/lib/user-progress';

interface CongratulationsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  problemTitle: string;
  problemLevel: string;
  solveTime: number;
  attempts: number;
  hintsUsed: boolean;
  newBadges: string[];
  isFirstAttempt: boolean;
  nextProblemId?: string | null;
}

export default function CongratulationsDialog({
  isOpen,
  onClose,
  problemTitle,
  problemLevel,
  solveTime,
  attempts,
  hintsUsed,
  newBadges,
  isFirstAttempt,
  nextProblemId
}: CongratulationsDialogProps) {
  const router = useRouter();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const getPerformanceMessage = () => {
    if (isFirstAttempt && solveTime <= 5 && !hintsUsed) {
      return '🔥 Perfect solve! First attempt, under 5 minutes, no hints!';
    } else if (isFirstAttempt && !hintsUsed) {
      return '⭐ Excellent! Solved on first attempt without hints!';
    } else if (solveTime <= 5) {
      return '⚡ Lightning fast! Solved in under 5 minutes!';
    } else if (isFirstAttempt) {
      return '🎯 Great job! Solved on first attempt!';
    } else if (!hintsUsed) {
      return '🧠 Independent solver! No hints needed!';
    } else {
      return '✅ Well done! Problem solved!';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-500';
      case 'intermediate':
        return 'bg-blue-500';
      case 'advanced':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  const handleNextProblem = () => {
    if (nextProblemId) {
      router.push(`/problem/${nextProblemId}`);
      onClose();
    }
  };

  const handleBackToProblems = () => {
    router.push(`/problems/${problemLevel}`);
    onClose();
  };

  const handleTryAnother = () => {
    onClose();
    // Reset the current problem
    window.location.reload();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 relative">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            {showConfetti && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="animate-bounce text-2xl">🎉</div>
              </div>
            )}
          </div>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            Congratulations!
          </DialogTitle>
          <DialogDescription className="text-base">
            You've successfully solved{' '}
            <span className="font-semibold text-foreground">
              "{problemTitle}"
            </span>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Performance Message */}
          <div className="text-center p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg border">
            <p className="font-medium text-green-700 dark:text-green-300">
              {getPerformanceMessage()}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center justify-center gap-1 text-lg font-bold text-blue-600">
                <Zap className="h-4 w-4" />
                {solveTime}m
              </div>
              <div className="text-xs text-muted-foreground">Solve Time</div>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center justify-center gap-1 text-lg font-bold text-purple-600">
                <Target className="h-4 w-4" />
                {attempts}
              </div>
              <div className="text-xs text-muted-foreground">Attempts</div>
            </div>
          </div>

          {/* Level Badge */}
          <div className="flex justify-center">
            <Badge className={`${getLevelColor(problemLevel)} text-white`}>
              <Star className="h-3 w-3 mr-1" />
              {problemLevel.charAt(0).toUpperCase() +
                problemLevel.slice(1)}{' '}
              Level
            </Badge>
          </div>

          {/* New Badges */}
          {newBadges.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-center">
                🎖️ New Badges Earned!
              </h4>
              <div className="flex flex-wrap justify-center gap-2">
                {newBadges.map((badgeId) => {
                  const badge = BADGES[badgeId as keyof typeof BADGES];
                  return (
                    <Badge
                      key={badgeId}
                      className={`${badge.color} text-white animate-pulse`}
                    >
                      {badge.icon} {badge.name}
                    </Badge>
                  );
                })}
              </div>
            </div>
          )}

          {/* Achievements */}
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div
              className={`p-2 rounded ${
                isFirstAttempt
                  ? 'bg-green-100 dark:bg-green-900/30'
                  : 'bg-muted/30'
              }`}
            >
              <div
                className={
                  isFirstAttempt ? 'text-green-600' : 'text-muted-foreground'
                }
              >
                {isFirstAttempt ? '✅' : '❌'}
              </div>
              <div>First Try</div>
            </div>
            <div
              className={`p-2 rounded ${
                solveTime <= 5
                  ? 'bg-yellow-100 dark:bg-yellow-900/30'
                  : 'bg-muted/30'
              }`}
            >
              <div
                className={
                  solveTime <= 5 ? 'text-yellow-600' : 'text-muted-foreground'
                }
              >
                {solveTime <= 5 ? '⚡' : '🐌'}
              </div>
              <div>Speed</div>
            </div>
            <div
              className={`p-2 rounded ${
                !hintsUsed ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-muted/30'
              }`}
            >
              <div
                className={
                  !hintsUsed ? 'text-blue-600' : 'text-muted-foreground'
                }
              >
                {!hintsUsed ? '🧠' : '💡'}
              </div>
              <div>No Hints</div>
            </div>
          </div>
        </div>

        <DialogFooter className="flex-col space-y-2 sm:space-y-0 sm:flex-row">
          {nextProblemId ? (
            <Button onClick={handleNextProblem} className="w-full sm:w-auto">
              <ChevronRight className="h-4 w-4 mr-2" />
              Next Problem
            </Button>
          ) : (
            <Button onClick={handleBackToProblems} className="w-full sm:w-auto">
              Back to Problems
            </Button>
          )}
          <Button
            variant="outline"
            onClick={handleTryAnother}
            className="w-full sm:w-auto"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Try Another
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
