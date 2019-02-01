<template>
  <label class="label"
               :class="{'visible': showFilenames === true}">
               {{ showFilenames === true ? file.item.name : unsolvedLabel }}</label>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import Blindtest, { FileInPermutation } from '@/store/blindtest';
import { Permutations } from '@/helpers/permutations';

@Component
export default class BlindtestPlayerLabel extends Vue {
  private blindtestStore = getModule(Blindtest, this.$store);

  @Prop() private file!: FileInPermutation;
  private unsolvedLabel = 'Click "Solve" to see file names.';

  private get showFilenames() {
    return this.blindtestStore.showFilenames;
  }
}
</script>



<style lang="scss" scoped>
.label {
  font-weight: inherit;
  opacity: 0;
  transition: 0.5s opacity;
}
.label.visible {
  opacity: 1;
}
</style>

