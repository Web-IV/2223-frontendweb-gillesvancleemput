import "../styles/home.css";
import Contact from "./contactMail";

const Home = () => {
  return (
    <>
      <div className="home container pt-5">
        <div className="row justify-content-center">
          <div className="col-md-12 col-sm-12 col-lg-12 pb-5">
            <img
              alt="sin sin logo"
              src={"images/sinsin_sinsin-schild-red.png"}
              style={{ width: 405, height: 525 }}
            />
          </div>
        </div>
        <div></div>
        <div className="row pt-5">
          <div className="col-md-6 col-sm-6 col-lg-6">
            <h3 className="title fw-bold text-white pt-5 ">
              summer
              <br />
              pop-up
            </h3>
            <p className="text text-white text-start fw-bold">
              <strong>Good news</strong>, we are <strong>extending</strong> our{" "}
              <strong>pop-up SinSin</strong> until the end of this summer. So we
              can give you a taste of what SinSin will become. SinSin opens its
              doors this summer with a limited menu. You can join us for vegan
              meals every day from 11:30 to 21:00.
            </p>
          </div>
          <div className=" text col-md-6 col-sm-6 col-lg-6 text-white text-lg-start text-sm-center text-md-start fw-bold pt-5  ">
            <p className="adress">
              <strong>Adress:</strong> <br />
              Schouwburgstraat 8<br />
              bestellen of
              <br />
              reserveren: 09 272 86 89
              <br />
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" style={{ height: 250 }}></div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-4">
            <h3 className="title fw-bold text-white text-center my-auto">
              concept:
            </h3>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-4">
            <h3 className="h2 fw-bold text-white text-center mx-auto">
              What to expect of our Healthy Food Bar
            </h3>
            <p className="text text-white text-start fw-bold">
              SinSin is a foodbar in the city center of Ghent. At SinSin you can
              eat without sins, we want to bring the joy of eating and living a
              healthy life together. We only offer vegan meals. All our sauces
              are also home made and we use only vegan ingredients. Next to
              that, we also offer some delicious side dishes.
            </p>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-4">
            <img alt="sin sin logo" src={"images/vegansinsin-150x150.png"} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" style={{ height: 250 }}></div>
        </div>
        <div className="row pb-5">
          <div className="col-md-6 col-sm-6 col-lg-6 pb-5">
            <h3 className="title fw-bold text-white text-center my-auto pb-5">
              follow us
            </h3>
            <div className="row">
              <div className="col-md-6 col-sm-12 col-lg-6 text-center my-auto">
                <img
                  alt="instagram logo"
                  src={
                    "images/277-2773517_instagram-logo-white-logo-instagram-png-putih-transparent.png"
                  }
                  style={{ width: 170, height: 170 }}
                />
              </div>
              <div className="col-md-6 col-sm-12 col-lg-6 text-center my-auto">
                <img
                  alt="facebook logo"
                  src={"images/facebook-custom-audiences.png"}
                  style={{ width: 150, height: 150 }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <h3 className="title fw-bold text-white text-center my-auto pb-5 ">
              order online
            </h3>
            <div className="col-md-6 my-auto mx-auto col-md-6 col-sm-6 col-lg-6">
              <img
                alt="instagram logo"
                src={"images/takeaway.png"}
                style={{ width: 150, height: 150 }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" style={{ height: 250 }}></div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 pt-5">
            <img
              alt="sin-sinlogo"
              src={"images/logo_sinsin-schild-wit-1-.png"}
              style={{ width: 202, height: 262 }}
            />
          </div>
          <div className="col-md-6 col-sm-6">
            <h3 className="title fw-bold text-white text-lg-start text-sm-start text-md-center">
              contact us:
            </h3>
            <p className="text text-white text-lg-start text-sm-start text-md-center fw-bold">
              Schouwburgstraat 8<br />
              9000 Gent
              <br />
              hello@sinsin.com
              <br />
              everyday 11:30 - 21:00
              <br />
              bestellen/reserveren: 09 272 86 89
              <br />
              contact: 0485 78 76 23
              <br />
              <Contact />
            </p>
          </div>
        </div>
        <div className="col-md-5 col-sm-6"></div>
        <div className="row">
          <div className="col-md-12" style={{ height: 250 }}></div>
        </div>
      </div>
    </>
  );
};

export default Home;
