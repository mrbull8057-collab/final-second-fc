export interface Team {
  id: string
  name: string
  flag: string
  group: string
  confederation: string
  ranking: number
}

export interface GroupData {
  id: string
  name: string
  teams: string[]
}

export const groups: GroupData[] = [
  { id: "A", name: "Group A", teams: ["Mexico", "South Africa", "Korea Republic", "Czechia"] },
  { id: "B", name: "Group B", teams: ["Canada", "Bosnia and Herzegovina", "Qatar", "Switzerland"] },
  { id: "C", name: "Group C", teams: ["Brazil", "Morocco", "Haiti", "Scotland"] },
  { id: "D", name: "Group D", teams: ["USA", "Paraguay", "Australia", "Türkiye"] },
  { id: "E", name: "Group E", teams: ["Germany", "Curaçao", "Côte d'Ivoire", "Ecuador"] },
  { id: "F", name: "Group F", teams: ["Netherlands", "Japan", "Sweden", "Tunisia"] },
  { id: "G", name: "Group G", teams: ["Belgium", "Egypt", "IR Iran", "New Zealand"] },
  { id: "H", name: "Group H", teams: ["Spain", "Cabo Verde", "Saudi Arabia", "Uruguay"] },
  { id: "I", name: "Group I", teams: ["France", "Norway", "Senegal", "Iraq"] },
  { id: "J", name: "Group J", teams: ["Argentina", "Algeria", "Austria", "Jordan"] },
  { id: "K", name: "Group K", teams: ["Portugal", "Congo DR", "Uzbekistan", "Colombia"] },
  { id: "L", name: "Group L", teams: ["England", "Ghana", "Panama", "Croatia"] },
]

