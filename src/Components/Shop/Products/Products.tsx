import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useProducts } from '../../../hooks/custom_hooks';
import Product from '../Product/Product';
import { BsFillGrid3X3GapFill, BsSearch } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import "./Products.css";
import ProductList from '../ProductList/ProductList';

const Products: React.FC = () => {
    const [view, setView] = useState<string>("grid");
    const [search, setSearch] = useState<string>("");
    const { products } = useProducts();
    const filtredProducts = products.filter(product => {
        if (search !== "") {
            return product.name.toLowerCase().startsWith(search.toLowerCase());
        } else {
            return true;
        }
    })
    return (
        <Container>
            <div className="border mt-5 mb-4 py-2 px-4 d-flex justify-content-between align-items-center">
                <div className='product_view'>
                    <button
                        className={`${view === "grid" ? "text-danger" : "text-secondary"}`}
                        onClick={() => setView("grid")}
                    >
                        <BsFillGrid3X3GapFill />
                    </button>
                    <button
                        className={`${view === "list" ? "text-danger" : "text-secondary"} ms-3`}
                        onClick={() => setView("list")}
                    >
                        <FaList />
                    </button>
                </div>
                <div className='search_input'>
                    <input
                        type="text"
                        placeholder='Search Product'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <BsSearch className="search_icon" />
                </div>
            </div>
            {view === "grid" ?
                <Row xs={1} md={2} lg={3} className="g-4 mb-5">
                    {
                        filtredProducts.map(product => <Product
                            key={product._id}
                            product={product}
                        />)
                    }
                </Row>
                :
                <Row xs={1} className="g-4 mb-5">
                    {
                        filtredProducts.map(product => <ProductList
                            key={product._id}
                            product={product}
                        />)
                    }
                </Row>
            }
        </Container>
    );
};

export default Products;