import axios from "axios";


export const getQuestions = async () => {
    const data =  await axios.get("/data.json")
    return data.data
}


