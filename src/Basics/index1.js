import React from 'react'
import ReactDom from 'react-dom'

function Nestedcomponent() {
    return(
        <React.Fragment>
            <Example1/>
            <Example2/>
        </React.Fragment>
    );
}

const Example1 = () => {
    return React.createElement(
        'div',{},'Example1'
    );
}

const Example2 = () => {
    return React.createElement(
        'div',{},'Example2'
    );
}

ReactDom.render(<Nestedcomponent/>,document.getElementById('root4'));