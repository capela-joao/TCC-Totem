import React from 'react';
import { Container, Content, ContentCategories, Background } from './styles';
import Button from '../../components/button'

export default function Categories () {
    return (
        <Container>
            <Content>
                <ContentCategories>
                    <h1>Escolha sua categoria</h1>

                    <a href="/login">Acadêmico</a>
                    <a href="/login">Visitante</a>
                    <a href="/login">Cantina</a>
                </ContentCategories>
            </Content>
            <Background />
        </Container>
    )
}