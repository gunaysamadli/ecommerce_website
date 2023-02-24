import React from 'react';
import { useAppContext } from '../../context/App';
import { AiOutlineClose } from "react-icons/ai";
import { BsFillXCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import "./index.scss";

const Carts = () => {
    const [{ cartItems, show, total, onRemove, toggleSidebar }] = useAppContext();
    return (
        <div className={show ? "menu_pull_right" : "menu_pull_right"}>
            <span onClick={toggleSidebar} className="cart-dropdown-menu-close">
                <AiOutlineClose />
            </span>
            {cartItems.length === 0 ? <div>Your cart is empty</div> :
                <div className='cart-items'>
                    {
                        cartItems.map((product) => (
                            <div className="cart_item" key={product.id}>
                                <table className="table table-striped">
                                    <tbody>
                                        <tr>
                                            <td className="text-center cart-image">
                                                <img
                                                    src={product.imageName}
                                                    alt={product.name}
                                                />
                                            </td>
                                            <td className="text-left cart-info">
                                                <div>{product.name}</div>
                                                <p>
                                                    <span className="cart-quantity">{product.qty} x</span>
                                                    <span className="cart-product-price">£ {product.price}</span>
                                                </p>
                                            </td>

                                            <td className="text-center">
                                                <button onClick={() => onRemove(product)} className="btn btn-danger btn-xs button-cart-remove">
                                                    <BsFillXCircleFill />
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        ))
                    }
                    <div>
                        <div className="">
                            <div>
                                Total price {total}£
                            </div>
                        </div>
                        <div>
                            <Link >
                                View Cart
                            </Link>
                            <Link>
                                Checkout
                            </Link>
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}

export default Carts;