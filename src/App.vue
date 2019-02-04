<template>
  <div id="app">
    <app-nav-bar></app-nav-bar>
    <section class="section">
      <transition enter-active-class="animated super-fast fadeIn"
                  leave-active-class="animated super-fast fadeOut"
                  mode="out-in">
        <router-view/>
      </transition>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppNavBar from '@/components/NavBar.vue';

@Component({
  components: {
    AppNavBar
  }
})
export default class App extends Vue {}
</script>


<style lang="scss">
html {
  overflow-y: auto !important;
}

</style>
