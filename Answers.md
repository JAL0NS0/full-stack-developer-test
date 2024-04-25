## ¿Cuánto tiempo dedicó a la prueba de codificación de backend?
    
Dediqué aproximadamente un día y medio a la prueba de codificación de backend
    
## ¿Qué agregarías a tu solución si tuvieras más tiempo?
    
Si tuviera más tiempo, agregaría un CRUD más completo para estudiantes y asignaciones, permitiendo que se listen las sesiones que tenga cada estudiante y pudiendo desasignarse. Además, en la página de asignación mostraría un listado de las personas que ya están actualmente inscritas.

## ¿Cuales fueron los motivos de tu elección de arquitectura para este tipo de aplicación ?

En primer lugar, para el backend opté por Node.js con Express porque me permitía crear un servidor de manera rápida para comenzar a hacer pruebas, además de poder volverse más complejo fácilmente si así se requiere. 

Para el frontend, utilicé Vue.js 3, una tecnología más reciente que estuve probando y resultó muy cómoda para que proyectos pequeños luzcan bien en poco tiempo y de forma sencilla al utilizar los componentes.


## ¿Cómo se pueden gestionar los casos posteriores a la medianoche para que se muestren el mismo día y no el siguiente?

No debería darse el caso, ya que para cada día se muestran las sesiones que se tienen programadas.

## ¿Cuánto tiempo dedicó a la prueba de codificación frontend? ¿Cuáles fueron tus mayores dificultades?

Dediqué 3 días. Principalmente, se me complicó la parte en la que los datos no venían agrupados por fecha, tuve que hacer funciones que lo ordenaran, pero al principio debido a que los datos son asíncronos, se ejecutaba la función con una lista vacía. Después, el diseño, del cual me apoyé de Bootstrap para facilitarlo, pero existen componentes que no son compatibles con la última versión de Bootstrap y tuve que buscar alternativas.

## ¿Cómo localizaría un problema de rendimiento en producción? ¿Alguna vez has tenido que hacer esto?

Nunca he tenido que hacer esto, pero para localizar problemas de rendimiento en producción, pero segun sé se podría utilizar herramientas de monitoreo del rendimiento en tiempo real y pruebas de carga y estrés.

## ¿Cuál fue la característica más útil que se agregó a la última versión del lenguaje elegido? Incluya un fragmento de código que muestre cómo lo ha utilizado.

La característica más útil que se agregó fue la Composition API, ya que muchas partes del código eran más sencillas de programar sin tener que adaptarse a las funciones del ciclo de vida de Vue y pareciéndose más a un código sencillo de JavaScript.

Aquí un fragmento del codigo para obtener los valores de las fechas para el calendario:
```
<script setup>
    const props = defineProps({
        sesion: {
            type: Object,
            required: true
        }
    })
    const inicio = new Date(props.sesion.start_datetime);
    const fin = new Date(props.sesion.end_datetime);
    const cupo = props.sesion.cupo
</script>
```

## ¿Que elementos de seguridad hubiera incluido en su API?
En cuanto a la seguridad de la API, uno de los elementos que habría incluido es la autenticación. Aunque no he tenido la oportunidad de implementarla con frecuencia, conozco bien su valor y su importancia para garantizar que solo los usuarios autorizados puedan acceder a los recursos protegidos de la API