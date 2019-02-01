<template>
  <div class="container">
    <transition enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOutUp"
                mode="out-in">
      <component :is="binomialComponent"></component>
    </transition>
    <!-- <app-binomial-configuration v-if="!binomialStore.isTestRunning && !binomialStore.isTestFinished"></app-binomial-configuration>
    <app-binomial-test v-if="binomialStore.isTestRunning && !binomialStore.isTestFinished"></app-binomial-test>
    <app-binomial-results v-if="binomialStore.isTestFinished"></app-binomial-results> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppBinomialConfiguration from '@/components/binomial-test/BinomialConfiguration.vue';
import AppBinomialTest from '@/components/binomial-test/BinomialTest.vue';
import AppBinomialResults from '@/components/binomial-test/BinomialResults.vue';
import { getModule } from 'vuex-module-decorators';
import Binomial from '@/store/binomial';

@Component({
  components: {
    AppBinomialConfiguration,
    AppBinomialTest,
    AppBinomialResults
  }
})
export default class BinomialView extends Vue {
  private binomialStore = getModule(Binomial, this.$store);
  private get binomialComponent() {
    const state = this.binomialStore.stateName;
    switch (state) {
      case 'not_started': return 'app-binomial-configuration';
      case 'running'    : return 'app-binomial-test';
      case 'finished'   : return 'app-binomial-results';
    }
  }
}
</script>



<style lang="scss" scoped>

</style>

