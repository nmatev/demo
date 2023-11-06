import React from "react";
import Product from "./product/Product"
import ProductPrice from "./product-price/ProductPrice";
import './product-list.css'

// Functional Component
// const ProductList = ({ product }) => {
//     return (
//         <div className="container">
//             <Product product={product} />
//         </div>
//     )
// }

// Class Csomponent - It's most heavy between Functional Component
class ProductList extends React.Component { // PureComponent small and fast version of React.Component. It's not a good practis for big components.
    constructor(props) {
        super(props)

        this.state = {
            counter: props.counter
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            })
        }, 1000)
    }

    render() {
        const { product } = this.props
        const { counter } = this.counter

        return (
            <div className="container">
                <Product product={product} Price={ProductPrice} />
                {counter}s
            </div>
        )
    }
}

export default ProductList