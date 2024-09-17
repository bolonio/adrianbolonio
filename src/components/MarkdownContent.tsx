"use client"

import React from "react"
import { useIsThemeDark } from "@/hooks/useIsThemeDark"
import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import "./MarkdownContent.css"
import "./highlight.css"

type MarkdownContentProps = {
  content: string
}

export const MarkdownContent = ({ content }: MarkdownContentProps) => {
  const isThemeDark = useIsThemeDark()

  return (
    <ReactMarkdown
      className="blogpostcontainer"
      rehypePlugins={[rehypeHighlight]}
      components={{
        pre: ({ node, children, ...props }) => (
          <div
            className={`highlight ${
              !isThemeDark ? "highlightdark" : "highlightlight"
            }`}
          >
            <pre {...props}>{children}</pre>
          </div>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
