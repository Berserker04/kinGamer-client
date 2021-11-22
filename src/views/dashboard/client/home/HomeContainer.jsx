import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../../../../api";
import { listUsers } from "../../../../redux/actions/users";
import HomeView from "./HomeView";

export default function HomeContainer() {
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.user);
  // const [stadistics, setStadistics] = useState({
  //   employees: 0,
  //   professions: 0,
  //   specialties: 0,
  // });
  // const { header } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   API.GET("/home").then(({ data }) => {
  //     if (data.ok) setStadistics(data.body);
  //   });
  //   dispatch(listUsers(header));
  // }, [dispatch]);

  return (
    <div>
      <HomeView
      />
    </div>
  );
}
