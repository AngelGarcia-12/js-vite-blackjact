/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {Array<String>} deck
 */

import { pedirCarta } from "./ask-card";
import { crearCarta } from "./create-card";
import { determinarGanador } from "./determ-winner";
import { acumularPuntos } from "./sum-points";

// Turno de la computadora
export const turnoComputadora = ( puntosMinimos, deck = [], puntosJugadores, tagSmall ) => {
    if( !puntosMinimos ) throw new Error('Puntos minimos son necesarios');
    if( !deck ) throw new Error('El deck es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = acumularPuntos(puntosJugadores, tagSmall, carta, puntosJugadores.length - 1);

        crearCarta( carta, puntosJugadores.length - 1);

    } while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

    determinarGanador( puntosJugadores );
}