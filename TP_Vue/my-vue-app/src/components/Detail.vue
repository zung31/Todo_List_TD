<template>
  <div id="app" class="container-fluid">
    <h1 class="my-4" style="text-align:left">Chercher details de Superheros</h1>
    <div class="form-group mb-4">
      <input type="text" class="form-control" placeholder="Entrer id de superhero" v-model="searchQuery">
    </div>
    <div class="d-flex mb-4 align-items-center">
      <button class="btn btn-primary mr-2" @click="renderToSuperheroDetail">Chercher</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Detail',
  setup() {
    const searchQuery = ref('');
    const router = useRouter();

    const renderToSuperheroDetail = () => {
      if (searchQuery.value) {
        router.push(`/detail/${searchQuery.value}`);
      }
    };

    return {
      searchQuery,
      renderToSuperheroDetail
    };
  }
});
</script>

<style>
#app {
  width: 100%;
  padding: 0 5px;
}
</style>