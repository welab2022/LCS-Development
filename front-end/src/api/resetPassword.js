import axiosClient from "./axiosClient";

const forgotPassword=(data)=>{
    const url ='/forgotpassword';
    return axiosClient.post(url,data);
}

const resetPassword=(data)=>{
    const url ='resetpassword/'+ data.params;
    return axiosClient.post(url,data.password);
}

export {forgotPassword, resetPassword}