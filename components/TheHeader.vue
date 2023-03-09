<script setup>

</script>

<template>
    <header class="header">
        <div class="header__logo">
            <img src="~/assets/logo.svg" alt="logo" />
        </div>
        <div class="header__menu">
            <ul class="header__menu-list">
                <li class="header__menu-item">
                    <nuxt-link to="/" class="header__menu-link">Home</nuxt-link>
                </li>
                <li class="header__menu-item">
                    <nuxt-link to="/about" class="header__menu-link">About</nuxt-link>
                </li>
                <li class="header__menu-item">
                    <nuxt-link to="/contact" class="header__menu-link">Contact</nuxt-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    height: 5rem;
    background-color: #333;
    color: #fff;
}
.header__logo {
    width: 5rem;
}
.header__logo img {
    width: 100%;
}
.header__menu {
    display: flex;
    align-items: center;
}
.header__menu-list {
    display: flex;
    align-items: center;
}
.header__menu-item {
    margin: 0 1rem;
}
.header__menu-link {
    color: #fff;
}
</style>