## Escuela Colombiana de Ingeniería
## Arquitecturas de Software - ARSW

### Nikolas Martinez Rivera
### María Belén Quintero

## Escalamiento en Azure con Maquinas Virtuales, Sacale Sets y Service Plans

---

### **Creación del Funtion App**
Debido a la antigüedad de las imágenes presentadas, fue necesario realizar unos cuantos cambios, dentros de los cuales están:

- La versión 12 del Node.js ya no se encontraba entre las opciones ofrecidas por Azure, por lo tanto, se usó la 20 TLS
- La región "East US 2" no permitía la creación del Function App, por lo tanto, se usó "Central US"

Al aplicar esos pequeños cambios y seguir la guia ofrecida en el repositorio, se creó el Function App con los siguientes detalles:

![Preview de los detalles del Function App](/images/crearFunctionApp.png)

---

### **Azure Functions en VSCode y despliegue de la Function App**

Luego de instalar la extensión de Azure Functions, se realizó el despliegue de la función a Azure tal cual como mostraba la guia. Aunque, fue necesario modificar el host.json para que usará una versión compatible con el runtime v4 que usa la Function App.

![Modificación realizada al host.json](/images/modHost.png)
(Imagen que muestra el cambio realizado al host.json)

![Evidencia del despliegue exitoso de la función VSCode](/images/despliegue.png)
(Imagen que evidencia el despliegue exitoso de la función dentro de VSCode)

![Evidencia del despliegue exitoso de la función Azure](/images/despliegueAzure.png)
(Imagen que evidencia el despliegue exitoso de la función dentro de Azure)

---

### **Pruebas desde Azure**

La prueba usada fue la misma que se encontraba dentro de la guia. Al realizarla se obtuvo un número gigantesco, tal y como se esperaba.

![Prueba en Azure](/images/pruebaAzure.png)

![Resultado prueba en Azure](/images/resultadoAzure.png)

---

### **Pruebas usando Postman y Newman**

Antes de empezar con las pruebas, fue necesario crear una colección en Postman con Newman para poder enviar 10 peticiones concurrentes. En la siguiente imagen se puede observar los detalles de la creación de la colección:

![Colección en POSTMAN](/images/postmanFibonacci.png)

#### **Función Fibonacci (iterativa) - 10 peticiones concurrentes**

Se ejecutaron 10 peticiones concurrentes usando Newman con nth: 1000000. Todos los requests respondieron existosamente con HTTP 200, como se puede observar en la siguiente imagen:

![Prueba de Fibonacci con 10 peticiones](/images/fibonacci10.png)

El sistema respondió todas las peticiones de manera satisfactoria, lo que muestra que el plan Consumption escala automáticamente para poder atender varias solicitudes concurrentes sin necesidad de modificar o configurar algo más. 

La siguiente tabla muestra los resultados obtenidos en la prueba (por si no se alcanzan a observar claramente en la imagen):

| Métrica | Valor |
|---|---|
| Iteraciones ejecutadas | 10 |
| Fallos | 0 |
| Duración total | 2m 14.2s |
| Tiempo promedio de respuesta | 13.3s |
| Tiempo mínimo | 12s |
| Tiempo máximo | 18.5s |

#### **Función FibonacciMemo (con memoización)**

Para esto, se agregó la carpeta FibonacciMemo dentro de FuntionProject. Allí, se encuentra el function.json y el index.js correspondiente a la implementación con memoización.

Al realizar las pruebas de esta versión, los resultados presentados en la siguiente tabla mostraron errores HTTP 500 en todas las pruebas y presentaron tiempos de respuesta variables:

| Prueba | Tiempo promedio | Min | Max |
|---|---|---|---|
| Primera ejecución | 30s | 25s | 36.5s |
| Segunda ejecución | 17.2s | 8.9s | 22.6s |
| Tras ~5 min | 29.3s | 24.3s | 36.7s |

Los errores 500 se deben a que calcular Fibonacci(1000000) de forma recursiva supera el límite de memoria/tiempo de ejecución del contenedor serverless. Por parte de los tiempos, el hecho de que se hayan presentado distintos resultados confirma el comportamiento de cold start, ya que, cuando el contenedor se recicla, la caché se pierda y es necesario recalcular desde cero.

A continuación, se presentan las imágenes tomadas de las pruebas como evidencia del desarrollo:

![Primera prueba de Fibonacci con memoización](/images/memo1.png)
(Primera ejecución con memoización)

![Segunda prueba de Fibonacci con memoización](/images/memo2.png)
(Segunda ejecución con memoización)

![Prueba luego de 5 minutos](/images/memo5.png)
(Luego de pasados 5 minutos usando memoización)

#### **Conclusión**



---

### **Preguntas**

* ¿Qué es un Azure Function?
* ¿Qué es serverless?
* ¿Qué es el runtime y que implica seleccionarlo al momento de crear el Function App?
* ¿Por qué es necesario crear un Storage Account de la mano de un Function App?
* ¿Cuáles son los tipos de planes para un Function App?, ¿En qué se diferencias?, mencione ventajas y desventajas de cada uno de ellos.
* ¿Por qué la memoization falla o no funciona de forma correcta?
* ¿Cómo funciona el sistema de facturación de las Function App?
* Informe
