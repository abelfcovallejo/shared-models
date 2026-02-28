# shared-models
Repository to keep models to be used on different appications

GitHub instalar un paquete

1. Crear token para usar 
2. En VS abrir terminal y conectarse a GitHub por medio del token npm login --registry=https://npm.pkg.github.com
3. Ejecutar npm run build para generar los cambios en el dist.
3. Publica el paquete , tuve que usar la opción public para poder mostrarlo npm publish --access public
4. En la solución donde se quiere usar el paquete, hay que crear un file .npmrc y poner el token y datos como:
   //npm.pkg.github.com/:\_authToken=ghp\_77fdoRJUk9x0xByBdFf8x6SZJP8yP52EVONX
   @abelfcovallejo:registry=https://npm.pkg.github.com

Instalar
1. Luego ejecutar para instalar el paquete npm install @abelfcovallejo/shared-models

Para actualizar el paquete:
1. Hacer los cambios en el proyecto
2. Compilar los cambios para que se genere los dist files
2. HAcer commit a los cambios
3. ejecutar : npm version patch -> Esto debera aumentar la version en el pakcage.json
4. Commit al package.json
5. Add export of model to index.ts
6. Instalar -> npm install @abelfcovallejo/shared-models
   o Actualizar -> npm update @abelfcovallejo/shared-models
7. Publicar los cambios npm publish