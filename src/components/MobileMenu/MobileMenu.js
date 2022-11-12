/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import {WEIGHTS} from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
        <Content>
            <CloseButton onClick={onDismiss}>
                <Icon id="close" size="16px"></Icon>
                <VisuallyHidden>Dismiss menu</VisuallyHidden>
            </CloseButton>
            <Filler/>
            <Nav>
                <NavLink href="/sale">Sale</NavLink>
                <NavLink href="/new">New&nbsp;Releases</NavLink>
                <NavLink href="/men">Men</NavLink>
                <NavLink href="/women">Women</NavLink>
                <NavLink href="/kids">Kids</NavLink>
                <NavLink href="/collections">Collections</NavLink>
            </Nav>
            <Footer>
                <FooterLink href="/terms">Terms and Conditions</FooterLink>
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
                <FooterLink href="/contact">Contact Us</FooterLink>
            </Footer>
        </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
    background: var(--color-backdrop);  
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
`;

const Content = styled(DialogContent)`
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;    
    height: 100%;  
    padding: 32px 22px 32px 32px;    
    width: 300px;    
`;

const Filler = styled.div`
    flex: 1;
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    flex: 0;
    gap: 16px;
`

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: end;
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const FooterLink = styled.a`
  font-size: ${14 / 16}rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-700);
  font-weight: ${WEIGHTS.normal};
`;

const CloseButton = styled(UnstyledButton)`
    position: absolute;
    top: 10px;
    right: 0;
    padding: 16px;
`;

export default MobileMenu;
