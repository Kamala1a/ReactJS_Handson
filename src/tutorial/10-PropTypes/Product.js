import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ id, name, image }) => {
    const url = image && image.url;
    return (
        <div>
            <img src={url} alt={name} />
            {name}
            
        </div>
    );
};

Product.prototype = {
    image:PropTypes.object.isRequired,
}

export default Product
