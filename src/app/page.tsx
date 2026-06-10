import Link from "next/link"
import Countdown from "@/components/Countdown"
import { matches } from "@/data/matches"
import { getTeam } from "@/data/groups"
import { blogPosts } from "@/data/blogs"
import { faqData } from "@/data/faq"
import { groups, getTeamsByGroup } from "@/data/groups"
import FAQSection from "@/components/FAQSection"
import GroupStandings from "@/components/GroupStandings"

function Nav() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/schedule", label: "Schedule" },
    { href: "/groups", label: "Groups" },
    { href: "/venues", label: "Venues" },
    { href: "/blogs", label: "Blog" },
  ]
  return (
    <nav className="sticky top-0 z-50 bg-[#080808]/90 backdrop-blur-lg border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center shadow-lg shadow-red-600/20">
              <span className="text-xs font-black text-white">FS</span>
            </div>
            <div>
              <span className="text-sm font-bold text-white">Final Second</span>
              <span className="text-sm font-bold text-red-500 ml-0.5">FC</span>
            </div>
          </Link>
          <div className="flex items-center gap-1">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="px-3 py-1.5 text-xs text-zinc-500 hover:text-white hover:bg-zinc-900 rounded-lg transition-all">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center">
              <span className="text-[8px] font-black text-white">FS</span>
            </div>
            <span className="text-xs text-zinc-600">Final Second FC</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-zinc-700">
            <Link href="/about" className="hover:text-zinc-400 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-zinc-400 transition-colors">Contact</Link>
            <Link href="/privacy" className="hover:text-zinc-400 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-zinc-400 transition-colors">Terms</Link>
          </div>
          <span className="text-[11px] text-zinc-700">© 2026 Final Second FC</span>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  const upcoming = matches.filter((m) => !m.isFinished).slice(0, 5)
  const recentBlogs = blogPosts.slice(0, 3)
  const allGroups = groups.map((g) => ({ id: g.id, teams: getTeamsByGroup(g.id) }))

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-12 pb-10 sm:pt-16 sm:pb-14">
          <div className="absolute inset-0 bg-gradient-to-b from-red-950/15 via-transparent to-[#080808]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/8 rounded-full blur-[150px]" />
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/8 border border-red-500/15 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[11px] font-medium text-red-400 uppercase tracking-widest">World Cup 2026</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1] mb-3">
              Every Match.
              <br />
              <span className="bg-gradient-to-r from-red-400 via-rose-300 to-red-400 bg-clip-text text-transparent">
                Every Moment.
              </span>
            </h1>
            <p className="text-zinc-600 text-sm sm:text-base mb-8 max-w-lg mx-auto">
              June 11 – July 19 · USA · Canada · Mexico · 48 teams · 104 matches
            </p>
            <div className="mb-8">
              <Countdown target="2026-06-11T19:00:00" label="TOURNAMENT STARTS IN" />
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/schedule" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm shadow-lg shadow-red-600/25">
                Full Schedule
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/groups" className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-medium px-6 py-3 rounded-xl transition-all text-sm border border-zinc-800">
                View Groups
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { v: "48", l: "Teams" },
              { v: "104", l: "Matches" },
              { v: "16", l: "Venues" },
              { v: "3", l: "Countries" },
              { v: "4", l: "Timezones" },
            ].map((s) => (
              <div key={s.l} className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl py-5 text-center">
                <div className="text-2xl font-black text-white">{s.v}</div>
                <div className="text-xs text-zinc-600 mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Matches */}
        <section className="max-w-5xl mx-auto px-4 pb-12">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-bold text-white">Upcoming Matches</h2>
            <Link href="/schedule" className="text-xs text-red-400 hover:text-red-300 font-medium">View all →</Link>
          </div>
          <div className="space-y-2">
            {upcoming.map((m) => {
              const home = getTeam(m.homeTeam)
              const away = getTeam(m.awayTeam)
              const md = new Date(`${m.date}T${m.time}:00`)
              const ds = md.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
              return (
                <Link key={m.id} href={`/team-matches/${m.slug}`} className="flex items-center gap-3 bg-zinc-900/40 border border-zinc-800 rounded-xl px-4 py-3 hover:border-zinc-700 hover:bg-zinc-900 transition-all">
                  <div className="flex items-center gap-2.5 flex-[2] min-w-0">
                    {home && <img src={`https://flagcdn.com/w40/${home.flag}.png`} alt="" className="w-5 h-3.5 object-cover rounded shrink-0" />}
                    <span className="text-sm text-zinc-200 font-medium truncate">{m.homeTeam}</span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="text-xs text-zinc-500 font-mono">{m.homeScore ?? "-"}</span>
                    <span className="text-[10px] text-zinc-700">:</span>
                    <span className="text-xs text-zinc-500 font-mono">{m.awayScore ?? "-"}</span>
                  </div>
                  <div className="flex items-center gap-2.5 flex-[2] min-w-0 justify-end">
                    <span className="text-sm text-zinc-200 font-medium truncate">{m.awayTeam}</span>
                    {away && <img src={`https://flagcdn.com/w40/${away.flag}.png`} alt="" className="w-5 h-3.5 object-cover rounded shrink-0" />}
                  </div>
                  <div className="hidden sm:flex items-center gap-3 text-xs text-zinc-600 shrink-0 ml-2">
                    <span>{ds}</span>
                    <span>{m.time}</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Groups */}
        <section className="max-w-5xl mx-auto px-4 pb-12">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-bold text-white">Groups</h2>
            <Link href="/groups" className="text-xs text-red-400 hover:text-red-300 font-medium">All groups →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allGroups.slice(0, 6).map(({ id, teams }) => (
              <GroupStandings key={id} groupId={id} teams={teams} />
            ))}
          </div>
        </section>

        {/* Blogs */}
        <section className="max-w-5xl mx-auto px-4 pb-12">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-bold text-white">Latest Stories</h2>
            <Link href="/blogs" className="text-xs text-red-400 hover:text-red-300 font-medium">All posts →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {recentBlogs.map((post) => (
              <Link key={post.slug} href={`/blog-posts/${post.slug}`} className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-all">
                <div className="text-sm text-white font-semibold leading-snug mb-1 line-clamp-2">{post.title}</div>
                <div className="text-xs text-zinc-500 line-clamp-2 mb-2">{post.excerpt}</div>
                <div className="flex items-center gap-2 text-[11px] text-zinc-700">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-4 pb-20">
          <h2 className="text-base font-bold text-white text-center mb-5">Frequently Asked</h2>
          <FAQSection items={faqData} />
        </section>
      </main>
      <Footer />
    </>
  )
}
