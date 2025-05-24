interface UserProgress {
  completedProblems: Record<string, boolean>;
  earnedBadges: string[];
  unlockedProblems: Record<string, boolean>;
  unlockedLevels: Record<string, boolean>;
  problemStats: Record<string, ProblemStat>;
  streaks: {
    current: number;
    longest: number;
    lastSolveDate: string;
  };
  behaviorStats: {
    totalAttempts: number;
    firstAttemptSuccesses: number;
    hintsUsed: number;
    fastSolves: number; // solved in under 5 minutes
    nightOwlSolves: number; // solved between 10PM-6AM
    earlyBirdSolves: number; // solved between 5AM-9AM
    weekendSolves: number;
    perfectDays: number; // days with multiple solves
  };
}

interface ProblemStat {
  completedAt: string;
  attempts: number;
  hintsViewed: boolean;
  solveTimeMinutes: number;
  firstAttemptSuccess: boolean;
}

// Badge definitions with their unlock conditions
export const BADGES = {
  // Completion badges
  beginner: {
    name: 'Beginner',
    description: 'Complete 5 problems',
    icon: '🌱',
    color: 'bg-green-500'
  },
  intermediate: {
    name: 'Intermediate',
    description: 'Complete 20 problems',
    icon: '🚀',
    color: 'bg-blue-500'
  },
  advanced: {
    name: 'Advanced',
    description: 'Complete 50 problems',
    icon: '⭐',
    color: 'bg-purple-500'
  },
  expert: {
    name: 'Expert',
    description: 'Complete 80 problems',
    icon: '💎',
    color: 'bg-orange-500'
  },
  master: {
    name: 'Master',
    description: 'Complete 100 problems',
    icon: '👑',
    color: 'bg-red-500'
  },

  // Behavior badges
  speedDemon: {
    name: 'Speed Demon',
    description: 'Solve 10 problems in under 5 minutes',
    icon: '⚡',
    color: 'bg-yellow-500'
  },
  perfectionist: {
    name: 'Perfectionist',
    description: 'Solve 15 problems on first attempt',
    icon: '🎯',
    color: 'bg-pink-500'
  },
  independent: {
    name: 'Independent',
    description: 'Solve 20 problems without viewing hints',
    icon: '🧠',
    color: 'bg-indigo-500'
  },
  consistent: {
    name: 'Consistent',
    description: 'Maintain a 7-day solving streak',
    icon: '🔥',
    color: 'bg-red-600'
  },
  dedicated: {
    name: 'Dedicated',
    description: 'Maintain a 30-day solving streak',
    icon: '💪',
    color: 'bg-orange-600'
  },
  nightOwl: {
    name: 'Night Owl',
    description: 'Solve 10 problems between 10PM-6AM',
    icon: '🦉',
    color: 'bg-purple-600'
  },
  earlyBird: {
    name: 'Early Bird',
    description: 'Solve 10 problems between 5AM-9AM',
    icon: '🐦',
    color: 'bg-blue-600'
  },
  weekendWarrior: {
    name: 'Weekend Warrior',
    description: 'Solve 15 problems on weekends',
    icon: '⚔️',
    color: 'bg-green-600'
  },

  // Level completion badges
  beginnerMaster: {
    name: 'Beginner Master',
    description: 'Complete all beginner problems',
    icon: '🏆',
    color: 'bg-emerald-500'
  },
  intermediateMaster: {
    name: 'Intermediate Master',
    description: 'Complete all intermediate problems',
    icon: '🏆',
    color: 'bg-cyan-500'
  },
  advancedMaster: {
    name: 'Advanced Master',
    description: 'Complete all advanced problems',
    icon: '🏆',
    color: 'bg-violet-500'
  },

  // Special achievement badges
  problemExplorer: {
    name: 'Problem Explorer',
    description: 'Solve problems from 5 different categories',
    icon: '🗺️',
    color: 'bg-teal-500'
  },
  marathoner: {
    name: 'Marathoner',
    description: 'Solve 5 problems in a single day',
    icon: '🏃',
    color: 'bg-amber-500'
  },
  comeback: {
    name: 'Comeback Kid',
    description: 'Return after 7+ days and solve a problem',
    icon: '🔄',
    color: 'bg-lime-500'
  }
};

