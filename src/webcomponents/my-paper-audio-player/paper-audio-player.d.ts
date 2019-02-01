export interface PaperAudioPlayer {
  playPause(): void;
  isPlaying: boolean;
}

export type PaperAudioPlayerElement = Element & PaperAudioPlayer;