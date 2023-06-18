import React, { useState } from "react";
import axios from "axios";

export const CoinPage = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [coin, setCoin] = useState(null);

  return <h1>CoinPage</h1>;
};
