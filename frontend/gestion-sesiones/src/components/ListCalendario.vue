<script>
    import { ref } from 'vue';
    import CardFecha from './CardFecha.vue';

    export default{
        components: {
            CardFecha
        },
        props:{
            //Listado de fechas para mostrar
            fechas: {
                type: Object,
                required: true
            }
        },
        data(){
            return {
                //index de la fecha actualmente activa
                activo: null
            }
        },
        //Emitir el cambio de Fecha para cambiar el GridSesiones
        emits:['cambioFecha'],
        methods:{
            //cambiar el estado de la CardFecha a activa
            activar(index){
                this.activo=index
            }
        }
    }
</script>

<template>
    <div class="m-auto">
        <div id="carouselFechas" class="carousel carousel-dark slide">
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselFechas" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <!--Carousel para mostrar las fechas disponibles para sesiones en grupos de 5-->
            <div class="carousel-inner">
                <!-- Separamos en los tipos de casos que puede haben en cuanto al numero de fechas-->
                <!--Si son menos de 5 se listan las que hayan-->
                <template v-if="fechas.length <= 5">
                <div class="carousel-item active">
                    <div class="card-wrapper container-sm d-flex  justify-content-center">
                        <div v-for="(fecha, index) in fechas" :key="index">
                            <CardFecha :fecha="new Date(fecha+'T00:00:00')"  :activo="(index-1)==activo"  @click="$emit('cambioFecha', fecha), activar(index-1)"></CardFecha>
                        </div>
                    </div>
                </div>
                </template>

                <template v-else>
                <!-- Si son más se listan las primeras 5-->
                <div class="carousel-item active">
                    <div class="card-wrapper container-sm d-flex  justify-content-center">
                        <div v-for="index in 5" :key="index">
                            <CardFecha :fecha="new Date(fechas[index-1]+'T00:00:00')"  :activo="(index-1)==activo"  @click="$emit('cambioFecha', fechas[index-1]),activar(index-1)"></CardFecha>
                        </div>
                    </div>
                </div>
                
                <!-- Se separa en grupos de 5 -->
                <div v-for="subgrupo in Math.floor(fechas.length/5)" :key="subgrupo">
                    <!-- Mientras haya al menos 5 se imprimen 5--> 
                    <template v-if="(fechas.length-subgrupo*5)>=5">
                    <div class="carousel-item">
                        <div class="card-wrapper container-sm d-flex   justify-content-center">
                            <div v-for="index in 5" :key="index">
                                <CardFecha :fecha="new Date(fechas[subgrupo*5+index-1]+'T00:00:00')"  :activo="(subgrupo*5+index-1)==activo"  @click="$emit('cambioFecha', fechas[subgrupo*5+index-1]),activar(subgrupo*5+index-1)"></CardFecha>
                            </div>
                        </div>
                    </div>
                    </template>
                    <!-- Se imprimen las fechas restantes -->
                    <template v-else>
                    <div class="carousel-item">
                        <div class="card-wrapper container-sm d-flex   justify-content-center">
                            <div v-for="index in (fechas.length-subgrupo*5)" :key="index">
                                <CardFecha :fecha="new Date(fechas[subgrupo*5+index-1]+'T00:00:00')"  :activo="(subgrupo*5+index-1)==activo"  @click="$emit('cambioFecha', fechas[subgrupo*5+index-1]),activar(subgrupo*5+index-1)"></CardFecha>
                            </div>
                        </div>
                    </div>
                    </template>
                </div>                    
                </template>
            </div>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselFechas" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>
        
    </div>
</template>
