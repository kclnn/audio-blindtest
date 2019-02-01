<template>
  <section class="section">
    <div class="container content">
      <p>This test allows you to find out if you are able to hear the difference between two audio files by presenting the two files repeatedly in a random order and asking you to correctly identify them.</p>
      <div class="notification has-background-dark" v-if="files.length !== 2">
        Select exactly two audio files.
      </div>
      <div class="notification has-background-dark" v-if="files.length === 2">
        Choose the number of repetitions and click &ldquo;Start&rdquo;.
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import Blindtest from '@/store/blindtest';
import Binomial from '@/store/binomial';

@Component
export default class BinomialInstructions extends Vue {
  private blindtestStore = getModule(Blindtest, this.$store);
  private binomialStore = getModule(Binomial, this.$store);
  private get files() {
    return this.blindtestStore.files;
  }
}
</script>

<style lang="scss" scoped>
.section {
  padding-top: 0;
}
</style>

