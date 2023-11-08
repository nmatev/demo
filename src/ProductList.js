import React, { Component } from "react"
import Product from "./product/Product"
import ProductPrice from "./product-price/ProductPrice";
import './product-list.css'

// Class Csomponent - It's most heavy between Functional Component
class ProductList extends Component { // PureComponent small and fast version of React.Component. It's not a good practis for big components.

    constructor(props) {
        super(props)

        this.state = {
            counter: props.counter,
            title: "Hello Noob"
        }
    }

    hendleClick(event) {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        const { product } = this.props
        const { counter, title } = this.state

        return (
            <div className="container">
                <Product product={product} Price={ProductPrice} />
                <button onClick={event => this.hendleClick()}>Click me: {counter}</button>
            </div>
        )
    }
}

export default ProductList