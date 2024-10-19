<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link text-white" to="/" exact>Superheros</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white" to="/list-superheros">Liste des superheros</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white" to="/detail">Detail d'un superheros</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white" to="/superpower-matcher">Super Power Matcher</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white" to="/auteur">L'auteur</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Navbar'
});
</script>

<style>
.navbar {
    background-color: #3457A8;
}
.nav-link, .navbar-brand {
    color: white !important;
    font-size: 15px;
}
.nav-link:hover, .navbar-brand:hover {
    color: #ddd !important; 
}
.router-link-active {
    font-weight: bold;
    color: #C4C9D6 !important; /* Color for active page */
}
</style>