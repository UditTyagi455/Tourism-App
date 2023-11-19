import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from './axiosInstance'
// import LocalStorage from "../../services/local_storage";

const renderParam = (paramName:any, paramValue:any, a:any) => {
  if (paramValue !== "" && paramValue !== null) {
    if(a===true){
      return `${paramName}=${paramValue}`;
    } else {
      return `&${paramName}=${paramValue}`;
    }
  }
  return "";
};


export const getApiCall = async (
  url:string,
  paramsData:any = { queryParams: {}, headers: {}, isAuthorized: false }
) => {
  try {
    let requestUrl =  url;
    const paramsLength = Object.values(paramsData?.queryParams);
    if (paramsLength.length) {
      requestUrl += `?`;
      Object.keys(paramsData?.queryParams).forEach((key,i) => {
        const url = renderParam(key, paramsData?.queryParams[key], i===0);
        if(url === ''){
        }else{
          requestUrl+=url
        }
      });
      // requestUrl = requestUrl?.slice(0, -1);
    }
    if (paramsData?.headers || paramsData?.isAuthorized) {
      let headers:any = { ...paramsData?.headers };
      if (paramsData?.isAuthorized) {
            const AuthToken = await AsyncStorage.getItem("token")
        headers.Authorization = `Bearer ${AuthToken}`;
      }
      const res = await axiosInstance.get(requestUrl, { headers });
      return res;
    } else {
      const res = await axiosInstance.get(requestUrl);
      return res;
    }
  } catch (err) {
    return Promise.reject(err)
  }
};

export const postApiCall = async (
  url:string,
  reqBody:any,
  paramsData:any = { queryParams: {}, headers: {}, isAuthorized: false }
) => {
  try {
    let requestUrl = url;
    const paramsLength = Object.values(paramsData?.queryParams);
    if (paramsLength.length) {
      requestUrl += `?`;
      Object.keys(paramsData?.queryParams).forEach((key) => {
        requestUrl += `${key}=${paramsData?.queryParams[key]}&`;
      });
      requestUrl = requestUrl.slice(0, -1);
    }
    if (paramsData?.headers || paramsData?.isAuthorized) {
      let headers = { ...paramsData?.headers };
      if (paramsData?.isAuthorized) {
            const AuthToken = await AsyncStorage.getItem("token")
        headers.Authorization = `Bearer ${AuthToken}`;
      }
      return await axiosInstance.post(requestUrl, reqBody, { headers });
    } else {
      return await axiosInstance.post(requestUrl, reqBody);
    }
    
  } catch (err) {
    return Promise.reject(err)
  }
};

export const putApiCall = async (
  url:string,
  reqBody:any,
  paramsData:any = { queryParams: {}, headers: {}, isAuthorized: false }
) => {
  
  try {
    let requestUrl = url;
    const paramsLength = Object.values(paramsData?.queryParams);
    if (paramsLength.length) {
      requestUrl += `?`;
      Object.keys(paramsData?.queryParams).forEach((key) => {
        requestUrl += `${key}=${paramsData?.queryParams[key]}&`;
      });
      requestUrl = requestUrl.slice(0, -1);
    }
    if (paramsData?.headers || paramsData?.isAuthorized) {
      let headers = { ...paramsData?.headers };
      if (paramsData?.isAuthorized) {
            const AuthToken = await AsyncStorage.getItem("token")
        headers.Authorization = `Bearer ${AuthToken}`;
      }
      return await axiosInstance.put(requestUrl, reqBody, { headers });
    } else {
      return await axiosInstance.put(requestUrl, reqBody);
    }
  } catch (err) {
    return Promise.reject(err)
  }
};

export const deleteApiCall = async (
  url:any,
  reqBody:any,
  paramsData:any = { queryParams: {}, headers: {}, isAuthorized: false }
) => {
  try {
    let requestUrl = url;
    const paramsLength = Object.values(paramsData?.queryParams);
    if (paramsLength.length) {
      requestUrl += `?`;
      Object.keys(paramsData?.queryParams).forEach((key) => {
        requestUrl += `${key}=${paramsData?.queryParams[key]}&`;
      });
      requestUrl = requestUrl.slice(0, -1);
    }
    if (paramsData?.headers || paramsData?.isAuthorized) {
      let headers = { ...paramsData?.headers };
      if (paramsData?.isAuthorized) {
            const AuthToken = await AsyncStorage.getItem("token")
        headers.Authorization = `Bearer ${AuthToken}`;
      }
      return await axiosInstance.delete(requestUrl, { data:{...reqBody}, headers });
    } else {
      return await axiosInstance.delete(requestUrl, { data:{...reqBody} });
    }
  } catch (err) {
    return Promise.reject(err)
  }
};
  