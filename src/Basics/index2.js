import React from 'react'
import ReactDom from 'react-dom'


function Greeting() {
  return (
      <React.Fragment>
        <div className='test'>
            <h2>
          This is Kamala 1 !!!
            </h2>
        </div>
        <div>
            <h2>
          This is Kamala 2 !!!
            </h2>
        </div>
      </React.Fragment>
      );
}

const Greeting1 = () => {
  return React.createElement('h1',{},'Hello kamala');
}

const Greeting2 = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h3',{},'Greetings3')
  );
};

ReactDom.render(<Greeting />, document.getElementById('root1'));
ReactDom.render(<Greeting1 />, document.getElementById('root2') );
ReactDom.render(<Greeting2/>, document.getElementById('root3'));