// Get user progress from localStorage
export function getUserProgress(): UserProgress {
  if (typeof window === 'undefined') {
    return {
      completedProblems: {},
      earnedBadges: [],
      unlockedProblems: {},
      unlockedLevels: { beginner: true },
      problemStats: {},
      streaks: { current: 0, longest: 0, lastSolveDate: '' },
      behaviorStats: {
        totalAttempts: 0,
        firstAttemptSuccesses: 0,
        hintsUsed: 0,
        fastSolves: 0,
        nightOwlSolves: 0,
        earlyBirdSolves: 0,
        weekendSolves: 0,
        perfectDays: 0
      }
    };
  }

  const progress = localStorage.getItem('js-challenge-progress');

  if (!progress) {
    return {
      completedProblems: {},
      earnedBadges: [],
      unlockedProblems: {},
      unlockedLevels: { beginner: true },
      problemStats: {},
      streaks: { current: 0, longest: 0, lastSolveDate: '' },
      behaviorStats: {
        totalAttempts: 0,
        firstAttemptSuccesses: 0,
        hintsUsed: 0,
        fastSolves: 0,
        nightOwlSolves: 0,
        earlyBirdSolves: 0,
        weekendSolves: 0,
        perfectDays: 0
      }
    };
  }

  try {
    const parsed = JSON.parse(progress);
    // Ensure all properties exist for backward compatibility
    if (!parsed.unlockedProblems) parsed.unlockedProblems = {};
    if (!parsed.unlockedLevels) parsed.unlockedLevels = { beginner: true };
    if (!parsed.problemStats) parsed.problemStats = {};
    if (!parsed.streaks)
      parsed.streaks = { current: 0, longest: 0, lastSolveDate: '' };
    if (!parsed.behaviorStats) {
      parsed.behaviorStats = {
        totalAttempts: 0,
        firstAttemptSuccesses: 0,
        hintsUsed: 0,
        fastSolves: 0,
        nightOwlSolves: 0,
        earlyBirdSolves: 0,
        weekendSolves: 0,
        perfectDays: 0
      };
    }
    return parsed;
  } catch (error) {
    console.error('Error parsing user progress:', error);
    return {
      completedProblems: {},
      earnedBadges: [],
      unlockedProblems: {},
      unlockedLevels: { beginner: true },
      problemStats: {},
      streaks: { current: 0, longest: 0, lastSolveDate: '' },
      behaviorStats: {
        totalAttempts: 0,
        firstAttemptSuccesses: 0,
        hintsUsed: 0,
        fastSolves: 0,
        nightOwlSolves: 0,
        earlyBirdSolves: 0,
        weekendSolves: 0,
        perfectDays: 0
      }
    };
  }
}

// Check if a level is unlocked
export function isLevelUnlocked(level: string): boolean {
  const progress = getUserProgress();
  return !!progress.unlockedLevels[level];
}

// Check if a problem is unlocked
export function isProblemUnlocked(problemId: string, problems: any[]): boolean {
  const progress = getUserProgress();

  const problem = problems.find((p) => p.id === problemId);
  if (!problem) return false;

  if (!isLevelUnlocked(problem.level)) return false;

  const levelProblems = problems.filter((p) => p.level === problem.level);
  const problemIndex = levelProblems.findIndex((p) => p.id === problemId);

  if (problemIndex === 0) return true;

  const previousProblem = levelProblems[problemIndex - 1];
  return !!progress.completedProblems[previousProblem.id];
}

// Check if all problems in a level are completed
export function isLevelCompleted(level: string, problems: any[]): boolean {
  const progress = getUserProgress();
  const levelProblems = problems.filter((p) => p.level === level);

  return levelProblems.every(
    (problem) => progress.completedProblems[problem.id]
  );
}

// Get the next unlocked problem in a level
export function getNextUnlockedProblem(
  level: string,
  problems: any[]
): string | null {
  const progress = getUserProgress();

  if (!isLevelUnlocked(level)) return null;

  const levelProblems = problems.filter((p) => p.level === level);

  for (const problem of levelProblems) {
    // Check if problem is NOT completed AND is unlocked
    if (
      !progress.completedProblems[problem.id] &&
      isProblemUnlocked(problem.id, problems)
    ) {
      return problem.id;
    }
  }

  return null;
}

// Track hint usage
export function trackHintUsage(problemId: string): void {
  const progress = getUserProgress();

  if (!progress.problemStats[problemId]) {
    progress.problemStats[problemId] = {
      completedAt: '',
      attempts: 0,
      hintsViewed: false,
      solveTimeMinutes: 0,
      firstAttemptSuccess: false
    };
  }

  progress.problemStats[problemId].hintsViewed = true;
  progress.behaviorStats.hintsUsed++;

  localStorage.setItem('js-challenge-progress', JSON.stringify(progress));
}

