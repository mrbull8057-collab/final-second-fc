"use client"

import { useEffect, useRef } from "react"

type AdFormat = "auto" | "rectangle" | "horizontal" | "vertical"

interface AdsenseProps {
  slot: string
  format?: AdFormat
  className?: string
}

const formatStyle: Record<AdFormat, React.CSSProperties> = {
  auto: { display: "block" },
  rectangle: { display: "inline-block", width: "300px", height: "250px" },
  horizontal: { display: "inline-block", width: "728px", height: "90px" },
  vertical: { display: "inline-block", width: "160px", height: "600px" },
}

export default function Adsense({ slot, format = "auto", className }: AdsenseProps) {
  const ref = useRef<HTMLModElement>(null)

  useEffect(() => {
    if (ref.current) {
      try {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch {
        // AdBlock or loading issue
      }
    }
  }, [])

  return (
    <div className={className}>
      <ins
        ref={ref}
        className="adsbygoogle"
        style={formatStyle[format]}
        data-ad-client="ca-pub-8224188820852809"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}
