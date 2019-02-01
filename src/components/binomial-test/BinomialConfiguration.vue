<template>
  <div class="container">
    <app-binomial-instructions></app-binomial-instructions>
    <app-file-selector></app-file-selector>
      <transition enter-active-class="animated fadeIn"
                  leave-active-class="animated fadeOut"
                  mode="out-in">
      <section class="section" v-if="files.length === 2">
        <div class="columns">
          <div class="column" v-for="(file, index) of files" :key="file.name">
            <label class="label">{{ file.name }}</label>
            <paper-audio-player class="blue"
                                title="" 
                                :src="getSrc(file)"
                                :id="getAudioPlayerId(index)"
                                @playing="pauseAllAudioPlayersButOne(index)"></paper-audio-player>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="field">
              <label class="label">Sample size (number of repetitions)</label>
              <div class="select">
                <select v-model="sampleSize" class="has-background-grey-dark has-text-light">
                  <option v-for="sampleSizeOption of sampleSizeOptions" :key="sampleSizeOption" :value="sampleSizeOption">
                    {{ sampleSizeOption }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="column start-button-column">
            <button class="button is-info start-button" @click="startTest()">Start!</button>
          </div>
        </div>
      </section>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-mixin-decorator';
import { AudioPlayerGroup } from '@/mixins/AudioPlayerGroup';
import { getModule } from 'vuex-module-decorators';
import Blindtest from '@/store/blindtest';
import Binomial from '@/store/binomial';
import AppFileSelector from '@/components/FileSelector.vue';
import AppBinomialInstructions from './BinomialInstructions.vue';
import { SampleSize } from '@/helpers/PValues';

@Component({
  components: { AppFileSelector, AppBinomialInstructions }
})
export default class BinomialConfiguration extends Mixins<AudioPlayerGroup>(AudioPlayerGroup) {
  private blindtestStore = getModule(Blindtest, this.$store);
  private binomialStore = getModule(Binomial, this.$store);
  private sampleSizeOptions: SampleSize[] = ['10', '15', '20', '25'];
  private sampleSize: SampleSize = this.sampleSizeOptions[0];
  protected get numberOfAudioPlayers() {
    return this.files.length;
  }

  private startTest() {
    this.binomialStore.initializeTest({
      files: [...this.blindtestStore.files],
      typedSampleSize: this.sampleSize
    });
  }
  private get files() {
    return this.blindtestStore.files;
  }
}
</script>

<style lang="scss" scoped>
.section {
  padding-top: 0;
  padding-bottom: 0.5rem;
}
.label {
  font-weight: inherit;
}
paper-audio-player {
  width: 100%;
}
.select select {
  border: 0px;
}
.select select option {
  color: whitesmoke;
}
.start-button-column {
  display: flex;
}
.start-button-column .start-button {
  align-self: flex-end;
}
</style>

