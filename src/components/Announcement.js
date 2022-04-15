import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
    height: 30px ;
    background-color: teal;
    color:white ;
    display:flex ;
    /* text-align: center; */
    /* justify-content:center ; */
    font-weight: bold ;
    color: antiquewhite ;

`

const Announcement = () => {
    return (
        <Container>
            <marquee>
                Popular eCommerce Sites. 
                Popular eCommerce websites in Bangladesh
            </marquee>
        </Container>
    );
};

export default Announcement;