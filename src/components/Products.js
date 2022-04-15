import React from 'react';
import styled from 'styled-components';
import {popularProducts} from '../data';
import Product from './Product';

const Continer = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`

const Products = () => {
    return (
        <Continer>
            {popularProducts.map(item=>(
                <Product item={item} key={item.id}></Product>
            ))}
        </Continer>
    );
};

export default Products;