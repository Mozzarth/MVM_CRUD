# Aplicacion backend con un simple crud de un usuario.

## Descripción

Proyecto con un crud para un modelo usuario.

Esta aplicación se encunetra en una arquitectura hexagonal por lo que esta abierta a hacer test de una manera sencilla, para esto puedes utilizar un inyector de dependencias para inyectar repositorios de pruebas a los casos de uso segun el entorno de ejecución.

![imagen de refactoring.guru](https://apiumhub.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-26-at-09.36.50.png "Clean arquitecture")

### Instalar dependencias
> npm i

## Code Runner
>- Nota : Para entornos que no sean producción copie el archivo .env.sample en la rais del proyecto con nombre .env y configure el entorno.

- Dev : Para ejecutar en un entorndo de desarollo ejecutar _`npm run dev`_

## Docker
![imagen de refactoring.guru](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRurvH_XA4_AMkoHuv1hfUVy7Ftt9sYooe2QeEx68pXSa4Eqmgh5XV7zt0MB11hZiu-vHY&usqp=CAU "Clean arquitecture")

Esta es una opción para levanatar una instancia de MySql rapidamente.
Simplemente ejecuta los siguientes comandos.

* docker build -t mvm_crud:0.1.0 .
* docker run --name mvm_crud -p 3306:3306 -d mvm_crud:0.1.0

Nota : recuerde al configurar el entorno, tener en cuenta el archivo Dockerfile y .env que esta en la raiz del proyecto. 