<template>
    <div>The Index Page</div>
    <div class="border-2 border-red-500">
        <MarqueeAnimation :items="technologyItems" />
    </div>
</template>

<script setup lang="ts">
import type { MarqueeLink } from '~/types/marquee-link';

const technologyItems = [
    {
        link: "https://vuejs.org/",
        logo: "/app/icons/vue.svg"
    },
    {
        link: "https://fastify.dev/",
        logo: "/app/icons/fastify.svg"
    }
] as MarqueeLink[];

</script>