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
- Para la arquitectura de la aplicación se ha usado Angular y se ha organizado por componentes.

## 3. Requisitos funcionales
- Listar todos los clubs de lectura en la home, diferenciando entre los que sigue el usuario y los que no sigue. Para esta función se ha decidido añadir un icono en la esquina derecha de cada club que solo se muestra si el club están siendo seguido por el usuario. Además se ha añadido un checkbox "Show only followed clubs" que permite ver solo los clubs seguidos cuando está seleccionada. 

- Permitir a un usuario seguir un club de lectura concreto y reflejarlo en la interfaz. El usuario solo tiene que clickar en la imagen del club y se añadirá el icono de club seguido o se quitará dependendiendo de si estaba o no en la lista.

Como extra se ha añadido una paginación que permite mostrar 4 o 8 resultados por pantalla y un filtrado por nombre que se gestiona en el backend.

![image](https://user-images.githubusercontent.com/51970487/200524778-f15ab829-6127-4d8a-9219-72aac820d2bb.png)

## 4. Apoyos
Angular material para el diseño y la estética
'check-types' para comprobación de tipos

## 5. Posibles mejoras
Algunos puntos que podrían mejorar la experiencia de usuario serían:
- Mostrar los seguidos en una pantalla separada.
- Mejorar la actualizaión del paginado cuando los clubs están filtrados por seguidos.
- Mejorar el comportamiento de carga de las imágenes

## 6. Comentarios generales
En general las complicaciones en la prueba han sido sobretodo gestionar el paginado y el filtrado en el backend, y actualizar acordemente el frontend.

