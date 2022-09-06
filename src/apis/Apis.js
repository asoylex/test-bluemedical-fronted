import axios from "axios";


class Api {
    static headers() {
        return {
            Accept: 'application/json',
            'Content-type': 'application/json',
        };
    }
    static getAllTypeVehicles(params){
        return this.consumirServicio('/typevehicles',  null, 'GET');
    }

    static addTypeVehicle(params){
        return this.consumirServicio('/typevehicle',  params, 'POST');
    }

    static entrance(params){
        return this.consumirServicio('/entranceexit/entrance',  params, 'POST');
    }

    static exit(params){
        return this.consumirServicio('/entranceexit/exit',  params, 'POST');
    }

    static upgradeVehicle(params){
        return this.consumirServicio('/vehicle/upgrade',  params, 'POST');
    }

    static getReportPayment(params){
        return this.consumirServicio('/reportpayment',  params, 'GET');
    }

    static getLicensePlate(params){
        return this.consumirServicio('/getlicenseplate',  params, 'GET');
    }

    static cleanMonth(params){
        return this.consumirServicio('/cleanmonth',  params, 'GET');
    }




    static consumirServicio(route, params, method) {
        let url = 'http://127.0.0.1:8000/api'+ route ;

        let config = {
            method,
            url,
            data: params
        }
        if(method=='GET'){
          config.params = params;
        }

        return axios.request( config ).then( response => {
            return Promise.resolve(response.data)
        }).catch(e => {
            return Promise.reject(e)
        })
    }
    
    
}
export default Api