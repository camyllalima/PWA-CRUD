import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalStyle from "./styles/global.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Title } from "./styles/styles";
import Form from "./components/Form";
import Grid from "./components/Grid";
import { NavScrollExample } from "./components/NavBar/index.js";
import Container from "react-bootstrap/esm/Container.js";

const App = () => {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
      <NavScrollExample />
      <Container>
        <Title>{"Usuários"}</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
};

export default App;
