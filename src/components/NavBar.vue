<template>
  <nav class="navbar is-fixed-top" ref="navbar">
    <div class="navbar-brand">
      <div class="navbar-item">Audio Blindtest Tool</div>
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
        <router-link class="navbar-item" :to="{'name': 'home'}" @click.native="isActive = false">
          Blindtest
        </router-link>
        <router-link ref="router-link" class="navbar-item" :to="{'name': 'binomial'}" @click.native="isActive = false">
          Binomial Test
        </router-link>
        <router-link class="navbar-item" :to="{'name': 'help'}" @click.native="isActive = false">
          Help
        </router-link>
      </div>
      <div class="navbar-end">
          <router-link class="navbar-item" :to="{'name': 'about'}" @click.native="isActive = false">
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
  private created() {
    document.addEventListener('click', (event) => {
      // deactivate burger menu when user clicks outside of menu
      if (event.target !== null
      && event.target instanceof Node
      && !(this.$refs.navbar as Element).contains(event.target)) {
        this.isActive = false;
      }
    });
  }
}
</script>
<style lang="scss">
@import '@/style/styles.scss';

a.router-link-exact-active {
  color: $primary;
}
</style>


