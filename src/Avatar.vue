<template>
    <svg
        class="avatar"
        :width="size"
        :height="size"
        :viewBox="`0 0 ${size} ${size}`"
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <linearGradient :id="gradientId" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" :stop-color="fromColor" />
                <stop offset="100%" :stop-color="toColor" />
            </linearGradient>
        </defs>
        <rect
            x="0"
            y="0"
            :width="size"
            :height="size"
            :rx="rounded"
            :ry="rounded"
            :fill="`url(#${gradientId})`"
        />
        <text
            v-if="text"
            x="50%"
            y="50%"
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

const props = defineProps({
    token:   { type: String, required: true },
    size:    { type: Number, default: 50 },
    rounded: { type: Number, default: 0 },
    text:    { type: String, default: '' }
})

const fromColor = ref('')
const toColor = ref('')
const gradientId = ref('')

// Convert HSL to Hex
function hslToHex(h, s, l) {
    s /= 100
    l /= 100
    const k = n => (n + h / 30) % 12
    const a = s * Math.min(l, 1 - l)
    const f = n => {
        const color = l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
        return Math.round(255 * color)
            .toString(16)
            .padStart(2, '0')
    }
    return `#${f(0)}${f(8)}${f(4)}`
}

async function hash(str) {
    let sum = 0
    const buffer = await crypto.subtle.digest('SHA-1', new TextEncoder().encode(str))
    for (const n of new Uint8Array(buffer)) sum += n
    return sum
}

watchEffect(async () => {
    const n = await hash(props.token)
    gradientId.value = `grad-${n}`
    const h = n % 360
    fromColor.value = hslToHex(h, 95, 50)
    // Triadic color: +120°
    toColor.value = hslToHex((h + 120) % 360, 95, 50)
})

const fontSize = computed(() =>
    props.text ? (props.size * 0.9) / props.text.length : 0
)
</script>