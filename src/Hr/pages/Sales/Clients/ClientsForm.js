import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import  { useEffect, useState } from "react";

import * as ClientsApi from "./ClientsApi";
import { useNavigate } from "react-router-dom";
import StateClients from "./StateClients";

const ClientsForm = ({ formData, setFormData, setFormVisible }) => {
  const navigate = useNavigate();
  const { setClients, setToggle } = StateClients();

  const saveClients = async () => {
    await ClientsApi.saveClients(formData);
    navigate("/hr/sales/client");
  };
  const loadClients = async () => {
    const result = await ClientsApi.loadClients();
    setClients(result);
  };

  useEffect(() => {
    loadClients();
   
  }, []);


  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  let buttonCheck = true
  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
      clientName: "",
      contactNumber: "",
      clientEmailAddress: "",
      address: "",
      contactDetails: "",
      clientPosition: "",
      productDetails: "",
      purchaseDate: "",
      productQuantities: "",
      Preferences: "",
      billingAddress: "",
      paymentMethod: "",
      billingContactInformation: "",
      communicationHistory: "",
      comments: "",
      status: "",
    });
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log("Form submitted:", formData);
    
  };

  const Type = [
    {
      value: "Cash",
      label: "Cash",
    },
    {
      value: "UPI",
      label: "UPI",
    },
    {
      value: "NetBanking",
      label: "Net Banking",
    },
  ];

  console.log("hii",formData);

  return (
    <form onSubmit={handleSubmit}>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Client Name"
          type="text"
          fullWidth
          name="clientName"
          id="clientName"
          value={formData.clientName || ""}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Contact Number"
          type="text"
          fullWidth
          name="contactNumber"
          id="contactNumber"
          value={formData.contactNumber}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label="Email"
          type="email"
          fullWidth
          name="clientEmailAddress"
          id="clientEmailAddress"
          value={formData.clientEmailAddress}
          onChange={(e) => handleInputChange(e)}
          required
          // error={!isEmailValid}
          // helperText={
          //   !isEmailValid ? "Please enter a valid email address." : ""
          // }
        />

        <TextField
          margin="dense"
          label="Address"
          type="text"
          fullWidth
          name="address"
          id="address"
          value={formData.address}
          onChange={(e) => handleInputChange(e)}
          required
          // error={addressError !== ""}
          // helperText={addressError}
        />
      </div>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Contact Details"
          type="text"
          fullWidth
          name="contactDetails"
          id="contactDetails"
          value={formData.contactDetails}
          onChange={(e) => handleInputChange(e)}
          required
          // error={addressError !== ""}
          // helperText={addressError}
        />

        <TextField
          margin="dense"
          label="Client Position"
          type="text"
          fullWidth
          name="clientPosition"
          id="clientPosition"
          value={formData.clientPosition}
          onChange={(e) => handleInputChange(e)}
          required
          // error={addressError !== ""}
          // helperText={addressError}
        />

        <TextField
          margin="dense"
          label="Product Details"
          type="text"
          fullWidth
          name="productDetails"
          id="productDetails"
          value={formData.productDetails}
          onChange={(e) => handleInputChange(e)}
          required
          // error={addressError !== ""}
          // helperText={addressError}
        />
      </div>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Purchase Date"
          type="date"
          fullWidth
          name="purchaseDate"
          id="purchaseDate"
          value={formData.purchaseDate}
          onChange={(e) => handleInputChange(e)}
          required
          // error={dateError}
          // helperText={dateError && "Please select the current date"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          margin="dense"
          label="Product Quantities"
          type="number"
          fullWidth
          name="productQuantities"
          id="productQuantities"
          value={formData.productQuantities}
          onChange={(e) => handleInputChange(e)}
          required
          // error={errorCode !== ""}
          // helperText={errorCode}
        />

        <TextField
          margin="dense"
          label="Preferences"
          type="text"
          fullWidth
          name="Preferences"
          id="Preferences"
          value={formData.Preferences}
          onChange={(e) => handleInputChange(e)}
          required
          // error={addressError !== ""}
          // helperText={addressError}
        />
      </div>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Billing Adress"
          type="text"
          fullWidth
          name="billingAddress"
          id="billingAddress"
          value={formData.billingAddress}
          onChange={(e) => handleInputChange(e)}
          required
         
        />
        <TextField
          id="paymentMethod"
          margin="dense"
          select
          label="Payment Type"
          fullWidth
          defaultValue=""
          SelectProps={{
            native: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
          value={formData.paymentMethod}
          onChange={(e) => handleInputChange(e)}
          name="paymentMethod" 
        >
          {Type.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          margin="dense"
          label="Billing Contact Information"
          type="text"
          fullWidth
          name="billingContactInformation"
          id="billingContactInformation"
          value={formData.billingContactInformation}
          onChange={(e) => handleInputChange(e)}
          required
       
        />
      </div>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Communication History"
          type="text"
          fullWidth
          name="communicationHistory"
          id="communicationHistory"
          value={formData.communicationHistory}
          onChange={(e) => handleInputChange(e)}
          required
         
        />
        <TextField
          margin="dense"
          label="comments"
          type="text"
          fullWidth
          name="comments"
          id="comments"
          value={formData.comments}
          onChange={(e) => handleInputChange(e)}
          required
         
        />
        <TextField
          margin="dense"
          label="status"
          type="text"
          fullWidth
          name="status"
          id="status"
          value={formData.status}
          onChange={(e) => handleInputChange(e)}
          required
         
        />
      </div>
      <div className="data-buttons">
        <Button
          id="input-btn-submit"
          className="submit"
          type="submit"
          variant="outlined"
          disabled={buttonCheck ? false : true}
          onClick={saveClients}
        >
          Submit
        </Button>
        <Button
          id="input-btn-cancel"
          className="cancel"
          variant="outlined"
          onClick={cancelButton}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default ClientsForm;
