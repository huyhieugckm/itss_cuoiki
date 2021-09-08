import React, {useEffect, useState} from 'react';
function Cshook(arrList){
    const [data,setData] = useState();
    const [arrData,setArrData] = useState(arrList);
     const insertData=(e)=>{
         setData(e.target.value);
     }
     const onSubmit=()=>{
         arrList.push(data);
         setArrData([...arrData,data]);
         console.log(arrList);
     }
     useEffect(()=>{
         console.log(arrList);
     },[arrList])
     return [insertData,onSubmit,data,arrData]
}
export default Cshook;