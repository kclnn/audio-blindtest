import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { PermutationItem, Permutations } from '@/helpers/Permutations';
import { SampleSize } from '@/helpers/PValues';

export type FileInPermutation = PermutationItem<File>;

@Module({namespaced: true, name: 'binomial'})
export default class Binomial extends VuexModule {
  public testFiles: File[] = [];
  public permutedFiles: FileInPermutation[] = [];
  public typedSampleSize: SampleSize = '10';
  public corrects: boolean[] = [];

  @Action public initializeTest({ files, typedSampleSize }: { files: File[], typedSampleSize?: SampleSize }) {
    this.context.commit('SET_TEST_FILES', files);
    this.context.commit('SET_CORRECTS', []);
    if (typedSampleSize !== undefined) {
      this.context.commit('SET_TYPED_SAMPLE_SIZE', typedSampleSize);
    }
    this.permuteFiles();
  }
  @Action public addSample(correct: boolean) {
    this.context.commit('ADD_CORRECT', correct);
    this.permuteFiles();
  }
  @Action public reset() {
    this.initializeTest({ files: [] });
  }
  @Action private permuteFiles() {
    this.context.commit('SET_PERMUTED_FILES', Permutations.getKeyedPermutation(this.testFiles));
  }

  public get currentSample() {
    return this.corrects.length;
  }
  public get isTestFinished() {
    return this.currentSample === this.sampleSize;
  }
  public get isTestRunning() {
    return !this.isTestFinished && this.testFiles.length !== 0;
  }
  public get stateName(): 'not_started' | 'running' | 'finished' {
    if (!this.isTestRunning && !this.isTestFinished) {
      return 'not_started';
    }
    if (this.isTestRunning && !this.isTestFinished) {
      return 'running';
    }
    return 'finished';
  }
  public get sampleSize() {
    return parseInt(this.typedSampleSize, 10);
  }

  @Mutation private SET_TEST_FILES(files: File[]) {
    this.testFiles = files;
  }
  @Mutation private SET_PERMUTED_FILES(permutedFiles: FileInPermutation[]) {
    this.permutedFiles = permutedFiles;
  }
  @Mutation private SET_TYPED_SAMPLE_SIZE(typedSampleSize: SampleSize) {
    this.typedSampleSize = typedSampleSize;
  }
  @Mutation private SET_CORRECTS(corrects: boolean[]) {
    this.corrects = corrects;
  }
  @Mutation private ADD_CORRECT(correct: boolean) {
    this.corrects.push(correct);
  }
}

