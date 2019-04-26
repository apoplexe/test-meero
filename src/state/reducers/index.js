import { FILTER_CARD } from "../actions";

const initialState = {
  cards: [
    {
      name: "chaton",
      image:
        "https://image.afcdn.com/story/20150511/-661351_w767h767c1cx1858cy867.jpg",
      description:
        "c'est un chaton périgourdin de la famille des botinoticaceaes",
      location: "Périgourdin"
    },
    {
      name: "chaton",
      image:
        "https://image.afcdn.com/story/20150511/-661351_w767h767c1cx1858cy867.jpg",
      description:
        "c'est un chaton périgourdin de la famille des botinoticaceaes",
      location: "Berlin"
    },
    {
      name: "chaton",
      image:
        "https://image.afcdn.com/story/20150511/-661351_w767h767c1cx1858cy867.jpg",
      description:
        "c'est un chaton périgourdin de la famille des botinoticaceaes",
      location: "Alsace"
    },
    {
      name: "chaton",
      image:
        "https://image.afcdn.com/story/20150511/-661351_w767h767c1cx1858cy867.jpg",
      description:
        "c'est un chaton périgourdin de la famille des botinoticaceaes",
      location: "Franche-Comté"
    },
    {
      name: "chaton",
      image:
        "https://image.afcdn.com/story/20150511/-661351_w767h767c1cx1858cy867.jpg",
      description:
        "c'est un chaton périgourdin de la famille des botinoticaceaes",
      location: "Compiègne"
    }
  ]
};
initialState.locations = initialState.cards.map(card => card.location);
initialState.location = initialState.cards[0].location;

const catsApp = (state = initialState, action) => {
  const appState = state;
  switch (action.type) {
    case FILTER_CARD:
      appState.cards = appState.cards.filter(cat => {
        return cat.location === action.location;
      });
      appState.location = action.location;
      return appState;
    default:
      return appState;
  }
};

export default catsApp;
