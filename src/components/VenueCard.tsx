import Link from "next/link"
import type { Venue } from "@/data/venues"

export default function VenueCard({ venue }: { venue: Venue }) {
  return (
    <div className="bg-zinc-900/50 rounded-xl border border-zinc-800 p-4 hover:border-zinc-700 transition-all">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 text-lg">
          🏟️
        </div>
        <div className="min-w-0">
          <h3 className="text-white font-semibold text-sm">{venue.name}</h3>
          <p className="text-zinc-500 text-xs mt-0.5">{venue.city}, {venue.country}</p>
          <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 text-[11px] text-zinc-600">
            <span>{venue.capacity.toLocaleString()} seats</span>
            <span>Est. {venue.opened}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
