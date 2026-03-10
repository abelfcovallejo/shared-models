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
2. Agregar export del nuevo modelo en index.ts (si aplica)
3. Compilar los cambios: `npm run build`
4. Hacer commit a todos los cambios: `git add . && git commit -m "Descripción de cambios"`  
5. Ejecutar: `npm version patch` (esto aumenta automáticamente la versión en package.json y hace commit)
6. Push del tag de versión a GitHub: `git push origin v1.x.x` (reemplazar con la versión correcta)
7. Push de todos los cambios a GitHub: `git push origin main` 
8. Publicar los cambios: `npm publish`

Para que las aplicaciones obtengan la actualización:
- Instalar versión específica: `npm install @abelfcovallejo/shared-models@1.x.x`
- Actualizar a la última versión: `npm update @abelfcovallejo/shared-models`