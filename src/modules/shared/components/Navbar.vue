<template>
    <nav>
        <ul class="container">
            <!-- <li><router-link :to="{ name: 'home' }">Pokemon List</router-link></li>
            <li><router-link :to="{ name: 'pokemon-id', params: { id: 77 } }">Pokemon por ID</router-link></li>
            <li><router-link :to="{ name: 'about' }">About</router-link></li> -->
            <CustomLink
                v-for="link in links"
                :key="link.to"
                :link="link"
            />
        </ul>  
    </nav>    
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {

    data() {
        return {
            links: [
                { to: 'pokemon-home', name: 'Pokemons' },
                { to: 'pokemon-id', id: 141, name: 'Detalle por ID' },
                { to: 'pokemon-about', name: 'About' },

                { to: 'dbz-characters', name: 'Personajes' },
                { to: 'dbz-about', name: 'About' },

                { to: 'https://www.google.com.gt/', name: 'Google' },
            ]
        }
    },

    components: {
        CustomLink: defineAsyncComponent( () => import( './CustomLink.vue' ))
    }
}
</script>

<style scoped>

nav {
    background-color: #282828;
    text-align: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 10000;
    cursor: default;
    height: 3.5em;
    line-height: 3.5em;
}

nav ul {
    margin-bottom: 0;
    list-style: none;
    padding-left: 0;
}

nav li {
    display: inline-block;
    padding-left: 0;
}

@media screen and (max-width: 736px) {

    nav {
        height: 44px;
        line-height: 44px;
    }

    nav a {
        padding: 0 0.75em;
        height: inherit;
        line-height: inherit;
        border-radius: 0;
    }

    nav a:hover {
        background-color: transparent;
    }

}

</style>