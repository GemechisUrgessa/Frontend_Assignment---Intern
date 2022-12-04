import { Button, Container } from 'react-bootstrap';
import '../assets/css/main.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import axios from 'axios';
const Main = (): JSX.Element => {
    const [sliderRef, setSliderRef]: any = useState(null)
    const [musicData, setMusicData]: any = useState([]);
    const baseURL: string = 'https://rapidapi.com/apidojo/api/shazam/';

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setMusicData(response.data);
        }).catch(error => {
            new Error(error.message);
        });
        console.log(musicData);
    }, []);
    const hotelCards = [
        {
            imageSrc:
                'https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
            title: 'Studio Room',
            description: 'Lorem ipsum dolor sit amet, consectur dolori',
            pricingText: 'USD 50/Day',
            features: ['Free Wifi', 'Free breakfast'],
        },
        {
            imageSrc:
                'https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            title: 'Deluxe Room',
            description: 'Lorem ipsum dolor sit amet, consectur dolori',
            pricingText: 'USD 80/Day',
            features: ['Free Wifi', 'Free breakfast'],
        },
        {
            imageSrc:
                'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
            title: 'King Deluxe Room',
            description: 'Lorem ipsum dolor sit amet, consectur dolori',
            pricingText: 'USD 150/Day',
            features: ['Free Wifi', 'Free breakfast', 'Discounted Meals'],
        },
        {
            imageSrc:
                'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title: 'Royal Suite',
            description: 'Lorem ipsum dolor sit amet, consectur dolori',
            pricingText: 'USD 299/Day',
            features: [
                'Free Wifi',
                'Free breakfast',
                'Discounted Meals',
                "MacBook for work use (hotel's property)",
            ],
        },
    ]
    const sliderSettings = {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }
    return (
        <main className="main--container">
            <Container >
                <div className="container-header">
                    <p className="text-nowrap">RELEASED THIS WEEK</p>
                    <div className="inn" ></div>
                    {/* <div className='controls'> */}
                    <Button className="btn " onClick={sliderRef?.slickPrev}>
                        <FaChevronLeft />
                    </Button>
                    <Button onClick={sliderRef?.slickNext}>
                        <FaChevronRight />
                    </Button>
                    {/* </div> */}
                </div>
                <Slider ref={setSliderRef}  {...sliderSettings}>
                    {hotelCards.map((card, index) => (
                        <div key={index}>
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                            <ul>
                                {card.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <button>Buy Now</button>
                        </div>
                    ))}
                </Slider>

            </Container>
        </main>
    )
}

export default Main;

function setError(error: any) {
    throw new Error('Function not implemented.');
}
