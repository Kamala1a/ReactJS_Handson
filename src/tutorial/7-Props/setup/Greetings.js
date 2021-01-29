import React from 'react'
import PropTypes from 'prop-types'

const Greetings = (props) => {
    if (props.text) {
        return (
            <div>
                <p>Hello I 'm Kamala {props.text}.
                Please to meet you!!
                </p>
            </div>
        );
    }
    return (
      <p>Toogled</p>  
    );
}

Greetings.prototype = {
    name: PropTypes.string.isRequired, //must be string and undefined
    age: PropTypes.number.isRequired, //must be number and undefined
    occupation: PropTypes.string.isRequired //must be string and undefined
}

export default Greetings;
