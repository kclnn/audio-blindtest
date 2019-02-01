<template>
  <section class="section">
    <app-binomial-vs-header></app-binomial-vs-header>
    <div class="container has-text-centered">
      <p>You have chosen the correct audio file <strong>{{ correctCount }}</strong> out of <strong>{{ totalCount }}</strong> times.</p>
      <p>The chance that a random guesser would guess correctly at least as often as you did is <strong class="has-text-highlighted">{{ pValueString }}</strong>.</p>
      <template v-if="pValue < 0.05">
        <p>Since {{ pValueString }} &lt; 5%, the null hypothesis that the probablity for you to choose correctly is the same as the probability for you to choose incorrectly can be rejected at the significance level 5%.</p>
        <p>In other words: <strong class="has-text-success">There is significant statistical evidence to support the hypothesis that you are able to distinguish between the two audio files</strong>.</p>
        <p>(That is, if you have done this test only once and have not cheated :) )</p>
      </template>
      <template v-else>
        <p>Since {{ pValueString }} &geq; 5%, the null hypothesis that the probablity for you to choose correctly is the same as the probability for you to choose incorrectly can not be rejected at the significance level 5%.</p>
        <p>In other words: <strong class="has-text-warning">There is no statistical evidence to support the hypothesis that you are able to distinguish between the two audio files</strong>.</p>
      </template>
      <button class="button is-danger resetbutton" @click="binomialStore.reset()">Reset</button>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import { getPValue } from '@/helpers/PValues';
import Binomial from '@/store/binomial';
import AppBinomialVsHeader from './BinomialVsHeader.vue';

@Component({
  components: { AppBinomialVsHeader }
})
export default class BinomialResults extends Vue {
  private binomialStore = getModule(Binomial, this.$store);
  private get correctCount() {
    return this.binomialStore.corrects.filter((b) => b).length;
  }
  private get incorrectCount() {
    return this.totalCount - this.correctCount;
  }
  private get totalCount() {
    return this.binomialStore.corrects.length;
  }
  private get pValue(): number {
    return getPValue(this.binomialStore.typedSampleSize, this.incorrectCount);
  }
  private get pValueString(): string {
    return `${(this.pValue * 100).toFixed(2)}%`;
  }
}
</script>

<style lang="scss" scoped>
.section {
  padding-top: 0;
}
.resetbutton {
  margin-top: 1rem;
}
</style>