export const allTeams: Team[] = [
  { id: "mex", name: "Mexico", flag: "mx", group: "A", confederation: "CONCACAF", ranking: 15 },
  { id: "rsa", name: "South Africa", flag: "za", group: "A", confederation: "CAF", ranking: 66 },
  { id: "kor", name: "Korea Republic", flag: "kr", group: "A", confederation: "AFC", ranking: 23 },
  { id: "cze", name: "Czechia", flag: "cz", group: "A", confederation: "UEFA", ranking: 36 },
  { id: "can", name: "Canada", flag: "ca", group: "B", confederation: "CONCACAF", ranking: 30 },
  { id: "bih", name: "Bosnia and Herzegovina", flag: "ba", group: "B", confederation: "UEFA", ranking: 57 },
  { id: "qat", name: "Qatar", flag: "qa", group: "B", confederation: "AFC", ranking: 42 },
  { id: "sui", name: "Switzerland", flag: "ch", group: "B", confederation: "UEFA", ranking: 19 },
  { id: "bra", name: "Brazil", flag: "br", group: "C", confederation: "CONMEBOL", ranking: 5 },
  { id: "mar", name: "Morocco", flag: "ma", group: "C", confederation: "CAF", ranking: 13 },
  { id: "hai", name: "Haiti", flag: "ht", group: "C", confederation: "CONCACAF", ranking: 89 },
  { id: "sco", name: "Scotland", flag: "gb-sct", group: "C", confederation: "UEFA", ranking: 39 },
  { id: "usa", name: "USA", flag: "us", group: "D", confederation: "CONCACAF", ranking: 16 },
  { id: "par", name: "Paraguay", flag: "py", group: "D", confederation: "CONMEBOL", ranking: 53 },
  { id: "aus", name: "Australia", flag: "au", group: "D", confederation: "AFC", ranking: 40 },
  { id: "tur", name: "Türkiye", flag: "tr", group: "D", confederation: "UEFA", ranking: 28 },
  { id: "ger", name: "Germany", flag: "de", group: "E", confederation: "UEFA", ranking: 10 },
  { id: "cuw", name: "Curaçao", flag: "cw", group: "E", confederation: "CONCACAF", ranking: 91 },
  { id: "civ", name: "Côte d'Ivoire", flag: "ci", group: "E", confederation: "CAF", ranking: 44 },
  { id: "ecu", name: "Ecuador", flag: "ec", group: "E", confederation: "CONMEBOL", ranking: 31 },
  { id: "ned", name: "Netherlands", flag: "nl", group: "F", confederation: "UEFA", ranking: 7 },
  { id: "jpn", name: "Japan", flag: "jp", group: "F", confederation: "AFC", ranking: 18 },
  { id: "swe", name: "Sweden", flag: "se", group: "F", confederation: "UEFA", ranking: 26 },
  { id: "tun", name: "Tunisia", flag: "tn", group: "F", confederation: "CAF", ranking: 41 },
  { id: "bel", name: "Belgium", flag: "be", group: "G", confederation: "UEFA", ranking: 6 },
  { id: "egy", name: "Egypt", flag: "eg", group: "G", confederation: "CAF", ranking: 34 },
  { id: "irn", name: "IR Iran", flag: "ir", group: "G", confederation: "AFC", ranking: 22 },
  { id: "nzl", name: "New Zealand", flag: "nz", group: "G", confederation: "OFC", ranking: 105 },
  { id: "esp", name: "Spain", flag: "es", group: "H", confederation: "UEFA", ranking: 8 },
  { id: "cpv", name: "Cabo Verde", flag: "cv", group: "H", confederation: "CAF", ranking: 72 },
  { id: "ksa", name: "Saudi Arabia", flag: "sa", group: "H", confederation: "AFC", ranking: 56 },
  { id: "uru", name: "Uruguay", flag: "uy", group: "H", confederation: "CONMEBOL", ranking: 11 },
  { id: "fra", name: "France", flag: "fr", group: "I", confederation: "UEFA", ranking: 2 },
  { id: "nor", name: "Norway", flag: "no", group: "I", confederation: "UEFA", ranking: 46 },
  { id: "sen", name: "Senegal", flag: "sn", group: "I", confederation: "CAF", ranking: 21 },
  { id: "irq", name: "Iraq", flag: "iq", group: "I", confederation: "AFC", ranking: 68 },
  { id: "arg", name: "Argentina", flag: "ar", group: "J", confederation: "CONMEBOL", ranking: 1 },
  { id: "alg", name: "Algeria", flag: "dz", group: "J", confederation: "CAF", ranking: 37 },
  { id: "aut", name: "Austria", flag: "at", group: "J", confederation: "UEFA", ranking: 29 },
  { id: "jor", name: "Jordan", flag: "jo", group: "J", confederation: "AFC", ranking: 70 },
  { id: "por", name: "Portugal", flag: "pt", group: "K", confederation: "UEFA", ranking: 9 },
  { id: "cod", name: "Congo DR", flag: "cd", group: "K", confederation: "CAF", ranking: 63 },
  { id: "uzb", name: "Uzbekistan", flag: "uz", group: "K", confederation: "AFC", ranking: 75 },
  { id: "col", name: "Colombia", flag: "co", group: "K", confederation: "CONMEBOL", ranking: 17 },
  { id: "eng", name: "England", flag: "gb-eng", group: "L", confederation: "UEFA", ranking: 4 },
  { id: "gha", name: "Ghana", flag: "gh", group: "L", confederation: "CAF", ranking: 48 },
  { id: "pan", name: "Panama", flag: "pa", group: "L", confederation: "CONCACAF", ranking: 55 },
  { id: "cro", name: "Croatia", flag: "hr", group: "L", confederation: "UEFA", ranking: 14 },
]

export function getTeam(name: string): Team | undefined {
  return allTeams.find((t) => t.name === name)
}

export function getTeamsByGroup(groupId: string): Team[] {
  const g = groups.find((grp) => grp.id === groupId)
  if (!g) return []
  return g.teams.map((name) => getTeam(name)).filter(Boolean) as Team[]
}
