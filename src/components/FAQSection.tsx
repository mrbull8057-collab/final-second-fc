"use client"

import { useState } from "react"
import type { FAQItem } from "@/data/faq"

export default function FAQSection({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-2">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={i} className="bg-zinc-900/30 border border-zinc-800 rounded-xl overflow-hidden">
            <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between px-4 py-3.5 text-left">
              <span className="text-sm text-zinc-200 font-medium pr-4">{item.question}</span>
              <svg className={`w-3 h-3 text-zinc-600 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && <div className="px-4 pb-4 text-sm text-zinc-500 leading-relaxed">{item.answer}</div>}
          </div>
        )
      })}
    </div>
  )
}
