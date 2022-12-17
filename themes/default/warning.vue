<template>
    <transition>
        <div class="bg-yellow-400 rounded border border-yellow-700 flex min-w-[12rem] p-2 max-w-sm">
            <svg width="29px" height="29px" viewBox="-0.5 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" class="self-center min-w-[29px]">
                <rect fill-opacity="0.01" fill="#FFFFFF" x="0" y="0" width="48" height="48"></rect>
                <path d="M6,8.25564385 L24.008642,3 L42,8.25564385 L42,19.0336798 C42,30.3621834 34.7502223,40.4194233 24.0026245,44.0005035 L24.0026245,44.0005035 C13.2520792,40.4194856 6,30.3599802 6,19.0286999 L6,8.25564385 Z" id="矩形" stroke="#000000"
                      stroke-width="4" fill="#CA8A04" fill-rule="nonzero" stroke-linejoin="round"></path>
            </svg>

            <div class="mr-2">
                <h1>{{ title }}</h1>
                <p>{{ description }}</p>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "defaultWarning",
    props: {
        title: {
            default: null
        },
        description: {
            default: null
        },
    }
}
</script>

<style scoped>
</style>