import {api} from "../index";

export default {
    async AllProducts(payload){
        return await api.post('/categoryallproducts',payload);
    }
}