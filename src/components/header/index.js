import React from "react";
import { Container, Content } from './styles';
import { FiUser } from 'react-icons/fi';
import { CgShoppingBag } from 'react-icons/cg';

export default function Header () {
    return (
        <Container>
            <Content>
                <h1>IFSP</h1>
                <ul>
                    <li>
                        <CgShoppingBag/>
                    </li>
                    <li>
                        <FiUser/>
                        Minha Conta
                    </li>
                </ul>
            </Content>
        </Container>
    )
}