// Track problem attempt
export function trackProblemAttempt(
  problemId: string,
  startTime: number
): void {
  const progress = getUserProgress();

  if (!progress.problemStats[problemId]) {
    progress.problemStats[problemId] = {
      completedAt: '',
      attempts: 0,
      hintsViewed: false,
      solveTimeMinutes: 0,
      firstAttemptSuccess: false
    };
  }

  progress.problemStats[problemId].attempts++;
  progress.behaviorStats.totalAttempts++;

  localStorage.setItem('js-challenge-progress', JSON.stringify(progress));
}

// Update user progress when a problem is completed
export function updateUserProgress(
  problemId: string,
  problems: any[],
  startTime: number
): UserProgress {
  const progress = getUserProgress();
  const now = new Date();
  const solveTime = Math.round((Date.now() - startTime) / (1000 * 60)); // minutes

  // Mark problem as completed
  progress.completedProblems[problemId] = true;

  // Update problem stats
  if (!progress.problemStats[problemId]) {
    progress.problemStats[problemId] = {
      completedAt: '',
      attempts: 0,
      hintsViewed: false,
      solveTimeMinutes: 0,
      firstAttemptSuccess: false
    };
  }

  const problemStat = progress.problemStats[problemId];
  problemStat.completedAt = now.toISOString();
  problemStat.solveTimeMinutes = solveTime;
  problemStat.firstAttemptSuccess = problemStat.attempts <= 1;

  // Update behavior stats
  if (problemStat.firstAttemptSuccess) {
    progress.behaviorStats.firstAttemptSuccesses++;
  }

  if (solveTime <= 5) {
    progress.behaviorStats.fastSolves++;
  }

  const hour = now.getHours();
  if (hour >= 22 || hour <= 6) {
    progress.behaviorStats.nightOwlSolves++;
  }

  if (hour >= 5 && hour <= 9) {
    progress.behaviorStats.earlyBirdSolves++;
  }

  const dayOfWeek = now.getDay();
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    progress.behaviorStats.weekendSolves++;
  }

  // Update streaks
  const today = now.toDateString();
  const lastSolveDate = progress.streaks.lastSolveDate
    ? new Date(progress.streaks.lastSolveDate).toDateString()
    : '';

  if (lastSolveDate === today) {
    // Same day, don't update streak
  } else if (
    lastSolveDate ===
    new Date(now.getTime() - 24 * 60 * 60 * 1000).toDateString()
  ) {
    // Consecutive day
    progress.streaks.current++;
  } else if (lastSolveDate === '') {
    // First solve
    progress.streaks.current = 1;
  } else {
    // Streak broken
    progress.streaks.current = 1;
  }

  progress.streaks.lastSolveDate = now.toISOString();
  progress.streaks.longest = Math.max(
    progress.streaks.longest,
    progress.streaks.current
  );

  // Unlock next problem
  const problem = problems.find((p) => p.id === problemId);
  if (problem) {
    const levelProblems = problems.filter((p) => p.level === problem.level);
    const problemIndex = levelProblems.findIndex((p) => p.id === problemId);

    if (problemIndex < levelProblems.length - 1) {
      const nextProblem = levelProblems[problemIndex + 1];
      progress.unlockedProblems[nextProblem.id] = true;
    }

    const isCompleted = isLevelCompleted(problem.level, problems);

    if (isCompleted) {
      if (problem.level === 'beginner') {
        progress.unlockedLevels['intermediate'] = true;
      } else if (problem.level === 'intermediate') {
        progress.unlockedLevels['advanced'] = true;
      }
    }
  }

  // Check and award badges
  const newBadges = checkForNewBadges(progress, problems);
  progress.earnedBadges = [
    ...new Set([...progress.earnedBadges, ...newBadges])
  ];

  // Save to localStorage
  localStorage.setItem('js-challenge-progress', JSON.stringify(progress));

  return progress;
}

