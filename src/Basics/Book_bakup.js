import React from 'react';
import ReactDom from 'react-dom';


//css
import './index.css';

function BookList() {
    return(
        <Book/>
    );
}

const Book = () => {
   return(
       <article>
           <Image/>
           <Title/>
           <Author/>
       </article>
   );
};

const Image = () => {
    return(
        <img src = 'https://m.media-amazon.com/images/I/8170Bj+bSOL._AC_UY327_FMwebp_QL65_.jpg' alt='' />
    );
};

const Title = () => {
    return(
        <h4>Test Book Title</h4>
    );
};

const Author = () => {
    return React.createElement('p',{},'Test Author Name');
};

ReactDom.render(<BookList/>, document.getElementById('root1'));