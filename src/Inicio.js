import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 20px;
  padding-top: 60px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  gap: 40px;
  margin-top: 0;
`;

const AlbumCover = styled.img`
  width: 500px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: black;
  margin-bottom: 5px;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px;
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
    <Container variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Content> {/* ✅ Se usa Content para la fila */}
        <AlbumCover
          src="https://i.ibb.co/yq8wkYL/fevernova-final.jpg"
          alt="Album Cover"
          loading='lazy'
        />
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