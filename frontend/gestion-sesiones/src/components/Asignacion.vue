<template>
    <div v-if="activo" class="container" id="contenido">
        <div class="row">
            <h2>Curso: {{ sesion.nombre }}</h2>
            <hr>
            <p><b>Fecha Inicio: </b>{{ inicio.toLocaleDateString("es-US",{ weekday:'long', day:'numeric', month:'long' }) }}</p>
            <p><b>Horario:</b>
                {{ inicio.toLocaleTimeString("es-US",{ hour12:false, hour:'numeric', minute:'2-digit' }) }}
                    -
                {{ fin.toLocaleTimeString("es-US",{ hour12:false, hour:'numeric', minute:'2-digit' }) }}
            </p>
            <p> <b>Cupo Disponible:</b>
                {{ sesion.disponible }}
            </p>
        </div>
        <template v-if="sesion.disponible != 0">
            <div class="row">
                <p class="mt-4"><b>Asignar Estudiante:</b></p>
                <drop-down-estudiantes></drop-down-estudiantes>
            </div>
            <div class="row mt-5">
                <button class="btn btn-primary" @click="console.log('Hola')">Asignar</button>
            </div>
        </template>
    </div>
</template>
<script>
import DropDownEstudiantes from './DropDownEstudiantes.vue';

export default {
    components: {
            DropDownEstudiantes
        },
    props:{
        sesion:{
            typeof: Object,
            required: true
        },
        
    },
    name: 'Asignacion',
    data(){
        return {
            inicio: new Date(),
            fin: new Date(),
            activo: false
        }
    },
    beforeUpdate(){
        this.inicio = new Date(this.sesion.start_datetime);
        this.fin = new Date(this.sesion.end_datetime)
        this.activo = true;
    }
}
</script>

<style>
    #contenido{
        font-size: 130%;
        max-width: 60%;
    }
</style>