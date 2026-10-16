"use client"

import { useEffect, useRef, useState } from "react"
import { AudioLines, Loader2, Pause, Play, Volume2, VolumeX } from "lucide-react"
import type { MusicGenre } from "@/lib/music-previews"

const timeLabel = (seconds: number) => `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`

export function MusicPreviewPlayer({ genre }: { genre: MusicGenre }) {
  const [selected, setSelected] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [elapsed, setElapsed] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const audioRef = useRef<HTMLAudioElement>(null)
  const track = genre.tracks[selected]
  const available = Boolean(track?.src)

  useEffect(() => {
    const audio = audioRef.current
    if (audio) audio.volume = volume
  }, [volume, selected])

  useEffect(() => {
    const audio = audioRef.current
    return () => { audio?.pause() }
  }, [selected])

  async function togglePlayback() {
    const audio = audioRef.current
    if (!audio || !available) return
    if (!audio.paused) { audio.pause(); return }
    setError("")
    setLoading(true)
    try { await audio.play() }
    catch { setError("Bu örnek şu anda oynatılamıyor. Lütfen tekrar deneyin."); setPlaying(false) }
    finally { setLoading(false) }
  }

  function selectTrack(index: number) {
    audioRef.current?.pause()
    setPlaying(false)
    setLoading(false)
    setError("")
    setElapsed(0)
    setDuration(0)
    setSelected(index)
  }

  return (
    <div className="mt-8 rounded-2xl border border-surface-border bg-card/80 p-5 md:p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="flex items-center gap-2 text-xs font-semibold text-foreground/65"><AudioLines size={16} className="text-brand-glow" />Örnek dinleme</span>
        <span className="rounded-full bg-foreground/5 px-2.5 py-1 text-[10px] font-medium text-foreground/55">{available ? "Dinlemeye hazır" : "Yakında"}</span>
      </div>
      <div className="mt-5 flex items-center gap-4">
        <button type="button" onClick={togglePlayback} disabled={!available || loading} aria-label={playing ? "Örneği duraklat" : "Örneği oynat"} className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand text-white transition hover:bg-brand-hover disabled:cursor-not-allowed disabled:bg-foreground/10 disabled:text-foreground/35">
          {loading ? <Loader2 size={22} className="animate-spin" /> : playing ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" className="ml-0.5" />}
        </button>
        <div className="min-w-0"><p className="text-sm font-semibold">{genre.name} seçkisi</p><p className="mt-1 text-xs leading-relaxed text-foreground/55">{available ? `${track.artist ? track.artist + " · " : ""}${track.title}` : "Dinleme örneklerimiz yakında burada."}</p></div>
      </div>
      <div className="mt-5">
        <input type="range" aria-label="Dinleme konumu" min={0} max={duration || 1} step={0.1} value={elapsed} disabled={!available || !duration} onChange={(event) => { const value = Number(event.target.value); if (audioRef.current) audioRef.current.currentTime = value; setElapsed(value) }} className="audio-range w-full" />
        <div className="mt-1 flex justify-between font-mono text-[10px] text-foreground/45"><span>{timeLabel(elapsed)}</span><span>{duration ? timeLabel(duration) : "--:--"}</span></div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-4 border-t border-surface-border pt-4">
        <p className="text-[11px] text-foreground/50">{available ? "Mekânınızın ritmini keşfedin." : "Mekânınıza özel müzik seçkileri."}</p>
        <div className="flex shrink-0 items-center gap-2">
          <button type="button" disabled={!available} aria-label={volume === 0 ? "Sesi aç" : "Sesi kapat"} onClick={() => setVolume(volume === 0 ? 0.7 : 0)} className="rounded-md p-1 text-foreground/60 disabled:opacity-40">{volume === 0 ? <VolumeX size={17} /> : <Volume2 size={17} />}</button>
          <input type="range" aria-label="Ses seviyesi" min={0} max={1} step={0.01} value={volume} disabled={!available} onChange={event => setVolume(Number(event.target.value))} className="audio-range w-16 sm:w-20" />
        </div>
      </div>
      {genre.tracks.length > 1 && <ul aria-label={`${genre.name} parça listesi`} className="mt-4 max-h-56 space-y-1 overflow-y-auto border-t border-surface-border pt-3 pr-1">{genre.tracks.map((item, index) => <li key={item.id}><button type="button" disabled={!item.src} aria-pressed={selected === index} onClick={() => selectTrack(index)} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-xs disabled:opacity-40 ${selected === index ? "bg-brand/10 text-brand-glow" : "text-foreground/65"}`}><span className="font-mono">{String(index + 1).padStart(2, "0")}</span><span className="min-w-0"><span className="block font-medium">{item.title}</span>{item.artist && <span className="mt-1 block text-[10px] text-foreground/55">{item.artist}</span>}</span></button></li>)}</ul>}
      <p role="status" aria-live="polite" className={error ? "mt-3 text-xs text-red-700 dark:text-red-300" : "sr-only"}>{error}</p>
      {track?.src && <audio key={track.id} ref={audioRef} src={track.src} preload="none" onPlay={() => { setPlaying(true); setLoading(false) }} onPause={() => setPlaying(false)} onTimeUpdate={event => setElapsed(event.currentTarget.currentTime)} onLoadedMetadata={event => { const value = event.currentTarget.duration; setDuration(Number.isFinite(value) ? value : 0) }} onEnded={() => { setPlaying(false); setElapsed(0); if (audioRef.current) audioRef.current.currentTime = 0 }} onWaiting={() => setLoading(true)} onCanPlay={() => setLoading(false)} onError={() => { setPlaying(false); setLoading(false); setError("Bu örnek şu anda yüklenemiyor. Lütfen daha sonra tekrar deneyin.") }} />}
    </div>
  )
}
