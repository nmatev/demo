import React from 'react';
import { createRoot } from 'react-dom/client'
// import ReactDOM from 'react-dom';
import './index.css';
import ProductList from './ProductList';
import data from './data'

// ReactDOM.render(<ProductList product={data[0]} counter={0} />, document.getElementById('root'));

const root = createRoot(document.getElementById('root'));
root.render(<ProductList product={data[0]} counter={0} />)