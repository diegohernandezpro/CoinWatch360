import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { CoinList, CoinPage, Portfolio } from "@/pages";
import { Header } from "@/components";
import { theme, GlobalStyle } from "@/styles";

export const App = () => {
  const [currency, setCurrency] = useState({
    type: "USD",
    currencySymbol: "$",
  });
  const [dark, setTheme] = useState(true);

  const handleCurrency = (type, currencySymbol) => {
    setCurrency({ type, currencySymbol });
  };

  const toggleTheme = () => {
    setTheme(!dark);
  };

  return (
    <ThemeProvider theme={dark ? theme.dark : theme.light}>
      <GlobalStyle />
      <StyledDiv>
        <Header handleCurrency={handleCurrency} toggleTheme={toggleTheme} />
        <Routes>
          <Route
            exact="true"
            path="/"
            element={
              <CoinList
                currency={currency.type}
                currencySymbol={currency.currencySymbol}
              />
            }
          />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route exact="true" path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </StyledDiv>
    </ThemeProvider>
  );
};

// export default class App extends React.Component {
//   state = {
//     themeType: true,
//     currency: "USD",
//     currencySymbol: "$",
//   };

//   handleCurrency = (currency, currencySymbol) => {
//     this.setState({ currency, currencySymbol });
//   };

//   toggleTheme = () => {
//     this.setState({ themeType: !this.state.themeType });
//   };

//   render() {
//     return (
//       <ThemeProvider theme={this.state.themeType ? theme.dark : theme.light}>
//         <GlobalStyle />
//         <StyledDiv>
//           <Header
//             handleCurrency={this.handleCurrency}
//             toggleTheme={this.toggleTheme}
//           />
//           <Routes>
//             <Route
//               exact="true"
//               path="/"
//               element={
//                 <CoinList
//                   currency={this.state.currency}
//                   currencySymbol={this.state.currencySymbol}
//                 />
//               }
//             />
//             <Route path="/coin/:id" element={<CoinPage />} />
//             <Route exact="true" path="/portfolio" element={<Portfolio />} />
//             <Route path="*" element={<h1>NOT FOUND</h1>} />
//           </Routes>
//         </StyledDiv>
//       </ThemeProvider>
//     );
//   }
// }

const StyledDiv = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;
