import type { Team } from "@/data/groups"

export default function GroupStandings({ groupId, teams }: { groupId: string; teams: Team[] }) {
  return (
    <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-red-950/20 to-transparent px-4 py-2.5 border-b border-zinc-800">
        <h3 className="text-white font-semibold text-sm">Group {groupId}</h3>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-zinc-800 text-zinc-600 text-[11px] uppercase tracking-wider">
            <th className="px-3 py-2 text-left">Team</th>
            <th className="px-2 py-2 text-center">P</th>
            <th className="px-2 py-2 text-center">W</th>
            <th className="px-2 py-2 text-center">D</th>
            <th className="px-2 py-2 text-center">L</th>
            <th className="px-2 py-2 text-center">GF</th>
            <th className="px-2 py-2 text-center">GA</th>
            <th className="px-2 py-2 text-center">GD</th>
            <th className="px-2 py-2 text-center font-bold text-amber-500">Pts</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, i) => (
            <tr key={team.id} className="border-b border-zinc-800/50 text-zinc-300 hover:bg-zinc-800/20">
              <td className="px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-zinc-700 w-3 font-mono">{i + 1}</span>
                  <img src={`https://flagcdn.com/w20/${team.flag}.png`} alt="" className="w-4 h-3 object-cover rounded" />
                  <span className="text-xs font-medium truncate">{team.name}</span>
                </div>
              </td>
              <td className="px-2 py-2.5 text-center text-xs text-zinc-500">0</td>
              <td className="px-2 py-2.5 text-center text-xs text-zinc-500">0</td>
              <td className="px-2 py-2.5 text-center text-xs text-zinc-500">0</td>
              <td className="px-2 py-2.5 text-center text-xs text-zinc-500">0</td>
              <td className="px-2 py-2.5 text-center text-xs text-zinc-500">0</td>
              <td className="px-2 py-2.5 text-center text-xs text-zinc-500">0</td>
              <td className="px-2 py-2.5 text-center text-xs text-zinc-500">0</td>
              <td className="px-2 py-2.5 text-center text-xs font-bold text-amber-500">0</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
