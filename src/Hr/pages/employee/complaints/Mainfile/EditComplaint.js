import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const EditComplaint = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [complaint, setcomplaint] = useState({
    complaintFrom: "",
    complaintTitle: "",
  });
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    loadcomplaint();
  }, []);

  const loadcomplaint = async () => {
    const result = await axios.get(
      `http://13.126.190.50:8082/complaints/get/${id}`
    );
    setcomplaint(result.data);
  };

  const handleInputChange = (e) => {
    setcomplaint({
      ...complaint,
      [e.target.name]: e.target.value,
    });
  };
  const updatecomplaint = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://13.126.190.50:8082/complaints/update/${id}`,
      complaint
    );
    navigate("/hr/employee/complaints");
  };

  return (
    <div>
      <div id="header-container" className="header-container">
        <CompanyLogoFile />
        <Header menu={menu} setMenu={setMenu} />
      </div>
      <div className="dashboard-container">
        <SideBar menu={menu} setMenu={setMenu} />
        <div className="head-foot-part">
          <div className="col-sm-8 py-2 px-5 shadow">
            <h2 className="mt-5"> Edit complaint</h2>
            <form onSubmit={(e) => updatecomplaint(e)}>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="complaintFrom">
                  Complaint From
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="complaintFrom"
                  id="complaintFrom"
                  required
                  value={complaint.complaintFrom}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="complaintAgainst">
                  Complaint Against
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="complaintAgainst"
                  id="complaintAgainst"
                  required
                  value={complaint.complaintAgainst}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="data-buttons">
                <Button id="input-btn-submit" variant="outlined" type="submit">
                  Submit
                </Button>
                <Button
                  id="input-btn-cancel"
                  variant="outlined"
                  onClick={() => navigate("/hr/employee/complaints")}
                >
                  Back
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditComplaint;
