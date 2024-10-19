<template>
  <div>
    <h1 v-if="superhero" style="margin-top:10px">Détail du super-héros {{ superhero.name }}</h1>
    <div v-if="superhero">
      <h2>{{ superhero.name }}</h2>
      <img :src="superhero.images.md" alt="superhero.image" class="rounded-circle" style="width: 100px;">
      <div v-for="(value, key) in superhero" :key="key">
        <div v-if="typeof value === 'object' && value !== null">
          <h3 style="text-align:left">{{ key }}</h3>
          <ul>
            <li v-for="(subValue, subKey) in value" :key="subKey" style="text-align:left">
              <strong>{{ subKey }}:</strong> {{ subValue }}
            </li>
          </ul>
        </div>
        <div v-else>
          <p style="text-align:left"><strong>{{ key }}:</strong> {{ value }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

export default defineComponent({
  name: 'SuperheroDetail',
  setup() {
    const route = useRoute();
    const superhero = ref(null);

    onMounted(() => {
      const id = route.params.id;
      axios.get(`https://cdn.jsdelivr.net/gh/rtomczak/superhero-api@0.3.0/api/id/${id}.json`)
        .then(response => {
          superhero.value = response.data;
        })
        .catch(error => {
          console.error("There was an error fetching the superhero details:", error);
        });
    });

    return {
      superhero
    };
  }
});
</script>