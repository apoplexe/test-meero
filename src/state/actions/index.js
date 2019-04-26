export const ADD_MOVIE = "ADD_MOVIE";
export const FILTER_CARD = "FILTER_CARD";

export function filterCard(location) {
  return { type: FILTER_CARD, location };
}
