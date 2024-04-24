<template>
    <div class="container">
        <list-calendario :fechas="fechas" @cambioFecha="cambioFecha"></list-calendario>
        <h2 class="mt-5">Sesiones disponibles:</h2>
        <br>
        <div v-for="(fecha, index) in fechas" :key="index">
            <grid-sesiones v-if="fecha == fechaActual"  :sesiones="sesionesPorFechas[fecha]"></grid-sesiones>
        </div>
        <br>
        <br>
    </div>
    
</template>

<script>
    import { ref } from 'vue';
    import ListCalendario from './ListCalendario.vue';
    import GridSesiones from './GridSesiones.vue';

    export default{

        components:{
            ListCalendario,
            GridSesiones
        },
        props:{
            sesiones: {
                type: Object,
                required: true
            }
        },
        data(){
            return{
                sesionesPorFechas: {},
                fechas: [],
                fechaActual: ''
            }
        },
        beforeUpdate(){
            this.sesionesPorFechas = {};
            this.fechas = [];
            this.organizarPorFecha(this.sesiones)
            this.fechas = this.getFechas(this.sesionesPorFechas)
        },
        methods:{
            organizarPorFecha(sesiones){
                for (let i = 0; i < sesiones.length; i++) {
                    const element = sesiones[i];
                    const fechaSinHora = element.start_datetime.split('T')[0];
                    if(!this.sesionesPorFechas[fechaSinHora]){
                        this.sesionesPorFechas[fechaSinHora]=[]
                    }
                    this.sesionesPorFechas[fechaSinHora].push(element);
                }
            },
            getFechas(sesionesPorFechas){
                const array = Object.keys(sesionesPorFechas);
                array.sort((x,y)=>{
                    return (new Date(x) > new Date(y))?1:-1
                })
                return array;
            },
            cambioFecha(nuevaFecha){
                this.fechaActual = nuevaFecha;
            }
        }
    }

</script>