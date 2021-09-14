<template>
    <li>
        <a v-if="isExternalLink"
            target="_blank"
            :href="link.to">{{ link.name }}</a>
        
        <router-link
            v-else
            :to="route"
            v-slot="{ href }"
        >
            <a :href="href">{{ link.name }}</a>
        </router-link>
    </li>
</template>

<script>
export default {

    props: {
        link: {
            type: Object,
            required: true
        }
    },

    computed: {
        isExternalLink(){
            return this.link.to.startsWith('http')
        },

        route() {
            return this.link.id === undefined
                        ? { name: this.link.to }
                        : { name: this.link.to, params: { id: this.link.id } }
        }
    }

}
</script>

<style scoped>
a {
    -moz-transition: background-color .2s ease-in-out;
    -webkit-transition: background-color .2s ease-in-out;
    -ms-transition: background-color .2s ease-in-out;
    transition: background-color .2s ease-in-out;
    position: relative;
    display: block;
    color: #fff;
    text-decoration: none;
    outline: 0;
    font-weight: 600;
    border-radius: 8px;
    color: #fff;
    height: 2.5em;
    line-height: 2.5em;
    padding: 0 1.25em;
}

a:hover {
    color: #fff !important;
	background: #383838;
}

a:active {
    background: #484848;
}

a:active:before {
    content: '';
    display: block;
    position: absolute;
    bottom: -0.6em;
    left: 50%;
    margin-left: -0.75em;
    border-left: solid 0.75em transparent;
    border-right: solid 0.75em transparent;
    border-top: solid 0.6em #282828;
}
</style>