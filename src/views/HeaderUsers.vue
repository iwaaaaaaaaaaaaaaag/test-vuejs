<template>
    <nav>
    <h2>Users</h2>
      <router-link to="/" active-class="link--active" exact>Home</router-link> |
    <router-link id="next-user" :to="{ name: 'users-id-profile', params: { id: 1}, query: { lang:'ja', page:2 }, hash: '#next-user' }">User</router-link>
    </nav>
</template>