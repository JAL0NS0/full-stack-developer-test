<template>
    <table class="table">
        <thead>
            <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">E-mail</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="estudiante in estudiantes" :key="estudiante.id">
                <th>{{ estudiante.id }}</th>
                <td>{{ estudiante.nombre }}</td>
                <td>{{ estudiante.email }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { onMounted } from 'vue'
export default {
    name: 'ListEstudiantes',

    props: {
        estudiantes:{
            type: Object
        }
    },
}

</script>

<style scoped>

</style>