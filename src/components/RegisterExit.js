import React from 'react'
import { TextEntrance, TextExit } from './StringsLabels'
import Api from "../apis/Apis";
import { useState } from "react";
import { useEffect } from "react";
import swal from 'sweetalert'

const RegisterExit = () => {
    const [typevehicles, setTypevehicles] = useState([]);
    const [data, setDate] = useState({
        license_plate: '',
        type_vehicle: 1
    });

    useEffect(() => {
        getTypeVehicles();
    }, []);
    const getTypeVehicles = () => {
        Api.getAllTypeVehicles()
            .then((response) => {
                setTypevehicles(response.data);
            })
            .catch((e) => { });
    }

    function submit(e) {
        e.preventDefault()
        Api.exit(data).then((response) => {
            if(response.status == 'success'){
            console.log(response);
            swal({
                title: 'Good Bye!',
                text: '\n Date Entry: ' + response.data.entranceExit.entrance + '\n Date Exit: ' + response.data.entranceExit.exit + '\n Minutes total: ' + response.data.monthTime.total_min + '\n Amount to pay: $' + response.data.mounthPaymet,
                icon: 'success'
            })}else{
                swal({
                    title:'Ups!',
                    text: response.message,
                    icon: 'info'
                }) 
            }
        }).catch((e) => {
                swal(e)
        });
    }
    function handle(e) {
        console.log(e);
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setDate(newData)
        console.log(newData);

    }
    return (
        <div className="App" style={{ marginTop: 220 }}>
            <TextExit />
            <form onSubmit={(e) => submit(e)}>
                <input className='mb-3' id='license_plate' onChange={(e) => handle(e)} value={data.name} style={{ width: 300 }}></input>
                <br></br>
                <select onChange={(e) => handle(e)} >
                    {typevehicles.map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    ))}
                </select>
                <br></br>
                <br></br>

                <button className='btn btn-danger' style={{ width: 150 }}>Exit</button>
            </form>
        </div>
    )
}

export default RegisterExit