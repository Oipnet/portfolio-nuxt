<template>
    <div class="chatbox" :class="{ 'opacity-75':  !show }">
        <font-awesome-icon :icon="['fas', 'comment']" class="text-4xl text-primary" @click="connect"/>
        <form class="chatbox-form" v-if="show" @submit.prevent="handleSend">
            <input type="text" placeholder="Votre message" v-model="message"/>
            <button>
                <font-awesome-icon :icon="['fas', 'paper-plane']" class="text-2xl text-primary" />
            </button>
        </form>
        <div class="chatbox-messages" v-if="show">
            <ul v-if="show">
                <li v-for="(message, index) in messages" :key="index" 
                    :class="{ 
                        'chatbox-message-me' : message.author === 'me', 
                        'chatbox-message-you' : message.author !== 'me'
                    }
                ">
                    {{ message.message }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import socket from '~/plugins/socket.io.js'
import { mapGetters, mapActions } from 'vuex'

export default {
    data: () => {
        return {
            show: false,
            message: ''
        }
    },
    methods: {
        ...mapActions({
            send: 'chatbox/send'
        }),
        connect () {
            this.show = ! this.show

            if (this.show && ! this.channel) {
                socket(this.$store).emit('user-connect')
            }
        },
        handleSend() {
            if (this.message.length > 0) {
                const message = {
                    author: 'you',
                    message: this.message,
                    channel: this.channel
                }
                this.send(message)
                socket(this.$store).emit('new-message', message)

                this.message = ''
            }
        }
    },
    computed: {
        ...mapGetters({
            messages: 'chatbox/messages',
            channel: 'chatbox/channel'
        })
    }
}
</script>

<style lang="scss" scoped>
    .chatbox {
        @apply fixed bottom-0 right-0 bg-blue-800 mb-6 mr-6 rounded rounded-full p-2 cursor-pointer;

        & .chatbox-messages {
            @apply fixed bottom-0 right-0 bg-white mb-40 mr-6 border border-primary rounded p-2 max-h-1/2 w-1/4 overflow-y-scroll;

            & li {
                @apply mb-1;
            }
            & .chatbox-message-me {
                @apply bg-blue-800 w-2/3 rounded p-2;
            }

            & .chatbox-message-you {
                @apply bg-red-800 w-2/3 rounded p-2;
            }
        }

        & .chatbox-form {
            @apply fixed bottom-0 right-0 bg-white mb-24 mr-6 border border-primary rounded p-2 w-1/4 flex;

            & input {
                @apply w-full border-b border-primary-dark p-1 w-5/6;

                &:focus {
                    @apply border-primary outline-none;
                }
            }

            & button {
                @apply w-1/6
            }
        }
    }
</style>

