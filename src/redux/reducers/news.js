import { typeStore } from "../constants";

const INITIAL_STATE = {
    news: [],
    newsFilter: [],
};

const Action = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case typeStore.news.list:
      return { ...state, news: action.news };
    case typeStore.news.newsFilter:
      return { ...state, newsFilter: action.newsFilter };
    default:
      return state;
  }
};

export default Action;
