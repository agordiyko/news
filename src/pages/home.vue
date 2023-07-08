<template>
    <div class="wrapper w-full">
        <div>
            <Header />
            <main class="view">
                <div class="container">
                    <h1 class="mb-10 font-bold text-4xl text-white">
                        Главная страница
                    </h1>
                </div>
            </main>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
    components: {
        Header,
        Footer,
    },
    items: [
        {
            id: 1,
            body: 'Hello Vue 3',
            link: 'https://avatars.dicebear.com/api/male/1.svg',
            likes: 12,
            avatar: 'https://avatars.dicebear.com/api/male/1.svg',
            date: new Date(Date.now()).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
            emitentId: 'Gazprom',
        },
        {
            id: 2,
            body: 'Hello World',
            link: 'https://avatars.dicebear.com/api/male/2.svg',
            likes: 6,
            avatar: 'https://avatars.dicebear.com/api/male/2.svg',
            date: new Date(Date.now()).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
            emitentId: 'Lukoil',
        },
        {
            id: 3,
            body: 'Hey, Dude',
            link: 'https://avatars.dicebear.com/api/male/3.svg',
            likes: 4,
            avatar: 'https://avatars.dicebear.com/api/male/3.svg',
            date: new Date(Date.now()).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })
        }
    ],

}

</script>