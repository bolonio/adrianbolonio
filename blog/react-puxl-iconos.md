---
title: Creando una librería de React de iconos accesibles de PUXL
description: He creado una librería de React basada en la colección de iconos accesibles de PUXL, una colección de código abierto de más de 300 iconos SVG personalizados por PUXL framework, en la que cada icono tiene un título y una descripción accesible.
locale: es
image: intro.png
imageAlt: una imagen decorativa con el logo de PUXL y una captura de pantalla con varios iconos
publishedAt: "2020-05-25"
alternate: /blog/react-puxl-icons
tags:
  - Accesibilidad
  - React
---

## ¿Qué es PUXL?

Hace unos meses, mientras seguía a algunos expertos en Accesibilidad Web en Twitter y atendía alguna conferencia online, encontré un nuevo framework para desarrollar sitios web más accesibles. Este framework se llama [PUXL Framework](https://puxl.io/).

> "PUXL framework is a free and open-source and eco-friendly library to create front-end Web interfaces. It helps you build accessible and responsive sites with lightweight HTML."
>
> Fuente: sitio web oficial de PUXL Framework

Tuve el placer de conocer a la gente que hay detrás del proyecto, me uní a su canal de Slack, y finalmente decidí echarle un vistazo más a fonto al framework.
Empecé por la [libreria de iconos accessibles PUXL](https://puxl.io/puxl-icons/), una colección de código abierto de más de 300 iconos SVG personalizados por PUXL framework, en la que cada icono tiene un título y una descripción accesible.

Como desarrollador en React, quería poder utilizar esos iconos SVG como componentes de React, así que decidí crear una libreria de React basada en la colección de iconos accesibles de PUXL. Déjame contarte como lo hice.

## ¿Qué necesito para crear y publicar mi librería de React en npm?

Mi intención era publicar mi librería de React en npm, para que quien quisiera pudiera instalarla directamente en su proyecto de React sin necesidad de descargar toda la librería de iconos SVG y crear una nueva carpeta en su proyecto.

Ya he publicado un componente en npm anteriormente ["a simple and minimal React input range component"](https://www.npmjs.com/package/react-component-range), pero hace más de un año de eso, y React y npm han cambiado mucho desde entonces, así que busqué información en internet sobre cómo hacerlo y me encontré una [guía para publicar en npm paquetes de React (en inglés)](https://blog.logrocket.com/the-complete-guide-to-publishing-a-react-package-to-npm/), donde el autor crea una [plantilla de proyecto lista para ser publicada en npm](https://github.com/ovieokeh/npm-react-typescript-template), lo que me facilitó mucho el trabajo.
Por supuesto, si quieres desarrollar una librería de React, tienes que conocer el framework, typescript, y el registro npm. Pero después de todo ésto, ¿cómo continuo?

## ¿Cómo transformo todos los iconos SVG en componentes de React?

Como ya te he dicho, quería evitar descargar toda la librería de iconos SVG y crear una nueva carpeta en su proyecto.
Lo que quería era poder user cada icono individualnente como componente de React.
Además de esto, quería poder pasar propiedades al componente, o al menos tres atributos que son relevantes para un icono SVG: width, height, y fill. Estos atributos me permitirían cambiar el tamaño y color del icono.

Ésta es la estructura original de uno de los iconos SVG. Cada icono tiene su título y su descripción accesible.

```html
<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <!--
    Puxl icons 1.0 - https://puxl.io/puxl-icons
    Created by @MrKanuel, brought by The Puxl Clan with love from Basque Country
    Puxl icons is licensed under the GPL V3 - Copyright © 2019 PUXL
    https://github.com/puxl/puxl-icons/blob/master/LICENSE
  -->
  <g id="accessibility" aria-labelledby="t-accessibility d-accessibility">
    <title id="t-accessibility">Accessibility</title>
    <desc id="d-accessibility">
      A human, standing with arms extended, in a circle
    </desc>
    <path
      d="M16,19.1c0,0,0.4,0,0.7,1L19.1,27.4c0.2,0.5,0.801,0.8,1.301,0.6s0.812-0.8,0.604-1.3L18.6,19.6 C18.2,18.5,18,17.2,18,16v-2.7c0-0.368,0.078-1.394,1.189-1.524c2.474-0.292,4.854-0.766,5.006-0.795 c0.543-0.108,0.894-0.635,0.785-1.176c-0.107-0.542-0.646-0.893-1.176-0.785C23.755,9.029,18.865,10,16,10S8.245,9.029,8.196,9.02 C7.656,8.911,7.127,9.263,7.02,9.804c-0.108,0.542,0.243,1.068,0.784,1.176c0.144,0.029,2.533,0.503,5.007,0.795 C13.922,11.906,14,12.932,14,13.3V16c0,1.2-0.2,2.5-0.6,3.6L11,26.7c-0.2,0.5,0.1,1.1,0.6,1.3s1.1-0.1,1.3-0.6l2.4-7.301 C15.6,19.1,16,19.1,16,19.1z"
    />
    <circle cx="16" cy="7" r="2" />
    <path
      d="M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M16,31C7.8,31,1,24.3,1,16S7.8,1,16,1 s15,6.8,15,15S24.3,31,16,31z"
    />
  </g>
</svg>
```

Puede parecer obvio que no podía crear más de 300 iconos simplemente copiando y pegando el código SVG en archivos .tsx. Necesitaba una forma de automarizar este proceso.
Mi primera idea fue crear un script que leyera el contenido del archivo SVG y lo incluyera en el archivo .tsx, así que empecé usando la librería "fs" de JavaScript para manipular el sistema de archivos. Como era de esperar, fracasé bastante rápido en mi intento, y empecé a buscar otra solución. Estaba seguro de que no podía ser el único en tener esta idea, y rápidamente me acordé que en mi trabajo usabamos una técnica parecida para generar nuestros propios iconos, y allí encontré la solución: SVGR

[SVGR](https://react-svgr.com/) es una librería que transforma archivos SVG en componentes listos para usar. Era una solución perfecta para mi ieda, así que empecé leyendo la documentación y experimentando con la librería. Fué muy facil usarla, solo tenía que instalar SVGR CLI en mi equipo y usarla desde la terminal.

Después de algunos experimentos, acabé escribiendo my propia configuración para el script en my archivo package.json para genera todos los iconos SVG desde una carpeta. Éste fué el resultado:

```json
{
  "scripts": {
    "generate:icons": "svgr -d ./src ./resources/icons"
  }
}
```

Ahora solo tenía que ejecutar el script en mi termnail y todos mi iconos se convertiría en componentes de React.

```bash
$ npm run generate:icons
```

Cuando comprobé el código JavaScript generado me di cuenta de algunos problemas. El primer problema era que el título y la descripción no se habían generado. El segundo problema era que todo los ids tampoco se habían generado. El último problema era que el componente de React se había generado en JavaScript y no en Typescript.

```js
import * as React from "react"

function SvgIconAccessibility(props) {
  return (
    <svg viewBox="0 0 32 32" {...props}>
      <g aria-labelledby="t-accessibility d-accessibility">
        <path d="M16 19.1s.4 0 .7 1l2.4 7.3c.2.5.801.8 1.301.6s.812-.8.604-1.3L18.6 19.6c-.4-1.1-.6-2.4-.6-3.6v-2.7c0-.368.078-1.394 1.189-1.524 2.474-.292 4.854-.766 5.006-.795a.998.998 0 00.785-1.176 1.005 1.005 0 00-1.176-.785c-.049.009-4.939.98-7.804.98s-7.755-.971-7.804-.98a.999.999 0 10-.392 1.96c.144.029 2.533.503 5.007.795C13.922 11.906 14 12.932 14 13.3V16c0 1.2-.2 2.5-.6 3.6L11 26.7c-.2.5.1 1.1.6 1.3s1.1-.1 1.3-.6l2.4-7.301c.3-.999.7-.999.7-.999z" />
        <circle cx={16} cy={7} r={2} />
        <path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm0 31C7.8 31 1 24.3 1 16S7.8 1 16 1s15 6.8 15 15-6.7 15-15 15z" />
      </g>
    </svg>
  )
}

export default SvgIconAccessibility
```

Volví a leer la documentación de SVGR y encontré las propiedades que arreglaban algunos de mis problemas directamente, pero los demás necesitaban un poco más de investigación. Después de leer mucho, me di cuenta de que lo que necesitaba era una configuración [SVGO](https://github.com/svg/svgo) con algunas opciones para incluir y excluir algunas cosas en mi componente final.
Quería mantener el viewbox, el título, y la descripción, además del id, pero SVGR añadía el prefijo `prefix__` para hacerlos únicos. Es una funcionalidad genial, pero los iconos PUXL ya tienen ids únicos, así que quería borrar ese prefijo. Ésta fué mi configuración SVGO final:

```json
{
  "plugins": [
    { "removeTitle": false },
    { "removeViewBox": false },
    { "removeDesc": false },
    { "cleanupIDs": false },
    { "prefixIds": false }
  ]
}
```

Cambié el script para añadir las propiedades `--typescript`, `--svgo-config` con la configuración SVGO, `--icon` para sustituir el valor "width" y "height" por "1em" que me permitiría heredar el tamaño del texto, y ésta fué la versión final del script:

```json
{
  "scripts": {
    "generate:icons": "svgr --icon --typescript --svgo-config ./scripts/svgoConfig.json -d ./src ./resources/icons"
  }
}
```

Ahora solo tenía que ejectutar mi script en la terminal de nuevo:

```bash
$ npm run generate:icons
```

Ésta fue la versión final de mi component con título, descipción, ids, width, height, viewbox, y generado en TypeScript:

```ts
import * as React from "react"

function SvgIconAccessibility(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="accessibility" aria-labelledby="t-accessibility d-accessibility">
        <title id="t-accessibility">{"Accessibility"}</title>
        <desc id="d-accessibility">
          {"A human, standing with arms extended, in a circle"}
        </desc>
        <path d="M16 19.1s.4 0 .7 1l2.4 7.3c.2.5.801.8 1.301.6s.812-.8.604-1.3L18.6 19.6c-.4-1.1-.6-2.4-.6-3.6v-2.7c0-.368.078-1.394 1.189-1.524 2.474-.292 4.854-.766 5.006-.795a.998.998 0 00.785-1.176 1.005 1.005 0 00-1.176-.785c-.049.009-4.939.98-7.804.98s-7.755-.971-7.804-.98a.999.999 0 10-.392 1.96c.144.029 2.533.503 5.007.795C13.922 11.906 14 12.932 14 13.3V16c0 1.2-.2 2.5-.6 3.6L11 26.7c-.2.5.1 1.1.6 1.3s1.1-.1 1.3-.6l2.4-7.301c.3-.999.7-.999.7-.999z" />
        <circle cx={16} cy={7} r={2} />
        <path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm0 31C7.8 31 1 24.3 1 16S7.8 1 16 1s15 6.8 15 15-6.7 15-15 15z" />
      </g>
    </svg>
  )
}

export default SvgIconAccessibility
```

El script podía ahora generar más de 300 componentes de React en mi carpeta ./scr, junto con un archivo .index.tsx con todos los exports.
Siguiendo ésta [guia para publicar un paquete React en npm](https://blog.logrocket.com/the-complete-guide-to-publishing-a-react-package-to-npm/), después de generar mi paquete, probé a usar mi librería en una aplicación de demo creada con create-react-app y usando `yarn link`. Mi paquete estaba listo para ser publicado. Solo quedaba escribir la documentación en el archivo readme y listo.

## ¿Cómo puedo usar la librería de iconos PUXL en mi aplicación React?

La librería está publicada en npm, así que solo tienes que instalarla con npm o yarn.

```bash
$ npm i --save react-puxl-icons
```

```bash
$ yarn add react-puxl-icons
```

Cada icono puede ser importado individualmente en tu aplicación React:

```js
import React from "react"
import { IconAccessibility } from "react-puxl-icons"

export const App = () => (
  <div>
    <IconAccessibility />
  </div>
)
```

Los iconos aceptan todos las propiedades de un SVG como si fuera un element SVG en HTML:

```js
import React from "react"
import { IconAccessibility } from "react-puxl-icons"

export const App = () => (
  <div>
    <IconAccessibility width="3em" height="3em" fill="red" />
    <IconAccessibility width="5em" height="5em" />
    <IconAccessibility width="40px" height="40px" fill="green" />
    <IconAccessibility fill="blue" />
  </div>
)
```

Puedes encontrar mi librería **react-puxl-icons** en [npm](https://www.npmjs.com/package/react-puxl-icons), y el código fuente en [GitHub](https://github.com/bolonio/react-puxl-icons).

Ésto es un proyecto de código abierto, así que si tienes alguna sugerencia de como mejorar éste proyecto, por favor, lee la [guia de colaboración](https://github.com/bolonio/react-puxl-icons/blob/master/CONTRIBUTING.md)
Cualquier colaboración o contribución es bienvenida. Puede reportar un problema o sugerir cambios usando la [página de Issues de Github](https://github.com/bolonio/react-puxl-icons/issues).
