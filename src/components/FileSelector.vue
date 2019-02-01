<template>
  <div class="has-text-centered file-selector-container">
    <b-field>
      <b-upload @input="addFiles"
        multiple
        drag-drop
        type="is-info"
        native>
        <div class="section">
          Click to add audio files or drag them here
        </div>
      </b-upload>
    </b-field>
    <table>
      <tbody>
        <tr v-for="(file, index) in blindtestStore.files"
          :key="index">
          <td>
            <div class="tag-container has-background-grey-dark">
              <div class="tag has-background-grey-dark is-medium">
                {{file.name}}
                <button class="delete is-small"
                    type="button"
                    @click="deleteDropFile(index)">
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import Blindtest from '@/store/blindtest';

@Component
export default class FileSelector extends Vue {
  private blindtestStore = getModule(Blindtest, this.$store);

  private get files() {
    return this.blindtestStore.files;
  }
  private addFiles(files: File[]) {
    this.blindtestStore.addFiles(files);
  }
  private deleteDropFile(index: number) {
    this.blindtestStore.removeFile(index);
  }
}
</script>
<style scoped lang="scss">
table {
  margin: 0 auto;
  table-layout: auto;
}
td {
  text-align: right;
  padding: 0.5rem;
}
div.tag-container {
  width: 100%;
}
span.tag {
  display: inline-block;
  padding: 0.5rem;
  width: 100%;
}
.section {
  padding: 0.5rem 0.5rem;
}
.selected-files {
  text-align: right;
  display: inline-block;
}
.selected-files p {
  margin: 0.5rem;
}
.file-selector-container {
  margin: 0.5rem;
}
</style>


