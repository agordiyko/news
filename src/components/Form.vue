<template>
    <form 
        @submit.prevent="onSubmit"
        class="w-full mb-10"
    >
        <textarea 
            class="w-full h-40 p-4 mb-4 text-gray-900 outline-none"
            v-model.trim="body" 
            required 
            placeholder="Напишите здесь новость..." 
        />
        <input 
            class="w-full h-4 p-4 mb-4 text-gray-900 outline-none"
            v-model.trim="link" 
            placeholder="Добавьте ссылку..." 
        />
        <button class="bg-cyan-500 py-2 px-4 text-gray-900" type="submit">Добавить запись</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            body: '',
            link: '',
        }
    },
    methods: {
        onSubmit() {
            this.$emit('onSubmit', {
                id: Math.round(Math.random() * 30),
                avatar: `https://avatars.dicebear.com/api/male/${Date.now()}.svg`,
                body: this.body,
                link: this.link,
                likes: 0,
                date: new Date(Date.now()).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})
            });

            //reset
            this.body = '';
            this.link = '';
        }
    }
}
</script>

<style>
    textarea {
        resize: none;
    }
</style>