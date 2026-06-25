# Examen Final – Pensamiento Computacional

# Atrapa las Burbujas

**Autora:** Javiera Ortega

Atrapa las Burbujas es un sistema interactivo desarrollado en p5.js para el Examen Final de Pensamiento Computacional. El proyecto utiliza estados, variables, funciones, condicionales, bucles, elementos multimedia e interacción mediante el mouse para construir una experiencia basada en la captura de burbujas y la obtención de puntaje.

# Link del proyecto

### Sketch en p5.js

https://editor.p5js.org/javiera.ortega5/sketches/-kd2gywp-

---

# Concepto

Atrapa las Burbujas es un juego interactivo en el que el usuario debe capturar burbujas en movimiento utilizando el mouse. Cada captura aumenta el puntaje y produce una respuesta visual y sonora que informa al jugador que la acción fue realizada correctamente. Además, el tamaño del jugador cambia progresivamente según el puntaje obtenido, entregando una representación visual de su avance.

El proyecto fue diseñado como un sistema basado en estados, permitiendo separar el funcionamiento en una pantalla de inicio, una etapa de juego y una pantalla de victoria. Esta organización facilita el control de la lógica del programa y hace que cada etapa tenga un comportamiento claramente definido.

---

# Referente e inspiración

La propuesta se inspira en Fruit Ninja, un juego arcade caracterizado por su mecánica de interacción rápida y por la respuesta inmediata que entrega al jugador cada vez que realiza una acción correctamente. En ese juego, el usuario obtiene puntaje al interactuar con distintos elementos que aparecen en pantalla, generando una experiencia dinámica y fácil de comprender.

Atrapa las Burbujas adapta esa idea utilizando burbujas en lugar de frutas y reemplazando el gesto de cortar por la acción de capturarlas con el mouse. Aunque la temática es diferente, ambos proyectos comparten una mecánica basada en la coordinación entre el movimiento del jugador y los elementos presentes en pantalla, acompañada por retroalimentación visual y sonora que comunica el progreso durante la partida.

La inspiración en Fruit Ninja no busca reproducir su funcionamiento, sino reinterpretar su lógica de interacción mediante una propuesta propia desarrollada en p5.js y organizada a través de estados, funciones y procesos computacionales.

## Imagen referente

![Imagen-referente](imagen-referente.png) 
---

# Inputs del sistema

El sistema utiliza como principal método de interacción el mouse. La posición horizontal y vertical del cursor determina el movimiento del jugador dentro del escenario, mientras que un clic permite pasar desde la pantalla de inicio al estado de juego. Estos inputs son suficientes para controlar toda la experiencia, manteniendo una interacción simple, intuitiva y fácil de aprender.

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

[![Ver video](Proceso-de-codigo.mp4)]

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

# Reflexión final

Este proyecto me permitió aplicar los contenidos vistos durante el curso en un sistema interactivo completo. A lo largo del desarrollo comprendí cómo variables, funciones, condicionales, bucles y estados trabajan en conjunto para controlar el funcionamiento del juego y responder a las acciones del usuario.

Uno de los mayores desafíos fue organizar correctamente la lógica del programa para que cada estado cumpliera su función y las transiciones entre ellos ocurrieran en el momento adecuado. También fue importante probar constantemente el código para detectar errores y asegurar que el puntaje, las colisiones y los sonidos funcionaran de forma coordinada.

En conjunto, esta experiencia me permitió comprender mejor el pensamiento computacional como una forma de planificar, organizar y resolver problemas mediante una secuencia lógica. Si continuara desarrollando el proyecto, incorporaría nuevos niveles, un temporizador y distintos tipos de burbujas para ampliar la experiencia de juego.

---
