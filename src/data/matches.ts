export interface Match {
  id: string
  slug: string
  homeTeam: string
  awayTeam: string
  group: string
  stage: string
  date: string
  time: string
  venue: string
  venueCity: string
  homeScore: number | null
  awayScore: number | null
  isFinished: boolean
}

export const matches: Match[] = [
  // Group A
  { id: "M1", slug: "mexico-vs-south-africa-20260611", homeTeam: "Mexico", awayTeam: "South Africa", group: "A", stage: "Group Stage", date: "2026-06-11", time: "19:00", venue: "Estadio Azteca", venueCity: "Mexico City", homeScore: null, awayScore: null, isFinished: false },
  { id: "M2", slug: "korea-republic-vs-czechia-20260611", homeTeam: "Korea Republic", awayTeam: "Czechia", group: "A", stage: "Group Stage", date: "2026-06-11", time: "22:00", venue: "Estadio Akron", venueCity: "Guadalajara", homeScore: null, awayScore: null, isFinished: false },
  { id: "M25", slug: "czechia-vs-south-africa-20260618", homeTeam: "Czechia", awayTeam: "South Africa", group: "A", stage: "Group Stage", date: "2026-06-18", time: "12:00", venue: "Mercedes-Benz Stadium", venueCity: "Atlanta", homeScore: null, awayScore: null, isFinished: false },
  { id: "M26", slug: "mexico-vs-korea-republic-20260618", homeTeam: "Mexico", awayTeam: "Korea Republic", group: "A", stage: "Group Stage", date: "2026-06-18", time: "21:00", venue: "Estadio Akron", venueCity: "Guadalajara", homeScore: null, awayScore: null, isFinished: false },
  { id: "M53", slug: "czechia-vs-mexico-20260624", homeTeam: "Czechia", awayTeam: "Mexico", group: "A", stage: "Group Stage", date: "2026-06-24", time: "21:00", venue: "Estadio Azteca", venueCity: "Mexico City", homeScore: null, awayScore: null, isFinished: false },
  { id: "M54", slug: "south-africa-vs-korea-republic-20260624", homeTeam: "South Africa", awayTeam: "Korea Republic", group: "A", stage: "Group Stage", date: "2026-06-24", time: "21:00", venue: "Estadio BBVA", venueCity: "Monterrey", homeScore: null, awayScore: null, isFinished: false },

  // Group B
  { id: "M3", slug: "canada-vs-bosnia-20260612", homeTeam: "Canada", awayTeam: "Bosnia and Herzegovina", group: "B", stage: "Group Stage", date: "2026-06-12", time: "19:00", venue: "BMO Field", venueCity: "Toronto", homeScore: null, awayScore: null, isFinished: false },
  { id: "M4", slug: "qatar-vs-switzerland-20260613", homeTeam: "Qatar", awayTeam: "Switzerland", group: "B", stage: "Group Stage", date: "2026-06-13", time: "15:00", venue: "Levi's Stadium", venueCity: "San Francisco Bay Area", homeScore: null, awayScore: null, isFinished: false },
  { id: "M27", slug: "switzerland-vs-bosnia-20260618", homeTeam: "Switzerland", awayTeam: "Bosnia and Herzegovina", group: "B", stage: "Group Stage", date: "2026-06-18", time: "15:00", venue: "SoFi Stadium", venueCity: "Los Angeles", homeScore: null, awayScore: null, isFinished: false },
  { id: "M28", slug: "canada-vs-qatar-20260618", homeTeam: "Canada", awayTeam: "Qatar", group: "B", stage: "Group Stage", date: "2026-06-18", time: "18:00", venue: "BC Place", venueCity: "Vancouver", homeScore: null, awayScore: null, isFinished: false },
  { id: "M55", slug: "switzerland-vs-canada-20260624", homeTeam: "Switzerland", awayTeam: "Canada", group: "B", stage: "Group Stage", date: "2026-06-24", time: "15:00", venue: "BC Place", venueCity: "Vancouver", homeScore: null, awayScore: null, isFinished: false },
  { id: "M56", slug: "bosnia-vs-qatar-20260624", homeTeam: "Bosnia and Herzegovina", awayTeam: "Qatar", group: "B", stage: "Group Stage", date: "2026-06-24", time: "15:00", venue: "Lumen Field", venueCity: "Seattle", homeScore: null, awayScore: null, isFinished: false },

  // Group C
  { id: "M5", slug: "brazil-vs-morocco-20260613", homeTeam: "Brazil", awayTeam: "Morocco", group: "C", stage: "Group Stage", date: "2026-06-13", time: "22:00", venue: "MetLife Stadium", venueCity: "New York / New Jersey", homeScore: null, awayScore: null, isFinished: false },
  { id: "M6", slug: "haiti-vs-scotland-20260613", homeTeam: "Haiti", awayTeam: "Scotland", group: "C", stage: "Group Stage", date: "2026-06-13", time: "22:00", venue: "Gillette Stadium", venueCity: "Boston", homeScore: null, awayScore: null, isFinished: false },
  { id: "M29", slug: "scotland-vs-morocco-20260619", homeTeam: "Scotland", awayTeam: "Morocco", group: "C", stage: "Group Stage", date: "2026-06-19", time: "18:00", venue: "Gillette Stadium", venueCity: "Boston", homeScore: null, awayScore: null, isFinished: false },
  { id: "M30", slug: "brazil-vs-haiti-20260619", homeTeam: "Brazil", awayTeam: "Haiti", group: "C", stage: "Group Stage", date: "2026-06-19", time: "21:00", venue: "Lincoln Financial Field", venueCity: "Philadelphia", homeScore: null, awayScore: null, isFinished: false },
  { id: "M57", slug: "scotland-vs-brazil-20260624", homeTeam: "Scotland", awayTeam: "Brazil", group: "C", stage: "Group Stage", date: "2026-06-24", time: "18:00", venue: "Hard Rock Stadium", venueCity: "Miami", homeScore: null, awayScore: null, isFinished: false },
  { id: "M58", slug: "morocco-vs-haiti-20260624", homeTeam: "Morocco", awayTeam: "Haiti", group: "C", stage: "Group Stage", date: "2026-06-24", time: "18:00", venue: "Mercedes-Benz Stadium", venueCity: "Atlanta", homeScore: null, awayScore: null, isFinished: false },

  // Group D
  { id: "M7", slug: "usa-vs-paraguay-20260612", homeTeam: "USA", awayTeam: "Paraguay", group: "D", stage: "Group Stage", date: "2026-06-12", time: "21:00", venue: "SoFi Stadium", venueCity: "Los Angeles", homeScore: null, awayScore: null, isFinished: false },
  { id: "M8", slug: "australia-vs-turkiye-20260613", homeTeam: "Australia", awayTeam: "Türkiye", group: "D", stage: "Group Stage", date: "2026-06-13", time: "04:00", venue: "BC Place", venueCity: "Vancouver", homeScore: null, awayScore: null, isFinished: false },
  { id: "M31", slug: "turkiye-vs-paraguay-20260619", homeTeam: "Türkiye", awayTeam: "Paraguay", group: "D", stage: "Group Stage", date: "2026-06-19", time: "22:00", venue: "Levi's Stadium", venueCity: "San Francisco Bay Area", homeScore: null, awayScore: null, isFinished: false },
  { id: "M32", slug: "usa-vs-australia-20260619", homeTeam: "USA", awayTeam: "Australia", group: "D", stage: "Group Stage", date: "2026-06-19", time: "22:00", venue: "Lumen Field", venueCity: "Seattle", homeScore: null, awayScore: null, isFinished: false },
  { id: "M59", slug: "turkiye-vs-usa-20260625", homeTeam: "Türkiye", awayTeam: "USA", group: "D", stage: "Group Stage", date: "2026-06-25", time: "17:00", venue: "SoFi Stadium", venueCity: "Los Angeles", homeScore: null, awayScore: null, isFinished: false },
  { id: "M60", slug: "paraguay-vs-australia-20260625", homeTeam: "Paraguay", awayTeam: "Australia", group: "D", stage: "Group Stage", date: "2026-06-25", time: "22:00", venue: "Levi's Stadium", venueCity: "San Francisco Bay Area", homeScore: null, awayScore: null, isFinished: false },

  // Group E
  { id: "M9", slug: "germany-vs-curacao-20260614", homeTeam: "Germany", awayTeam: "Curaçao", group: "E", stage: "Group Stage", date: "2026-06-14", time: "13:00", venue: "NRG Stadium", venueCity: "Houston", homeScore: null, awayScore: null, isFinished: false },
  { id: "M10", slug: "cote-divoire-vs-ecuador-20260614", homeTeam: "Côte d'Ivoire", awayTeam: "Ecuador", group: "E", stage: "Group Stage", date: "2026-06-14", time: "23:00", venue: "Lincoln Financial Field", venueCity: "Philadelphia", homeScore: null, awayScore: null, isFinished: false },
  { id: "M33", slug: "germany-vs-cote-divoire-20260619", homeTeam: "Germany", awayTeam: "Côte d'Ivoire", group: "E", stage: "Group Stage", date: "2026-06-19", time: "15:00", venue: "BMO Field", venueCity: "Toronto", homeScore: null, awayScore: null, isFinished: false },
  { id: "M34", slug: "ecuador-vs-curacao-20260620", homeTeam: "Ecuador", awayTeam: "Curaçao", group: "E", stage: "Group Stage", date: "2026-06-20", time: "17:00", venue: "GEHA Field at Arrowhead Stadium", venueCity: "Kansas City", homeScore: null, awayScore: null, isFinished: false },
  { id: "M61", slug: "curacao-vs-cote-divoire-20260625", homeTeam: "Curaçao", awayTeam: "Côte d'Ivoire", group: "E", stage: "Group Stage", date: "2026-06-25", time: "17:00", venue: "Lincoln Financial Field", venueCity: "Philadelphia", homeScore: null, awayScore: null, isFinished: false },
  { id: "M62", slug: "ecuador-vs-germany-20260625", homeTeam: "Ecuador", awayTeam: "Germany", group: "E", stage: "Group Stage", date: "2026-06-25", time: "21:00", venue: "MetLife Stadium", venueCity: "New York / New Jersey", homeScore: null, awayScore: null, isFinished: false },

  // Group F
  { id: "M11", slug: "netherlands-vs-japan-20260614", homeTeam: "Netherlands", awayTeam: "Japan", group: "F", stage: "Group Stage", date: "2026-06-14", time: "16:00", venue: "AT&T Stadium", venueCity: "Dallas", homeScore: null, awayScore: null, isFinished: false },
  { id: "M12", slug: "sweden-vs-tunisia-20260614", homeTeam: "Sweden", awayTeam: "Tunisia", group: "F", stage: "Group Stage", date: "2026-06-14", time: "16:00", venue: "Estadio BBVA", venueCity: "Monterrey", homeScore: null, awayScore: null, isFinished: false },
  { id: "M35", slug: "japan-vs-sweden-20260620", homeTeam: "Japan", awayTeam: "Sweden", group: "F", stage: "Group Stage", date: "2026-06-20", time: "13:00", venue: "AT&T Stadium", venueCity: "Dallas", homeScore: null, awayScore: null, isFinished: false },
  { id: "M36", slug: "tunisia-vs-netherlands-20260620", homeTeam: "Tunisia", awayTeam: "Netherlands", group: "F", stage: "Group Stage", date: "2026-06-20", time: "13:00", venue: "GEHA Field at Arrowhead Stadium", venueCity: "Kansas City", homeScore: null, awayScore: null, isFinished: false },
  { id: "M63", slug: "japan-vs-tunisia-20260625", homeTeam: "Japan", awayTeam: "Tunisia", group: "F", stage: "Group Stage", date: "2026-06-25", time: "13:00", venue: "Estadio BBVA", venueCity: "Monterrey", homeScore: null, awayScore: null, isFinished: false },
  { id: "M64", slug: "sweden-vs-netherlands-20260625", homeTeam: "Sweden", awayTeam: "Netherlands", group: "F", stage: "Group Stage", date: "2026-06-25", time: "21:00", venue: "NRG Stadium", venueCity: "Houston", homeScore: null, awayScore: null, isFinished: false },

  // Group G
  { id: "M13", slug: "belgium-vs-egypt-20260614", homeTeam: "Belgium", awayTeam: "Egypt", group: "G", stage: "Group Stage", date: "2026-06-14", time: "19:00", venue: "Lumen Field", venueCity: "Seattle", homeScore: null, awayScore: null, isFinished: false },
  { id: "M14", slug: "iran-vs-new-zealand-20260615", homeTeam: "IR Iran", awayTeam: "New Zealand", group: "G", stage: "Group Stage", date: "2026-06-15", time: "01:00", venue: "SoFi Stadium", venueCity: "Los Angeles", homeScore: null, awayScore: null, isFinished: false },
  { id: "M37", slug: "egypt-vs-iran-20260621", homeTeam: "Egypt", awayTeam: "IR Iran", group: "G", stage: "Group Stage", date: "2026-06-21", time: "17:00", venue: "Lumen Field", venueCity: "Seattle", homeScore: null, awayScore: null, isFinished: false },
  { id: "M38", slug: "new-zealand-vs-belgium-20260621", homeTeam: "New Zealand", awayTeam: "Belgium", group: "G", stage: "Group Stage", date: "2026-06-21", time: "20:00", venue: "BC Place", venueCity: "Vancouver", homeScore: null, awayScore: null, isFinished: false },
  { id: "M65", slug: "egypt-vs-new-zealand-20260626", homeTeam: "Egypt", awayTeam: "New Zealand", group: "G", stage: "Group Stage", date: "2026-06-26", time: "17:00", venue: "Lumen Field", venueCity: "Seattle", homeScore: null, awayScore: null, isFinished: false },
  { id: "M66", slug: "iran-vs-belgium-20260626", homeTeam: "IR Iran", awayTeam: "Belgium", group: "G", stage: "Group Stage", date: "2026-06-26", time: "21:00", venue: "BC Place", venueCity: "Vancouver", homeScore: null, awayScore: null, isFinished: false },

  // Group H
  { id: "M15", slug: "spain-vs-cabo-verde-20260615", homeTeam: "Spain", awayTeam: "Cabo Verde", group: "H", stage: "Group Stage", date: "2026-06-15", time: "16:00", venue: "Mercedes-Benz Stadium", venueCity: "Atlanta", homeScore: null, awayScore: null, isFinished: false },
  { id: "M16", slug: "saudi-arabia-vs-uruguay-20260615", homeTeam: "Saudi Arabia", awayTeam: "Uruguay", group: "H", stage: "Group Stage", date: "2026-06-15", time: "22:00", venue: "Hard Rock Stadium", venueCity: "Miami", homeScore: null, awayScore: null, isFinished: false },
  { id: "M39", slug: "uruguay-vs-cabo-verde-20260621", homeTeam: "Uruguay", awayTeam: "Cabo Verde", group: "H", stage: "Group Stage", date: "2026-06-21", time: "17:00", venue: "NRG Stadium", venueCity: "Houston", homeScore: null, awayScore: null, isFinished: false },
  { id: "M40", slug: "saudi-arabia-vs-spain-20260621", homeTeam: "Saudi Arabia", awayTeam: "Spain", group: "H", stage: "Group Stage", date: "2026-06-21", time: "22:00", venue: "Estadio Akron", venueCity: "Guadalajara", homeScore: null, awayScore: null, isFinished: false },
  { id: "M67", slug: "cabo-verde-vs-saudi-arabia-20260626", homeTeam: "Cabo Verde", awayTeam: "Saudi Arabia", group: "H", stage: "Group Stage", date: "2026-06-26", time: "13:00", venue: "NRG Stadium", venueCity: "Houston", homeScore: null, awayScore: null, isFinished: false },
  { id: "M68", slug: "uruguay-vs-spain-20260626", homeTeam: "Uruguay", awayTeam: "Spain", group: "H", stage: "Group Stage", date: "2026-06-26", time: "17:00", venue: "Estadio Akron", venueCity: "Guadalajara", homeScore: null, awayScore: null, isFinished: false },

  // Group I
  { id: "M17", slug: "france-vs-norway-20260616", homeTeam: "France", awayTeam: "Norway", group: "I", stage: "Group Stage", date: "2026-06-16", time: "19:00", venue: "MetLife Stadium", venueCity: "New York / New Jersey", homeScore: null, awayScore: null, isFinished: false },
  { id: "M18", slug: "senegal-vs-iraq-20260616", homeTeam: "Senegal", awayTeam: "Iraq", group: "I", stage: "Group Stage", date: "2026-06-16", time: "22:00", venue: "Gillette Stadium", venueCity: "Boston", homeScore: null, awayScore: null, isFinished: false },
  { id: "M41", slug: "norway-vs-senegal-20260622", homeTeam: "Norway", awayTeam: "Senegal", group: "I", stage: "Group Stage", date: "2026-06-22", time: "17:00", venue: "MetLife Stadium", venueCity: "New York / New Jersey", homeScore: null, awayScore: null, isFinished: false },
  { id: "M42", slug: "france-vs-iraq-20260622", homeTeam: "France", awayTeam: "Iraq", group: "I", stage: "Group Stage", date: "2026-06-22", time: "17:00", venue: "Lincoln Financial Field", venueCity: "Philadelphia", homeScore: null, awayScore: null, isFinished: false },
  { id: "M69", slug: "norway-vs-france-20260626", homeTeam: "Norway", awayTeam: "France", group: "I", stage: "Group Stage", date: "2026-06-26", time: "22:00", venue: "Gillette Stadium", venueCity: "Boston", homeScore: null, awayScore: null, isFinished: false },
  { id: "M70", slug: "senegal-vs-iraq-20260626", homeTeam: "Senegal", awayTeam: "Iraq", group: "I", stage: "Group Stage", date: "2026-06-26", time: "22:00", venue: "BMO Field", venueCity: "Toronto", homeScore: null, awayScore: null, isFinished: false },

  // Group J
  { id: "M19", slug: "argentina-vs-algeria-20260616", homeTeam: "Argentina", awayTeam: "Algeria", group: "J", stage: "Group Stage", date: "2026-06-16", time: "17:00", venue: "NRG Stadium", venueCity: "Houston", homeScore: null, awayScore: null, isFinished: false },
  { id: "M20", slug: "austria-vs-jordan-20260617", homeTeam: "Austria", awayTeam: "Jordan", group: "J", stage: "Group Stage", date: "2026-06-17", time: "01:00", venue: "GEHA Field at Arrowhead Stadium", venueCity: "Kansas City", homeScore: null, awayScore: null, isFinished: false },
  { id: "M43", slug: "algeria-vs-austria-20260622", homeTeam: "Algeria", awayTeam: "Austria", group: "J", stage: "Group Stage", date: "2026-06-22", time: "21:00", venue: "GEHA Field at Arrowhead Stadium", venueCity: "Kansas City", homeScore: null, awayScore: null, isFinished: false },
  { id: "M44", slug: "jordan-vs-argentina-20260622", homeTeam: "Jordan", awayTeam: "Argentina", group: "J", stage: "Group Stage", date: "2026-06-22", time: "21:00", venue: "AT&T Stadium", venueCity: "Dallas", homeScore: null, awayScore: null, isFinished: false },
  { id: "M71", slug: "algeria-vs-jordan-20260627", homeTeam: "Algeria", awayTeam: "Jordan", group: "J", stage: "Group Stage", date: "2026-06-27", time: "17:00", venue: "GEHA Field at Arrowhead Stadium", venueCity: "Kansas City", homeScore: null, awayScore: null, isFinished: false },
  { id: "M72", slug: "austria-vs-argentina-20260627", homeTeam: "Austria", awayTeam: "Argentina", group: "J", stage: "Group Stage", date: "2026-06-27", time: "17:00", venue: "AT&T Stadium", venueCity: "Dallas", homeScore: null, awayScore: null, isFinished: false },

  // Group K
  { id: "M21", slug: "portugal-vs-congo-dr-20260617", homeTeam: "Portugal", awayTeam: "Congo DR", group: "K", stage: "Group Stage", date: "2026-06-17", time: "17:00", venue: "AT&T Stadium", venueCity: "Dallas", homeScore: null, awayScore: null, isFinished: false },
  { id: "M22", slug: "uzbekistan-vs-colombia-20260617", homeTeam: "Uzbekistan", awayTeam: "Colombia", group: "K", stage: "Group Stage", date: "2026-06-17", time: "17:00", venue: "Estadio Akron", venueCity: "Guadalajara", homeScore: null, awayScore: null, isFinished: false },
  { id: "M45", slug: "portugal-vs-uzbekistan-20260623", homeTeam: "Portugal", awayTeam: "Uzbekistan", group: "K", stage: "Group Stage", date: "2026-06-23", time: "17:00", venue: "NRG Stadium", venueCity: "Houston", homeScore: null, awayScore: null, isFinished: false },
  { id: "M46", slug: "colombia-vs-congo-dr-20260623", homeTeam: "Colombia", awayTeam: "Congo DR", group: "K", stage: "Group Stage", date: "2026-06-23", time: "17:00", venue: "Estadio Akron", venueCity: "Guadalajara", homeScore: null, awayScore: null, isFinished: false },
  { id: "M73", slug: "colombia-vs-portugal-20260627", homeTeam: "Colombia", awayTeam: "Portugal", group: "K", stage: "Group Stage", date: "2026-06-27", time: "21:00", venue: "Hard Rock Stadium", venueCity: "Miami", homeScore: null, awayScore: null, isFinished: false },
  { id: "M74", slug: "congo-dr-vs-uzbekistan-20260627", homeTeam: "Congo DR", awayTeam: "Uzbekistan", group: "K", stage: "Group Stage", date: "2026-06-27", time: "21:00", venue: "Mercedes-Benz Stadium", venueCity: "Atlanta", homeScore: null, awayScore: null, isFinished: false },

  // Group L
  { id: "M23", slug: "england-vs-ghana-20260617", homeTeam: "England", awayTeam: "Ghana", group: "L", stage: "Group Stage", date: "2026-06-17", time: "20:00", venue: "Gillette Stadium", venueCity: "Boston", homeScore: null, awayScore: null, isFinished: false },
  { id: "M24", slug: "panama-vs-croatia-20260617", homeTeam: "Panama", awayTeam: "Croatia", group: "L", stage: "Group Stage", date: "2026-06-17", time: "20:00", venue: "BMO Field", venueCity: "Toronto", homeScore: null, awayScore: null, isFinished: false },
  { id: "M47", slug: "panama-vs-england-20260623", homeTeam: "Panama", awayTeam: "England", group: "L", stage: "Group Stage", date: "2026-06-23", time: "21:00", venue: "MetLife Stadium", venueCity: "New York / New Jersey", homeScore: null, awayScore: null, isFinished: false },
  { id: "M48", slug: "croatia-vs-ghana-20260623", homeTeam: "Croatia", awayTeam: "Ghana", group: "L", stage: "Group Stage", date: "2026-06-23", time: "21:00", venue: "Lincoln Financial Field", venueCity: "Philadelphia", homeScore: null, awayScore: null, isFinished: false },
  { id: "M75", slug: "panama-vs-croatia-20260627", homeTeam: "Panama", awayTeam: "Croatia", group: "L", stage: "Group Stage", date: "2026-06-27", time: "21:00", venue: "Mercedes-Benz Stadium", venueCity: "Atlanta", homeScore: null, awayScore: null, isFinished: false },
  { id: "M76", slug: "croatia-vs-ghana-20260627", homeTeam: "Croatia", awayTeam: "Ghana", group: "L", stage: "Group Stage", date: "2026-06-27", time: "21:00", venue: "Lincoln Financial Field", venueCity: "Philadelphia", homeScore: null, awayScore: null, isFinished: false },
]

export function getMatchBySlug(slug: string): Match | undefined {
  return matches.find((m) => m.slug === slug)
}

export function getMatchesByGroup(groupId: string): Match[] {
  return matches.filter((m) => m.group === groupId)
}

export function getTeamMatches(teamName: string): Match[] {
  return matches.filter((m) => m.homeTeam === teamName || m.awayTeam === teamName)
}
