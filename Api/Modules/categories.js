import { api } from "../index";
// import { toast } from "@/ApiConstance/toast";

export default {
  // all category details
  async AllCategory(payload) {   
    return await api.post(`/allcategories`, payload);
  },
}