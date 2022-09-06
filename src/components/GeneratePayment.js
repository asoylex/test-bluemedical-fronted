import React from 'react'
import { TextPayment } from './StringsLabels'
import Api from "../apis/Apis";
import { useState } from "react";
import { useEffect } from "react";
import swal from 'sweetalert'




function GeneratePayment() {
    const [reportPayment, setReportPayment] = useState([]);

    useEffect(() => {
        getTypeVehicles();
    }, []);
    const getTypeVehicles = () => {
        Api.getReportPayment()
            .then((response) => {
                console.log(response.data);
                let dataV = response.data;

                setReportPayment(response.data);
            })
            .catch((e) => { });
    }
    const clearMonth= () => {
        Api.cleanMonth()
            .then((response) => {

                swal({
                    title: 'Complete!',
                    text:'successfully',
                    icon: 'success',
                })
                window.location.reload()

            })
            .catch((e) => { });
    }
    return (
        <div style={{ textAlign: 'center', marginTop: 180, paddingLeft: 100, paddingRight: 100 }}>
            <TextPayment />
            <br />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">License Plate</th>
                        <th scope="col">Total Minutes</th>
                        <th scope="col">Price</th>

                    </tr>
                </thead>
                <tbody>
                        {reportPayment.map((item) => (
                            <>
                                 <tr>
                                 <th scope="row">{item.id}</th>
                                <td>{item.license_plate}</td>
                                <td>{item.total_min}</td>
                                <td>$ {parseFloat(item.total_min * 0.05).toFixed(2)} </td>
                                 </tr>
                            </>
                        ))}
                </tbody>
            </table>
            <br />
            <button className="btn btn-danger"  onClick={clearMonth} style={{ width: 150 }}>
                Clear Moth
            </button>
        </div>


    )
}

export default GeneratePayment