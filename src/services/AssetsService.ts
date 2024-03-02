import axios from "axios";

export const getAsset = async (quote: string[]): Promise<any> => {
    const baseUrl = "https://core.gorila.com.br";
    const key = "3SUH641QUKARKMEN"

    try {
        // const response = await axios.get(`${baseUrl}/securities?${authorization}`);
        // const responseData = response.data;
        // return responseData;
    } catch (error) {
        console.error("Error fetching asset:", error);
        throw error;
    }
};
