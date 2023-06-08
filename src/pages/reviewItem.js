import React from 'react';

const reviewItem = ({reviewDetail}) => {
    const {name, address, description, img} = reviewDetail;
  return (
    <div className="item">
    <div className="shadow-effect">
        <img className="img-circle" src={img} alt='' srcSet='' />
        <p>{description}</p>
    </div>
    <div className="testimonial-name">
        <h5>{name}</h5>
        <small>{address}</small>
    </div>
</div>
  )
}

export default reviewItem