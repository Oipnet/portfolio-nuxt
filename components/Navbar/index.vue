<template>
    <LazyHydrate when-idle>
        <nav class="navbar">
            <div class="navbar-item logo">OIPNET</div>
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
    .navbar {
        @apply flex items-center justify-between flex-wrap bg-white p-6 border-b border-primary;
    }

    .navbar-menu {
        @apply w-full;
    }

    .navbar-toggler {
        @apply flex items-center px-3 py-2 border rounded text-primary border-primary;

        &:hover {
            @apply text-primary-dark border-primary-dark;
            transition: color 0.5s, border-color 0.5s;
        }

        svg {
            @apply fill-current h-3 w-3;
        }
    }

    .logo {
        @apply mt-0;
    }

    .navbar-item {
        @apply block align-middle text-primary mt-4 mr-4 font-bold;

        &:hover {
            @apply text-primary-dark;
            transition: color 0.5s;
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
