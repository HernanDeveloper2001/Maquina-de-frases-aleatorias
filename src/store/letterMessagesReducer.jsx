const lifeMessages = [
    {
      mensaje:
        "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
      autor: "John Lennon"
    },
    {
      mensaje: "La vida es una aventura audaz o no es nada en absoluto.",
      autor: "Helen Keller"
    },
    {
      mensaje:
        "La vida es como una bicicleta. Para mantener el equilibrio, debes seguir adelante.",
      autor: "Albert Einstein"
    },
    {
      mensaje:
        "La vida es corta, y es hasta cierto punto. Haz lo que amas y hazlo a menudo.",
      autor: "Holstee Manifesto"
    },
    {
      mensaje:
        "La vida es lo que hacemos de ella. Los viajes son las millas que recorremos en ella.",
      autor: "Dan Miller"
    },
    {
      mensaje:
        "La vida es un 10% lo que nos sucede y un 90% cómo reaccionamos ante ello.",
      autor: "Charles R. Swindoll"
    },
    {
      mensaje:
        "La vida es realmente simple, pero insistimos en hacerla complicada.",
      autor: "Confucio"
    },
    {
      mensaje: "La vida es demasiado importante como para tomársela en serio.",
      autor: "Oscar Wilde"
    },
    {
      mensaje: "La vida es como un espejo: te sonríe si la miras sonriendo.",
      autor: "Jim Morrison"
    },
    {
      mensaje:
        "La vida es una serie de colisiones con el futuro; no es una suma de lo que hemos sido, sino de lo que anhelamos ser.",
      autor: "José Ortega y Gasset"
    }
];
export const MESSAGESRANDOM = "MESSAGES";
  
const letterMessagesReducer = (state = lifeMessages, action) => {
  const { type } = action;
  switch (type) {
    case MESSAGESRANDOM:
      return [...lifeMessages];
    default:
      return state;
  }
};

  
export const messages = () => {
  return {
    type: MESSAGESRANDOM,
  };
};
  
export default letterMessagesReducer;
  