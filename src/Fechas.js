import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
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
  font-size: 2rem;
  color: black;
  margin: 0;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin: 0;
  line-height: 1.2;
  color: black;
`;

const Button = styled.button`
  font-family: 'Baskervville SC', serif;
  padding: 10px 20px;
  border: 2px solid black;
  background-color: transparent;
  font-size: 2rem;
  cursor: pointer;
  margin-top: 15px;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const TableContainer = styled.div`
  margin-top: 100px;
  width: 90%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: black;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid black;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid black;
`;

const TableCell = styled.td`
  padding: 10px;
`;

const ExternalLink = styled.a`
  text-decoration: none;
  color: black;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const Fechas = () => {
  return (
    <Container>
      <Content>
        <AlbumCover src="https://i.ibb.co/dMRrtk3/Captura-desde-2024-09-08-20-18-02.png" alt="Album Cover" />
        <TextContainer>
          <Title>viernes 20 de septiembre de 2024</Title>
          <Subtitle>batacazo cultural, medrano 627, caba</Subtitle>
          <Subtitle>tocamos con planes para una fuga, boureal y bidones auxiliares</Subtitle>
          <Button>entradas</Button>
        </TextContainer>
      </Content>

      <TableContainer>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>próximos shows</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableCell>septiembre 20, 2024</TableCell>
              <TableCell>batacazo cultural, medrano 627, caba</TableCell>
              <TableCell>tickets solo en puerta</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>septiembre 29, 2024</TableCell>
              <TableCell>moscú, av. córdoba 4335, caba</TableCell>
              <TableCell>
                <ExternalLink href="https://www.passline.com/eventos/city-noise-vol-12" target="_blank" rel="noopener noreferrer">
                  tickets
                </ExternalLink>
              </TableCell>

            </TableRow>
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Fechas;
