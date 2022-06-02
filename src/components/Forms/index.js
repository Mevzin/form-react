import React, { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../service/api";

import { Container, Form, Input, Title, Button } from "./styles";

const Forms = () => {
  const [data, setData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    api.post('', data)
    .then(res => {
      toast('Mensagem enviada com sucesso', {
        type: 'success'
      })
    })
    .catch( err => {
      toast('Ooops, falha no engano', {
        type: 'error',
      })
    })
  };
  return (
    <Container>
      <h1>Forms</h1>
      <Form action="#" method="post">
        <Title> Entre em contato</Title>

        <Input
          placeholder="Nome"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <Input
          placeholder="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <Input
          placeholder="Telefone"
          onChange={(e) => setData({ ...data, phone: e.target.value })}
        />

        <Button onClick={handleSubmit}>Enviar mensagem :)</Button>
      </Form>
    </Container>
  );
};

export default Forms;
