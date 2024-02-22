import React, { useState } from "react";
import { BiSolidHide } from "react-icons/bi";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { deleteSales } from "./SalesApi";
import Button from "@mui/material/Button";


const SalesTable = ({ sales, setFormVisible, setToggle, toggle,setRecDelete }) => {
  const [search, setSearch] = useState("");

  const handleButtonClick = () => {
    setFormVisible((prev) => !prev);
  };
  const handleDelete = (id) => {
    setRecDelete(id);
  };

  console.log(sales)

  const renderSalesData = () => (
    <tr>
      <td colSpan="12" className="text-center">
        <h1>No Data Found!</h1>
        <p>It looks like there is no data to display in this table at the moment</p>
      </td>
    </tr>
  );

  return (
    <div className="d-flex" style={{ display: "flex", flexDirection: "column" }}>
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
              ADD SALES
            </div>
          )}
        </Button>
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
          <div className="d-flex mt-4 four-btn" style={{ gap: "10px" }}>
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
      </div>
      <div className="table-start-container">
        <table id="table" className="table table-bordered table-hover shadow">
          <thead>
            <tr className="text-center">
              <th>SL.NO</th>
              <th>Developer Cost</th>
              <th>User Price</th>
              <th>No of User</th>
              <th>Total Cost</th>
              <th>Status</th>
              <th colSpan="2">Actions</th>

            </tr>
          </thead>
          <tbody className="text-center">
            {sales?.length === 0 ? (
              renderSalesData()
            ) : (
              sales &&
              sales.map((sale, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{sale.developerCost}</td>
                  <td>{sale.perUserPrice}</td>
                  <td>{sale.totalNumberOfUser}</td>
                  <td>{sale.totalCost}</td>
                  <td>{sale.status}</td>
                  {/* <td className="mx-2">
                    <Link to={`/sales/edit-sales/${sales.salesId}`}>
                      <FaEdit className="action-edit" />
                    </Link>
                  </td> */}
                  <td className="mx-3">
                    <FaTrashAlt
                      className="action-delete"
                      onClick={() => handleDelete(sale.salesId)}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
          <tfoot>
            <tr></tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default SalesTable;
