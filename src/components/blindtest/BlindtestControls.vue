<template>
  <div class="columns is-mobile is-multiline is-centered control-buttons">
    <div v-if="files.length > 0 || permutedFiles.length > 0" class="column is-narrow">
      <button class="button is-danger" @click="reset()">Reset</button>
    </div>
    <div v-if="files.length > 1" class="column is-narrow">
      <button class="button is-info" @click="shuffleAndLoad()">Shuffle and load audio!</button>
    </div>
    <div v-if="permutedFiles.length > 0" class="column is-narrow">
      <button class="button solve-button"
              :class="{'is-primary': showFilenames === false,
                       'has-background-grey-dark': showFilenames === true}"
              :disabled="showFilenames === true" 
              @click="solve()">Solve</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import Blindtest from '@/store/blindtest';
import { Permutations } from '@/helpers/Permutations';

@Component
export default class BlindtestControls extends Vue {
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
  private reset() {
    this.blindtestStore.reset();
  }
  private solve() {
    this.blindtestStore.setShowFilenames(true);
  }
  private shuffleAndLoad() {
    if (this.permutedFiles.length > 0) {
      this.blindtestStore.setAnimationRunning(true);
    }
    this.blindtestStore.setPermutedFilesAndHideFilenames(Permutations.getKeyedPermutation(this.files));
  }
}
</script>

<style lang="scss" scoped>
.control-buttons {
  margin-top: 0.5rem;
}
.solve-button[disabled] {
  cursor: default;
}
</style>

