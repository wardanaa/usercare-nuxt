<template>
    <div>
        <TheHeader />
        <main>
            <slot />
        </main>
        <TheFooter />
    </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
    components: {
        TheHeader,
        TheFooter
    }
}
</script>

<style>

</style>