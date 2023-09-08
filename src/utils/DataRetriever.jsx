import axios from "axios";

export async function api(url, search) {
  const base = "https://api.coingecko.com/api/v3";
  const fullUrl = `${base}${url}${search || ""}`;

  const getfileName = () => {
    const fullUrlName = url.split("/").slice(1);
    const urlKey = fullUrlName[fullUrlName.length - 1];

    switch (urlKey) {
      case "market_chart":
        return "bitcoin.market_charts";
      case "history":
        return "bitcoin.history";
      default:
        return fullUrlName[fullUrlName.length - 1];
    }
  };

  if (import.meta.env.MODE === "development") {
    try {
      const file = await import(`./mocks/${getfileName()}.json`);
      return { data: file.default };
    } catch (error) {
      console.error("Error loading mock data:", error);
      return { data: [] };
    }
  } else {
    const response = await axios(fullUrl);
    return response;
  }
}
