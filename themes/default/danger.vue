<template>
    <transition>
        <div class="bg-red-400 rounded border border-red-700 flex min-w-[12rem] p-2 max-w-sm">
            <svg width="29px" height="29px" viewBox="-0.5 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" class="self-center min-w-[29px]">
                <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
                <path d="M48 1H0V49H48V1Z" fill="white" fill-opacity="0.01"/>
                <path d="M6 9.25564L24.0086 4L42 9.25564V20.0337C42 31.3622 34.7502 41.4194 24.0026 45.0005C13.2521 41.4195 6 31.36 6 20.0287V9.25564Z" fill="#EA580C" stroke="black" stroke-width="4" stroke-linejoin="round"/>
                <path d="M29.5 18.4081L18.1863 29.7218" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.1863 18.4081L29.5 29.7218" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
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
    name: "defaultDanger",
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