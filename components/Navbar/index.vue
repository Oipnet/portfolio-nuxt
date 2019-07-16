<template>
    <LazyHydrate when-idle>
        <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div class="navbar-item">OIPNET</div>
            <div class="block md:hidden">
                <button 
                    class="navbar-toggler"
                    @click="toggle"
                >
                    <svg class="" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div :class="open ? 'block': 'hidden'" class="navbar-menu">
                <div class="text-sm lg:flex-grow">
                    <a href="#responsive-header" class="navbar-item">
                        Portfolio
                    </a>
                    <a href="#responsive-header" class="navbar-item">
                        Blog
                    </a>
                    <a href="#responsive-header" class="navbar-item">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    </LazyHydrate>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
    data: () => ({
        open: false
    }),
    components: {
        LazyHydrate
    },
    methods: {
        toggle () {
            this.open = ! this.open
        }
    }
}
</script>

<style lang="scss" scoped>
    .navbar-menu {
        @apply w-full;
    }

    .navbar-toggler {
        @apply flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400;

        &:hover {
            @apply text-white border-white;
        }

        svg {
            @apply fill-current h-3 w-3;
        }
    }

    .navbar-item {
        @apply block mt-4 text-teal-200 mr-4;

        &:hover {
            @apply text-white;
        }
    }

    @screen md {
        .navbar-menu {
            @apply flex items-center w-auto;
        }
        .navbar-item {
            @apply inline-block mt-0;
        }
    }
</style>
