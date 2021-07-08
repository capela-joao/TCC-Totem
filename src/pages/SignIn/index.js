import React, { useRef, useCallback } from 'react';
import { Container, Content, ContentLogin, Background } from './styles'
import { FiMail, FiLock } from 'react-icons/fi'
import Input from '../../components/input'
import Button from '../../components/button'
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from "../../utils/getValidationErrors";
// import Logo from "../../assets/nw-logo-white.png";

export default function SignIn() {
    const formRef = useRef(null);

    console.log(formRef);

    const handleSubmit = useCallback(async (data) => {
      formRef.current.setErrors({});

      try {
        const schema = Yup.object().shape({
          name: Yup.string().required("Nome obrigatório"),
          email: Yup.string()
            .required("E-mail obrigatório")
            .email("Digite um e-mail válido"),
          password: Yup.string().required("Senha obrigatória"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
      } catch (err) {
        console.log(err);

        const errors = getValidationErrors(err);

        formRef.current.setErrors(errors);
      }
    }, []);

    return (
      <Container>
        <Content>
          <ContentLogin>
            {/* <img src={Logo} alt="NewWorld" /> */}

            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Faça seu Login</h1>

              <Input name="email" icon={FiMail} placeholder="E-mail" />

              <Input
                name="password"
                icon={FiLock}
                type="password"
                placeholder="Senha"
              />

              <Button type="submit">Entrar</Button>

              <a href="Login">Esqueci minha senha</a>
            </Form>

            {/* <a href="cadastro">
              <FiLogIn />
              Criar conta
            </a> */}
          </ContentLogin>
        </Content>
        <Background />
      </Container>
    );
}