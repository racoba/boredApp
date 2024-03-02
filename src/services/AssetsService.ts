import axios from "axios";
import { BRAPIAsset } from "@/models/index"

export const getAsset = async (quote: string[]): Promise<any> => {
    const url = `https://brapi.dev/api/quote/${quote}?token=fHiYu4SNhgs5SgyMRUifwB`;
    try {
        const response = await axios.get(url);
        const responseData = response.data;
        return responseData;
        // return {
        //     currentPrice: responseData.regularMarketPrice,
        //     variation: responseData.regularMarketChange,
        //     symbol: responseData.symbol
        // };
    } catch (error) {
        console.error("Error fetching asset:", error);
        throw error;
    }
};
