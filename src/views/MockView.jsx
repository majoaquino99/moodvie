import React, { useState } from 'react';
import styled from 'styled-components'
import data from '../mockData';
import DetailCard from '../components/DetailCard/DetailCardComponent';

const Mock = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [movieData, setMovieData] = useState({});

    const handleModal = (item) => {
        setIsModalOpen(true);
        setMovieData({
            ...movieData,
            item
            });
    };
    const closeModal = () => {
        setMovieData({});
        setIsModalOpen(false);
    };
    
    return (
        <Root>
        {data.map(item =>  <button
                            key={item.id}
                            onClick={()=>{handleModal(item)}}
                            >
                            {item.title}
                            </button>
        )}
        {isModalOpen && (
            <Overlay>
                <DetailCard 
                movieData={movieData} 
                closeModal={closeModal} />
            </Overlay>
        )}
        </Root>

    );
    }

    const Root = styled.div`
    font-family: sans-serif;
    text-align: center;
    position: relative;
    `;

    const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 0;
    `;

export default Mock;