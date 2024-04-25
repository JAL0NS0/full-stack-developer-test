<template>
    <RouterLink :to="{name: nombreRetorno}" >
        <button type="button" class="btn btn-outline-dark">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                </svg>
        </button>
    </RouterLink>
</template>
<script>
export default {
    setup() {
        
    },
    props:{
            nombreRetorno: {
                type: String,
                default: 'home'
            }
        },
}
</script>