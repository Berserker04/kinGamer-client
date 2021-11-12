import {
    ChangeStateSpecialty,
    ListSpecialty,
    RegisterSpecialty,
    UpdateSpecialty,
  } from "../../services/specialty";
  import { typeStore } from "../constants";
  
  export const Specialties = (specialties) => ({
    type: typeStore.specialty.list,
    specialties,
  });
  
  export const SpecialtiesFilter = (specialtiesFilter) => ({
    type: typeStore.specialty.filter,
    specialtiesFilter,
  });
  
  export const listSpecialties = (header) => async (dispatch) => {
    try {
      console.log(header, " elheader");
      const specialties = await ListSpecialty(header);
      dispatch(Specialties(specialties));
      dispatch(SpecialtiesFilter(specialties));
    } catch (error) {
      console.log(error);
    }
  };
  
  export const updateSpecialty = (item, header) => async (dispatch) => {
    try {
      let isOk = await UpdateSpecialty(item, header);
      if (isOk) dispatch(listSpecialties(header));
      return isOk;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const registerSpecialty = (item, header) => async (dispatch) => {
    try {
      let isOk = await RegisterSpecialty(item, header);
      if (isOk) dispatch(listSpecialties(header));
      return isOk;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const changeStateSpecialty = (item, header) => async (dispatch) => {
    try {
      let isOk = await ChangeStateSpecialty(item, header);
      if (isOk) dispatch(listSpecialties(header));
      return isOk;
    } catch (error) {
      console.log(error);
    }
  };
  