import React from 'react';
import { Container, Content } from './styles';
import Button from '../../components/button'

export default function Categories () {
    return (
        <Container>
            <Content>
                <h1>Escolha sua categoria</h1>

                <Button>Acadêmico</Button>
                <Button>Visitante</Button>
                <Button>Cantina</Button>
            </Content>
        </Container>
    )
}