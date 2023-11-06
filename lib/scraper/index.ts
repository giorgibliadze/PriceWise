import axios from "axios";
import * as cheerio from "cheerio";

export async function scrapeAndStoreProduct(url: string) {
  if (!url) return;

  //BrightData proxy configuration
  const username = String("brd-customer-hl_25ee9ea8-zone-pricewise");
  const password = String("zau38uavmajh");
  const port = 22225;
  const session_id = (1000000 * Math.random()) | 0;
  const options = {
    auth: {
      username: `${username}-session-${session_id}`,
      password,
    },
    host: "brd.superproxy.io",
    port,
    rejectUnauthorized: false,
  };

  try {
    //Fetch The Product Page
    const response = await axios.get(url, options);

    console.log(response.data);
  } catch (error: any) {
    throw new Error(`Failed to scrape product: ${error.message}`);
  }
}
