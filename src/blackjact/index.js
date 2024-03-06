import _ from 'underscore';
import { crearDeck, 
    pedirCarta, 
    turnoComputadora, 
    acumularPuntos,
    crearCarta } from './usecases';

/*
    2C = Two of Clubs (Treboles)
    2D = Two of Diamonds (Dimantes)
    2H = Two of Hearts (Corazones)
    2S = Two of Spades (Espadas)
*/

const miModulo = (() => {
  'use strict';

  let deck         = [];
  const tipos      = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

  // let puntosJugador = 0,
  //     puntosComputadora = 0;
  let puntosJugadores = [];

  // Referencias HTML
  const btnPedir             = document.querySelector('#btnPedir'),
        btnDetener           = document.querySelector('#btnDetener'),
        btnNuevo             = document.querySelector('#btnNuevo');

  const divCartasJugadores = document.querySelectorAll('.divCartas'),
        tagSmall           = document.querySelectorAll('small');

  // Esta funcion inicializa el juego
  const inicializarJuego = ( numJugadores = 2 ) => {
      deck = crearDeck(tipos, especiales);

      puntosJugadores = [];

      for(let i =0; i < numJugadores; i++) {
          puntosJugadores.push(0);
      }

      tagSmall.forEach((elem) => elem.innerText = 0);

      divCartasJugadores.forEach(elem => elem.innerHTML = '');
      
      btnPedir.disabled = false;
      btnDetener.disabled = false;
  }

  // Eventos

  btnPedir.addEventListener('click', () => {
      const carta = pedirCarta( deck );
      const puntosJugador = acumularPuntos( puntosJugadores, tagSmall, carta, 0 );

      crearCarta( carta, 0 );

      if( puntosJugador > 21 ) {
          console.warn('Lo siento mucho, perdiste');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugador, deck, puntosJugadores, tagSmall);
      }
      else if ( puntosJugador === 21 ) {
          console.warn('21, genial!!');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugador, deck, puntosJugadores, tagSmall);
      }
  });

  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugadores[0], deck, puntosJugadores, tagSmall);
  });

  btnNuevo.addEventListener('click', () => {
      inicializarJuego();
  });

  return {
      nuevoJuego: inicializarJuego
  };

})();
