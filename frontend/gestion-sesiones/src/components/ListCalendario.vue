<script>
    import { ref } from 'vue';
    import CardFecha from './CardFecha.vue';

    export default{
        components: {
            CardFecha
        },
        props:{
            fechas: {
                type: Object,
                required: true
            }
        },
        data(){
            return {
                activo: null
            }
        },
        emits:['cambioFecha'],
        methods:{
            activar(index){
                this.activo=index
            }
        }
    }
</script>

<template>
    <div class="m-auto">
        <div id="carouselFechas" class="carousel carousel-dark slide">
            <div class="carousel-inner">
                <template v-if="fechas.length <= 5">
                    <div class="carousel-item active">
                        <div class="card-wrapper container-sm d-flex  justify-content-around">
                            <div v-for="(fecha, index) in fechas" :key="index">
                                <CardFecha :fecha="new Date(fecha+'T00:00:00')"  :activo="(index-1)==activo"  @click="$emit('cambioFecha', fecha), activar(index-1)"></CardFecha>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div class="carousel-item active">
                        <div class="card-wrapper container-sm d-flex  justify-content-around">
                            <div v-for="index in 5" :key="index">
                                <CardFecha :fecha="new Date(fechas[index-1]+'T00:00:00')"  :activo="0==activo"  @click="$emit('cambioFecha', fechas[0]),activar(0)"></CardFecha>
                            </div>
                        </div>
                    </div>
                    
                    <div v-for="subgrupo in Math.floor(fechas.length/5)" :key="subgrupo">
                        <template v-if="(fechas.length-subgrupo*5)>5">
                            <div class="carousel-item">
                                <div class="card-wrapper container-sm d-flex   justify-content-around">
                                    <div v-for="index in 5" :key="index">
                                        <CardFecha :fecha="new Date(fechas[subgrupo*5+index-1]+'T00:00:00')"  :activo="(subgrupo*5+index-1)==activo"  @click="$emit('cambioFecha', fechas[subgrupo*5+index-1]),activar(subgrupo*5+index-1)"></CardFecha>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <div class="carousel-item">
                                <div class="card-wrapper container-sm d-flex   justify-content-around">
                                    <div v-for="index in (fechas.length-subgrupo*5)" :key="index">
                                        <CardFecha :fecha="new Date(fechas[subgrupo*5+index-1]+'T00:00:00')"  :activo="(subgrupo*5+index-1)==activo"  @click="$emit('cambioFecha', fechas[subgrupo*5+index-1]),activar(subgrupo*5+index-1)"></CardFecha>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                    
                </template>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselFechas"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselFechas"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
</template>