<template>
    <LazyHydrate when-visible>
        <section class="flex mt-12 w-full flex-wrap">
        <div class="w-1/3">
            ICON
        </div>
        <div class="w-2/3">
            <h2 class="text-4xl uppercase w-auto">Mon metier</h2>
            <p class="mt-4">
            Mon metier en plus de vous proposer un outil adapté à votre besoin 
            consiste à vous guider dans la conception de ce dernier.<br />
            Depuis la rédaction du cahier des charges à la réalisation de votre projet en passant par les choix techniques
            je vous accompagne afin de concretiser votre idée.
            </p>
        </div>
        </section>
    </LazyHydrate>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
export default {
    components: {
        LazyHydrate
    }
}
</script>

<style lang="scss" scoped>
    h2 {
        @apply relative;
        &::after {
            content: '';
            @apply absolute border-t-4 border-primary w-16 h-1 bottom-0 left-0 z-10;
        }
        &::before {
            content: '';
            transform: translateY(0.15rem);
            @apply absolute border-b-4 border-primary-dark w-12 h-1 bottom-0 left-0 z-50;
        }
    }
</style>
