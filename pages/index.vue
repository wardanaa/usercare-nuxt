<template>
    <div>
        <hero
        :title="hero.title"
        :subtitle="hero.subtitle"
        :image="hero.image"
        :button="hero.button"
        />
    </div>
</template>

<script>
import Hero from '~/components/Hero.vue'

export default {
    components: {
        Hero
    },
    data() {
        return {
            hero: {
                title: 'Welcome to my Nuxt.js App',
                subtitle: 'This is the home page',
                image: '~/assets/home.jpg',
                button: {
                    text: 'Read More',
                    link: '/about'
                }
            }
        }
    }
}
</script>