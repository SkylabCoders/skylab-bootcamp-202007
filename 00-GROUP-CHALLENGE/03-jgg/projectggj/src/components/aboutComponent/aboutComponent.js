import React from 'react';
import './aboutComponent.css'

function AboutComponent() {
    return (
        <>
            <h1 className="titleAbout">Meet the development team</h1>
            <section className="mainContainerAbout">
                <div className="usAbout">
                    <img className="profileImage" src="https://media-exp1.licdn.com/dms/image/C5603AQEF9iyRfUz82Q/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=04dUdp6lbgARNyQT4sIUDRjan8pk16SVwj9A1YDoFe8" alt="profile jordi"></img>
                    <h3>Jordi Muñoz</h3>
                    <p>Front-End y Back-End Developer</p>
                    <div className="containerAbout">
                        <a href="https://www.linkedin.com/in/jordi-mu%C3%B1oz-mallofr%C3%A9-2b1043150/">
                            <img src="https://icons-for-free.com/iconfiles/png/512/linked+linkedin+logo+social+icon-1320191784782940875.png" alt="linkedin logo">
                            </img>
                        </a>
                        <a href="https://github.com/gemmas95?tab=repositories">
                            <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="github logo">
                            </img>
                        </a>
                    </div>
                </div>
                <div className="usAbout">
                    <img className="profileImage" src="https://media-exp1.licdn.com/dms/image/C5103AQFFJO_4j-gK4A/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=9Hknm4pleqf4Hd0I0UjvqR8n_Ujy7xGWi4f9D8Vi9MY" alt="profile gabriel"></img>
                    <h3>Gabriel Penalva</h3>
                    <p>Web Developer</p>
                    <div className="containerAbout">
                        <a href="https://www.linkedin.com/in/gabriel-penalva-iba%C3%B1ez-874542120/">
                            <img src="https://icons-for-free.com/iconfiles/png/512/linked+linkedin+logo+social+icon-1320191784782940875.png" alt="linkedin logo">
                            </img>
                        </a>
                        <a href="https://github.com/gemmas95?tab=repositories">
                            <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="github logo">
                            </img>
                        </a>
                    </div>
                </div>
                <div className="usAbout">
                    <img className="profileImage" src="https://media-exp1.licdn.com/dms/image/C5603AQFh0WJ5yijZ9g/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=M6gWcjNJIezUHM3teUTQjH2QDuf5A2RxQcDvOm71m8Q" alt="profile gemma"></img>
                    <h3>Gemma Sanz</h3>
                    <p>FullStack Web Developer</p>
                    <div className="containerAbout">
                        <a href="https://www.linkedin.com/in/gemma-sanz-rabad%C3%A1n-44367a13b/">
                            <img src="https://icons-for-free.com/iconfiles/png/512/linked+linkedin+logo+social+icon-1320191784782940875.png" alt="linkedin logo">
                            </img>
                        </a>
                        <a href="https://github.com/gemmas95?tab=repositories">
                            <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="github logo">
                            </img>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )

}

export default AboutComponent;