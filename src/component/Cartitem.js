const CartItem=({id,name,price,quantity})=>{
    return(
        <div className="item ">
           <div className="product_image"></div>
           <div className="description">
            <span>{name}</span>
            <span>ราคา {price} บาท</span>
           </div>
           <div className="quantity">
            <button>+</button>
            <input type="text" value={quantity} disabled/>
            <button>-</button>
           </div>
           <div className="total-price">{quantity * price}</div>
           <div className="remove"></div>
        </div>
    )
}
export default CartItem