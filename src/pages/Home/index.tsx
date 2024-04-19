import React, { useEffect, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import { AuthRedirectWrapper } from 'components';
import { routeNames } from 'routes';
import {
  useNavigate
} from 'react-router-dom';
import { collapseClasses, Theme } from '@mui/material';
import Background from 'assets/img/background.png';
import MainImage from 'assets/img/Grid.png';
import Claim from 'assets/img/Claim.png';
import Open from 'assets/img/Open.png';
import Square from 'assets/img/Square.png';
import house from 'assets/img/house.png';
import counter from 'assets/img/counter.png';
import closeicon from 'assets/img/closeicon.png';
import zIndex from '@mui/material/styles/zIndex';

import './index.scss';
import 'assets/style.css';

const HomePage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const [selectedTiles, setSelectedTiles] = useState<number[]>([]);

  const handleOpenModal = () => {
    setOpen(true);
    document.body.classList.add('no-scroll');
  };

  const handleCloseModal = () => {
    setOpen(false);
    document.body.classList.remove('no-scroll');
  };

  const handleClick = (n: number) => {
    setSelectedTiles(prevSelectedTiles => {
      return [...prevSelectedTiles, n];
    });
  };

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
  ];

  const columns = 20;
  const rows = 50;

  const [tileWidth, setTileWidth] = useState<number>(35);
  const [tileHeight, setTileHeight] = useState<number>(20);

  useEffect(() => {
    const updateTileSize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      // Calculate tile width and height based on screen size and desired grid layout
      const calculatedTileWidth = screenWidth / columns;
      const calculatedTileHeight = screenHeight / rows;
      // Set the state with the updated tile width and height
      setTileWidth(calculatedTileWidth);
      setTileHeight(calculatedTileHeight);
    };

    // Call updateTileSize initially and add event listener for window resize
    updateTileSize();
    window.addEventListener('resize', updateTileSize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', updateTileSize);
    };
  }, [window]);


  return (
    <div className='d-flex flex-fill align-items-center container'>
      <div className='row w-100'>
        <div className='col-12 col-md-12 col-lg-12 mx-auto'>
          <div className='homeContainer'>
            <div className='imageContainer'>
              <div className='topImageBox'>
                <div></div>
                <img src={house} className='houseImage'></img>
                <img src={counter} className='counterImage'></img>
              </div>
              <div className='mainImageContainer'>
                <h2 className='mainImageText'><b>Click to expand</b></h2>
                <img src={MainImage} onClick={handleOpenModal} className='mainImage'></img>
                <Modal
                  keepMounted
                  open={open}
                  onClose={handleCloseModal}
                  aria-labelledby="keep-mounted-modal-title"
                  aria-describedby="keep-mounted-modal-description"
                >
                  <Box className='modalBox'>
                    {/* <div className='TileBox'>
                      {
                        new Array(1000).fill(0).map((_item, index) => {
                          return (
                            <div key={index} className={`TileItem ${selectedTiles.includes(index) ? 'no-background' : ''}`} onClick={() => handleClick(index)} />
                          );
                        })
                      }
                    </div> */}
                    <div className='tile-box'>
                      <img src={Background} alt='backgroundImage' className='popupImage'></img>

                      {Array.from({ length: rows }).map((_, row) => (
                        Array.from({ length: columns }).map((_, col) => {
                          const top = row * tileHeight;
                          const left = col * tileWidth;
                          const n = row * columns + col;
                          return (
                            <div
                              key={`${row}-${col}`}
                              className={`tile ${selectedTiles.includes(n) ? ' no-background' : ''}`}
                              style={{
                                top: `${top}px`,
                                left: `${left}px`,
                                width: `${tileWidth}px`, // Set tile width dynamically
                                height: `${tileHeight}px`, // Set tile height dynamically
                                backgroundPosition: `-${left}px -${top}px`,
                              }}
                              onClick={() => handleClick(n)}
                            />
                          );
                        })
                      ))}
                    </div>
                    <img src={closeicon} alt='closeicon' onClick={handleCloseModal} className='closeIcon'></img>
                  </Box>
                </Modal>

              </div>
            </div>
            <div className='buttonBox'>
              <img src={Claim} className='image'></img>
              <div className='claimCounter'>
                <img src={Square} className='image'></img>
                <div className='counterText'>12</div>
              </div>
              <img src={Open} className='image'></img>
            </div>
            <div className='nftImageContainer'>
              <ImageList className='nftImage' cols={3}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Home = () => (
  <HomePage />
);
