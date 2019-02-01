<template>
  <div class="has-text-centered">
    <h1>{{ binomialStore.testFiles[0].name }} <span class="has-text-link vs">vs</span> {{ binomialStore.testFiles[1].name }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import Binomial from '@/store/binomial';

@Component
export default class BinomialVsHeader extends Vue {
  private binomialStore = getModule(Binomial, this.$store);
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 110%;
  .vs {
    padding: 0 0.5rem;
  }
}
</style>

