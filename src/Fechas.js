import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Alinear el contenido en la parte superior */
  min-height: 100vh;
  padding: 20px;
  padding-top: 60px; /* Espacio en la parte superior */
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
  width: 400px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column; /* Organizar el texto y los botones en columna */
`;

const Title = styled.h1`
  font-size: 2rem;
  color: black;
  margin: 0; /* Eliminar margen superior e inferior */
  line-height: 1.2; /* Ajustar line-height para controlar el espacio entre líneas */
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin: 0; /* Eliminar margen superior e inferior */
  line-height: 1.2; /* Ajustar line-height para controlar el espacio entre líneas */
  color: black;
`;

const Button = styled.button`
  font-family: 'Baskervville SC', serif;
  padding: 10px 20px;
  border: 2px solid black;
  background-color: transparent;
  font-size: 2rem;
  cursor: pointer;
  margin-top: 15px; /* Espacio superior para el botón */
  &:hover {
    background-color: black;
    color: white;
  }
`;

const Fechas = () => {
    return (
      <Container>
        <Content>
          <AlbumCover src="https://i.ibb.co/dMRrtk3/Captura-desde-2024-09-08-20-18-02.png" alt="Album Cover" />
          <TextContainer>
            <Title>viernes 20 de septiembre de 2024</Title>
            <Subtitle>batacazo cultural, medrano 627, CABA</Subtitle>
            <Subtitle>tocamos con planes para una fuga, boureal y bidones auxiliares</Subtitle>
              <Button>entradas</Button>
          </TextContainer>
        </Content>
      </Container>
    );
  };
  
  export default Fechas;
  