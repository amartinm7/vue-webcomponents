# vue-webcomponents
The main point of this example is to be able to create a HTML TAG called x-simple-carousel which manages the creation of simple carousel. Everytime you use the tag a new carousel is created. The application of this technology is so huge. Instead of create a full HTML page with a lot of tags, you can create the whole page using custom webcomponents. These webcomponents can be created on the fly, injected in the DOM tree.
> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

The tricky part:
La carpeta webcomponents contiene los componentes creados con el standard.
hay que crear un fichero html con la mezcla de los componentes en si para que los pueda cargar la pagina html principal.
si ponemos varios link import solo carga el primero y los demas no funcionan bien,
por eso es mejor mezclarlos en un unico archivo html.

  const currentScript = document.currentScript
es el problema principal. solo apunta al primer link import.
o se soluciona la gestion del document currentScript para cada componente o hay que recurrir a lo comentado.
existen soluciones como polymer-bundler para crear un unico html con varios htmls que contienen los componentes.
en mi caso lo hice a mano.

https://github.com/webcomponents/webcomponentsjs

![preview](https://raw.githubusercontent.com/amartinm7/vue-webcomponents/master/screetshot-preview.png)

