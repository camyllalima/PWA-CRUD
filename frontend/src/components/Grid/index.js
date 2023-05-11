import React from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
// import { Tbody, td, Thead, Tr, td } from "./styles";
import Table from "react-bootstrap/Table";

const Grid = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return (
    <Table responsive striped bordered hover variant="dark">
      <thead>
        <tr>
          <td>Nome</td>
          <td>Email</td>
          <td onlyWeb>Telefone</td>
          <td>Nascimento</td>
          <td></td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {users.map((item, i) => (
          <tr key={i}>
            <td width="30%">{item.nome}</td>
            <td width="30%">{item.email}</td>
            <td width="20%" onlyWeb>
              {item.telefone}
            </td>
            <td>{item.data_Nascimento}</td>
            <td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </td>
            <td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Grid;
