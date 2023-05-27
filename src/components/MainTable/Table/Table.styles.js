import styled from "styled-components";

export const StyledP = styled.p`
  width: 100%;
  font-size: 1rem;
  margin-top: 4rem;
`;

export const TableContainer = styled.div`
  margin: 2rem 0rem 4rem;
  height: 40.5rem;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  color: inherit;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.nested.background};
  border-radius: 0.5rem;
  overflow: scroll;
  border: 2px solid yellowgreen;
`;

export const TableNum = styled.div`
  // border: 2px solid red;
  width: 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
`;

export const TableName = styled.div`
  // border: 2px solid red;
  width: 19rem;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
`;

export const TablePrice = styled.div`
  // border: 2px solid red;
  width: 8.3rem;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
`;

export const TableTimeChange = styled.div`
  // border: 2px solid red;
  width: 5rem;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
`;

export const TableVolume = styled.div`
  // border: 2px solid red;
  width: 14rem;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
`;

export const TableSparkline = styled.div`
  // border: 2px solid red;
  width: 10rem;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  height: 100%;
`;

export const TableRow = styled.div`
  border: 1px dashed orange;
  display: flex;
  justify-content: space-evenly;
  height: 2.5rem;
  widtH; 100%;
`;
