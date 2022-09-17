const data = [
  {
    id: "1",
    tipo: "DIOS",
    name: "Slifer el Dragon del Cielo",
    attribute: "DIOS",
    description:
      "La Invocación Normal de esta carta no puede ser negada. Cuando es Invocado de Modo Normal, no se pueden activar cartas ni efectos. Una vez por turno, durante la End Phase, si esta carta fue Invocada de Modo Especial: mándala al Cementerio. Gana 1000 ATK/DEF por cada carta en tu mano.",
    image: "../assets/imageDios.jpg",
  },
  {
    id: "2",
    tipo: "DIOS",
    name: "Obelisk el Atormentador",
    attribute: "DIOS",
    description:
      "Requiere 3 Sacrificios para ser Invocado de Modo Normal (no puede ser Colocado de Modo Normal). La Invocación Normal de esta carta no puede ser negada. Cuando es Invocado de Modo Normal, no se pueden activar cartas ni efectos. Ningún jugador puede seleccionar esta carta con efectos de cartas. Una vez por turno, durante la End Phase, si esta carta fue Invocada de Modo Especial: mándala al Cementerio. Puedes Sacrificar 2 monstruos; destruye todos los monstruos que controle tu adversario. Esta carta no puede declarar un ataque en el turno en el que este efecto es activado. ",
    image: "../assets/imageDios2.jpg",
  },
  {
    id: "3",
    tipo: "DIOS",
    name: "El Dragon Alado de Ra",
    attribute: "DIOS",
    description:
      "No puede ser Invocado de Modo Especial. Requiere 3 Sacrificios para ser Invocado de Modo Normal (no puede ser Colocado de Modo Normal). La Invocación Normal de esta carta no puede ser negada. Cuando es Invocado de Modo Normal, no se pueden activar otras cartas ni efectos. Cuando esta carta es Invocada de Modo Normal: puedes pagar LP hasta que sólo te queden 100; esta carta gana ATK/DEF iguales a la cantidad de LP pagados. Puedes pagar 1000 LP, y después seleccionar 1 monstruo en el Campo; destruye ese objetivo. ",
    image: "../assets/imageDios3.jpg",
  },
  {
    id: "4",
    tipo: "Monstruo Normal",
    name: "Dark Magician",
    attribute: "Dark",
    description:
      "El más grande de los magos en cuanto al ataque y la defensa.  ",
    image: "../assets/imageDarkMagician.jpg",
  },
  {
    id: "5",
    tipo: "Monstruo Normal",
    name: "Red Eyes",
    attribute: "Dark",
    description: "Un dragon feroz con un ataque mortal ",
    image: "../assets/imageRedEyes.jpg",
  },
  {
    id: "6",
    tipo: "Monstruo Efecto",
    name: "Cyber Jarra",
    attribute: "Dark",
    description:
      "VOLTEO: Destruye todos los monstruos en el Campo, y después, ambos jugadores muestran las 5 cartas de la parte superior de sus Decks, y después Invocan de Modo Especial todos los monstruos mostrados que sean de Nivel 4 o menor, en Posición de Ataque boca arriba o en Posición de Defensa boca abajo, y además añaden el resto de las cartas a sus manos. (Si algún jugador tiene menos de 5 cartas en su Deck, muestra tantas como sea posible). ",
    image: "../assets/imageCyberJarra.jpg",
  },
  {
    id: "7",
    tipo: "Spell",
    name: "Pot of Greed",
    attribute: "none",
    description: "Roba 2 cartas",
    image: "../assets/imagePotOfGreed.jpg",
  },
  {
    id: "8",
    tipo: "Spell",
    name: "Raigeki",
    attribute: "none",
    description: "Destruye todos los monstruos de tu adversario",
    image: "../assets/imageRaigeki.jpg",
  },
];
module.exports = data;
