import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, {useEffect, useState} from "react";
import Axios from "axios";
import {Link} from "react-router-dom";
import Pagination from "../common/pagination";

function Pilots() {
    const [data,setData] = useState([]);
    const [showData,setShowdata] = useState([]);
    const [search,setSearch] = useState("");
    const [currentpage,setpage] = useState(1);

    const searchApi=async()=>{
        const genres = await Axios.get(
            "https://divyamaunikhiya.github.io/TestAPIs/Data/pilot.json"
        );
        setData(genres.data);

    }
    useEffect(()=>{
            searchApi()
             formpageData(1)
        },[]
    )
    useEffect(()=>{
            formpageData(currentpage)
        },[data,currentpage]
    )
    const formpageData=(pagenumber)=>{
        let pg = (pagenumber-1)*4;
        let till= pagenumber*4;
        console.log(pg);
        console.log(till);
        let arr= [];
        for(let i= pg;i<till&&i<data.length;i++){
            arr.push(data[i]);
        }
        setShowdata(arr);

    }
    useEffect(()=>{
        if (search!==""&&search!=undefined&&data!=undefined){
        let fil = data.filter(m =>
            m.name.toLowerCase().startsWith(search)
        );

        setShowdata(fil);
        }else{
            formpageData(currentpage)
        }
    },[search])


    console.log(showData)
    return (
       <>
           <input
               type="text"
               name="query"
               className="form-control my-3"
               placeholder="Search by Name"
               value={search}
               onChange={(val)=>{setSearch(val.currentTarget.value)}}
           />
           <table className="table">
               <thead>
               <tr>
                   <th>Name</th>
                   <th>Phone</th>
                   <th>Pic</th>
                   <th>Location</th>
                   <th />
                   <th />
               </tr>
               </thead>
               <tbody>
               {Array.isArray(showData)&&showData[0]!=undefined?showData.map(data1 => (
                   <tr key={data1._id}>
                       <td>
                          {data1.name}
                       </td>
                       <td>{data1.phoneNumber}</td>
                       <td>{data1.pic}</td>
                       <td>{data1.location}</td>
                       <td>
                           <button
                               className="btn btn-danger btn-sm"
                           >
                               View
                           </button>
                       </td>
                   </tr>
               )):<></>}
               </tbody>
           </table>
           <Pagination
               itemsCount={data.length}
               pageSize={4}
               currentPage={currentpage}
               onPageChange={(page)=>{setpage(page)}}
           />
       </>
    );
}

export default Pilots;