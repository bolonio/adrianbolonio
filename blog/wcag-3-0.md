---
title: ¿Qué cambios trae el primer borrador de las WCAG 3.0
description: El pasado 21 de enero de 2021 se publicó el primer borrador de las W3C Accessibility Guidelines (WCAG) 3.0, y viene cargadito de cambios con respecto a la versión actual.
locale: es
image: intro.png
imageAlt: una imagen decorativa con la frase "¿Qué cambios trae el primer borrador de las WCAG 3.0?"
publishedAt: "2021-01-27"
tags:
  - Accesibilidad
  - WCAG
---

# Nombre y Estructura

El primer cambio que podemos observar es en el nombre. La versión actual, WCAG 2.X, se denomina "Web Content Accessibility Guidelines",
pero con la llegada de W3CG el nombre cambiará a **"W3C Accessiblity Guidelines"**. El motivo principal es romper con la limitación de analizar solo el contenido, _content_ en inglés, para poner el centro en las guías de accesibilidad. Además se mantendrá WCAG como acrónimo y seguirá siendo garantía de accesibilidad.

El segundo gran cambio tiene lugar en la estructura del documento. Se pasa a una estructura simplificada basada en guías, resultados, y métodos.

## Guías

La nueva versión del borrador define las guías, _Guidelines_ en inglés, como soluciones para los problemas de accesibilidad.

## Resultados

La nueva versión del borrador define los resultados, _Outcomes_ en inglés, como el resultado deseado al reducir los problemas de accesibilidad.

## Métodos

La nueva versión del borrador define los métodos, _Methods_ en inglés, como formas y test detallados para evaluar lo bien que un proyecto cumple con los resultados.

# Modelo de conformidad

Cuando hablamos de una conformidad, nos referimos a que un sitio web cumple con las guías de accesibilidad establecidas en las WCAG.
En la versión actual, ese modelo de conformidad se basa en decisiones puramente binarias (si/no), acompañado con diferentes niveles: **A, AA, y AAA**.
Dependiendo del criterio evaluado, se sitúa dentro del nivel especificado por dichos criterios. Para conseguir uno de los niveles, se deben cumplir todos los criterios de ese nivel.

La nueva versión del borrador define tres nuevos niveles: **bronce, plata, y oro**. Estos tres niveles no se corresponden completamente con los anteriores niveles, pero en la práctica serán muy similares, aunque alguno de los nuevos niveles necesitará análisis diferentes. Con estos tres nuevos niveles se consigue una mayor flexibilidad en la evaluación de un sitio web, evitando esas decisiones binarias, y se obtiene una evaluación más precisa y correcta.

# Test

La nueva versión del borrador incluye dos nuevos tipos de test: atómicos y holísticos.

## Test Atómicos

Los test atómicos son test simples que permitirán conseguir el nivel bronce. Estos test comprueban normalmente la conformidad del código del sitio web, y son muy similares a lo que conocemos con auditoría de accesibilidad.

### Nuevo criterio de evaluación

Para estos nuevos test atómicos, la nueva versión del borrador establece nuevos criterios de evaluación basados en ciertos valores numéricos (de 0 a 4) y no solo basados en decisiones binarias (si/no). Habrá test basados en decisiones binarias y otros basados en decisiones más complejas. Pero todos tendrán una guía para el nuevo criterio de evaluación.

Los resultados de las pruebas atómicas se agregan a través de las vistas y se utilizan junto con el número de errores críticos para asignar una calificación de adjetivo al resultado. Luego, los evaluadores utilizarán la guía proporcionada en el resultado junto con un juicio razonable del contexto en el que ocurren los errores para asignar una puntuación de accesibilidad del resultado.

La tabla de los nuevos criterios es:

- Muy pobre (0): Cualquier error crítico o menos del 50% de los test relacionados pasados satisfactoriamente.
- Pobre (1): Ningún error crítico, aproximadamente del 50% al 79% de los test relacionados pasados satisfactoriamente.
- Justo (2): Ningún error crítico, aproximadamente del 80% al 89% de los test relacionados pasados satisfactoriamente.
- Bueno (3): Ningún error crítico, aproximadamente del 90% al 98% de los test relacionados pasados satisfactoriamente.
- Excelente (4): Ningún error crítico, aproximadamente del 99% al 100% de los test relacionados pasados satisfactoriamente.

Una vez evaluados todos los resultados, se necesitará un resultado mínimo global de 3,5 sobre 4, y un resultado mínimo de 3,5 sobre 4 en cada una de las categorías funcionales para conseguir el nivel bronce.

## Test Holísticos

Los test holísticos son test de usabilidad y test manuales con hardware y software usado por personas con discapacidad, especialmente tecnologías de asistencia. Estos test permitirán conseguir los niveles plata y oro. Hay que tener en cuenta de que puede darse el caso de que algún contenido de un sitio web consiga el nivel bronce al pasar los test atómicos, pero ese mismo contenido no sea usable para personas con discapacidad. En estos casos los test holísticos son especialmente útiles.

# Conclusión

Como hemos visto, la nueva versión del borrador viene cargadito de cambios con respecto a la versión actual. Se espera que sea efectivo en mínimo en 2023, así que muy seguramente este borrador sufrirá cambios durante estos dos años. La razón de este cambio ha sido el hecho de darse cuenta de que todos debemos crear sitios web mucho más accesibles de lo que son ahora, y que la versión actual, WCAG 2.X, no es todo lo precisa y correcta que debería ser. Hay que tomarse este borrador como lo que es, un borrador, y no una versión final, y como he dicho, sufrirá cambios.

## Otros análisis del primer borrador de las WCAG 3.0

- [WCAG 3.0, primer borrador con cambios muy importantes (Vicent Sanchis)](https://vicentsanchis.com/wcag-3-0-primer-borrador-con-cambios-muy-importantes/#en_el_nombre)
- [WCAG 3.0 - Novedades del último borrador (Olga Carreras)](https://olgacarreras.blogspot.com/2021/01/wcag-30-novedades-del-ultimo-borrador.html#w3_4)
- [What to Expect From The First Public Working Draft of WCAG 3.0 (Deque) - En Inglés](https://www.deque.com/blog/first-public-working-draft-wcag-3/)
