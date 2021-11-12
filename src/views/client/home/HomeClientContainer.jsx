import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../../../api";
import HomeClientView from "./HomeClientView";

export default function HomeClientContainer() {
  // const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.user);
  // const [stadistics, setStadistics] = useState({
  //   employees: 0,
  //   professions: 0,
  //   specialties: 0,
  // });
  // const { header } = useSelector((state) => state.auth);
  // const { users, usersFilter } = useSelector((state) => state.user);

  // useEffect(() => {
  //   API.GET("/home").then(({ data }) => {
  //     if (data.ok) setStadistics(data.body);
  //   });
  //   dispatch(listUsers(header));
  // }, [dispatch]);

  return (
    <div>
      <HomeClientView />
    </div>
  );
}