// Check for new badges based on current progress
function checkForNewBadges(progress: UserProgress, problems: any[]): string[] {
  const newBadges: string[] = [];
  const completedCount = Object.keys(progress.completedProblems).length;

  // Completion badges
  if (completedCount >= 5 && !progress.earnedBadges.includes('beginner')) {
    newBadges.push('beginner');
  }
  if (completedCount >= 20 && !progress.earnedBadges.includes('intermediate')) {
    newBadges.push('intermediate');
  }
  if (completedCount >= 50 && !progress.earnedBadges.includes('advanced')) {
    newBadges.push('advanced');
  }
  if (completedCount >= 80 && !progress.earnedBadges.includes('expert')) {
    newBadges.push('expert');
  }
  if (completedCount >= 100 && !progress.earnedBadges.includes('master')) {
    newBadges.push('master');
  }

  // Behavior badges
  if (
    progress.behaviorStats.fastSolves >= 10 &&
    !progress.earnedBadges.includes('speedDemon')
  ) {
    newBadges.push('speedDemon');
  }
  if (
    progress.behaviorStats.firstAttemptSuccesses >= 15 &&
    !progress.earnedBadges.includes('perfectionist')
  ) {
    newBadges.push('perfectionist');
  }
  if (
    completedCount - progress.behaviorStats.hintsUsed >= 20 &&
    !progress.earnedBadges.includes('independent')
  ) {
    newBadges.push('independent');
  }
  if (
    progress.streaks.current >= 7 &&
    !progress.earnedBadges.includes('consistent')
  ) {
    newBadges.push('consistent');
  }
  if (
    progress.streaks.longest >= 30 &&
    !progress.earnedBadges.includes('dedicated')
  ) {
    newBadges.push('dedicated');
  }
  if (
    progress.behaviorStats.nightOwlSolves >= 10 &&
    !progress.earnedBadges.includes('nightOwl')
  ) {
    newBadges.push('nightOwl');
  }
  if (
    progress.behaviorStats.earlyBirdSolves >= 10 &&
    !progress.earnedBadges.includes('earlyBird')
  ) {
    newBadges.push('earlyBird');
  }
  if (
    progress.behaviorStats.weekendSolves >= 15 &&
    !progress.earnedBadges.includes('weekendWarrior')
  ) {
    newBadges.push('weekendWarrior');
  }

  // Level completion badges
  if (
    isLevelCompleted('beginner', problems) &&
    !progress.earnedBadges.includes('beginnerMaster')
  ) {
    newBadges.push('beginnerMaster');
  }
  if (
    isLevelCompleted('intermediate', problems) &&
    !progress.earnedBadges.includes('intermediateMaster')
  ) {
    newBadges.push('intermediateMaster');
  }
  if (
    isLevelCompleted('advanced', problems) &&
    !progress.earnedBadges.includes('advancedMaster')
  ) {
    newBadges.push('advancedMaster');
  }

  // Special achievement badges
  const categoriesSolved = new Set();
  Object.keys(progress.completedProblems).forEach((problemId) => {
    const problem = problems.find((p) => p.id === problemId);
    if (problem) {
      problem.tags.forEach((tag: string) => categoriesSolved.add(tag));
    }
  });
  if (
    categoriesSolved.size >= 5 &&
    !progress.earnedBadges.includes('problemExplorer')
  ) {
    newBadges.push('problemExplorer');
  }

  // Check for marathoner badge (5 problems in one day)
  const today = new Date().toDateString();
  const todaysSolves = Object.values(progress.problemStats).filter(
    (stat) =>
      stat.completedAt && new Date(stat.completedAt).toDateString() === today
  ).length;
  if (todaysSolves >= 5 && !progress.earnedBadges.includes('marathoner')) {
    newBadges.push('marathoner');
  }

  return newBadges;
}

// Reset progress (for development/testing)
export function resetProgress(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('js-challenge-progress');
  }
}

// Get progress statistics for a level
export function getLevelStats(level: string, problems: any[]) {
  const progress = getUserProgress();
  const levelProblems = problems.filter((p) => p.level === level);
  const isUnlocked = isLevelUnlocked(level);

  const completed = levelProblems.filter(
    (p) => progress.completedProblems[p.id]
  ).length;
  const unlocked = isUnlocked
    ? levelProblems.filter((p) => isProblemUnlocked(p.id, problems)).length
    : 0;
  const total = levelProblems.length;

  return {
    completed,
    unlocked,
    total,
    isUnlocked,
    completionPercentage: total > 0 ? (completed / total) * 100 : 0,
    unlockedPercentage: total > 0 ? (unlocked / total) * 100 : 0
  };
}

// Get user statistics for display
export function getUserStats() {
  const progress = getUserProgress();
  const completedCount = Object.keys(progress.completedProblems).length;

  return {
    totalCompleted: completedCount,
    currentStreak: progress.streaks.current,
    longestStreak: progress.streaks.longest,
    fastSolves: progress.behaviorStats.fastSolves,
    perfectSolves: progress.behaviorStats.firstAttemptSuccesses,
    totalAttempts: progress.behaviorStats.totalAttempts,
    successRate:
      progress.behaviorStats.totalAttempts > 0
        ? Math.round(
            (completedCount / progress.behaviorStats.totalAttempts) * 100
          )
        : 0,
    earnedBadges: progress.earnedBadges,
    nightOwlSolves: progress.behaviorStats.nightOwlSolves,
    earlyBirdSolves: progress.behaviorStats.earlyBirdSolves,
    weekendSolves: progress.behaviorStats.weekendSolves
  };
}
