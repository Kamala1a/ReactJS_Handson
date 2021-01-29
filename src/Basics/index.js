import { EditLocation } from '@material-ui/icons';
import React from 'react'
import ReactDom from 'react-dom'
import { books } from './books';
import Book from './Book';

import {greeting} from './testing/testing'

//css
import './index.css';

//const testconst = 'Test const by Kamala';


const names = ['Kamala', 'Jenita', 'Samma']
const newName = names.map((name) => {
    return <h1>{name}</h1>
});
function BookList() {
    alert('greeting');
    return(
      <section className = 'booklist'>
            {books.map((book, index) => {
                return <Book key={index} {...book}></Book>;
            })}
      </section>
    ); 
}




ReactDom.render(<BookList/>, document.getElementById('root1'));