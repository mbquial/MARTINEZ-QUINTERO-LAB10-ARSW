### Escuela Colombiana de Ingeniería
### Arquitecturas de Software - ARSW

## Escalamiento en Azure con Maquinas Virtuales, Sacale Sets y Service Plans

**Creación del Funtion App**
Debido a la antigüedad de las imágenes presentadas, fue necesario realizar unos cuantos cambios, dentros de los cuales están:

- La versión 12 del Node.js ya no se encontraba entre las opciones ofrecidas por Azure, por lo tanto, se usó la 20 TLS
- La región "East US 2" no permitía la creación del Function App, por lo tanto, se usó "Central US"

Al aplicar esos pequeños cambios y seguir la guia ofrecida en el repositorio, se creó el Function App con los siguientes detalles:

![Preview de los detalles del Function App](/images/crearFunctionApp.png)

---

**Azure Functions en VSCode y despliegue de la Function App**
Luego de instalar la extensión de Azure Functions, se realizó el despliegue de la función a Azure tal cual como mostraba la guia. Aunque, fue necesario modificar el host.json para que usará una versión compatible con el runtime v4 que usa la Function App.

![Evidencia del despliegue exitoso de la función VSCode](/images/despliegue.png)
(Imagen que evidencia el despliegue exitoso de la función dentro de VSCode)

![Evidencia del despliegue exitoso de la función Azure](/images/despliegueAzure.png)
(Imagen que evidencia el despliegue exitoso de la función dentro de Azure)

---

**Preguntas**

* ¿Qué es un Azure Function?
* ¿Qué es serverless?
* ¿Qué es el runtime y que implica seleccionarlo al momento de crear el Function App?
* ¿Por qué es necesario crear un Storage Account de la mano de un Function App?
* ¿Cuáles son los tipos de planes para un Function App?, ¿En qué se diferencias?, mencione ventajas y desventajas de cada uno de ellos.
* ¿Por qué la memoization falla o no funciona de forma correcta?
* ¿Cómo funciona el sistema de facturación de las Function App?
* Informe
