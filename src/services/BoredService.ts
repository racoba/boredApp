import axios from "axios";
import { environment } from "../../environment";

const baseUrl = `${environment.boredUrl}`;

const getRandomActivity = async() => {
    try{
        const response = await axios.get(baseUrl + "random")
        console.log(response)
        return response.data;
    } catch (e){
    }
}

const getRandomActivityByType = async(type: string) => {
    try{
        const response = await axios.get(baseUrl + `filter?type=${type}`)
        return response.data;
    } catch (e){
        console.log(e);
    }
}

const getActivityById = async(id: number) => {
    try{
        const response = await axios.get(baseUrl + `activity/${id}`)
        return response.data;
    } catch (e){
        console.log(e);
    }
}

export default {
    getActivityById,
    getRandomActivityByType,
    getRandomActivity
}