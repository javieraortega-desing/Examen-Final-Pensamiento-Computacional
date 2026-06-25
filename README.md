# Examen Final – Pensamiento Computacional

# Atrapa las Burbujas

**Autora:** Javiera Ortega

Atrapa las Burbujas es un sistema interactivo desarrollado en p5.js para el Examen Final de Pensamiento Computacional. El proyecto utiliza estados, variables, funciones, condicionales, bucles, elementos multimedia e interacción mediante el mouse para construir una experiencia basada en la captura de burbujas y la obtención de puntaje.

# Link del proyecto

### Sketch en p5.js

https://editor.p5js.org/javiera.ortega5/sketches/-kd2gywp-

---

# Concepto

Atrapa las Burbujas es un juego interactivo donde el usuario debe capturar burbujas en movimiento utilizando el mouse. A medida que aumenta el puntaje, el jugador crece de tamaño hasta capturar todas las burbujas y alcanzar la pantalla de victoria.
---

# Referente e inspiración

# Referente e inspiración

La propuesta se inspira en Fruit Ninja, un juego arcade que utiliza una mecánica de interacción rápida para obtener puntaje al actuar sobre distintos elementos en pantalla.

Atrapa las Burbujas adapta esa lógica reemplazando las frutas por burbujas que deben capturarse con el mouse. Cada captura produce una respuesta visual y sonora que informa el progreso del jugador hasta completar el objetivo del juego.

## Imagen referente

![Imagen-referente](imagen-referente.png) 
---

# Inputs del sistema

| Input           | Función                                     |
| --------------- | ------------------------------------------- |
| MouseX          | Controla la posición horizontal del jugador |
| MouseY          | Controla la posición vertical del jugador   |
| Click del mouse | Inicia la partida                           |

---

# Estados del sistema

## Estado 0 — Pantalla de inicio

* Mostrar fondo.
* Mostrar título.
* Mostrar instrucciones.
* Esperar interacción del usuario.

### Captura

![Imagen de inicio](imagen_de_inicio.png) 

---

## Estado 1 — Juego principal

* Mostrar jugador.
* Mostrar puntaje.
* Mover burbujas.
* Detectar colisiones.
* Reproducir sonidos al capturar.

### Captura

![Imagen de inicio](inicia-el-juego.png) 

---

## Estado 2 — Pantalla de victoria

* Mostrar mensaje final.
* Mostrar puntaje obtenido.
* Reproducir sonido de victoria.

### Captura

![Imagen de inicio](ganaste-el-juego.png) 

---

# Procesos computacionales

## random()

La función random() se utiliza para generar posiciones aleatorias para las burbujas y para producir pequeñas variaciones en su movimiento durante el juego.

### Código

```javascript
x[i] = random(width);
y[i] = random(height);
```

---

## dist()

La función dist() calcula la distancia entre el jugador y cada burbuja para detectar colisiones.

### Código

```javascript
let distancia = dist(
  mouseX,
  mouseY,
  x[i],
  y[i]
);
```

---

## map()

La función map() transforma el puntaje en el tamaño del jugador. A medida que aumenta el puntaje, el jugador crece.

### Código

```javascript
let tamJugador = map(
  puntaje,
  0,
  10,
  30,
  60
);
```

---

# Diagrama de flujo

El siguiente diagrama representa el funcionamiento general del sistema y la relación entre inputs, procesos, decisiones y estados.

![Imagen de inicio](diagrama-de-flujo.png)     
---

# Proceso de desarrollo

## Boceto inicial

[Insertar imagen]

Primer esquema del funcionamiento del juego y distribución de sus elementos principales antes de comenzar la programación.

---

## Desarrollo

[Insertar imagen]

Durante esta etapa se realizaron pruebas de movimiento, detección de colisiones, sonidos y transición entre estados para verificar el correcto funcionamiento del sistema.
---

## Resultado final

[Insertar imagen]

Versión final del proyecto con todos los estados implementados, interacción mediante el mouse y sistema de puntaje completamente funcional.

---

# Herramientas utilizadas

* p5.js
* JavaScript
* GitHub

---

# Reflexión final

Este proyecto permitió aplicar diversos conceptos vistos durante el curso, incluyendo estados, variables, funciones, bucles, condicionales e interacción mediante inputs del usuario.

Uno de los mayores desafíos fue organizar correctamente los estados del sistema y lograr que las colisiones, el puntaje y los sonidos funcionaran de manera coordinada.

La experiencia permitió comprender cómo reglas computacionales relativamente simples pueden combinarse para construir sistemas interactivos completos y coherentes. Si se continuara desarrollando el proyecto, podrían incorporarse nuevos niveles, temporizadores o distintos tipos de burbujas para aumentar la complejidad del juego.

---
