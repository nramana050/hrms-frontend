import React, { useState } from "react";
import { BiSolidHide } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import DataNotFound from "../../../asset/images/no data 1.png";

const ClientsTable = ({ setFormVisible, setToggle, clients,toggle, setRecDelete }) => {
  const [search, setSearch] = useState("");

  

  const renderClientData = () => {
    return (
      <tr>
        <td colSpan="12" className="text-center">
          <img
            style={{ margin: "50px 0 50px 0" }}
            src={DataNotFound}
            alt="No Data Found"
          ></img>
          <h1>No Data Found!</h1>
          <p>
            It Looks like there is no data to display in this table at the
            moment
          </p>
        </td>
      </tr>
    );
  };

  const handleDelete = (id) => {
    setRecDelete(id);
  };
  console.log("data", clients);

  const handleButtonClick = () => {
    setFormVisible((prev) => !prev);
  
  };

  console.log(clients)  
  return (
    <div
      className="d-flex"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className=" table-ka-top-btns">
        <Button
          variant="outlined"
          onClick={() => {
            setToggle(!toggle);
            handleButtonClick();
          }}
          id="add-btn"
          style={{ width: "max-content", marginTop: "20px" }}
        >
          {toggle ? (
            <div className="hide">
              <BiSolidHide />
              HIDE
            </div>
          ) : (
            <div className="add">
              <MdAdd />
              ADD CLIENTS
            </div>
          )}
        </Button>
        {
          <div className="search-print">
            <input
              type="text"
              className="search-beside-btn"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "20rem",
                borderRadius: "5px",
                height: "40px",
                padding: "10px",
                border: "1px solid rgba(247, 108, 36, 1)",
                marginRight: "30px",
              }}
            />
            <div className="d-flex mt-4 four-btn" style={{ gap: "10px" }} y>
              <button
                className=""
                style={{
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  width: "100px",
                  justifyContent: "center",
                }}
              >
                PRINT
              </button>
              <button
                className=""
                style={{
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  width: "100px",
                  justifyContent: "center",
                }}
              >
                PDF
              </button>
              <button
                className=""
                style={{
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  width: "100px",
                  justifyContent: "center",
                }}
              >
                EXCEL
              </button>
              {/**  <CSVLink
            filename="worksheet.csv"
            style={{ textDecoration: "none" }}
          >*/}
              <button
                className=""
                style={{
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  width: "100px",
                  justifyContent: "center",
                }}
              >
                CSV
              </button>
            </div>
          </div>
        }
      </div>
      <div className="table-start-container">
        <table id="table" className="table table-bordered table-hover shadow">
          <thead>
            <tr className="text-center">
              <th class="border-bottom">SL No</th>
              <th class="border-bottom">Clients Name</th>
             
              <th>Payment Method</th>
              <th>Client Position</th>
              <th>Status</th>
              <th colSpan="3">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {clients?.length === 0 ? (
              renderClientData()
            ) : (
              clients &&
              clients.map((client, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{client.clientName}</td>
                 
                  <td>{client.paymentMethod}</td>
                  <td>{client.clientPosition}</td>
                  <td>{client.status}</td>
                  {/* <td className="mx-2">
                    <Link to={`/sales/edit-sales/${sales.salesId}`}>
                      <FaEdit className="action-edit" />
                    </Link>
                  </td> */}
                  <td className="mx-3">
                    <FaTrashAlt
                      className="action-delete"
                      onClick={() => handleDelete(client.clientsId)}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientsTable;
