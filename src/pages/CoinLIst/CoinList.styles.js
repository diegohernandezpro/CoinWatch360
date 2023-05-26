import styled from "styled-components";

export const Container = styled.div`
  border 0.5rem solid ${({ theme }) => theme.nested.background};
  border-top: none;
  background: ${({ theme }) => theme.background};
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.color};
`;

export const Wrapper = styled.div`
  width: 100%;
  border: 2px solid red;
`;

export const ChartsContainer = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
  border: 2px solid blue;
  height: 21rem;
`;

export const ChartWrapper = styled.div`
  border: 1px solid yellowgreen;
  width: 100%;
`;

export const StyledP = styled.p`
  border: 1px dashed pink;
  width: 100%;
  font-size: 1rem;
  margin-top: 4rem;
`;

export const TableContainer = styled.div`
  border: 1px dashed orange;
  margin: 2rem 0rem 4rem;
  height: 40.5rem;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: row;
  color: inherit;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.nested.background};
  border-radius: 0.5rem;
`;

export const TableName = styled.div`
  border: 2px solid red;
  width: 19rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
`;

export const TablePrice = styled.div`
  border: 2px solid red;
  width: 8.3rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
`;

export const TableTimeChange = styled.div`
  border: 2px solid red;
  width: 5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
`;

export const TableVolume = styled.div`
  border: 2px solid red;
  width: 14rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
`;

export const TableSparkline = styled.div`
  border: 2px solid red;
  width: 10rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
`;
