import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ced9def2d0e546cca308273b2e623b7d',
    }
})