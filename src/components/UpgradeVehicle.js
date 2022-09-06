import React from "react";
import Api from "../apis/Apis";
import { useState } from "react";
import { useEffect } from "react";
import { TextMoreOptions } from "./StringsLabels";
import swal from 'sweetalert'

export const UpgradeVehicle = () => {
    const [typevehicles, setTypevehicles] = useState([]);
    const [data, setDate] = useState({
        license_plate: '',
        type_vehicle_id: 1
    });

    useEffect(() => {
        getTypeVehicles();
    }, []);
    const getTypeVehicles = () => {
        Api.getAllTypeVehicles()
            .then((response) => {
                //console.log(response.data);
                let dataV = response.data;

                setTypevehicles(response.data);
            })
            .catch((e) => { });
    }
    function submit(e) {
        e.preventDefault()
        Api.upgradeVehicle(data).then((response) => {
            console.log(response);
            swal({
                title: 'Vehicle upgraded successfully',
                text:'License Plate: '+ response.data.license_plate+'\n Type Vehicle: '+ response.data.type_vehicle_id,
                icon: 'success'
            })
        })
            .catch((e) => { });
    }
    function handle(e) {
        console.log(e);
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setDate(newData)
        console.log(newData);

    }
    return (
        <>
            <div style={{ marginTop: 120, textAlign: "center" }}>
                <TextMoreOptions />
                <form onSubmit={(e)=> submit(e) }>
                    <input type="text" id='license_plate' onChange={(e) => handle(e)} value={data.license_plate} style={{ width: 300 }}></input>
                    <br/>
                    <br/>

                    <select onChange={(e) => handle(e)}  id='type_vehicle_id'>
                        {typevehicles.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                    <br></br>
                    <br></br>
                    <button className="btn btn-success" style={{ width: 150 }}>
                        Upgrade
                    </button>
                </form>
              
            </div>
        </>
    );
};

