import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios";

import SideBar from "../../../../components/SideBar";
import Header from "../../../../components/Header";

import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const AnnouncementsProfile = () => {
  const { id } = useParams();

  const [announcements, setAnnouncements] = useState({
    title: " ",
    startDate: " ",
    endDate: " ",
    companyName: " ",
    locationName: " ",
    departmentName: " ",
    summary: " ",
    description: " ",
  });

  useEffect(() => {
    loadAnnouncements();
  }, []);

  const loadAnnouncements = async () => {
    const result = await axios.get(
      `http://13.126.190.50:8081/announcement/get/${id}`
    );
    setAnnouncements(result.data);
  };

  const [menu, setMenu] = useState(false);

  return (

    <div>
    <div id="header-container" className="header-container">
        <CompanyLogoFile />
        <Header menu={menu} setMenu={setMenu} />
      </div>
      <div className="dashboard-container">
        <SideBar menu={menu} setMenu={setMenu} />
      <div className="head-foot-part" style={{ padding: "0" }}>
    <section className="shadow" style={{ backgroundColor: "whitesmoke" }}>
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-3">
                  <div className="card mb-4">
                    <div className="card-body text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        alt="avatar"
                        className="rounded-circle img-fluid"
                        style={{ width: 150 }}
                      />
                      <h5 className="my-3">
                        {`${announcements.title} ${announcements.title}`}
                      </h5>
                      <div className="d-flex justify-content-center mb-2">
                        <Link to="/organisation/announcements">
                          <button
                            type="button"
                            className="btn btn-outline-secondary ms-1"
                          >
                            Back
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-9">
                  <div className="card mb-4">
                    <div className="card-body">
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Start Date</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {announcements.startDate}
                          </p>
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">End Date</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {announcements.endDate}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Department</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{announcements.departmentName}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Company</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{announcements.companyName}</p>
                        </div>
                      </div>
                      <hr />

                    

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Summary</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{announcements.summary}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Description</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{announcements.description}</p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </div>
    </div>
  </div>
  
  );
};

export default AnnouncementsProfile;
