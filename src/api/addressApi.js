import axiosClient from "./axiosClient"
const addressApi={
    getAllCity:()=>{
        const url='/province/'
        return axiosClient.get(url);
    },
    getAllDistrict:(params)=>{
        const url=`province/district/${params}`
        return axiosClient.get(url);
    },
    getAllWard:(params)=>{
        const url=`province/ward/${params}`
        return axiosClient.get(url);
    }
}
export default addressApi;