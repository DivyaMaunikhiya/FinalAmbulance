import React,{useState,useEffect} from 'react';
import Axios from "axios";
import ListGroup from "./listgroup";
import Home from "./Home";
import Pilots from "./Pilots";
import Fleet from "./Fleet";

const Fighter = () => {
    const [data,setData] = useState([]);
    const [selected,setSelected]=  useState("Home");
    const searchApi=async()=>{
        const genres = await Axios.get(
            "https://divyamaunikhiya.github.io/TestAPIs/Data/hello.json"
        );
        setData(genres.data);
        setSelected(genres.data[0]);
    }
    useEffect(()=>{
        searchApi()
    },[]
    )
    const styles = {
        padding:"50px"
    }

    const handleGenreSelect=(item)=>{
        setSelected(item);
    }
    return (
        <div className="ambulanceTable">
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        items={data}
                        selectedItem={selected}
                        onItemSelect={handleGenreSelect}
                    />
                </div>
                <div className="col">
                    {selected.name=="Home"?
                    <Home/>:<>{selected.name=="Pilots"?<Pilots/>:<Fleet></Fleet>}</>}
                </div>
            </div>

        </div>

          );
}

export default Fighter;