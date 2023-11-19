import { getApiCall, postApiCall, putApiCall } from "../../utils/axios";
import { BASE_URL, API } from "../../utils/defines";

export const UserLogin = async (payload:any, callback:any) => {
      const url = `${BASE_URL}${API.Login}`;
      try {
        const response = await postApiCall(url, payload);
        return response;
      } catch ({ response }) {
        throw new Error(response?.data?.error?.message);
      }
    };