// components/styles.ts
import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: grey;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const WeekGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 16px;
  width: 90%;
`;

export const DayColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DayHeader = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

export const TaskItem = styled.div`
  width: 100%;
  position: relative;  // Permite o uso de position: absolute nos filhos
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  height: 50px;  // Tamanho fixo inicial
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  &:hover {
    height: 120px;  // Cresce apenas o card em hover
    border-color: #aaa;
  }
`;

export const TaskTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: #333;
`;

export const TaskDescription = styled.p`
  position: absolute;  // Mantém a descrição sobreposta sem alterar layout
  bottom: 10px;
  left: 10px;
  right: 10px;
  font-size: 1rem;
  color: #666;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${TaskItem}:hover & {
    opacity: 1;  // Exibe a descrição suavemente ao passar o mouse
  }
`;
