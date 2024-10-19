<template>
  <div id="app" class="container-fluid">
    <h1 class="my-4" style="text-align:left">Liste des superheros</h1>
    <div class="d-flex mb-4 align-items-center">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="afficherPouvoirs" v-model="afficherPouvoirs" @change="onCheckboxChange">
        <label class="form-check-label ml-2" for="afficherPouvoirs" style="font-size: 16px;">
          Afficher les pouvoirs
        </label>
      </div>
    </div>
    <div class="list-group">
      <router-link :to="'/detail/' + superhero.id" class="list-group-item list-group-item-action d-flex w-100 justify-content-between" v-for="superhero in superheros" :key="superhero.id">
        <h5 class="mb-1">{{ superhero.name }}</h5>
        <img :src="superhero.images.md" alt="superhero.image" class="rounded-circle" style="width: 50px; align-items: center;">
        <small style="font-size: 16px;" v-if="afficherPouvoirs === true">Intelligence: {{ superhero.powerstats.intelligence }}, Strength: {{ superhero.powerstats.strength }}, Speed: {{ superhero.powerstats.speed }}, Durability: {{ superhero.powerstats.durability }}, Power: {{ superhero.powerstats.power }}, Combat: {{ superhero.powerstats.combat }}</small>
        <small style="font-size: 16px;">{{ superhero.id }}</small>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'List',
  setup() {
    const superheros = ref([]);
    const afficherPouvoirs = ref(false);

    const onCheckboxChange = (event: Event) => {
      console.log('Checkbox state:', (event.target as HTMLInputElement).checked);
    };

    onMounted(() => {
      axios.get('https://cdn.jsdelivr.net/gh/rtomczak/superhero-api@0.3.0/api/all.json')
        .then(response => {
          superheros.value = response.data;
        })
        .catch(error => {
          console.error("There was an error fetching the superheros:", error);
        });
    });

    return {
      superheros,
      afficherPouvoirs,
      onCheckboxChange
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