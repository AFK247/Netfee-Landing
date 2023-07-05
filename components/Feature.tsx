import aboutLogo1 from "@/images/main-service1.png";
import aboutLogo2 from "@/images/main-service2.png";
import aboutLogo3 from "@/images/main-service3.png";
import Image from "next/image";
import { BiSupport } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";
import { GrNotification } from "react-icons/gr";
import { RiChatSettingsLine } from "react-icons/ri";
import { GiGlobe } from "react-icons/gi";
import { TbPigMoney } from "react-icons/tb";

const Feature = () => {
  return (
    <div className="w-75 mx-auto p-5">
      <h2 className="text-center my-3">Amazing Features</h2>
      <p className="text-center my-4">
        Checkout some of the best and amazing features of Netfee.
      </p>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div style={{ width: "390px" }} className="card mb-3 border-0">
            <div className="row g-0 ">
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                {/* <img src="..." className="img-fluid rounded-start" alt="..."> */}
                <BiSupport size={90} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Support 24/7</h5>
                  <p className="card-text">
                    Netfee will give you service whenever you need and we will
                    try to give our best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div style={{ width: "390px" }} className="card mb-3 border-0">
            <div className="row g-0 ">
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <FaRegHandshake size={90} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Support 24/7</h5>
                  <p className="card-text">
                    Netfee will give you service whenever you need and we will
                    try to give our best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div style={{ width: "390px" }} className="card mb-3 border-0">
            <div className="row g-0 ">
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <GrNotification size={80} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Support 24/7</h5>
                  <p className="card-text">
                    Netfee will give you service whenever you need and we will
                    try to give our best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div style={{ width: "390px" }} className="card mb-3 border-0">
            <div className="row g-0 ">
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <RiChatSettingsLine size={80} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Support 24/7</h5>
                  <p className="card-text">
                    Netfee will give you service whenever you need and we will
                    try to give our best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div style={{ width: "390px" }} className="card mb-3 border-0">
            <div className="row g-0 ">
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <GiGlobe size={80} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Support 24/7</h5>
                  <p className="card-text">
                    Netfee will give you service whenever you need and we will
                    try to give our best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div style={{ width: "390px" }} className="card mb-3 border-0">
            <div className="row g-0 ">
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <TbPigMoney size={80} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Support 24/7</h5>
                  <p className="card-text">
                    Netfee will give you service whenever you need and we will
                    try to give our best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
