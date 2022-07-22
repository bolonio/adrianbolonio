---
title: Las 5 reglas de ARIA
description: Accessible Rich Internet Applications (ARIA) es un conjunto de atributos que definen formas de hacer que el contenido web y las aplicaciones web (especialmente aquellas desarrolladas con JavaScript) sean más accesibles para personas con discapacidades.
locale: es
image: intro.png
imageAlt: una imagen decorativa con la frase "Las 5 reglas de ARIA"
publishedAt: "2021-02-01"
tags:
  - Accesibilidad
  - aria
---

## ¿Qué es ARIA?

Cuando desarrollamos un nuevo sitio web, no podemos dejar de lado la accesibilidad del sitio, y si hablamos de accesibilidad web, hablamos de ARIA.

[**Accessible Rich Internet Applications (ARIA)**](https://www.w3.org/WAI/standards-guidelines/aria/) es un conjunto de atributos que define formas de hacer que el contenido web y las aplicaciones web (especialmente aquellas desarrolladas con JavaScript) sean más accesibles para personas con discapacidades.

Hay que mencionar que los atributos ARIA **no afectan al contenido o al diseño de tu sitio web**. Solo sirven para hacer el sitio más accesible.

Estos atributos son muy importantes, pero tienen ciertas **reglas** que hay que seguir si queremos que nuestro sitio web sea accesible.

## Regla #1: No uses ARIA, usa un elemento o atributo HTML nativo.

Sí, la primera regla es **no usar ARIA**, siempre y cuando exista un **elemento o atributo HTML nativo** con la semántica y el comportamiento que necesitas.
En lugar de reutilizar un elemento y agregar un rol, estado o propiedad de ARIA para hacerlo accesible, deberás usar los elementos y atributos nativos que ofrece HTML.

Por ejemplo, si necesitas crear un botón que ejecute una acción al ser clicado, deberás usar el elemento `<button>`, ya que HTML ofrece ese elemento nativamente.

```html
<!-- INCORRECTO -->
<div role="button">Click me</div>
```

Los botones HTML son clicables (con teclado y ratón), pueden tener foco, y los lectores de pantalla los reconoce como botones.

```html
<!-- CORRECTO -->
<button>Click me</button>
```

## Regla #2: No cambies la semántica nativa, a menos que realmente lo necesites hacer.

La mayoría de los elementos o atributos HTML tienen una **semántica nativa definida**. No debemos cambiar esa semántica nativa, a menos que realmente sea esencial, por ejemplo, un elemento personalizado, como un título que actúe como pestaña.

```html
<!-- INCORRECTO -->
<h2 role="tab">AREA 1</h2>
```

Los títulos no deberían tener el atributo `role="tab"`. Para eso deberemos usar otro elemento como un `<div>`.

```html
<!-- CORRECTO -->
<div role="tab">
  <h2>AREA 1</h2>
</div>
```

## Regla #3: Todos los controles interactivos de ARIA deben poder utilizarse con el teclado.

Cuando testeamos los controles interactivos en nuestro sitio web, por ejemplo un botón o un campo en un formulario, solemos hacerlo usando el ratón para clicar sobre el botón o para acceder al campo en el formulario, pero olvidamos testear que todos esos controles interactivos se puedan también utilizar **usando el teclado**.
Tenemos que recordar que entre los usuarios de nuestro sitio web se encuentran usuarios con discapacidad visual, y que habitualmente esos usuarios navegarán por nuestro sitio web usando el teclado.
Si alguno de los controles interactivos no es accesible mediante teclado, esos usuarios no podrán clicar en el botón, o introducir datos en el formulario.

## Regla #4: No uses role="presentation" o aria-hidden="true" en elementos que requieran foco.

Si en nuestro sitio web tenemos algún elemento que requieran foco, por ejemplo, botones o campos de un formulario, no deberemos usar los atributos `role="presentation` o `aria-hidden="true"`.

```html
<!-- INCORRECTO -->
<button aria-hidden="true">Click me</button>
```

Si usamos cualquiera de esos atributos en un elemento HTML, ese elemento no podrá tener foco y serán omitidos en una navegación usando el teclado.
Deberemos usar esos atributos para elementos como un gráfico decorativo o iconos, en los que no queremos que el usuario pueda hacer foco.

```html
<!-- CORRECTO -->
<img src="./icon.png" alt="Icono de una papelera" aria-hidden="true" />
```

## Regla #5: Todos los elementos interactivos deben tener un nombre accesible.

Cualquier elemento interactivo de nuestro sitio web, por ejemplo, un botón o un campo en un formulario, solo tendrá un **nombre accesible** si su propiedad de nombre accesible de API de accesibilidad (o equivalente) tiene un valor.

En el caso de un formulario, si queremos añadir una etiqueta a uno de los campos del formulario, podemos pensar que el siguiente ejemplo es suficiente, porque visualmente es correcto.

```html
<html>
  <form>
    ...
    <!-- INCORRECTO -->
    <label>Username</label>
    <input type="text" />
    ...
  </form>
</html>
```

Pero un lector de pantalla no sabrá como relacionar la etiqueta con el campo, ya que no tiene un nombre accesible, y no están relacionadas de ningún modo. En el siguiente ejemplo podemos ver la forma correcta de hacerlo, usando el atributo `id="username"` en el campo y el atributo `for="username"` en la etiqueta. De esta manera estarán relacionadas, y el lector de pantalla podrá identificarlos juntos.

```html
<html>
  <form>
    ...
    <!-- CORRECTO -->
    <label for="username">Username</label>
    <input id="username" type="text" />
    ...
  </form>
</html>
```

Espero que este breve resumen de las reglas de ARIA te ayude en el desarrollo de sitios webs más accesibles.
