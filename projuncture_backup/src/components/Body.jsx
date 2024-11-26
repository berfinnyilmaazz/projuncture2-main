import React, { useState } from "react";
import '../components/Body.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

 
export default function Body () {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1 
      };

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 3; // Aynı anda 3 card göstermek için

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex + 1 < datas.length - itemsToShow + 1 ? prevIndex + 1 : 0
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex - 1 >= 0 ? prevIndex - 1 : datas.length - itemsToShow
        );
    };



    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1 
      };

    const [current, setCurrent] = useState(0);
    const itemToShow = 3; // Aynı anda 3 card göstermek için

    const prev = () => {
        setCurrent((prevIndex) => 
            prevIndex - 1 >= 0 ? prevIndex - 1 : data.length - itemToShow
        );
    }

    const next = () => {
        setCurrent((prevIndex) => 
            prevIndex - 1 >= 0 ? prevIndex - 1 : data.length - itemToShow
        );
    }




    const set = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1 
      };

    const [currIndex, setCurrIndex] = useState(0);
    const itemtoShow = 1;

    const prevS = () => {
        setCurrIndex((prevIndex) => 
            prevIndex - 1 >= 0 ? prevIndex - 1 : dat.length - itemtoShow
        );
    }

    const nextS = () => {
        setCurrIndex((prevIndex) => 
            prevIndex - 1 >= 0 ? prevIndex - 1 : dat.length - itemtoShow
        );
    }

    return (
        <main>
            <section className="main">
            {dat.slice(currIndex, currIndex + itemtoShow).map((b, ind) => (
                <div className="wrapper">
                
                    <div className="slide" key={ind}>
                        <img src={b.img} alt="" className="image" />
                        <div className="image-data">
                            <span className="text">{b.text}</span>
                            <h2>{b.explanation}</h2>
                            <a href="#" className="button">Hemen Başla</a>
                        </div>
                    </div>
                
                </div> 
            ))}

                    <div className="arrows">
                        <button id="thirdprev" onClick={prevS}><ArrowBackIosNewIcon /></button>
                        <button id="thirdnext" onClick={nextS}><ArrowForwardIosIcon /></button>
                    </div> 
            </section>







            <div className="w-75 m-auto">
                <div className="m-5">
                    <h1 className="text-center">Senin için Önerilen Profiller</h1>
                    <div className="card-profiles-container">
                    {data.slice(current, current + itemToShow).map((d, i) => (                        
                            <div className="card profiles" key={i}>                       
                                <img src={d.img} className="card-img-top rounded" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{d.name}</h5>
                                    <p className="card-text">{d.rewiew}</p>
                                    <button className="btn profile-button">Profili Görüntüle</button>
                                </div>
                            </div>
                    ))}

                            <div className="arrows">
                                <button id="prev" onClick={prev}><ArrowBackIosNewIcon /></button>
                                <button id="next" onClick={next}><ArrowForwardIosIcon /></button>
                            </div> 
                   
                    </div>
                </div>
            </div>

            <div className="container">
                <h1>Senin için Önerilen Projeler</h1>
                <div className="card-container"> 
                    {datas.slice(currentIndex, currentIndex + itemsToShow).map((a, index) => (
                        <div className="card-wrapper" key={index}>                        
                            <ul className="card-list">
                                <li className="card-item">
                                    <a href="#" className="card-link">
                                        <img src={a.image} alt="Card Image" className="card-image" />
                                        <p className="badge">{a.badge}</p>
                                        <h2 className="card-title">{a.exp}</h2>
                                        <button className="card-button rounded"><ArrowOutwardIcon /></button> 
                                    </a>
                                </li>
                            </ul>                                               
                        </div> 
                    ))}

                    <div className="arrows">
                        <button id="secondprev" onClick={prevSlide}><ArrowBackIosNewIcon /></button>
                        <button id="secondnext" onClick={nextSlide}><ArrowForwardIosIcon /></button>
                    </div>  
                </div>
                            
            </div>   
        </main>     
    );
}



const data = [
    {
        id: 1,
        name: `Berfin Yılmaz`,
        img: `/profileimg.png`,
        rewiew: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, totam.`
    },
    {
        id: 2,
        name: `Ayşenur Koçak`,
        img: `/profileimg.png`,
        rewiew: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, totam.`
    },
    {
        id: 3,
        name: `Elif Sakin`,
        img: `/profileimg.png`,
        rewiew: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, totam.`
    },
    {
        id: 4,
        name: `Zerrin Şekerci`,
        img: `/profileimg.png`,
        rewiew: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, totam.`
    }
]

const datas = [
    {
        id: 1,
        badge: `Yazılım`,
        image: `/projectimg1.png`,
        exp: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, totam.`
    },
    {
        id: 2,
        badge: `Psikoloji`,
        image: `/projectimg2.png`,
        exp: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, totam.`
    },
    {
        id: 3,
        badge: `Çevre`,
        image: `/projectimg3.png`,
        exp: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, totam.`
    },
    {
        id: 4,
        badge: `Elektronik`,
        image: `/projectimg4.png`,
        exp: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, totam.`
    },
    {
        id: 5,
        badge: `Tasarım`,
        image: `/projectimg5.png`,
        exp: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, totam.`
    }
]

const dat = [
    {
        id : 1,
        img : `/projectimg1.png`,
        text : `Lorem, ipsum dolor.`,
        explanation : `Lorem ipsum dolor sit amet.`
    },
    {
        id : 2,
        img : `/projectimg2.png`,
        text : `Lorem, ipsum dolor.`,
        explanation : `Lorem ipsum dolor sit amet.`
    },
    {
        id : 3,
        img : `/projectimg3.png`,
        text : `Lorem, ipsum dolor.`,
        explanation : `Lorem ipsum dolor sit amet.`
    }
]

