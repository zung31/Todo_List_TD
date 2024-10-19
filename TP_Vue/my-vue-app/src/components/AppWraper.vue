<template>
  <div id="app" class="container-fluid">
    <h1 class="my-4" style="text-align:left">Superheros</h1>
    <div class="form-group mb-4">
      <input type="text" class="form-control" placeholder="Entrer nom de superhero" v-model="searchQuery">
    </div>
    <div class="d-flex mb-4 align-items-center">
      <button class="btn btn-primary mr-2" @click="resetSearch">Reinitialiser</button>
    </div>
    <div class="d-flex mb-4 align-items-center">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="afficherPouvoirs" v-model="afficherPouvoirs" @change="onCheckboxChange">
        <label class="form-check-label ml-2" for="afficherPouvoirs" style="font-size: 16px;">
          Afficher les pouvoirs
        </label>
      </div>
    </div>
    <div class="list-group">
      <router-link :to="'/detail/' + superhero.id" class="list-group-item list-group-item-action d-flex w-100 justify-content-between" v-for="superhero in filteredSuperheros" :key="superhero.id">
        <h5 class="mb-1">{{ superhero.name }}</h5>
        <img :src="superhero.images.md" alt="superhero.image" class="rounded-circle" style="width: 50px; align-items: center;">
        <small style="font-size: 16px;" v-if="afficherPouvoirs === true">Intelligence: {{ superhero.powerstats.intelligence }}, Strength: {{ superhero.powerstats.strength }}, Speed: {{ superhero.powerstats.speed }}, Durability: {{ superhero.powerstats.durability }}, Power: {{ superhero.powerstats.power }}, Combat: {{ superhero.powerstats.combat }}</small>
        <small style="font-size: 16px;">{{ superhero.id }}</small>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'AppWrapper',
  setup() {
    const superheros = ref([]);
    const afficherPouvoirs = ref(false);
    const searchQuery = ref('');

    const filteredSuperheros = computed(() => {
      return superheros.value.filter(superhero => {
        return superhero.name.toLowerCase().includes(searchQuery.value.toLowerCase());
      });
    });

    const onCheckboxChange = (event: Event) => {
      console.log('Checkbox state:', (event.target as HTMLInputElement).checked);
    };

    const resetSearch = () => {
      searchQuery.value = '';
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
      searchQuery,
      filteredSuperheros,
      onCheckboxChange,
      resetSearch
    };
  }
});
</script>