import React from 'react';
import '../css/home.scss';

const Home = () => {
    return (
        <>
            <div className="home__container">
                <div className="content__wrapper">
                    <div className="header__image">
                        <img
                            src="https://t3.ftcdn.net/jpg/03/67/35/72/240_F_367357209_BG07SVnnB4HSHSaMiHajfZhrZZAE859A.jpg"
                            alt="banner home"
                        />
                    </div>
                    <div className="info__home__container">
                        <p>
                          Welcome animal lovers!!<br></br>
                          We are glad to see you here! <br></br>
                          If you are interested in report an animal loss, 
                          create your own alert. As much 
                          details you add, the easier the search will become.
                          Remember to always...<br></br><br></br>
                        </p>
                        <div className="home__inner__logo"><img src="https://i.pinimg.com/564x/20/d9/c3/20d9c32c4bbbcdfd86233646f696ac2f.jpg" alt="section logo"></img></div>
                        <p>
                          Instead, if you want to know the active alerts near to you,
                          take a look in alert list. You can also look for certain 
                          animal alerts by categories.
                        </p>
                    </div>
                    {/* <div>
                        <img
                            src="https://www.somosrescateanimal.org/img/banner_que_1.jpg"
                            alt="banner home"
                        />
                    </div>

                    <div className="banner__container">
                        <h2>Lost animal list</h2>
                        <img
                            src="https://www.rspca.org.uk/webContent/staticImages/SectionImages/SaferSanctuariesBannerV1.jpg"
                            alt="list header image"
                        ></img>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default Home;
