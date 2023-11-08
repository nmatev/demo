import React from "react"

const ProductPrice = ({ children }) => (
    <p className="product-price">
        Price:
        <span>
            {children}
        </span>
    </p>
)

export default ProductPrice
