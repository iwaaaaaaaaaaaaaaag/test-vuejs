<template>
<div>
    <h1>Home(Home.vue)</h1>
    <button @click="toUsers">Usersのページに行く</button>
    <p>{{count}}</p>
</div>
</template>

<script>
export default {
    computed: {
        count(){
            return this.$store.state.count
        }   
    },
    methods: {
        toUsers(){
            this.$router.push('users');
        }
    }
}
</script>