import React from 'react';
import { Container, Content, ContentCategories, Background } from './styles';

export default function Categories () {
    return (
        <Container>
            <Content>
                <ContentCategories>
                    <h1>Escolha sua categoria</h1>

                    <a href="/login-academy">Acadêmico</a>
                    <a href="/login">Visitante</a>
                    <a href="/">Cantina</a>
                </ContentCategories>
            </Content>
            <Background />
        </Container>
    )
}