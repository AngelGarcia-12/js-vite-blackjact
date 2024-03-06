const divCartasJugadores = document.querySelectorAll('.divCartas'),
      tagSmall           = document.querySelectorAll('small');

// Funcion que crea una carta
export const crearCarta = ( carta, turno ) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);
}