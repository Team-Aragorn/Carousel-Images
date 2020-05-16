/* eslint-disable max-len */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';

const ProductView = (props) => {
  ProductView.propTypes = {
    game: PropTypes.shape({
      images: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
  };

  const { game } = props;

  const [mainImage, setMainImage] = useState();
  const [imageZoom, setImageZoom] = useState();

  const imageMouseOver = (event) => {
    setImageZoom({
      transform: 'scale(1.5) translate(8%, 2%)',
      transformOrigin: `${event.pageX}px ${event.pageY}px`,
    });
  };

  let key = 0;

  return (
    <div className={styles.productCarousel}>
      <div className={styles.imageBar}>
        {game.images.map((image) => (
          // eslint-disable-next-line no-plusplus
          <input type="image" className={styles.imageCarousel} key={key++} src={image} alt="product images" style={mainImage === image ? { borderBottom: '3px solid #DA3625' } : null} onClick={(event) => { setMainImage(event.target.src); }} />
        ))}
      </div>
      <div className={styles.mainImage} onMouseOut={() => setImageZoom(null)} onMouseMove={(event) => { imageMouseOver(event); }}>
        <img className={styles.theImage} src={mainImage || game.images[0]} style={imageZoom} alt="main" />
      </div>
    </div>
  );
};

export default ProductView;
