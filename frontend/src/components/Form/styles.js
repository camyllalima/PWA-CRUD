import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 1.25rem;
  border-radius: 5px;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;

  input[type="date"]::-webkit-inner-spin-button,
  input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
`;

export const Input = styled.input`
  /* min-width: 1rem; */
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
