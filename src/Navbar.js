// Navbar.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import { FaSpotify, FaYoutube, FaInstagram } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* Asegura que el ancho del navbar ocupe todo el contenedor */
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)` /* Usa Link de react-router-dom */
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  text-align: center;
  flex-grow: 1;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem; 
`;

const SocialIconLink = styled.a`
  font-size: 1.5rem; 
  color: black;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavLinks>
        {/* Usa Link para navegar entre pantallas */}
        <NavLink to="/">inicio</NavLink>
        <NavLink to="/fechas">fechas</NavLink>
        <NavLink to="/videos">videos</NavLink>
        <NavLink to="/fotos">fotos</NavLink>
      </NavLinks>
      <Title>fevernova</Title>
      <SocialIcons>
        <SocialIconLink href="https://spotify.com" target="_blank" rel="noopener noreferrer">
          <FaSpotify />
        </SocialIconLink>
        <SocialIconLink href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </SocialIconLink>
        <SocialIconLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialIconLink>
      </SocialIcons>
    </NavbarContainer>
  );
}

export default Navbar;
