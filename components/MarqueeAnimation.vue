<template>
    <div class="w-full whitespace-nowrap overflow-hidden relative">
        <div class="marquee-animation inline-block flex gap-4">
            <template v-for="(item, index) in items" :key="index">
                <a :href="item.link" target="_blank">
                    <img class="w-16" :src="item.logo" alt="`logo-${item.link}`" />
                </a>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { MarqueeLink } from '~/types/marquee-link';

defineProps<{
    items: MarqueeLink[]
}>();
</script>

<style scoped>
.marquee-animation {
    animation: marquee 25s linear infinite;
}

@keyframes marquee {
    0% {
        /*this needs to be dinamycally set according to parent width*/
        transform: translateX(100vw);
    }

    100% {
        transform: translateX(-100%);
    }
}
</style>
