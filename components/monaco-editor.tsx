"use client"

import { useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Download, RotateCcw } from "lucide-react"
import { useTheme } from "next-themes"
import { Skeleton } from "@/components/ui/skeleton"

// Import Monaco Editor dynamically to avoid SSR issues
import dynamic from "next/dynamic"
import type { editor } from "monaco-editor"
import * as monaco from "monaco-editor"

// Dynamically import Monaco Editor
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] flex items-center justify-center bg-muted/20 rounded-md border-2 border-dashed">
      <div className="text-center">
        <Skeleton className="h-[400px] w-full" />
      </div>
    </div>
  ),
})

interface CodeEditorProps {
  value: string
  onChange: (value: string) => void
  language?: string
  height?: string
}

export default function CodeEditor({ value, onChange, language = "javascript", height = "400px" }: CodeEditorProps) {
  const [copied, setCopied] = useState(false)
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null)
  const { theme } = useTheme()

  const handleEditorDidMount = (editor: editor.IStandaloneCodeEditor) => {
    editorRef.current = editor

    // Add keyboard shortcuts
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      // Save functionality (prevent browser save)
    })
  }

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

      {/* Monaco Editor */}
      <div className="relative bg-[#1e1e1e]">
        <MonacoEditor
          height={height}
          language={language}
          value={value}
          onChange={(value) => onChange(value || "")}
          onMount={handleEditorDidMount}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            fontSize: 14,
            fontFamily:
              "'JetBrains Mono', 'Fira Code', 'SF Mono', 'Cascadia Code', Monaco, Menlo, 'Ubuntu Mono', monospace",
            lineNumbers: "on",
            roundedSelection: true,
            automaticLayout: true,
            tabSize: 2,
            formatOnPaste: true,
            formatOnType: true,
            suggestOnTriggerCharacters: true,
            wordBasedSuggestions: true,
            quickSuggestions: true,
            scrollbar: {
              verticalScrollbarSize: 8,
              horizontalScrollbarSize: 8,
            },
          }}
        />
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
