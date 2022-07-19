---
title: Automatizando los test de accesibilidad de tu código fuente con GitHub Actions
description: Automatizar tus test de accesibilidad con librerías como axe, pa11y, lighthouse, o test unitarios directamente en tu repositorio de GitHub es realmente fácil con GitHub Actions.
locale: es
image: intro.png
imageAlt: Una imagen decorativa con la frase "Automatizando los test de accesibilidad de tu código fuente con GitHub Actions"
alternate: /blog/accessibility-github-actions
publishedAt: "2021-02-22"
tags:
  - Accessibilidad
  - Testing
---

## GitHub Actions

Las **[GitHub Actions](https://docs.github.com/es/actions)** permiten automatizar, personalizar y ejecutar flujos de trabajo de desarrollo de software directamente en tu repositorio de GitHub.
Las GitHub Actions te permiten ejecutar una serie de sentencias y comandos después de que un evento específico haya ocurrido, en pocas palabras, es tu propio _pipeline CI/CD_ directamente en tu repositorio.

### Flujos de trabajo

Github define un **[flujo de trabajo](https://docs.github.com/es/actions/reference/workflow-syntax-for-github-actions)** como un proceso automatizado configurable formado por uno o más tareas.
La configuración de flujo de trabajo para definir eventos, tareas, y pasos a ejecutar en las GitHub Actions se definen mediante archivos YAML que deberán estar alojados en la carpeta `.github/workflows`.

## Usando GitHub Actions para automatizar test de accesibilidad

Ya que hemos visto qué son las GitHub Actions, vamos a ver cómo podemos usarlas para testear la accesibilidad de nuestro código fuente alojado en GitHub.

He creado una aplicación de ejemplo en React con un pequeño componente de imagen y algunos errores de accesibilidad. Puedes ver el código en el **[repositorio del proyecto](https://github.com/bolonio/a11y-github-actions)** en mi perfil de Github.

Lo primero es definir cuándo queremos que la GitHub Action se ejecute. Podemos configurarla para que se ejecute inmediatamente después de cada _push_ a cualquiera de nuestras ramas (incluyendo la principal _main_).

```yaml
name: example
on: [push]
jobs: ...
```

o podemos configurarla para que se ejecute en cualquier _Pull Request_ a nuestra rama principal _main_.

```yaml
name: example
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs: ...
```

En mi repositorio de ejemplo he decidido configurar todas las Github Actions para que se ejecuten en cualquier _Pull Request_ a la rama principal _main_.
Una vez decidido cuándo ejecutar la GitHub Action, nos toca establecer qué eventos, tareas, y pasos ejectuar.

### Test unitarios

En mi primera GitHub Action quiero ejecutar mis test unitarios cuando cree o actualice una _Pull Request_.
Escribir tus propios tests unitarios es la mejor manera de encontrar errores y vulnerabilidades en tu código, y si utilizas [jest](https://jestjs.io/), puedes crear tus propios tests unitarios de accesibilidad con **[jest-axe](https://github.com/nickcolley/jest-axe)**, una herramienta de la familia de herramientas [axe](https://www.deque.com/axe/).

```bash
$ npm install jest-axe --save-dev
```

```ts
import React from "react"
import App from "./App"
import { render } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"

expect.extend(toHaveNoViolations)

it("should not have any accessibility violations", async () => {
  const { container } = render(<App />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

Una vez creados los test unitarios, ya puedo crear mi flujo de trabajo en mi GitHub Action.
Por suerte, GitHub te ofrece un montón de plantillas al crear una nueva GitHub Action, y he usado la [plantilla del flujo de trabajo de Node.js](https://github.com/actions/starter-workflows/blob/main/ci/node.js.yml), a la cual he borrado comentarios y he reducido el uso de versión de Node.js para usar solamente la _12.x_, que después usaré en todas mis GitHub Actions. Así quedaría la versión final de mi flujo de trabajo:

```yaml
name: unit-tests
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js 12.x
        uses: actions/setup-node@v1
        with:
          node-version: 12.x
      - run: npm ci
      - run: npm run build --if-present
      - run: npm test
```

Ahora solo me queda probarla. Una vez creada mi _Pull Request_, mi GitHub Action empezará a ejecutarse y el resultado aparecerá directamente al final de mi _Pull Request_.
Puedes verlo en esta [_Pull Request_](https://github.com/bolonio/a11y-github-actions/pull/1).

![Una captura de pantalla de las GitHub Actions que se ejecutan en una Pull Request en GitHub. Se ve cómo la GitHub Action de unit tests ha fallado debido a las vulnerabilidades de accessibilidad.](/images/blog/accesibilidad-github-actions/GitHubAction1.png)

Podremos acceder a los detalles de la GitHub Action y ver los resultados de mis test unitarios, para poder resolver las vulnerabilidades de accesibilidad que tengo en mi código.

![Una captura de pantalla de los detalles de una GitHub Action que se ejecuta en una Pull Request en GitHub](/images/blog/accesibilidad-github-actions/GitHubAction1.1.png)

### axe

**[axe](https://www.deque.com/axe/)** es una familia de herramientas creadas por [Deque](https://www.deque.com/axe/), la cual incluye una interfaz de línea de comandos (CLI), [@axe-core/cli](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/cli), que ejecuta el motor de busqueda de vulnerabilidades de accesibilidad axe, y que podemos usar desde una terminal.
En mi siguiente GitHub Action quiero ejecutar esa CLI en cada _Pull Request_.

Hay que tener en cuenta que @axe-core/cli es una herramienta informativa, y que solo ejecuta test de accesibilidad y muestra los resultados en pantalla.
Para conseguir que la ejecución de dichos test provoquen un error en la ejecución debemos añadir la opción `--exit` al comando axe.

Así quedaría la versión final de mi flujo de trabajo:

```yaml
name: axe
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs:
  axe:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js 12.x
        uses: actions/setup-node@v1
        with:
          node-version: 12.x
      - run: npm ci
      - run: npm run build --if-present
      - run: npm start & npx wait-on http://localhost:3000
      - name: Run axe
        run: |
          npm install -g @axe-core/cli
          axe http://localhost:3000 --exit
```

Como hemos visto en la GitHub Action anterior en la _Pull Request_ previamente creada, al actualizarla con un _commit_ nuevo, las dos GitHub Actions se ejecutarán de nuevo.
Puedes verlo en esta [_Pull Request_](https://github.com/bolonio/a11y-github-actions/pull/1).

![Una captura de pantalla de las GitHub Actions que se ejecutan en una Pull Request en GitHub. Se ve cómo la GitHub Action de axe ha fallado debido a las vulnerabilidades de accessibilidad.](/images/blog/accesibilidad-github-actions/GitHubAction2.png)

Y siempre podemos inspeccionar los detalles de cada GitHub Action para conocer las vulnerabilidades de accesibilidad que han provocado el error en la ejecución.

![Una captura de pantalla de los detalles de una GitHub Action que se ejecuta en una Pull Request en GitHub](/images/blog/accesibilidad-github-actions/GitHubAction2.1.png)

#### axe-linter

GitHub ofrece también una librería de aplicaciones, las cuales podemos instalar directamente en nuestro repositorio de código, y que permiten ejecutar diversas tareas y eventos similares a las GitHub Actions.
Una de ellas es **[axe-linter](https://axe-linter.deque.com/)** y la puedes encontrar directamente en [marketplace de GitHub](https://github.com/marketplace/axe-linter).
Simplemente tienes que instalarla en tu repositorio gratuitamente, y estará lista para ser usada. Esta aplicación, al igual que las GitHub Actions, se ejecutará en cada _Pull Request_ y buscará vulnerabilidades de accesibilidad.

La diferencia que he visto en comparación con mi propia GitHub Action es el tipo de vulnerabilidades que encuentra, ya que axe-linter solo puede encontrar esas vulnerabilidades en código HTML escrito por ti, y no en el HTML generado por mi aplicación de React como lo hace @axe-core/cli. Igualmente, creo que es una aplicación super útil para determinar si tu código es accesible, así que la mantendré en mi repositorio de ejemplo para que puedas ver cómo funciona.
Al igual que con las GitHub Actions, y una vez que actualice mi _Pull Request_ (en este caso he añadido un error de HTML explicito en mi código), se ejecutará junto con las otras GitHub Actions.
Puedes verlo en esta [_Pull Request_](https://github.com/bolonio/a11y-github-actions/pull/1).

![Una captura de pantalla de la aplicación axe-linter en GitHub con una vunerabilidad de accesibilidad". Se ve cómo la GitHub Action de axe-linter ha fallado debido a las vulnerabilidades de accessibilidad.](/images/blog/accesibilidad-github-actions/GitHubAction3.png)

Como siempre, podemos ver los resultados de los test, esta vez agrupados por vulnerabilidad.

![Una captura de pantalla de los detalles de la aplicación axe-linter que se ejecuta en una Pull Request en GitHub"](/images/blog/accesibilidad-github-actions/GitHubAction3.1.png)

### pa11y

Al igual que axe, existen otras herramientas y aplicaciones muy parecidas e igualmente válidas para el testeo de accesibilidad web.
Otra de ellas es **[pa11y](https://github.com/pa11y/pa11y)**, una herramienta de interfaz de línea de comandos (CLI), que podrás usar desde tu terminal.
En este caso, a diferencia con axe, no es solo una herramienta informativa y provocará un error en la ejecución si encuentra vulnerabilidades en tu código.
Usando como base mi anterior flujo de trabajo, así quedaría la versión final:

```yaml
name: pa11y
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs:
  pa11y:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js 12.x
        uses: actions/setup-node@v1
        with:
          node-version: 12.x
      - run: npm ci
      - run: npm run build --if-present
      - run: npm start & npx wait-on http://localhost:3000
      - name: Run pa11y
        run: |
          npm install -g pa11y
          pa11y http://localhost:3000
```

Como ya hemos visto antes, en cada actualización de mi _Pull Request_, se ejecutarán todas mis GitHub Actions, incluyendo también mi aplicación de axe-linter.
Puedes verlo en esta [_Pull Request_](https://github.com/bolonio/a11y-github-actions/pull/1).

![Una captura de pantalla de las GitHub Actions que se ejecutan en una Pull Request en GitHub. Se ve cómo la GitHub Action de pa11y ha fallado debido a las vulnerabilidades de accessibilidad.](/images/blog/accesibilidad-github-actions/GitHubAction4.png)

Y al igual que en las anteriores, podrás acceder a los detalles del test directamente desde la _Pull Request_.

![Una captura de pantalla de los detalles de una GitHub Action que se ejecuta en una Pull Request en GitHub](/images/blog/accesibilidad-github-actions/GitHubAction4.1.png)

## Bloqueando el _merge_ de una _Pull Request_ si tiene vulnerabilidades de accesibilidad

Después de crear todas mis GitHub Actions, y en cada creación o actualización de cualquier _Pull Request_, mi código será testeado en busca de vulnerabilidades de accesibilidad, pero todos esos test de momento son informativos, y aún tengo la opción final de hacer _merge_ de mi _Pull Request_, cosa que no queremos que suceda.

Para desactivar el botón para hacer _merge_ de cualquier _Pull Request_ que tenga vulnerabilidades de accesibilidad tendrás que crear una nueva regla de protección de ramas en tu repositorio.
Accede al menú **Settings** en la pestaña superior de tu repositorio y después en las opciones de **Branches** en el menú izquierdo.
Deberás poner un asterisco `*` en el campo **_Branch name pattern_** y activar la opción **_Require status checks to pass before merging_**. Solo te queda guardar los cambios pulsando el botón _Save Changes_.

![Una captura de pantalla de la configuración de reglas de protección de ramas en GitHub"](/images/blog/accesibilidad-github-actions/BlockMerge.png)

Si vuelves a tu _Pull Request_, podrás ver que el botón _Merge pull request_ está desactivado y no se puede hacer _merge_ hasta que no se resuelvan las vulnerabilidades de accesibilidad y todas las GitHub Actions tengan resultados satisfactorios.
Así tu aplicación estará protegida de aceptar cualquier código no accesible.

Nota adicional: Si eres **propietario** del repositorio podrás comprobar que siempre podrás hacer _merge_ de las _Pull Requests_. La protección será efectiva para los contribuidores.

## Usando GitHub Actions para automatizar informes con Lighthouse

Hemos visto cómo crear GitHub Actions que provocan errores si encuentran vulnerabilidades de accesibilidad en tu código, pero me gustaría enseñarte una GitHub Action para generar informes.
**[Lighthouse](https://github.com/GoogleChrome/lighthouse-ci)** es una herramienta creada por Google, y está incluida en las herramientas de desarrollo del navegador Google Chrome, pero también puede ser ejecutada desde la terminal.
Esta herramienta genera informes de performance, accesibilidad, progressive web apps, SEO y más.

Usando la [plantilla de flujo de trabajo de Lighthouse](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/getting-started.md#configure-lighthouse-ci) he creado una nueva GitHub Action para generar informes en cada _Pull Request_.

### Lighthouse

```yaml
name: Lighthouse
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs:
  lhci:
    name: Lighthouse
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js 12.x
        uses: actions/setup-node@v1
        with:
          node-version: 12.x
      - name: npm install, build
        run: |
          npm install
          npm run build
      - name: run Lighthouse CI
        run: |
          npm install -g @lhci/cli@0.7.x
          lhci autorun
```

Lighthouse genera informes HTML, y necesita alojarlos en algún servidor. Si tu repositorio es público, puedes configurarlo para que los aloje en un servidor de alojamiento temporal.
Tendrás que crear un nuevo archivo en la raíz de tu proyecto llamado `lighthouserc.js` con el siguiente contenido.
Si quieres alojar los informes de manera privada, puedes leer como hacerlo en la [documentación oficial de Lighthouse](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md).

```js
module.exports = {
  ci: {
    upload: {
      target: "temporary-public-storage",
    },
  },
}
```

Una vez actualizada mi _Pull Request_, se ejecutará junto a las otras GitHub Actions.
Puedes verlo en esta [_Pull Request_](https://github.com/bolonio/a11y-github-actions/pull/1).

![Una captura de pantalla de las GitHub Actions que se ejecutan en una Pull Request en GitHub. Se ve cómo la GitHub Action de lighthouse no ha fallado por ser una herramienta informativa.](/images/blog/accesibilidad-github-actions/GitHubAction5.png)

Verás que Lighthouse tiene un _tick_ verde, y no una cruz roja, ya que es una herramienta informativa y no fallará si tu código tiene errores.
Si inspeccionas los detalles de ejecución de la GitHub Action, y al haber configurado el alojamiento de los informes de manera pública, aparece un link al informe generado.

![Una captura de pantalla de los detalles de una GitHub Action que se ejecuta en una Pull Request en GitHub](/images/blog/accesibilidad-github-actions/GitHubAction5.1.png)

Simplemente necesitas acceder a ese informe y usarlo para generar estadísticas, archivarlo para ver la evolución de tu sitio web, o para obtener más información de posibles vulnerabilidades de accesibilidad, performance, progressive web apps, SEO y más.

![Una captura de pantalla de un informe generado por la GitHub Action Lighthouse"](/images/blog/accesibilidad-github-actions/GitHubAction5.2.png)

## Conclusión

Después de todos estos pasos, mi repositorio está configurado para que mis GitHub Actions se ejecuten cuando cree o actualice cualquier _Pull Request_ a mi rama principal _main_, incluyendo la aplicación de axe-linter.
Si cualquiera de las GitHub Actions encontrara una vulnerabilidad de accesibilidad, mi _Pull Request_ se bloquearía para hacer _merge_ y tendría que revisar mi código para resolver esos errores.
Así mi aplicación estará protegida de aceptar cualquier código no accesible.

Puedes ver el código en el [repositorio del proyecto](https://github.com/bolonio/a11y-github-actions) en mi perfil de Github, y la ejecución y detalles de las Github Actions en esta [_Pull Request_](https://github.com/bolonio/a11y-github-actions/pull/1).

Te recomiendo que pruebes a crear tus propias GitHub Actions o que uses las que he creado yo si te parecen útiles.

Si quieres seguir aprendiendo acerca de accesibilidad web, puedes seguirme en [mi cuenta de twitter](https://twitter.com/bolonio), y sobretodo no dudes en [contactarme](/es/about) o mencionarme si tienes cualquier pregunta o duda.
