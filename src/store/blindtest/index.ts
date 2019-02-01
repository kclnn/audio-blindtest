import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { PermutationItem } from '@/helpers/Permutations';

export type FileInPermutation = PermutationItem<File>;

@Module({namespaced: true, name: 'blindtest'})
export default class Blindtest extends VuexModule {
  public files: File[] = [];
  public permutedFiles: FileInPermutation[] = [];
  public showFilenames: boolean = false;
  public animationRunning = false;

  @Action public reset() {
    this.context.commit('SET_FILES', []);
    this.context.commit('SET_PERMUTED_FILES', []);
    this.context.commit('SET_SHOW_FILENAMES', false);
  }
  @Action public addFiles(files: File[]) {
    this.context.commit('SET_FILES', this.files.concat(files));
  }
  @Action public removeFile(index: number) {
    this.context.commit('REMOVE_FILE', index);
  }
  @Action public setPermutedFilesAndHideFilenames(permutedFiles: FileInPermutation[]) {
    this.context.commit('SET_PERMUTED_FILES', permutedFiles);
    this.context.commit('SET_SHOW_FILENAMES', false);
  }
  @Action public setShowFilenames(showFilesnames: boolean) {
    this.context.commit('SET_SHOW_FILENAMES', showFilesnames);
  }
  @Action public setAnimationRunning(running: boolean) {
    this.context.commit('SET_ANIMATION_RUNNING', running);
  }

  @Mutation private SET_FILES(files: File[]) {
    this.files = files;
  }
  @Mutation private REMOVE_FILE(index: number) {
    this.files.splice(index, 1);
  }
  @Mutation private SET_PERMUTED_FILES(permutedFiles: FileInPermutation[]) {
    this.permutedFiles = permutedFiles;
  }
  @Mutation private SET_SHOW_FILENAMES(showFilenames: boolean) {
    this.showFilenames = showFilenames;
  }
  @Mutation private SET_ANIMATION_RUNNING(running: boolean) {
    this.animationRunning = running;
  }
}

