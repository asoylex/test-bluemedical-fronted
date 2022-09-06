import React from 'react'
import { TextEntrance } from './StringsLabels'
import Api from "../apis/Apis";
import { useState } from "react";
import { useEffect } from "react";
import swal from 'sweetalert'


export const RegisterEntrance = () => {
    const [entrance, setEntrance] = useState([]);
    const [data, setDate] = useState({
        license_plate: '',

    });

    function submit(e) {
        e.preventDefault()
        Api.entrance(data).then((response) => {
            console.log(response);
            if(response.status == 'success'){
                swal({
                    title:'Welcome',
                    text: 'Date Entry: '+ response.data.entrance,
                    icon: 'success'
                })
            }else{
                swal({
                    title:'Ups!',
                    text: response.message,
                    icon: 'info'
                }) 
            }
           
        })
            .catch((e) => { 
                swal(e.message)
            });
    }
    function handle(e) {
        console.log(e);
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setDate(newData)
        console.log(newData);

    }
   

    const getTypeVehicles = () => {
        Api.getAllVehicles()
            .then((response) => {
                //console.log(response.data);
                let dataV = response.data;

                setEntrance(response.data);
            })
            .catch((e) => { });
    }
    return (
        <div className="App" style={{ marginTop: 220 }}>
            <TextEntrance/>
            <form onSubmit={(e) => submit(e)} >
                <input className='mb-3' id='license_plate' onChange={(e) => handle(e)} value={data.license_plate} style={{ width: 300 }}></input>
                <br></br>
                <br></br>
                <button className='btn btn-success' style={{ width: 150 }}>Entrance</button>
            </form>
        </div>
    )
}
