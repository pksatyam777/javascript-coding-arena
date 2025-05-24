"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Download, RotateCcw } from "lucide-react"

interface CodeEditorProps {
  value: string
  onChange: (value: string) => void
  language?: string
  height?: string
}

export default function CodeEditor({ value, onChange, language = "javascript", height = "400px" }: CodeEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [copied, setCopied] = useState(false)

  // Handle tab key for proper indentation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault()
      const textarea = e.currentTarget
      const start = textarea.selectionStart
      const end = textarea.selectionEnd

      // Insert tab character
      const newValue = value.substring(0, start) + "  " + value.substring(end)
      onChange(newValue)

      // Move cursor
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 2
      }, 0)
    }

    // Handle Ctrl+A to select all
    if ((e.ctrlKey || e.metaKey) && e.key === "a") {
      e.preventDefault()
      e.currentTarget.select()
    }

    // Handle Ctrl+Z for undo (basic implementation)
    if ((e.ctrlKey || e.metaKey) && e.key === "z") {
      // Let browser handle undo
    }
  }

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = "auto"
      textarea.style.height = `${Math.max(textarea.scrollHeight, 300)}px`
    }
  }, [value])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const downloadCode = () => {
    const blob = new Blob([value], { type: "text/javascript" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "solution.js"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const resetCode = () => {
    if (confirm("Are you sure you want to reset your code? This action cannot be undone.")) {
      onChange("// Write your solution here\n\n")
    }
  }

  return (
    <Card className="overflow-hidden border-2 border-border">
      {/* Editor Header */}
      <div className="border-b bg-muted/30 px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-sm font-medium text-foreground">solution.js</span>
          </div>
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="sm" onClick={copyToClipboard} className="h-7 px-2 text-xs">
              <Copy className="h-3 w-3 mr-1" />
              {copied ? "Copied!" : "Copy"}
            </Button>
            <Button variant="ghost" size="sm" onClick={downloadCode} className="h-7 px-2 text-xs">
              <Download className="h-3 w-3 mr-1" />
              Download
            </Button>
            <Button variant="ghost" size="sm" onClick={resetCode} className="h-7 px-2 text-xs">
              <RotateCcw className="h-3 w-3 mr-1" />
              Reset
            </Button>
          </div>
        </div>
      </div>

      {/* Code Editor */}
      <div className="relative">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full p-4 font-mono text-sm bg-background text-foreground border-0 resize-none focus:outline-none focus:ring-0"
          style={{
            minHeight: height,
            fontFamily:
              "'JetBrains Mono', 'Fira Code', 'SF Mono', 'Cascadia Code', Monaco, Menlo, 'Ubuntu Mono', monospace",
            lineHeight: 1.6,
            tabSize: 2,
          }}
          placeholder="// Write your JavaScript solution here...
// Use console.log() to debug your code
// Press Tab for indentation

function solution() {
  // Your code here
}"
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />

        {/* Line numbers overlay */}
        <div className="absolute left-0 top-0 p-4 pointer-events-none select-none">
          <div className="font-mono text-sm text-muted-foreground/50">
            {value.split("\n").map((_, index) => (
              <div key={index} style={{ lineHeight: 1.6 }}>
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Left padding for line numbers */}
        <style jsx>{`
          textarea {
            padding-left: ${Math.max(value.split("\n").length.toString().length * 8 + 24, 40)}px !important;
          }
        `}</style>
      </div>

      {/* Editor Footer */}
      <div className="border-t bg-muted/30 px-4 py-2">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-4">
            <span>JavaScript</span>
            <span>•</span>
            <span>Lines: {value.split("\n").length}</span>
            <span>•</span>
            <span>Characters: {value.length}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>Tab = 2 spaces</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
