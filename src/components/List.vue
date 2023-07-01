<template>
    <ul>
        <li v-for="item in items" :key="item.id" class="text-white mb-4">
            <div class="flex w-full">

                <div class="h-10 w-10 mr-4">
                    <img :src="item.avatar" />
                </div>
                <div class="w-full tweet-content">
                    <div class="tweet-header mb-1">
                        <span>{{ item.date }}</span>
                    </div>
                    <div class="flex justify-between">
                        <div class="mb-1">{{ item.body }}</div>
                        <div class="actions">
                            <button @click="changeTitle" class="mr-5">
                                Change title
                            </button>
                            <button @click="removeItem(item.id)">
                                Удалить
                            </button>
                        </div>
                    </div>
                    <div class="w-full flex justify-between">
                        <a href="{{ item.link }}" class="mb-1 flex justify-between">
                            {{ item.link }}
                        </a>
                    </div>
                    <div class="flex items-center">
                        <div class="icon mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <path
                                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                        </div>
                        <span>{{ item.likes }}</span>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
import Item from '@/components/Item.vue'

export default {
    components: {
        Item,
    },
    emits: ['removeItem', 'showItem'],
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            title: 'Ninja test',
        }
    },
    methods: {
        removeItem(id) {
            this.$emit('removeItem', id);
        },
        // removeItem(itemLink){
        //     this.$emit('remove', itemLink)

        // },
        changeTitle() {
            this.$emit('changingTitle', this.item);
        },
        showItem() {
            this.$emit('showItem', 'Hello World!');
        }
    }
}
</script>
  
<style lang="scss"></style>