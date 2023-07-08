<template>
    <footer class="bg-stone-700 py-5 mt-6">
        <div class="container flex justify-center items-center">&#169 Все права защищены! {{ fullYear }}г.</div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            fullYear: new Date().getFullYear(),
        }
    }
}

    
</script>