'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Code,
  Trophy,
  Zap,
  Target,
  Users,
  Star,
  ChevronRight,
  Play,
  BookOpen,
  Award,
  CheckCircle
} from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export default function LandingPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const router = useRouter();

  const handleTryNow = () => {
    router.push('/dashboard');
  };

  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: '100+ Coding Challenges',
      description:
        'From beginner-friendly problems to advanced algorithms, master JavaScript step by step.',
      color: 'text-blue-500'
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'Achievement System',
      description:
        'Earn badges and track your progress with our comprehensive achievement system.',
      color: 'text-yellow-500'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Real-time Code Editor',
      description:
        'Write and test your code with our powerful Monaco editor with syntax highlighting.',
      color: 'text-purple-500'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Progressive Learning',
      description:
        'Unlock new levels as you progress, ensuring you build skills systematically.',
      color: 'text-green-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Frontend Developer',
      content:
        'This platform helped me land my first developer job. The progressive difficulty is perfect!',
      avatar: 'SC'
    },
    {
      name: 'Mike Rodriguez',
      role: 'CS Student',
      content:
        "The badge system keeps me motivated. I've solved 50+ problems and still going strong!",
      avatar: 'MR'
    },
    {
      name: 'Emily Johnson',
      role: 'Career Changer',
      content:
        'Coming from a non-tech background, this made JavaScript approachable and fun to learn.',
      avatar: 'EJ'
    }
  ];

  const stats = [
    {
      label: 'Active Learners',
      value: '10,000+',
      icon: <Users className="h-5 w-5" />
    },
    {
      label: 'Problems Solved',
      value: '500,000+',
      icon: <CheckCircle className="h-5 w-5" />
    },
    {
      label: 'Success Rate',
      value: '94%',
      icon: <Target className="h-5 w-5" />
    },
    {
      label: 'Average Rating',
      value: '4.9/5',
      icon: <Star className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
              <Code className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              JavaScript Arena
            </span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              onClick={handleTryNow}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              Try Now <Play className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 border-blue-200">
            🚀 Master JavaScript Through Practice
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
            Code. Learn. Conquer.
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Master JavaScript with 100+ hands-on coding challenges. From
            beginner basics to advanced algorithms, level up your skills with
            our interactive learning platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={handleTryNow}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-6"
            >
              Start Coding Now <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6"
              onClick={() => router.push('/problems/beginner')}
            >
              <BookOpen className="h-5 w-5 mr-2" />
              View Challenges
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-2 text-2xl font-bold text-blue-600 mb-1">
                  {stat.icon}
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose JavaScript Arena?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform is designed to make learning JavaScript engaging,
            effective, and enjoyable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                activeFeature === index ? 'ring-2 ring-blue-500 shadow-lg' : ''
              }`}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <CardHeader className="text-center">
                <div className={`mx-auto mb-4 ${feature.color}`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Your Learning Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Progress through carefully crafted levels that build upon each
              other.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 bg-green-500 p-3 rounded-full w-fit">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-green-600">Beginner</CardTitle>
                <CardDescription>Master the fundamentals</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Variables & Data Types
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Functions & Scope
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Basic Algorithms
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 bg-blue-500 p-3 rounded-full w-fit">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-blue-600">Intermediate</CardTitle>
                <CardDescription>Dive deeper into concepts</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    Arrays & Objects
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    DOM Manipulation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    Async Programming
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 bg-purple-500 p-3 rounded-full w-fit">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-purple-600">Advanced</CardTitle>
                <CardDescription>Master complex challenges</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    Data Structures
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    Complex Algorithms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    Design Patterns
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievement System Preview */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Unlock Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay motivated with our comprehensive badge system that rewards your
            progress and dedication.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {[
            { icon: '🌱', name: 'Beginner', color: 'bg-green-500' },
            { icon: '⚡', name: 'Speed Demon', color: 'bg-yellow-500' },
            { icon: '🎯', name: 'Perfectionist', color: 'bg-pink-500' },
            { icon: '🔥', name: 'Consistent', color: 'bg-red-500' },
            { icon: '🧠', name: 'Independent', color: 'bg-indigo-500' },
            { icon: '🏆', name: 'Master', color: 'bg-purple-500' }
          ].map((badge, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div
                className={`${badge.color} w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-2 group-hover:scale-110 transition-transform`}
              >
                {badge.icon}
              </div>
              <div className="text-sm font-medium">{badge.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Learners Say</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of developers who've leveled up their JavaScript
              skills.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of developers mastering JavaScript through hands-on
            practice. No signup required - start coding immediately!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleTryNow}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-6"
            >
              <Play className="h-5 w-5 mr-2" />
              Try Now - It's Free!
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              No signup required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              100% free
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Start immediately
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
              <Code className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              JavaScript Arena
            </span>
          </div>
          <p className="text-muted-foreground">
            Master JavaScript through practice. Built for developers, by
            developers.
          </p>
        </div>
      </footer>
    </div>
  );
}
