import axiosClient from "./axiosClient";


const getStudent = (data)=>{
    const url ='/student';
    return axiosClient.get(url,data);
}

const getAllStudent = ()=>{
    const url ='/allstudent';
    return axiosClient.get(url);
}

const updateStudent = (data)=>{
    const url ='/updatestudent';
    return axiosClient.post(url,data);
}
const createStudent = (data)=>{
    const url ='/createstudent';
    return axiosClient.post(url,data);
}

const deleteStudent = (data)=>{
    const url ='/student';
    return axiosClient.delete(url,data);
}

export {getStudent,getAllStudent,updateStudent,deleteStudent,createStudent}