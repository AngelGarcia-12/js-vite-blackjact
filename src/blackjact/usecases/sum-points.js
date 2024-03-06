import { valorCarta } from "./value-card";

// Turno = 0 primer jugador y el ultimo sera la computadora
export const acumularPuntos = ( puntosJugadores, tagSmall, carta, turno ) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );

    // Poner puntos en small
    tagSmall[turno].innerText = puntosJugadores[turno];

    return puntosJugadores[turno];
}