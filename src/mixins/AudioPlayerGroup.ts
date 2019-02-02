import Vue from 'vue';
import { Mixin } from 'vue-mixin-decorator';
import { PaperAudioPlayerElement } from '@/webcomponents/my-paper-audio-player/paper-audio-player';

@Mixin
export class AudioPlayerGroup extends Vue {
  protected audioPlayerIdPrefix = 'audio_player_';
  protected get numberOfAudioPlayers() {
    return -1;
  }
  protected getAudioPlayerId(index: number) {
    return `${this.audioPlayerIdPrefix}${index}`;
  }
  protected getAudioPlayer(index: number): PaperAudioPlayerElement {
    const id = this.getAudioPlayerId(index);
    const player = document.querySelector(`#${id}`);
    if (player === null) {
      throw new Error(`Could not get audio player element with id ${id}.`);
    }
    return player as PaperAudioPlayerElement;
  }
  protected pauseAllAudioPlayersButOne(index: number) {
    console.log('pause all except ' + index);
    if (this.numberOfAudioPlayers === -1) {
      console.warn('Number of audio players is -1, you need to override the numberOfAudioPlayers computed property.');
    }
    for (let i = 0; i < this.numberOfAudioPlayers; i++) {
      if (i === index) {
        continue;
      }
      const player = this.getAudioPlayer(i);
      if (player.isPlaying === true) {
        player.playPause();
      }
    }
  }
  protected pauseAllAudioPlayers() {
    this.pauseAllAudioPlayersButOne(-1);
  }
  protected getSrc(file: File) {
    return window.URL.createObjectURL(file);
  }
}
