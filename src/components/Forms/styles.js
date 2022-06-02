import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #4e4e4e;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 550px;
  margin: 10px auto;
  padding: 10px 20px;
  background: #f4f7f8;
  border-radius: 8px;
  width: 100%;
`;

export const Input = styled.input`
  border: none;
  border-radius: 10px;
  font-size: 16px;
  height: auto;
  width: 100%;
  padding: 15px 0;
  width: 100%;
  background: #c6c6c6;
  color: black;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  margin-bottom: 30px;
  text-align: center;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 16px 32px;
  color: #fff;
  background: #A42AC4;
  font-size: 18px;
  text-align: center;
  border-radius: 5px;
  width: 100%;
  border: 1px solid;
  border-width: 1px 1px 3px;
  margin-bottom: 10px;
  transition: 0.3s;
`;
