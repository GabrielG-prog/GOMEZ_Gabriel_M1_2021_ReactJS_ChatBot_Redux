const initialState = [{
    id: '1',
    name: 'bot1',
    avatar: 'femme1.jpg',
    options: [{
        item: "Bonjour",
        response: 'Coucou !'
      },
      {
        item: "Date",
        response: "Nous somme le vendredi"
      },
      {
        item: "Meteo",
        response: "Il fait beau"
      }
    ]
  }, {
    id: '2',
    name: 'bot2',
    avatar: 'homme1.jpg',
    options: [{
        item: "Salut",
        response: 'Hey !'
      },
      {
        item: "Au revoir",
        response: "Au revoir !"
      },
      {
        item: "ça va ",
        response: "Bien et toi"
      }
    ]
  }, {
    id: '3',
    name: 'bot3',
    avatar: 'homme2.jpg',
    options: [{
        item: "Hey",
        response: 'Hey salut toi '
      },
      {
        item: "bien",
        response: "moi ça va trés bien"
      },
      {
        item: "Bots",
        response: "oui je suis un bot"
      }
    ]
  }]
export function botReducer (state = initialState, action) {
  return state
}
