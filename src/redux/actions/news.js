import {
  ChangeStateNews,
  ListNews,
  RegisterNews,
  UpdateNews,
} from "../../services/news";
import { typeStore } from "../constants";

export const News = (news) => ({
  type: typeStore.news.list,
  news,
});

export const NewsFilter = (newsFilter) => ({
  type: typeStore.news.newsFilter,
  newsFilter,
});

export const listNews = (header) => async (dispatch) => {
  try {
    const news = await ListNews(header);
    console.log(news);
    dispatch(News(news));
    dispatch(NewsFilter(news));
  } catch (error) {
    console.log(error);
  }
};

export const updateNews = (item, header) => async (dispatch) => {
  try {
    let isOk = await UpdateNews(item, header);
    if (isOk) dispatch(listNews(header));
    return isOk;
  } catch (error) {
    console.log(error);
  }
};

export const registerNews = (item, header) => async (dispatch) => {
  try {
    let isOk = await RegisterNews(item, header);
    if (isOk) dispatch(listNews(header));
    return isOk;
  } catch (error) {
    console.log(error);
  }
};

export const changeStateNews = (item, header) => async (dispatch) => {
  try {
    let isOk = await ChangeStateNews(item, header);
    if (isOk) dispatch(listNews(header));
    return isOk;
  } catch (error) {
    console.log(error);
  }
};
