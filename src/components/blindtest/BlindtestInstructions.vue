<template>
  <section class="section">
    <div class="container content">
      <p>Using this tool, you can compare two or more audio files without seeing their file names. For instance, you can find out if you are able to hear differences between several degrees of audio compression. Or you can find out which reverb effect you like best when you only listen to them without knowing which audio corresponds to which effect.</p>
      <div class="notification has-background-dark" v-if="files.length < 2 && permutedFiles.length === 0 && showFilenames === false">
        Start by selecting two or more audio files (mp3, wav, ...) from your device using the button below.
      </div>
      <div class="notification has-background-dark" v-if="files.length >= 2 && permutedFiles.length === 0 && showFilenames === false">
        Add more audio files or click &ldquo;Shuffle and load audio!&rdquo; to load the audio files in a random order.
      </div>
      <div class="notification has-background-dark" v-if="permutedFiles.length !== 0 && showFilenames === false">
        Listen to the audio files below and try to find out which player plays which audio file. Click &ldquo;Solve&rdquo; to show the file names corresponding to each audio player.
      </div>
      <div class="notification has-background-dark" v-if="showFilenames === true">
        The file names are now shown above each audio player. You can randomize the order again by clicking &ldquo;Shuffle and load audio!&rdquo; or load a different set of files.
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import Blindtest from '@/store/blindtest';
import { Permutations } from '@/helpers/permutations';

@Component
export default class BlindtestInstructions extends Vue {
  private blindtestStore = getModule(Blindtest, this.$store);

  private get files() {
    return this.blindtestStore.files;
  }
  private get permutedFiles() {
    return this.blindtestStore.permutedFiles;
  }
  private get showFilenames() {
    return this.blindtestStore.showFilenames;
  }
}
</script>

<style lang="scss" scoped>
.section {
  padding-top: 0;
  padding-bottom: 0.5rem;
}
</style>

