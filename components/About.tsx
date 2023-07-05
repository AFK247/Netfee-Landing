import aboutLogo1 from "@/images/main-service1.png";
import aboutLogo2 from "@/images/main-service2.png";
import aboutLogo3 from "@/images/main-service3.png";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-75 mx-auto p-5">
      <h2 className="text-center my-3">About Netfee</h2>
      <p className="text-center my-5">
        Netfee is an ISP billing management software can give you the ability to
        manage your clients and incoming request without any hassle. Netfee
        comes with
      </p>
      <div className="container ">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card border-0 shadow-lg">
              <Image
                width={100}
                height={110}
                src={aboutLogo1}
                className="img-fluid mx-auto my-4"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0 shadow-lg">
              <Image
                width={100}
                height={110}
                src={aboutLogo2}
                className="img-fluid mx-auto my-4"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0 shadow-lg">
              <Image
                width={100}
                height={110}
                src={aboutLogo3}
                className="img-fluid mx-auto my-4"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
