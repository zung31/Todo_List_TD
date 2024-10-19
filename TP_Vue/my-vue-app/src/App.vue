<template>
  <div id="app" class="container-fluid">
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import Navbar from './components/Navbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar
  }
});
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: block; /* Override flex display */
  place-items: unset; /* Remove centering */
}
#app {
  width: 100%;
  padding: 0;
  position: relative;
}
.container-fluid {
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
</style>