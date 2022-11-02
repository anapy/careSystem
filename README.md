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

## 2. Requisitos no funcionales

## 3. Tecnologías aplicadas
- Angular
- SASS
- Angular Material

## 4. Auxiliares

## 5. Mejoras

