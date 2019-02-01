<template>
  <div class="container">
    <app-blindtest-instructions></app-blindtest-instructions>
    <app-file-selector></app-file-selector>
    <app-blindtest-controls></app-blindtest-controls>
    <div class="has-text-centered">
      <transition-group name="player-list"
                        @after-leave="blindtestStore.setAnimationRunning(false)">
        <div class="audio-player-container field" v-for="(permutedFile, index) of permutedFiles" :key="permutedFile.permutationKey">
          <app-blindtest-player-label :file="permutedFile"></app-blindtest-player-label>
          <paper-audio-player class="blue"
                              title="" 
                              :src="getSrc(permutedFile.item)"
                              :id="getAudioPlayerId(index)"
                              @playing="pauseAllAudioPlayersButOne(index)"></paper-audio-player>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-mixin-decorator';
import { AudioPlayerGroup } from '@/mixins/AudioPlayerGroup';
import AppFileSelector from '@/components/FileSelector.vue';
import AppBlindtestControls from '@/components/blindtest/BlindtestControls.vue';
import AppBlindtestPlayerLabel from '@/components/blindtest/BlindtestPlayerLabel.vue';
import AppBlindtestInstructions from '@/components/blindtest/BlindtestInstructions.vue';
import { getModule } from 'vuex-module-decorators';
import Blindtest from '@/store/blindtest';

@Component({
  components: {
    AppFileSelector,
    AppBlindtestControls,
    AppBlindtestPlayerLabel,
    AppBlindtestInstructions
  }
})
export default class BlindtestView extends Mixins<AudioPlayerGroup>(AudioPlayerGroup) {
  private blindtestStore = getModule(Blindtest, this.$store);

  protected get numberOfAudioPlayers() {
    return this.permutedFiles.length;
  }
  private get permutedFiles() {
    if (this.blindtestStore.animationRunning) {
      return [];
    }
    return this.blindtestStore.permutedFiles;
  }
  private get showFilenames() {
    return this.blindtestStore.showFilenames;
  }
}
</script>



<style lang="scss" scoped>
paper-audio-player {
  width: 100%;
  margin: 0 auto;
}
.field:not(:last-child) {
    margin-bottom: 1rem;
}
.player-list-enter, .player-list-leave-to {
  opacity: 0;
}
.player-list-enter-active, .player-list-leave-active {
  transition: opacity 0.5s;
}
</style>

