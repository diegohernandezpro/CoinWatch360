import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./ErrorPage.styles";

export const ErrorAPICallPage = () => {
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 8000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (redirect) {
      navigate("/");
    }
  }, [redirect, navigate]);

  return (
    <Container>
      <h1>Oops! An error occurred.</h1>
      <h3>This Coin can't be accessed at the moment</h3>
      <p>
        Please wait and try again later, you will be redirected back to the
        coins page shortly. Thank You!
      </p>
    </Container>
  );
};
