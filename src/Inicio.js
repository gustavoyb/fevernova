// src/Inicio.jsx
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Cambiar a 'flex-start' para alinear el contenido en la parte superior */
  min-height: 100vh;
  padding: 20px;
  padding-top: 60px; /* Agregar un poco de espacio en la parte superior */
`;

const Content = styled.div`
  display: flex;
  flex-direction: row; /* Mantener la alineación de la imagen y el texto en una fila */
  align-items: center; /* Centrar verticalmente los elementos */
  text-align: left; /* Alinear el texto a la izquierda */
  gap: 40px; /* Espacio entre la imagen y el texto */
  margin-top: 0; /* Reducir el margen superior */
`;

const AlbumCover = styled.img`
  width: 500px;
  height: 500px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column; /* Organizar el texto y los botones en columna */
  align-items: center; /* Alinear el texto a la izquierda */
`;

const Title = styled.h1`
  font-size: 4rem;
  color: black;
  margin-bottom: 5px; /* Reducir el margen inferior para acercar el texto */
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px; /* Ajustar el margen inferior para el subtítulo */
  color: black;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  font-family: 'Baskervville SC', serif;
  padding: 10px 20px;
  border: 2px solid black;
  background-color: transparent;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const Inicio = () => {
  return (
    <Container>
      <Content>
        <AlbumCover src="https://i.ibb.co/yq8wkYL/fevernova-final.jpg" alt="Album Cover" />
        <TextContainer>
          <Title>fevernova</Title>
          <Subtitle>el primer ep ya está disponible</Subtitle>
          <ButtonGroup>
            <Button>bandcamp</Button>
            <Button>spotify</Button>
            <Button>youtube</Button>
          </ButtonGroup>
        </TextContainer>
      </Content>
    </Container>
  );
};

export default Inicio;
