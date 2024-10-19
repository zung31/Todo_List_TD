<template>
  <div id="app" class="container-fluid">
    <h1 class="my-4" style="text-align:left">Superpower Matcher</h1>
    <div class="d-flex mb-4 align-items-center">
      <div class="form-check">
        <label for="intelligence">Intelligence: 
            <input type="range" id="intelligence" v-model="intelligence" min="0" max="100" class="form-range">
            {{ intelligence }}
        </label>
      </div>
    </div>
    <div class="d-flex mb-4 align-items-center">
      <div class="form-check">
        <label for="force">Force: 
            <input type="range" id="force" v-model="force" min="0" max="100" class="form-range">
            {{ force }}
        </label>
      </div>
    </div>
    <div class="d-flex mb-4 align-items-center">
      <div class="form-check">
        <label for="vitesse">Vitesse: 
            <input type="range" id="vitesse" v-model="vitesse" min="0" max="100" class="form-range">
            {{ vitesse }}
        </label>
      </div>
    </div>
    <div class="d-flex mb-4 align-items-center">
      <button class="btn btn-primary mr-2" @click="search">Rechercher</button>
    </div>
    <div v-if="filteredSuperheros.length > 0">
      <h2>Résultats:</h2>
      <ul>
        <li v-for="superhero in filteredSuperheros" :key="superhero.id">{{ superhero.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'SuperpowerMatcher',
  setup() {
    const intelligence = ref(50);
    const force = ref(50);
    const vitesse = ref(50);
    const superheros = ref([]);
    const filteredSuperheros = ref([]);

    const search = () => {
      filteredSuperheros.value = superheros.value.filter(superhero => {
        return superhero.powerstats.intelligence >= intelligence.value &&
               superhero.powerstats.strength >= force.value &&
               superhero.powerstats.speed >= vitesse.value;
      });
    };

    axios.get('https://cdn.jsdelivr.net/gh/rtomczak/superhero-api@0.3.0/api/all.json')
      .then(response => {
        superheros.value = response.data;
      })
      .catch(error => {
        console.error("There was an error fetching the superheros:", error);
      });

    return {
      intelligence,
      force,
      vitesse,
      search,
      filteredSuperheros
    };
  }
});
</script>