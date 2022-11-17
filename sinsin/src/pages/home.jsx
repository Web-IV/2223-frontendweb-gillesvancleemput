import logo from "../images/sinsin_sinsin-schild-red.png";
import logo2 from "../images/logo_sinsin-schild-wit-1-.png";
import vegan from "../images/vegansinsin-150x150.png";
import instagram from "../images/277-2773517_instagram-logo-white-logo-instagram-png-putih-transparent.png";
import facebook from "../images/facebook-custom-audiences.png";
import takeaway from "../images/takeaway.png";
import "../styles/home.css";

const Home = () => {
    return ( 
      <>
        <div className="home container pt-5" >
            <div className="row">
                <div className="col-md-12 pb-5">
                <img alt="sin sin logo" src={logo} style={{ width:405 , height: 525}} />
                </div>
            </div> 
            <div>
            </div>
            <div className="row pt-5">
                    <div className="col-md-6" >
                        <h3 className="title fw-bold text-white pt-5 ">
                            summer<br/>pop-up
                        </h3>
                        <p className="text text-white text-start fw-bold">
                        <strong>Good news</strong>, we are <strong>extending</strong> our <strong>pop-up SinSin</strong> until the end of this summer. So we can give you a taste of what SinSin will become. SinSin opens its doors this summer with a limited menu. You can join us for vegan meals every day from 11:30 to 21:00.
                        </p>
                    </div>
                    <div className=" text col-md-6 text-white text-start fw-bold pt-5  ">
                        <p className="adress">
                            Schouwburgstraat 8<br/>
                            9000 Gent<br/>
                            <br/>
                            bestellen of<br/>
                            reserveren: 09 272 86 89<br/>
                        </p>
                    </div>
            </div>
            <div className="row">
                <div className="col-md-12" style={{height: 250}}>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <h3 className="title fw-bold text-white text-center my-auto">
                       concept:
                    </h3>
                </div>
                <div className="col-md-4">
                    <h3 className="h2 fw-bold text-white text-center mx-auto">
                        What to expect of our Healthy Food Bar
                    </h3>
                    <p className="text text-white text-start fw-bold">
                    SinSin is a foodbar in the city center of Ghent. At SinSin you can eat without sins, we want to bring the joy of 
                    eating and living a healthy life together. We only offer vegan meals. All our sauces are also home made and we use
                    only vegan ingredients. Next to that, we also offer some delicious side dishes.
                    </p>
                </div>
                <div className="col-md-4">
                <img alt="sin sin logo" src={vegan}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12" style={{height: 250}}>
                </div>
            </div>
            <div className="row pb-5">
                <div className="col-md-6">
                    <h3 className="title fw-bold text-white text-center my-auto pb-5">
                        follow us
                    </h3>
                    <div className="row">
                        <div className="col-md-6 text-end my-auto">
                            <img alt="instagram logo" src={instagram} style={{ width:170 , height: 170}} />
                        </div>
                        <div className="col-md-6 text-start my-auto">
                            <img alt="facebook logo" src={facebook} style={{ width:150 , height: 150}} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h3 className="title fw-bold text-white text-center my-auto pb-5">
                        order online
                    </h3>
                    <div className="col-md-6 my-auto mx-auto">
                            <img alt="instagram logo" src={takeaway} style={{ width:150 , height: 150}} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12" style={{height: 250}}>
                </div>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-md-6 pt-5">
                            <img alt="sin-sinlogo" src={logo2} style={{ width:202 , height: 262}}/>
                        </div>
                        <div className="col-md-6">
                            <h3 className="title fw-bold text-white">
                                contact us: 
                            </h3>
                            <p className="text text-white text-start fw-bold">
                            Schouwburgstraat 8<br/>
                            9000 Gent
                            <br/>
                            hello@sinsin.com
                            <br/>
                            everyday 11:30 - 21:00
                            <br/>
                            bestellen/reserveren: 09 272 86 89
                            <br/>
                            contact: 0485 78 76 23
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                </div>
                    <div className="row">
                    <div className="col-md-12" style={{height: 250}}>
                </div>
            </div>
            </div>
        </div>
      </>
     );
}
 
export default Home;