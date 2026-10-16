import importedTracks from "./music-preview-tracks.json"

export type MusicPreview = {
  id: string
  title: string
  artist?: string
  /** Public HTTPS audio URL (for example a Cloudflare R2 custom domain). Never put credentials here. */
  src: string | null
}

export type MusicGenre = {
  id: string
  name: string
  text: string
  bpm: string
  tracks: MusicPreview[]
}

const sample = (id: string, name: string): MusicPreview[] => {
  const tracks = importedTracks.filter(track => track.genre === name)
  return tracks.length ? tracks : [{ id: `${id}-01`, title: "Seçkiden bir örnek", src: null }]
}

// Add approved preview URLs here. Null sources never create an audio request.
export const musicGenres: MusicGenre[] = [
  { id: "pop", name: "Pop", text: "Enerjik, tanıdık ve herkese hitap eden seçkiler. Mağaza ve market akışı için ideal.", bpm: "110–128", tracks: sample("pop", "Pop") },
  { id: "deep-house", name: "Deep House", text: "Akşam saatlerinde mekâna tempo ve modern bir atmosfer katar.", bpm: "118–124", tracks: sample("deep-house", "Deep House") },
  { id: "bossa-nova", name: "Bossa Nova", text: "Sabah kahvesine ve öğle buluşmalarına yumuşak, sıcak bir eşlik.", bpm: "70–90", tracks: sample("bossa-nova", "Bossa Nova") },
  { id: "chillout", name: "Chillout", text: "Spa, otel lobisi ve bekleme alanları için sakin bir yayın.", bpm: "80–100", tracks: sample("chillout", "Chillout") },
  { id: "jazz", name: "Jazz", text: "Restoran ve kafelerde sohbeti bölmeyen, zarif bir fon.", bpm: "80–120", tracks: sample("jazz", "Jazz") },
  { id: "blues", name: "Blues", text: "Karakterli, samimi ve akılda kalan bir ambiyans.", bpm: "60–90", tracks: sample("blues", "Blues") },
  { id: "marrakech", name: "Marrakech", text: "Sıcak dokular ve dingin ritimlerle mekânınıza farklı bir atmosfer.", bpm: "", tracks: sample("marrakech", "Marrakech") },
  { id: "reggae", name: "Reggae", text: "Rahat, güneşli ve yaz havasında bir mekân hissi.", bpm: "70–90", tracks: sample("reggae", "Reggae") },
]
