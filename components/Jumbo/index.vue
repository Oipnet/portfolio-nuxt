<template>
    <section class="jumbotron">
        <div class="jumbotron-body">
            <h1>Arnaud POINTET - Developpeur web</h1>
            <p>
                Création de site web sur mesure. Expert Laravel / VueJs
            </p>
            <NuxtLink to="/contact" class="">Demander un devis</NuxtLink>
        </div>
        <div class="jumbotron-image" style="background-image: url('https://picsum.photos/id/1003/430/200')" title="Woman holding a mug">
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .jumbotron {
        @apply flex w-full flex-col;

        & .jumbotron-body {
            @apply w-full rounded-b border-r border-b border-l border-primary bg-white 
                p-4 flex flex-col justify-between leading-normal text-center order-last;
            order: 999;

            & h1 {
                @apply text-gray-900 font-bold text-xl mt-4 mb-2;
            }

            & p {
                @apply text-gray-700 text-base;
            }

            & a {
                @apply mb-6 bg-primary text-teal-100 p-2 rounded block mt-4 w-full 
                    mx-auto font-bold border-b-2 border-primary-dark;

                &:hover {
                    @apply bg-primary-dark;
                    transition: background-color 0.5s
                }
            }
        }

        & .jumbotron-image {
            @apply w-full h-56 flex-none bg-cover text-center overflow-hidden order-first;
            order: -1;
        }
    }

    @screen md {
        .jumbotron {
            @apply max-w-full flex flex-row;

            & .jumbotron-body {
                @apply w-2/3 border-r-0 rounded-b-none rounded-l order-first;
                order: -1;

                & a {
                    @apply w-1/2;
                }
            }

            & .jumbotron-image {
                @apply h-auto w-1/3 rounded-t-none rounded-br order-last;
                order: 999;
            }
        }
    }

    @screen lg {
        .jumbotron {
            & .jumbotron-body {
                & a {
                    @apply w-1/3;
                }
            }
        }
    }
</style>
