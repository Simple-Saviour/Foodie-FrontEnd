import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import { useEffect, useState } from 'react';

export default function Home() {
  const [search , setSearch] = useState([]);
  const [foodCat, setFoodCat] = useState([]);
  const [foodItems, setFoodItems] = useState([]);

  const loadData = async () => {
    let response = await fetch('https://foodie-mernapp.onrender.com/api/foodData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    response = await response.json();

    setFoodItems(response[0]);
    setFoodCat(response[1]);

    // console.log(response[0], response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
      <div
        id='carouselExampleFade'
        className='carousel slide carousel-fade'
        data-bs-ride='carousel' 
        style={{objectFit:"contain"}}
      >
        <div className='carousel-inner' id='carousel' style={{objectFit:"contain"}} >
          <div className="carousel-caption" style = {{zIndex : "10"}} >
            <div className="d-flex justify-content-center">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value = {search} onChange = {(e)=>{setSearch(e.target.value)}}/>
            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </div>
          </div>
          <div className='carousel-item active' >
            <img
              src='https://i.ytimg.com/vi/BEyloCJlpm0/maxresdefault.jpg'
              className='d-block w-100'
              style = {{filter: "brightness(50%)"}}
              alt='...'
            />
          </div>
          <div className='carousel-item'>
            <img
              src='https://images.pexels.com/photos/958547/pexels-photo-958547.jpeg?cs=srgb&dl=pexels-chan-walrus-958547.jpg&fm=jpg'
              className='d-block w-100'
              style = {{filter: "brightness(50%)"}}
              alt='...'
            />
          </div>
          <div className='carousel-item'>
            <img
              src='https://cdn.vox-cdn.com/thumbor/bif3U7XKUqWpOUv91_fXLfzsIx8=/0x0:6000x4000/1200x675/filters:focal(2520x1520:3480x2480)/cdn.vox-cdn.com/uploads/chorus_image/image/71262429/Le_Fantome.0.jpg'
              className='d-block w-100'
              style = {{filter: "brightness(50%)"}}
              alt='...'
            />
          </div>
          <div className='carousel-item'>
            <img
              src='https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-03/plant-based-food-mc-220323-02-273c7b.jpg'
              className='d-block w-100'
              style = {{filter: "brightness(50%)"}}
              alt='...'
            />
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleFade'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleFade'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
      </div>
      <div className='container'>
        {
        foodCat !== []
          ? foodCat.map((data) => {
              return (
                <div className='row mb-3'>
                  <div key={data._id} className='fs-3 m-3'>
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItems !== [] ? (
                    foodItems.filter((item) =>( (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search)) )) 
                      .map((filterItems) => {
                        return (
                          <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                            <Card foodItem = {filterItems}
                            options = {filterItems.options[0]}
                            >

                            </Card>
                          </div>
                        //   <div key={filterItems.id} className='col-12 col-md-6 col-lg-3'>
                        //   {console.log(filterItems.url)}
                        //   <Card foodName={filterItems.name} item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img} ></Card>
                        // </div>
                        );
                      })
                    ) : (
                          <div> No data found</div>
                        )
                  }
                  </div>
              )
            })
            : ""
          }

      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
