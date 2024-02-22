import  { useState } from 'react';

const StateProducts = () => {
    const [formVisible, setFormVisible] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [product, setProducts] = useState(false);

    const [formData, setFormData] = useState({
        productPricePerUnit :"",
        noOfClients:"",
        grossRevenue:"",
        LocalDate :"",
        saleDate:"",
        returns:"",
        discounts:"",
        allowances:"",
        netRevenue:"",
        moneyAddedBankName:"",
        status:"",
        productName:"",
   
    })
    return {
        formVisible,
        setFormVisible,
        formData,
        setFormData,
        toggle,
        setToggle,
        product, 
        setProducts
    }
}

export default StateProducts;

