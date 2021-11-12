import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { listProfessions } from "../../../redux/actions/profession";
import { listSpecialties } from "../../../redux/actions/specialty";
import { getUser, updateUser } from "../../../redux/actions/users";
import ProfileView from "./ProfileView";
export default function ProfileContainer() {
  const dispatch = useDispatch();
  const { header } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);
  const { specialties } = useSelector((state) => state.specialty);
  const { professions } = useSelector((state) => state.profession);
  const [updateFinish, setUpdateFinish] = useState(false);

  const [form, setForm] = useState({
    id: "",
    firstName: "",
    lastName: "",
    document: "",
    cellPhone: "",
    image: "",
    profession_id: "",
    specialty_id: "",
    password: "",
    role_id: "",
    state: "",
  });

  const getData = useCallback(async () => {
    dispatch(listSpecialties(header));
    dispatch(listProfessions(header));
    setForm(user);
  }, [dispatch, setForm, getUser]);

  useEffect(() => {
    getData();
  }, [getData]);

  const formChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const update = async () => {
    let isOk = false;

    form.user = {
      password: form.password ? form.password : null,
      role_id: form.role_id,
      state: form.state,
    };

    isOk = await dispatch(updateUser(form, header));
    setTimeout(() => {
      //   window.location.href = "/";
      setUpdateFinish(true);
    }, 2000);
    // if (isOk) reset();
  };

  if (updateFinish) return <Navigate to="/" />;

  return (
    <div>
      <ProfileView
        formChange={formChange}
        form={form}
        update={update}
        user={user}
        specialties={specialties}
        professions={professions}
      />
    </div>
  );
}
