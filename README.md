# Mi Proyecto: API REST librería

Se trata de una API REST de una librería realizada con React, Node y Express.js.


## Requisitos
- Node.js 12.0.0 o superior

- npm 6.14.4 o superior

## Instalación
Para instalar el proyecto, sigue los siguientes pasos:

Clona este repositorio en tu máquina local:
```bash

git clone https://github.com/samuelrayo/prueba-tecnica-OnyxSoft
```
Navega hasta el directorio del proyecto e instala las dependencias del proyecto
```bash
npm install
```
## Uso
Para iniciar el servidor de desarrollo del lado del front (React), ejecuta el siguiente comando:

```bash
npm run dev
```
Esto abrirá una pestaña en tu navegador predeterminado en http://localhost:5173/ y comenzará a funcionar.


Para iniciar el servidor de Node con Express.js, ejecuta el siguiente comando en la raíz del directorio.

```
node --watch app.js
```
Aunque todavía esta funcionalidad de Node está experimental, es muy estable.

Si decides puedes usar el paquete de `Nodemon`que también nos ayuda para mantener el servidor activo recargandose en cada cambio.

Esto abrirá un puerto predeterminado en http://localhost:4001/

Para que lea los datos, añádele a la URL, al final, el endpoint /books:
- http://localhost:4001/books

- Puedes cambiar los puertos :)


## Funcionamiento
La aplicación consta de dos partes:

**Frontend:**

El Frontend se encarga de renderizar los datos del booksList.json en el que está almacenado todos la información de los libros, simulando una base de datos, esto se hace junto a Node, muestra la funcionalidad completa de una forma visual y más agradable, es muy intuitivo.

Usé únicamente React.js (Instalándolo con ViteJS), útilizando únicamente estilos CSS vanilla, pensando a futuro en implementar TailwindCSS.

- Para mejorar la modularización del código, utilicé sus diferentes hooks de React, lo que permitió mantener un mejor orden y estructura en el proyecto

**Backend:**

Tú puedes ejecutar las sentencias sin necesidad de web, usando el archivo  `api.http` que se encuentra en la raíz e indicando el método HTTP a usar, con su respectiva información.

Puedes ejecutar estas acciones http  desde cualquier cliente REST como Postman, Thunder Client o hasta en el mismo  navegador.

Aunque lo más recomendado es usar algún cliente REST.

Para recuperar los datos, usa 

 **Recuperar todos los libros**
```
GET http://localhost:4001/books
```

 **Crear un nuevo libro**
```
POST http://localhost:4001/books
```
Añadiendole el ripo de contenido: 
```
Content-Type: application/json
```
Y el cuerpo del JSON con sus campos "title", "author", "year", "genre", "image"

**Actualizar  información de un libro**
```
PATCH  http://localhost:4001/books/f47ac10b-58cc-4372-a567-0e02b2c3d479
Content-Type: application/json

{
    "title": "El silencio",
    "year": 2017
}
```
En este caso para actualizar información de un libro en específico ,se le debe añadir el prefijo id

Yo usé la arquitectura MVC (Modelo, Vista, Controlador) para separar mejor la lógica de negocio y la validación de datos la realicé con la librería Zod que permite gran escalabilidad.


En Node, Para leer archivos json de forma nativa todavía no está disponible, por lo que creé utilidades para esta funcionalidad de manera eficiente y poder usarlas sin mayor problema a la hora de realizar sus acciones.

#### El proyecto fue realizado enfatizando lo mejor posible el clean code y principio de responsabilidad única, en el que se realizó bajo restricciones de tiempo, por lo que aún se puede modularizar más.



## Contacto
Si tienes alguna pregunta o comentario sobre este proyecto, por favor no dudes en contactarme.
