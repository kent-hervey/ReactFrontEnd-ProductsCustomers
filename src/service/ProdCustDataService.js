import axios from 'axios'


class ProdCustDataService {






    updateCustomer(id, customer) {
        //console.log('executed service')
        return axios.put(`api/customers/${id}`, customer);
    }






}

export default new ProdCustDataService()













