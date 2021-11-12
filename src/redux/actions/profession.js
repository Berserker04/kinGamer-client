import {
  ChangeStateProfession,
  ListProfession,
  RegisterProfession,
  UpdateProfession,
} from "../../services/profession";
import { typeStore } from "../constants";

export const Professions = (professions) => ({
  type: typeStore.profession.list,
  professions,
});

export const ProfessionsFilter = (professionsFilter) => ({
  type: typeStore.profession.professionsFilter,
  professionsFilter,
});

export const listProfessions = (header) => async (dispatch) => {
  try {
    const professions = await ListProfession(header);
    dispatch(Professions(professions));
    dispatch(ProfessionsFilter(professions));
  } catch (error) {
    console.log(error);
  }
};

export const updateProfession = (item, header) => async (dispatch) => {
  try {
    let isOk = await UpdateProfession(item, header);
    if (isOk) dispatch(listProfessions(header));
    return isOk;
  } catch (error) {
    console.log(error);
  }
};

export const registerProfession = (item, header) => async (dispatch) => {
  try {
    let isOk = await RegisterProfession(item, header);
    if (isOk) dispatch(listProfessions(header));
    return isOk;
  } catch (error) {
    console.log(error);
  }
};

export const changeStateProfession = (item, header) => async (dispatch) => {
  try {
    let isOk = await ChangeStateProfession(item, header);
    if (isOk) dispatch(listProfessions(header));
    return isOk;
  } catch (error) {
    console.log(error);
  }
};
