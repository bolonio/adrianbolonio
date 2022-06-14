---
title: Cómo testear la accesibilidad de tus componentes con Storybook
description: Crear sitios accesibles no es difícil si usas las herramientas adecuadas para testear la accesibilidad de tus componentes, y Storybook es una de ellas.
locale: es
image: intro.png
imageAlt: una imagen decorativa con la frase "Como testear la accesibilidad de tus componentes con Storybook"
publishedAt: "2021-02-13"
alternate: /blog/accessibility-with-storybook
tags:
  - Accesibilidad
  - Storybook
---

## Storybook

**[Storybook](https://storybook.js.org/)** es una librería de código abierto que permite desarrollar y documentar tus componentes en un entorno aislado, sin tener que tener en cuenta las posibles dependencias que tendrías si desarrollaras esos componentes directamente en tu aplicación.

Puedes ver el código en el [repositorio del proyecto](https://github.com/bolonio/a11y-storybook) en mi perfil de Github.

Para ir más rápido y agilizar el proceso, he usado **[create-react-app](https://github.com/facebook/create-react-app)**, una herramienta para generar rápidamente una nueva aplicación de página única, _single-page application_ en inglés.
Desde hace ya bastante tiempo intento trabajar solo con Typescript, así que he preferido usar esa configuración al crear la aplicación.

```bash
$ npx create-react-app a11y-storybook --template typescript
```

Después de haber creado mi aplicación, que me servirá de librería de componentes, el siguiente paso es añadir Storybook al proyecto. Para ello usaré la _Storybook CLI_ para instalarlo en un solo comando.

```bash
$ npx sb init
```

Este comando instalará todas las dependencias necesarias, añadirá a mi archivo package.json los scripts necesarios para ejecutar Storybook, creará una configuración predeterminada para Storybook en la carpeta oculta `./.storybook`, y añadirá algunos components de prueba como ejemplos. Puedes encontrar esos componentes en la carpeta `./src/stories`. Una vez todo haya sido instalado y configurado, puedo ejecutar Storybook.

```bash
$ npm run storybook
```

Una nueva instancia de tu navegador predefinido se abrirá y podrás ver Storybook con los componentes de prueba añadidos durante la instalación.

Puedes leer más acerca de todo este proceso en la [documentación oficial de Storybook](https://storybook.js.org/docs/react/get-started/install)

## Creando componentes

Los componentes de prueba están muy bien para ver ejemplos, pero yo quiero crear mis propios componentes para testearlos, así que lo que he hecho es borrar todo ese contenido de prueba y he creado varios componentes con errores de accesibilidad para comprobar si Storybook puede encontrar las vulnerabilidades de accesibilidad que he incluido en ellos. He creado los siguientes componentes y sus stories respectivas:

- `ColorContrast.tsx` Un componente con errores de constraste de color
- `CustomRole.tsx` Un componente con un _role_ que no existe
- `HeadingOrder.tsx` Un componente con errores de orden de elementos de título
- `NoAltImage.tsx` Un componente con una imagen sin texto alternativo
- `NoTextButton.tsx` Un componente con un botón sin texto dentro
- `TabIndex.tsx` Un componente con un _tabindex_ mayor que cero

Vamos a ver cómo podemos testear la accesibilidad de los componentes con Storybook

## Accessibility addon

Lo primero que tengo que hacer es añadir a mi proyecto el [addon-a11y](https://github.com/storybookjs/storybook/tree/next/addons/a11y)

```bash
$ npm install @storybook/addon-a11y --save-dev
```

Después lo añado a la lista _addons_ en el archivo `./.storybook/main.js`

```js
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-a11y",
  ],
}
```

Con estos dos pasos tendremos añadido el addon-a11y en nuestro proyecto y podremos ver los resultados cuando ejecutemos Storybook

```bash
$ npm run storybook
```

## Testeando accesibilidad en Storybook

El addon de accesibilidad de Storybook utiliza el **[motor de accesibilidad de Axe](https://www.deque.com/axe/)** desarrollado por [Deque Systems](https://www.deque.com).

Al ejecutar Storybook verás que junto al panel de _Controls_ y _Actions_ aparecer ahora el panel _Accessibility_.
Si accedes a este panel, verás el resultado de los tests organizados en tres pestañas.
En la primera pestaña, _violations_, se mostrará un listado de las vulnerabilidades de accesibilidad encontradas en el componente.
Cada elemento de esa lista se puede expandir y mostrar más información acerca de la vulnerabilidad, grado de gravedad, ...etc, así como un link a la documentación recopilada por Deque en su [Dequeuniversity](https://dequeuniversity.com/rules/axe/4.1/color-contrast?application=axeAPI) para que puedas leer más acerca de la vulnerabilidad, la regla violada, y como arreglarla.

En la segunda pestaña, _passes_, se mostrará una lista de las reglas que Axe considera que han pasado los tests satisfactoriamente, y en la tercera pestaña, _incomplete_, verás una lista de lo que Axe define como reglas incompletas.
Es decir, que no han pasado los tests satisfactoriamente, pero que no puede decir si realmente han fallado. En este caso, Axe provee más información para que tú, como desarrollador, decidas cómo reaccionar ante esas reglas.

![Una captura de pantalla de el addon "addon-a11y" de Storybook mostrando vulnerabilidades en un component de React](/images/blog/accesibilidad-con-storybook/a11y-addon.png)

A la derecha del panel podrás activar una casilla, _highlight results_ , para que Storybook destaque en la pantalla los elementos que estén violando las reglas de accesibilidad.
Se usarán tres colores diferentes para cada uno de los paneles: verde para tests pasados satisfactoriamente, rojo para las vulnerabilidades, y amarillo para las incompletas.

![Una captura de pantalla de el addon "addon-a11y" de Storybook mostrando vulnerabilidades en un component de React, el cual está destacado y punteado en la pantalla](/images/blog/accesibilidad-con-storybook/button.png)

## Emulando alteraciones visuales en Storybook

El addon de accesibilidad de Storybook no solo puede ser usado para mostrar los tests ejecutados por el motor de accesibilidad de Axe, sino que también incluye un **emulador de alteraciones visuales**.
Las opciones son: Visión borrosa, Protanopia, Protanomaly, Deuteranopia, Deuteranomaly, Tritanopia, Tritanomaly, Achromatopsia, Achromatomaly, y Mono.

![Una captura de pantalla de el addon "addon-a11y" de Storybook mostrando el emulador de alteraciones visual](/images/blog/accesibilidad-con-storybook/emulator.png)

He añadido un componente adicional, `ColorImage.tsx`, que muestra una imagen con varios colores para probar este emulador.
Emulando diferentes alteraciones visuales podrás entender mejor cuándo usar los diferentes colores y entender que no es recomendable depender solamente de colores, por ejemplo en estados de error en formularios.

![Una captura de pantalla de el addon "addon-a11y" de Storybook mostrando el emulador de alteraciones visual y la diferencia de colores entre una imagen normal y una imagen vista por alguien con Tritanopia](/images/blog/accesibilidad-con-storybook/colors.png)

## Conclusión

Como has podido comprobar, Storybook no solo es una herramienta para documentar tus componentes en un entorno aislado, también te permite testear la accesibilidad de tus componentes antes de utilizarlos en tu aplicación.

El proyecto y los componentes usados en este artículo han sido desarrollados en React, pero Storybook tiene soporte para muchos más frameworks como Vue, Angular, Web Components, React Native...etc.
Puedes aprender más en la [página web oficial de Storybook](https://storybook.js.org/). Puedes ver el código en el [repositorio del proyecto](https://github.com/bolonio/a11y-storybook) en mi perfil de Github.

Si quieres seguir aprendiendo acerca de accesibilidad web, puedes seguirme en [mi cuenta de twitter](https://twitter.com/bolonio), y sobretodo no dudes en [contactarme](/es/about) o mencionarme si tienes cualquier pregunta o duda.
