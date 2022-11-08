# CareSystem
Este projecto consiste en realizar una aplicación donde poder registrar horas de cuidados entre un grupo de padres.

## 1. Estructura
```
|
|– src
|   |– app
|      |– app.module.ts
|      |– app.component.ts
|      |– app.component.html
|      |– app.component.scss
|      |- app-routing.module
|      |– care-card
|      |– care-list
|      |– options-bar
|          |– dialogs
|             |– balance-dialog
|             |– new-care-dialog
|             |– new-parent-dialog
|      |– services
|          |– care.service
|          |– parent.service
|      |– models
|          |– care.model
|          |– parent.model
|
```
## 2. Requisitos no funcionales
- Las dependencias del proyecto se han gestionado con npm.
- Para la arquitectura de la aplicación se ha usado Angulary se ha organizado por componentes.
- Las llamadas al API REST se han mockeado usando la herramienta MockApi, que ha servido tanto para mockear las llamadas como para almacenar los resultados de las mismas y datos mock. Para ver la información que contiene la aplicación se puede seguir cualquiera de estos links: https://635fb755ca0fe3c21aa29ef0.mockapi.io/parents o https://635fb755ca0fe3c21aa29ef0.mockapi.io/cares . Para mockear la API REST solo ha sido necesario apuntar a la url facilitada por mockapi y cumplir las restrucciones del swagger proporcionado en las intrucciones. Como se puede ver más abajo actualmente hay 5 padres y 8 cuidados registrados.

![image](https://user-images.githubusercontent.com/51970487/199483967-b462189f-7240-403a-88bd-c9b9ebfe7f5d.png)

## 3. Requisitos funcionales
El diseño que he elegido para la aplicación consiste en una única página en la que se encuentra una barra de opciones con las diferentes funciones de la aplicación.

![image](https://user-images.githubusercontent.com/51970487/199485583-ad2303fa-1651-4ca6-baf5-e251c58badf6.png)

Para mostrar los datos sobre las horas compartidas del grupo de madres y padres he decidido usar una lista con el estilo de tarjetas ordenadas de más reciente a más antigua. 

![image](https://user-images.githubusercontent.com/51970487/199485537-85efa9a9-94b7-401a-bd0d-68450e46b08d.png)

La función de añadir personas al grupo se ha solucionado con un dialog de un único input required

![image](https://user-images.githubusercontent.com/51970487/199485622-c1ef9b95-9fc2-47e5-9a02-d699d198d651.png)

La función de añadir cuidados se muestr también como dialog y en este caso he tomado como decisión mostrar el campo de padre/madre y el de cuidador/a como seleccionables usando como opciones los nombres de padres/madres ya regustrados. Otra decisión que he tomado en este punto es separar la fecha y hora de cara a la interfaz de usuario, y posteriormente unirla en la lógica del frontend cuando se vaya a hacer el guardado. Por otro lado, para duración en minutos he delimitado un mínimo de un min y un máximo de 720 minutos(12 horas). Al igual que en el diálogo anterior el formulario no se puede enviar hasta que no esté todos los datos rellenos correctamente.

![image](https://user-images.githubusercontent.com/51970487/199485754-d9c972d9-7c2a-40e1-94a7-8b846bc8308e.png)

El último requisito funcional hacía mención al balance de tiempo que tienen los usuarios a su favor o en deuda. Siguiendo los dos anteriores puntos he decido integrar esta funcionalidad como un diálogo más y mostrar la opción en la barra superior. 

![image](https://user-images.githubusercontent.com/51970487/199485789-34f91613-97cb-4d06-a8da-4e12730ae6ae.png)

## 4. Apoyos
'check-types' para comprobación de tipos
lodash para cálculos, ordenaciones y agrupaciones
Angular material para el diseño y la estética
ngx-material-timepicker para el seleccionable de la hora

## 5. Comentarios y posibles mejoras
Algunos puntos que faltarían implementar serían:
- El simulador de horas para que todos los padres queden a 0.
- Detalles en los formularios que muestren información sobre los errores(required, min, max, cuidador vs padre...).
- Interfaz de usuario con filtros por padres o cuidadores.
- Paginación en la página principal.

Algunos de los inconvenientes que he encontrado en la prueba ha sido la falta de backend, dado que en él se haría gran parte de la lógica. De hecho en el caso del post de care, a pesar de que en el swagger no se incluye el nombre del progenitor ni el del cuidador, he decidido incluirlo en el body de la llamada, ya que al hacer uso de MockApi si enviaba esa información vacía el resultado no se completaba, otra opción factible hubiera sido hacer el cruce de información ya en el frontend al traer padres y cuidados, sin embargo de esta forma resultaba más limpia, aún duplicando información en el mockeo de datos.

