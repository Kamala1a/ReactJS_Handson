import React from 'react'

const Book = (props) => { // This is called destructure
    const { img, title, author } = props;   
    const clickHandler = (e) => {
        alert("e : " + e);
        alert("e.... : " + e.target);
        alert('hi');
    }

    const clickHandlerWithArg = (title) => {
        alert(title);
    }

    return (
        <article className="book" onMouseOver={() => {
            console.log(author);
        }}>
            <img src={img} alt='' />
            <h1 onClick={() => { console.log(title); alert(title) } }>{title}</h1>
            <h4>{author}</h4>
            <button type='button' onClick={clickHandler}>Reference Example</button>
            <button type = 'button' onClick={() => clickHandlerWithArg(title)}>Click Handler WithArg</button>
        </article>
        
   );
};

export default Book
