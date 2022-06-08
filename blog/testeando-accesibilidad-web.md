---
title: Testeando Accesibilidad Web
description: La accesibilidad web no se trata solo de navegación por teclado, contraste de color, o lectores de pantalla. La accesibilidad es un indicador perfecto de la calidad de un sitio web. Cuando un sitio web es accesible, generalmente significa que es inclusivo, usable, ofrece una excelente experiencia de usuario para todos, y además es rápido.
locale: es
image: intro.png
imageAlt: Imagen decorativa con dos capturas de pantalla y el titulo del articulo, "Testeando Accesibilidad Web"
publishedAt: "2020-10-13"
tags:
  - Accesibilidad
  - Testing
---

> Este artículo fue originalmente publicado en [Octuweb](https://octuweb.com/testeando-accesibilidad-web/) el 13 Octubre de 2020.

¿Por qué es tan obvio en el mundo real que estas cuatro rampas son completamente inaccesibles?.
Es muy probable que estas rampas fueron construidas por personas sin discapacidades, o quizás nadie pensó en el usuario. Incluso podríamos pensar que ni siquiera se realizaron tests básicos de usabilidad, durante la fase de diseño, ni en la fase de construcción.
Pero espero que estéis de acuerdo conmigo en que parece claro y obvio, que una persona discapacitada tendré series problemas a la hora de usar cualquiera de esas rampas “accesibles”.

![Cuatro fotos de rampas que deberían ser accesibles y no lo son](/images/blog/testeando-accesibilidad-web/ramps.jpeg)

Pero, ¿cómo podríamos trasladar esta realidad al mundo online?. A diferencia de los ejemplos anteriores, la mayoría de nosotros, usuarios sin discapacidad visual, tendríamos dificultades en identificar si un sitio web es accesible o no.

Vamos a verlo mejor con un ejemplo. Imagina que visitas tu tienda online favorita, y llamas a atención al cliente porque no encuentras tus últimas compras, o quizás quieres cambiar tu dirección de correo.
Una respuesta típica podría ser “debe hacer clic en el botón en la esquina superior derecha”, o “debe hacer clic en el botón con el icono de un sobre”.
El problema es que para una persona con discapacidad visual, por ejemplo ciega, no existe la esquina superior derecha o el botón con el icono de un sobre. Situaciones como ésta son las que tenemos que tener en cuenta cuando desarrollemos un sitio web.

Según las cifras de la Organización Mundial de la Salud (OMS), se estima que, a nivel mundial, aproximadamente 1300 millones de personas viven con alguna forma de deficiencia de la visión de lejos o de cerca.
Con respecto a la visión de lejos, 188,5 millones de personas tienen una deficiencia visual moderada, 217 millones tienen una deficiencia visual de moderada a grave y 36 millones son ciegas.

Cuando creamos un nuevo sitio web, a menudo ponemos mucho esfuerzo y trabajo en su diseño, pero solemos olvidarnos del usuario.
No creamos sitios web para nosotros o para nuestra empresa, los creamos para nuestros usuarios, para seres humanos reales.
Creamos sitios web que puedan ser utilizados por el mayor número de personas posible, pero caemos en un error analizando el tipo de usuario que usará nuestro sitio, cuando deberíamos crear productos más accesibles e inclusivos, independientemente de quién lo use, incluidas esos 1300 millones de personas viven con alguna forma de deficiencia de la visión.

La accesibilidad web no se trata solo de navegación por teclado, contraste de color, o lectores de pantalla. La accesibilidad es un indicador perfecto de la calidad de un sitio web. La accesibilidad está fuertemente entrelazada con otras áreas del diseño y desarrollo web.
Cuando un sitio web es accesible, generalmente significa que es inclusivo, usable, ofrece una excelente experiencia de usuario para todos, y además es rápido.

Nuestro papel como desarrolladores es crear interfaces claras para que las personas entiendan y se preocupen por los datos, independientemente de sus discapacidades o impedimentos,
pero a menudo olvidamos asegurarnos de que el código que escribimos siga las "Web Content Accessibility Guidelines" (WCAG), y la única forma de lograrlo es mediante tests, ya sea manuales o automatizados.

Los tests automatizados de accesibilidad web pueden liberar a nuestro equipo de QA de los tests manuales de cada parte de nuestra aplicación, pero, no pueden hacer que nuestro sitio sea accesible de forma automática y mágica.
Deberíamos considerar los tests automatizados de accesibilidad web como un paso dentro de un proceso de testeo mayor. No podemos olvidar que solo el 20-50% de los problemas de accesibilidad pueden ser detectados mediante tests automatizados.

Aquí tienes mis consejos a la hora de testear una aplicación o sitio web en busca de vulnerabilidades de accesibilidad web.

## Testea mientras desarrollas

Herramientas como [react-axe](https://github.com/dequelabs/react-axe), que forma parte de una familia más grande de herramientas desarrolladas por [Dequelabs](https://www.deque.com/axe/),
son muy útiles para encontrar posibles vulnerabilidades de accesibilidad en tu código.

```bash
$ npm install react-axe --save-dev
```

Asegurate de importar la librería solo si no estás en producción, porque expondrías todas esas vulnerabilidades publicamente.

```js
if (process.env.NODE_ENV !== "production") {
  var axe = require("react-axe")
  axe(React, ReactDOM, 1000)
}
```

Esta herramienta ejecutará tests de accesibilidad en el código de tu aplicación React utilizando la biblioteca de pruebas axe-core,
y podrás ver los resultados en la consola de las herramientas de desarrollo del navegador.
Se asignará un nivel de gravedad para cada vulnerabilidad, se mostrará la descripción del problema, el elemento HTML en el que se encontró la vulnerabilidad y un enlace a la [dequeuniversity](https://dequeuniversity.com/),
una fuente de documentación completa con información detallada sobre el problema y los pasos para resolverlo.

## Usa las herramientas de desarrollo del navegador

Otra gran herramienta que deberías usar es el "color picker" de Google Chrome. Si inspeccionas un elemento en tu sitio web y haces click en el cuadro de color delante del código HEX de color en el inspecto de CSS aparecerá una ventana flotante con información de ese color.
Verás la puntuación del ratio de contraste de ese color con el fondo donde esté colocado (texto, botón, ...etc) y podrás ver si pasa los tests AA y AAA de ratio de color.
Además podrás ver qué colores pasan el test mirando las lineas que aparecen en la palete de colores.

![Una ventana flotante con información de un color utilizado en una propiedad CSS. La ventana da información del ratio de contraste de ese color con el fondo donde esté colocado"](/images/blog/testeando-accesibilidad-web/colorpicker.png)

## Usa linters

Un linter es una herramienta que analiza el código fuente para encontrar posibles errores, problemas de sintaxis, y vulnerabilidades.
Si utilizas eslinter en tu aplicación, puedes incluir reglas de accesibilidad añadiendo [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) a tu aplicación.

```bash
$ npm install eslint-plugin-jsx-a11y --save-dev
```

```json
{
    "plugins": ["jsx-a11y"],
    "extends": ["plugin:jsx-a11y/recommended"],
    "rules": {
        ...
    }
}
```

## Escribe tus propios tests unitarios con jest

Tendemos a olvidar que escribir tests unitarios es parte del proceso de desarrollo y no un proceso posterior.
Escribir tus propios tests unitarios automatizados es la mejor manera de encontrar errores y vulnerabilidades en tu código.
Si utilizas [jest](https://jestjs.io/), puedes crear tus propios tests unitarios de accesibilidad con [jest-axe](https://github.com/nickcolley/jest-axe), una herramienta de la familia de herramientas axe.

```bash
$ npm install jest-axe --save-dev
```

```js
import { axe, toHaveNoViolations } from "jest-axe"
import React from "react"
import ReactDOMServer from "react-dom/server"
import App from "./App"

expect.extend(toHaveNoViolations)

it("should demonstrate this matcher`s usage with react", async () => {
  const html = ReactDOMServer.renderToString(<App />)
  const results = await axe(html)
  expect(results).toHaveNoViolations()
})
```

## Incluye tests automatizados en tu proceso de integración continua (CI/CD)

Si utilizadas un proceso de integración continua (CI/CD), deberías incluir no solo tus tests unitarios, sino tests completos de accesibilidad.
Así podrás detectar las vulnerabilidades que pasaste por alto durante el proceso de crear y lanzar tu sitio web a producción, evitando lanzar código con errores y un sitio no accesible.
Además, podrás utilizar los resultados de estos tests automatizados para crear informes para tu equipo de producto y desarrollo.

Aquí tienes tres herramientas para generar tests automatizados de accesibilidad:

- [@axe-core/cli](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/cli)
- [pa11y](http://pa11y.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse/)

```bash
$ npm install @axe-core/cli -g
$ npm install pa11y -g
$ npm install lighthouse -g
```

Después de instalarlas en tu máquina, puedes ejecutarlas en la terminal con a URL del sitio web que quieras testear.

```bash
$ axe http://www.adrianbolonio.com

$ pa11y http://www.adrianbolonio.com

$ lighthouse http://www.adrianbolonio.com
```

Son my parecidas entre ellas, así que mi recomendación es que juegues con todas, y que uses las que mejor te convenga en cada momento, incluso puedes usar las tres juntas.

## Haz tests manuales y de simulación

Como dije anteriormente, no podemos olvidar que solo el 20-50% de los problemas de accesibilidad pueden ser detectados mediante tests automatizados, por lo que debemos considerar los tests automatizados de accesibilidad web como un paso dentro de un proceso de testeo mayor donde los tests manuales son tan importantes como los tests automatizados.

Las extensiones de navegador que uso a diario son:

- [axe - Web Accessibility Testing](https://www.deque.com/axe/devtools/)
- [IBM Equal Access Accessibility Checker](https://www.ibm.com/able/)
- [ARC Toolkit](https://www.paciellogroup.com/toolkit/)
- [Tota11y: Accessibility visualization toolkit](https://khan.github.io/tota11y/)
- [Accessibility Insights](https://accessibilityinsights.io/docs/en/web/overview)
- [WAVE - Web Accessibility Evaluation Tool](https://wave.webaim.org/extension/)
- [NoCoffee - Vision Simulator](https://accessgarage.wordpress.com/)
- [Funkify](https://www.funkify.org)
- [Totally Automated Accessibility Scanner](https://github.com/Skeletonxf/totally-automated-a11y-scanner)

Además de usar extensiones de navegador, te recomiendo usar el lector de pantalla que viene pre-instalado en tu sistema operativo (Voiceover en Mac, Narrator en Windows, y Orca en Linux).

## La accesibilidad web no es una "funcionalidad"

![Una cita en inglés que dice "La accesibilidad web no es una funcionalidad"](/images/blog/testeando-accesibilidad-web/frase.png)

Tenemos que entender que la responsabilidad de crear sitios web accesibles no pertenece solamente a los desarrolladores o testers, sino a todo el equipo, incluidos jefes de proyecto o diseñadores de interfaz y experiencia del usuario (UX/UI)

**La accesibilidad web no es una “funcionalidad”, porque ninguna discapacidad es una elección.**

Me gustaría dejarte con una frase, que en mi opinión representa los valores de accesibilidad que los desarrolladores deberíamos tener.

> "No se trata solo de que los usuarios discapacitados puedan acceder a tu sitio web, se trata de que todos puedan acceder a tu sitio web".
>
> “It’s not just about disabled users being able to access your website, it’s about everyone being able to access your website.”
>
> Trenton Moss, Owner of Webcredible Consultancy Firm, UK

You can read about testing web accessibility in english in my article ["Testing Web Accessibility"](/en/testing-web-accessibility-part-1)
