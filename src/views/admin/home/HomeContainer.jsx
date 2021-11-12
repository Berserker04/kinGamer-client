import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../../../api";
import { listUsers } from "../../../redux/actions/users";
import HomeView from "./HomeView";

const headCells = [
  {
    label: "Hora",
  },
  {
    label: "Lunes",
  },
  {
    label: "Martes",
  },
  {
    label: "Miercoles",
  },
  {
    label: "Jueves",
  },
  {
    label: "Viernes",
  },
  {
    label: "Sabado",
  },
  {
    label: "Domingo",
  },
];

export default function HomeContainer() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [stadistics, setStadistics] = useState({
    employees: 0,
    professions: 0,
    specialties: 0,
  });
  const { header } = useSelector((state) => state.auth);
  const { users, usersFilter } = useSelector((state) => state.user);

  useEffect(() => {
    API.GET("/home").then(({ data }) => {
      if (data.ok) setStadistics(data.body);
    });
    dispatch(listUsers(header));
  }, [dispatch]);

  return (
    <div>
      <HomeView
        users={usersFilter}
        headCells={headCells}
        user={user}
        stadistics={stadistics}
      />
    </div>
  );
}
