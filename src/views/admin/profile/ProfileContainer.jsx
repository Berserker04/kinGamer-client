import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import { API } from "../../../api";
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
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState(user);

  const getData = useCallback(async () => {
    dispatch(listSpecialties(header));
    dispatch(listProfessions(header));
    setForm(user);
  }, [dispatch, setForm, getUser]);

  console.log(user);

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleUpdate = async () => {
    setLoading(true)

    let { first_name, last_name, ...user } = form

    let data = {
      first_name,
      last_name,
      user,
    }

    await API.POST('/user', data).then(({ data }) => {
      if (data.ok) {
        API.POST('/login', user).then(({ data: result }) => {
          if (result.ok) {
            localStorage.setItem('token', result.body.token)
            window.location.href = '/'
          } else {
            window.location.href = '/login'
          }
        })
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: data.message,
          showConfirmButton: false,
          timer: 2000,
        })
      }
    })
    setLoading(false)
  }

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
        onChange={onChange}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}
