import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, getTotal } from '../../redux/features/cartSlice';
import { removeFromWishlist } from '../../redux/features/wishlistSlice';
import { AppDispatch, RootState } from '../../redux/store';
import { wishlistType } from '../../util/types';

const WishlistTable: React.FC = () => {
    const { items } = useSelector((state: RootState) => state.wishlist);
    const dispatch = useDispatch<AppDispatch>();
    const handleAddToCart = (item: wishlistType) => {
        dispatch(addToCart({
            ...item,
            subTotal: item.curPrice,
            qty: 1
        }));
        // update total
        dispatch(getTotal())
        // remove added item from wishlist
        dispatch(removeFromWishlist(item.id));
    }
    return (
        <Container className='py-5'>
            <div className='cus_td_container'>
                <table className="text-center cus_table">
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock Status</th>
                            <th>Add To Cart</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length === 0 &&
                            <tr>
                                <td colSpan={6} className='py-5 text-center'>
                                    <p className='mb-0'>You have no product in wishlist. Go to <Link to="/shop" className="hover-red">Shop</Link></p>
                                </td>
                            </tr>
                        }
                        {
                            items.map(item => <tr key={item.id}>
                                <td>
                                    <button
                                        className='delete_icon'
                                        onClick={() => dispatch(removeFromWishlist(item.id))}
                                    >
                                        <RiDeleteBin5Line />
                                    </button>
                                </td>
                                <td><img src={item.img} className="cus_table_img" alt="" /></td>
                                <td>{item.name}</td>
                                <td>&#36;{item.curPrice}.00</td>
                                <td>In Stock</td>
                                <td>
                                    <Button
                                        variant='danger'
                                        onClick={()=>handleAddToCart(item)}
                                    >
                                        Add To Cart
                                    </Button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </Container>
    );
};

export default WishlistTable;