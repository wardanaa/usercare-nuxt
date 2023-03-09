<template>
    <div class="hero">
        <div class="hero__image">
        <img :src="image" :alt="title" />
        </div>
        <div class="hero__content">
        <h1 class="hero__title">{{ title }}</h1>
        <p class="hero__subtitle">{{ subtitle }}</p>
        <nuxt-link :to="button.link" class="hero__button">{{ button.text }}</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        button: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
.hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
    color: #333;
    text-align: center;
}
.hero__image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}
.hero__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.hero__title {
    font-size: 3rem;
    margin-bottom: 1rem;
}
.hero__subtitle {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}
.hero__button {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #333;
    color: #fff;
    text-decoration: none;
}
</style>