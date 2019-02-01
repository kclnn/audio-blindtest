<template>
  <nav class="navbar is-fixed-top">
    <div class="navbar-brand">
      <router-link class="navbar-item" :to="{'name': 'home'}">
          Blindtest
      </router-link>
      <div
        class="navbar-burger burger"
        :class="{'is-active': isActive}"
        data-target="nyxlNavbar"
        @click="toggleActive">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div
      id="nyxlNavbar"
      class="navbar-menu"
      :class="{'is-active': isActive}">
      <div class="navbar-start">
        <router-link class="navbar-item" :to="{'name': 'binomial'}">
          Binomial Test
        </router-link>
        <router-link class="navbar-item" :to="{'name': 'help'}">
          Help
        </router-link>
      </div>
      <div class="navbar-end">
          <router-link class="navbar-item" :to="{'name': 'about'}">
            About
          </router-link>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {
  private isActive = false;
  private toggleActive() {
    this.isActive = !this.isActive;
  }
}
</script>
<style lang="scss">
@import '@/style/styles.scss';

a.router-link-exact-active {
  color: $primary;
}
</style>


