import React from "react";

export default class ErrorPage extends React.Component {
  render() {
    return (
      <div>
        "You've exceeded the Rate Limit. Please visit
        https://www.coingecko.com/en/api/pricing to subscribe to our API plans
        for higher rate limits."
      </div>
    );
  }
}
