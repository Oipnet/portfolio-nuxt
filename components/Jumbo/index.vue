<template>
    <section class="jumbotron">
        <div class="jumbotron-body">
            <h1>Arnaud POINTET - Developpeur web</h1>
            <p>
                Création de site web sur mesure. Expert Laravel / VueJs
            </p>
            <NuxtLink to="/contact" class="">Demander un devis</NuxtLink>
        </div>
        <div class="h-56 lg:h-auto lg:w-1/3 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-br text-center overflow-hidden" style="background-image: url('https://picsum.photos/id/237/500/150')" title="Woman holding a mug">
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .jumbotron {
        @apply max-w-sm w-full;

        & .jumbotron-body {
            @apply w-2/3 border-r border-b border-l border-gray-400 bg-white 
                rounded-b p-4 flex flex-col justify-between leading-normal text-center;

            & h1 {
                @apply text-gray-900 font-bold text-xl mt-4 mb-2;
            }

            & p {
                @apply text-gray-700 text-base;
            }

            & a {
                @apply mb-6 bg-primary text-teal-100 p-2 rounded block mt-4 w-1/3 
                    mx-auto font-bold border-b-2 border-primary-dark;

                &:hover {
                    @apply border-primary bg-primary-dark
                }
            }
        }
    }

    @screen lg {
        .jumbotron {
            @apply max-w-full flex;

            & .jumbotron-body {
                @apply border-r-0 border-primary rounded-b-none rounded-l;
            }
        }
    }
</style>
