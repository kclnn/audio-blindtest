<template>
  <section class="section">
    <app-binomial-vs-header></app-binomial-vs-header>
    <div class="has-text-centered">
      <button class="button is-danger resetbutton" @click="binomialStore.reset()">Reset</button>
    </div>
    <strong>{{ binomialStore.currentSample + 1}} of {{ binomialStore.sampleSize }}</strong>
    <div class="columns fading" :class="{'faded-out': fadedOut}" @transitionend="transitionEnded()">
      <div class="column has-text-centered" 
           v-for="(permutedFile, index) in binomialStore.permutedFiles"
           :key="permutedFile.permutationKey">
        <paper-audio-player class="blue"
                            title="" 
                            :src="getSrc(permutedFile.item)"
                            :id="getAudioPlayerId(index)"
                            @playing="pauseAllAudioPlayersButOne(index)"></paper-audio-player>
        <button class="button has-background-dark"
                @click="addSample(permutedFile.item === binomialStore.testFiles[0])">
          <div class="has-text-link">This is&nbsp;</div>{{ binomialStore.testFiles[0].name }}
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-mixin-decorator';
import { AudioPlayerGroup } from '@/mixins/AudioPlayerGroup';
import { getModule } from 'vuex-module-decorators';
import Binomial from '@/store/binomial';
import AppBinomialVsHeader from './BinomialVsHeader.vue';

@Component({
  components: { AppBinomialVsHeader }
})
export default class BinomialTest extends Mixins<AudioPlayerGroup>(AudioPlayerGroup) {
  private binomialStore = getModule(Binomial, this.$store);
  private fadedOut = false;
  private correctToAdd = false;
  protected get numberOfAudioPlayers() {
    return this.binomialStore.permutedFiles.length;
  }
  private addSample(correct: boolean) {
    this.correctToAdd = correct;
    this.fadedOut = true;
  }
  private transitionEnded() {
    if (this.fadedOut === true) {
      this.binomialStore.addSample(this.correctToAdd);
      this.fadedOut = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  padding-top: 0;
}
paper-audio-player {
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.resetbutton {
  margin-top: 1rem;
}
</style>

