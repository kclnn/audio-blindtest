import Vue from 'vue';
import Vuex, { MutationTree, ActionTree } from 'vuex';
import blindtest from './blindtest';
import binomial from './binomial';

export interface RootState {
  version: string;
}

const rootState: RootState = {
  version: '0.1'
};

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: rootState,
  modules: {
    blindtest,
    binomial
  },
  strict: process.env.NODE_ENV !== 'production'
});
