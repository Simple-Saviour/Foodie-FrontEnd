import React , {useEffect, useState , useRef} from 'react';
import { useCart, useDispatchCart } from './ContextReducer';
import { useNavigate } from 'react-router-dom'
export default function Card(props) {
  
  let navigate = useNavigate()
  let dispatch = useDispatchCart();
  let data = useCart();
  let options = props.options;
  let priceOptions = Object.keys(options);

  let foodItem = props.item;

  const priceRef = useRef();
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")

  const handleClick = () => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login")
    }
  }
  const handleQty = (e) => {
    setQty(e.target.value);
  }
  const handleOptions = (e) => {
    setSize(e.target.value);
  }

  const handleAddToCart = async () => {

    let food = []
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;

        break;
      }
    }

    // console.log(food)
    // console.log(new Date())

    if (food !== []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
        return
      }

    else if (food.size !== size) {
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size,img: props.foodItem.img })
        return
      }
      return
    }
      await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size,img: props.foodItem.img })
      
    }

  let finalPrice = qty * parseInt(options[size]);

  useEffect(() => {
    setSize(priceRef.current.value)
  } , [])
  return (
    <div>
      <div className='card mt-3' style={{ width: '18rem', maxHeight: '360px' }}>
        <img src={props.foodItem.img} className='card-img-top' style={{height: "120px" , objectFit:"fill"}} alt='...' />
        
        <div className='card-body'>
          <h5 className='card-title'>{props.foodItem.name}</h5>
          <div className='container w-100 p-0' style={{ height: "38px" }}>
            <select className='m-2 h-100  bg-success rounded' style={{ select: "#FF0000" }} onClick={handleClick} onChange={handleQty}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className='m-2 h-100  bg-success rounded' ref = {priceRef}  style={{ select: "#FF0000" }} onClick={handleClick} onChange={handleOptions}>
              {priceOptions.map((data)=>{
                  return <option key = {data} value = {data}>{data}</option>
              })}
            </select>
            <div className='d-inline h-100 fs-5'> ₹{finalPrice}/- </div>
          </div>
          
        <hr>
        </hr>
        <button className={'btn btn-success justify-center ms-2'} onClick={handleAddToCart}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
