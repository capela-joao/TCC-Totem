import React, { useCallback, useRef } from 'react';
import { Container, Content, ContentLogin, Background } from './styles'
import { Form } from '@unform/web';
import { FiMail, FiUser, FiLock, FiArrowLeft } from 'react-icons/fi'
import * as Yup from 'yup';
import Input from '../../components/input'
import Button from '../../components/button'
import getValidationErrors from '../../utils/getValidationErrors'
// import Logo from "../../assets/nw-logo-white.png";

export default function SignUp() {
  const formRef = useRef(null);

  console.log(formRef);

  const handleSubmit = useCallback(async (data) => {

    formRef.current.setErrors({});

    try{
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
        .required('E-mail obrigatório')
        .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false, 
      });
    } catch (err) {
        console.log(err)

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
              <h1>Faça seu Cadastro</h1>

              <Input name="name" icon={FiUser} placeholder="Nome" />

              <Input name="email" icon={FiMail} placeholder="E-mail" />

              <Input
                name="password"
                icon={FiLock}
                type="password"
                placeholder="Senha"
              />

              <Button type="submit">Cadastrar</Button>
            </Form>

            <a href="/login">
              <FiArrowLeft />
              Voltar para o Login
            </a>
          </ContentLogin>
        </Content>
        <Background />
      </Container>
    );
}