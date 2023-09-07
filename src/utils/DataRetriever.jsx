import axios from "axios";

export async function api(url, search) {
  const base = "https://api.coingecko.com/api/v3";
  const fullUrl = `${base}${url}${search}`;
  const getfileName = () => {
    const fullUrlName = url.split("/");
    console.log(
      "🚀 ~ file: DataRetriever.jsx:8 ~ getfileName ~ fullUrlName:",
      fullUrlName
    );

    if (fullUrlName[1] === "coins") {
      return "bitcoin.history7-11-2022";
    } else if (fullUrlName[2] === "bitcoin" && fullUrlName.length === 4) {
      return "bitcoin.market_charts";
    } else {
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
