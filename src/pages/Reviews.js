import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import  "./Reviews.css";
import ReviewItem from './reviewItem.js';

const Reviews = () => {
  const reviewItems = [
    {
        name: 'Rekob Ramya',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        address: 'USA',
        img: 'https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg'
    },
    {
        name: 'Brandon Savage',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        address: 'USA',
        img: 'https://i.ibb.co/z7Kp6yr/np-file-33188.jpg'
    },
    {
        name: 'Steve Burns',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        address: 'USA',
        img: 'https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg'
    },
    {
        name: 'Kevin Canlas',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        address: 'USA',
        img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
    },
]
//Owl Carousel Settings
const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
};
return (
    <section id="testimonial" className="testimonials pt-70 pb-70">
        <div className="container mt-5">
            <h1 className="miniTitle">TESTIMONIALS</h1>
            <div className="text-center ">
                <h3 className="sectionTitle">What Our Clients are Saying?</h3>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                        {
                                reviewItems.map(reviewDetail => {
                                    return (
                                        <ReviewItem reviewDetail={reviewDetail} key={reviewDetail.name} />

                                    )
                                })
                        }
                    </OwlCarousel>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Reviews;