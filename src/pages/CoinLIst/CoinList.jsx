import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Header } from "@/components";

import { Container } from "./CoinList.styles";

export default class CoinList extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <h1>CoinList</h1>
      </Container>
    );
  }
}
