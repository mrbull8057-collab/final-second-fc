"use client"

import { useEffect, useState } from "react"

export default function Countdown({ target, label }: { target: string; label?: string }) {
  const [d, setD] = useState({ days: 0, hours: 0, mins: 0, secs: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const t = new Date(target).getTime()
    const tick = () => {
      const diff = t - Date.now()
      if (diff <= 0) return
      setD({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const i = setInterval(tick, 1000)
    return () => clearInterval(i)
  }, [target])

  if (!mounted) return null

  const items = [
    { v: d.days, l: "Days" },
    { v: d.hours, l: "Hours" },
    { v: d.mins, l: "Minutes" },
    { v: d.secs, l: "Seconds" },
  ]

  return (
    <div>
      {label && <p className="text-xs text-zinc-500 text-center mb-4 uppercase tracking-widest">{label}</p>}
      <div className="flex items-center justify-center gap-3 sm:gap-5">
        {items.map(({ v, l }) => (
          <div key={l} className="flex flex-col items-center">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3 sm:px-7 sm:py-4 min-w-[70px] sm:min-w-[100px]">
              <span className="text-3xl sm:text-5xl font-black text-white tabular-nums">
                {String(v).padStart(2, "0")}
              </span>
            </div>
            <span className="text-[10px] sm:text-xs text-zinc-600 mt-2 uppercase tracking-widest">{l}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
