import React, { useRef, useCallback } from 'react';
import { Container, Content, ContentLogin, Background } from './styles'
import { FiUser, FiLock, FiArrowLeft } from 'react-icons/fi'
import Input from '../../components/input'
import Button from '../../components/button'
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from "../../utils/getValidationErrors";
// import Logo from "../../assets/nw-logo-white.png";

export default function SignInAcad() {
    const formRef = useRef(null);

    console.log(formRef);

    const handleSubmit = useCallback(async (data) => {
      formRef.current.setErrors({});

      try {
        const schema = Yup.object().shape({
          prontuario: Yup.string()
            .required("Prontuário obrigatório"),
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

              <Input name="prontuario" icon={FiUser} placeholder="Prontuário" />

              <Input
                name="password"
                icon={FiLock}
                type="password"
                placeholder="Senha"
              />

              <Button type="submit">Entrar</Button>

              <a href="/login-academy">Esqueci minha senha</a>
            </Form>
            <a href="/">
              <FiArrowLeft />
              Voltar para categoria
            </a>
          </ContentLogin>
        </Content>
        <Background />
      </Container>
    );
}