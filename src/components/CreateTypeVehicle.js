import React from 'react'
import { TextCreateTypeVehicle } from './StringsLabels'
import { useState } from "react";
import axios from 'axios';
import Api from '../apis/Apis';
import swal from 'sweetalert'



const CreateTypeVehicle = () => {
    const [data, setDate] = useState({
        name:'',
        description:''
    });

    function submit(e){
        e.preventDefault()
        Api.addTypeVehicle(data).then((response) => {
            console.log(response);
           swal({
            title:'Vehicle added successfully',
            icon:'success'
           })
          })
          .catch((e) => {});
    }
    function handle(e) {
        console.log(e);
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setDate(newData)
        console.log(newData);
        
    }

    return (
        <div style={{ marginTop: 120, textAlign: "center", }}>
            <TextCreateTypeVehicle />
            <form style={{ textAlign: 'center' }} onSubmit={(e)=> submit(e) } >
                <div className="form-group ">
                    <label >Name</label>
                    <br />
                    <input type="text" id='name' onChange={(e) => handle(e)} value={data.name} style={{ width: 300 }}></input>
                </div>
                <br />

                <div className="form-group">
                    <label>Description</label>
                    <br/>
                    <input type="text"id='description' onChange={(e) => handle(e)} value={data.description} style={{ width: 300 }}></input>
                </div>
                <br />
                <button type="submit" style={{ width: 200 }} className="btn btn-primary">Save</button>
            </form>

        </div>
    )
}

export default CreateTypeVehicle