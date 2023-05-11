import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 1.25rem;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 7.5rem;
  padding: 0 0.75rem;
  border: thin solid #bbb;
  border-radius: 5px;
  height: 2.5rem;
`;

export const Label = styled.label``;

export const Button = styled.button`
  padding: 0.75rem;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 2.5rem;
`;
