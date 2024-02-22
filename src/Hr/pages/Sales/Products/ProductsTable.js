import React, { useState } from "react";
import { BiSolidHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import Button from "@mui/material/Button";


const ProductsTable = ({product, setFormVisible, setToggle, toggle ,setRecDelete}) => {
  const [search, setSearch] = useState("");
  const handleButtonClick = () => {
    setFormVisible((prev) => !prev);
  };
  const handleDelete = (id) => {
    setRecDelete(id);
  };

  console.log(product)
  const renderProductData = () => (
    <tr>
      <td colSpan="12" className="text-center">
        <h1>No Data Found!</h1>
        <p>It looks like there is no data to display in this table at the moment</p>
      </td>
    </tr>
  );

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
              ADD PRODUCTS
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
              <th>SL.NO</th>
              <th>Product Price</th>
              <th>No of Clients</th>
      
              <th colSpan="3">Actions</th>
            </tr>
          </thead>

          <tbody className="text-center">
            {product?.length === 0 ?
            (
               renderProductData()
            ) : (
              product &&
              product.map((product, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{product.productPricePerUnit}</td>
                    <td>{product.noOfClients}</td>
                  
                    {/* <td className="mx-2">
                    <Link to={`/sales/edit-sales/${sales.salesId}`}>
                      <FaEdit className="action-edit" />
                    </Link>
                  </td> */}
                    <td className="mx-3">
                      <FaTrashAlt
                        className="action-delete"
                        onClick={() => handleDelete(product.productId)}
                      />
                    </td>
                  </tr>
                )))}
          </tbody>
          <tfoot>
            <tr></tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ProductsTable;
