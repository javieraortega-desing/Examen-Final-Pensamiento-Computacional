// Atrapa las burbujas
// Examen final Pensamiento computacional 
// Javiera Ortega 

// Variables

// Arreglos que guardan las posiciones de las burbujas
 let x = [];
 let y = [];

// cantidad total de burbujas
 let cantidad = 15;

// estados del juego
// 0 = inicio
// 1 = juego
// 2 = victoria
 let estado = 0;

// guarda el puntaje del jugador
 let puntaje = 0;

// sonidos e imagen de fondo
 let sonido;
 let ganar;
 let fondo;


// Función 1
// Dibuja una burbuja en las coordenadas recibidas

 function dibujarBurbuja(px, py) {

  fill(180, 120, 255);
  ellipse(
    px,
    py,
    30,
    30
  );
}

// Función 2
// Dibuja al jugador siguiendo el mouse

 function dibujarJugador(tam) {

  fill(255);
  ellipse(
    mouseX,
    mouseY,
    tam,
    tam
  );
}

// Preload
// Carga los archivos multimedia antes de iniciar el juego

 function preload() {

  sonido = loadSound("pop.mp3");
  ganar = loadSound("ganar.mp3");
  fondo = loadImage("fondo.jpg");
}

// Setup
// Crea el canvas y genera posiciones aleatorias para las burbujas

 function setup() {

  createCanvas(800, 600);
  noStroke();

// Genera una posición aleatoria para cada burbuja
  for (let i = 0; i < cantidad; i++) {

    x[i] = random(width);

    y[i] = random(height);
  }
}


// Draw
// Controla todo lo que ocurre en pantalla

 function draw() {

// Dibuja la imagen de fondo
  image(
    fondo,
    0,
    0,
    width,
    height
  );

// Pantalla de inicio

  if (estado == 0) {

    fill(255);
    textAlign(CENTER);
    textSize(30);
    text(
      "ATRAPA LAS BURBUJAS",
      width / 2,
      250
    );
    
    textSize(18);
    text(
      "Haz click para comenzar",
      width / 2,
      320
    );
  }

// Pantalla principal del juego

  else if (estado == 1) {

    fill(255);
    textSize(20);
    textAlign(LEFT);
    
// Muestra el puntaje actual
    text(
      "Puntaje: " + puntaje,
      20,
      30
    );

// Map transforma el puntaje en tamaño
// Mientras más puntos tenga el jugador más grande será
    let tamJugador = map(
      puntaje,
      0,
      10,
      30,
      60
    );

    dibujarJugador(
      tamJugador
    );

// Recorre todas las burbujas para moverlas,
// Dibujarlas y detectar colisiones

    for (let i = 0; i < cantidad; i++) {

      x[i] = x[i] + random(-1, 1);

      y[i] = y[i] + random(-1, 1);

      dibujarBurbuja(
        x[i],
        y[i]
      );

// Calcula la distancia entre el jugador y la burbuja
      let distancia = dist(
        mouseX,
        mouseY,
        x[i],
        y[i]
      );

// Si el jugador toca una burbuja suma un punto
      if (distancia < 25 && x[i] != -100) {

  puntaje++;
  sonido.play();
  x[i] = -100;
  y[i] = -100;
}
    }

// Cuando llega a la cantidad de burbujas cambia al estado de victoria
if (puntaje >= cantidad && estado == 1) {

  ganar.play();
  estado = 2;

}
  }

// Pantalla de victoria

  else if (estado == 2) {

    fill(255);
    textAlign(CENTER);
    textSize(40);
    text(
      "¡GANASTE!",
      width / 2,
      250
    );

    textSize(24);
    text(
      "Puntaje final: " + puntaje,
      width / 2,
      320
    );

    textSize(20);
    text(
      "¡Lograste capturarlas!",
      width / 2,
      370
    );
  }
}

// MousePressed
// Inicia el juego al hacer click en la pantalla inicial

 function mousePressed() {

  if (estado == 0) {
    estado = 1;
  }
}