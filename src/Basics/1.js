import React from 'react'
import ReactDom from 'react-dom'

//css
import './index.css';


//const testconst = 'Test const by Kamala';

const firstBook = {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
    title: 'Sam Pappa',
    author: 'jenima'
}

const secondBook = {
    img: 'https://m.media-amazon.com/images/I/8170Bj+bSOL._AC_UY327_FMwebp_QL65_.jpg',
    title: 'samma pappa',
    author : 'chellam'
}

function BookList() {
    return(
      <section className = 'booklist'>
            <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} >
                <p>This is Paragraph Test1</p>
            </Book>
            <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
      </section>
    ); 
}


const Book = ({ img, title, author, children }) => { // This is called destructor
   // const { img, title, author } = props;   
    return (
        <>
            <article className="book">
                <img src={img} alt='' />
                <h1>{title}</h1>
                <h4>{author}</h4>
                {children}
            </article>
        </>
   );
};

/*
const Image = () => {
    return(
        <img src = 'https://m.media-amazon.com/images/I/8170Bj+bSOL._AC_UY327_FMwebp_QL65_.jpg' alt='' />
    );
};

const Title = () => {
    const title = 'Test Book Title 2';
    return(
        <h1>{title}</h1>
    );
};

const Author = () => {
    return React.createElement('p',{},'Test Author Name');
};

const author = 'Test Author Name 2';
const Author = () => {
    return(
        <h4 style={{ color:'#ff7dd8' , fontSize: '0.75rem', marginTop: '0.25rem' }}>{author}</h4>
    );
}
*/
ReactDom.render(<BookList/>, document.getElementById('root1'));