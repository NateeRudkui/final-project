import CartItem from "./Cartitem"
import CartData from "../CartData"
const Cart=()=>{
    return(
        <div className="shopping-cart">
            <div className="title">สินค้าในตะกล้า</div>
            {CartData.map((data)=>{
                return <CartItem key={data.id} {...data}/>
            })}
            <div className="title">ยอดรวม</div>
        </div>
    )
}

export  default Cart 