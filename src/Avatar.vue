<template>
    <svg class="avatarGradient" :width="size" :height="size" :viewBox="`0 0 ${size} ${size}`" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient :id="gradientId" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" :stop-color="fromColor" />
                <stop offset="100%" :stop-color="toColor" />
            </linearGradient>
        </defs>
        <rect
            x="0" y="0"
            :width="size" :height="size"
            :rx="rounded" :ry="rounded"
            :fill="`url(#${gradientId})`"
        />
        <text
            v-if="text"
            x="50%" y="50%"
            dominant-baseline="middle"
            text-anchor="middle"
            fill="#fff"
            font-family="sans-serif"
            :font-size="fontSize"
        >{{ text }}</text>
    </svg>
</template>

<script setup>
import { ref, computed, watchEffect, defineProps } from 'vue'
import tinycolor from 'tinycolor2'

const props = defineProps({
    token:    { type: String, required: true },
    size:     { type: Number, default: 50 },
    rounded:  { type: Number, default: 0 },
    text:     { type: String, default: '' }
})

const fromColor = ref('')
const toColor   = ref('')
const gradientId = ref('')

async function hash(str) {
    let sum = 0;
    const buffer = await crypto.subtle.digest('SHA-1', new TextEncoder().encode(str))
    for (const n of new Uint8Array(buffer)) sum += n;
    return sum;
}

watchEffect(async () => {
    const n = await hash(props.token)
    gradientId.value = `grad-${n}`
    const h = n % 360
    const c1 = tinycolor({ h, s: 0.95, l: 0.5 })
    fromColor.value = c1.toHexString()
    toColor.value   = c1.triad()[1].toHexString()
})

const fontSize = computed(() =>
    props.text ? (props.size * 0.9) / props.text.length : 0
)
</script>