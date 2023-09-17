import React, { useState,useRef,useEffect } from 'react'
import { useCart,useDispatchCart } from './ContextReducer';


export default function Card(props) {

  const dispatch = useDispatchCart(); 
  let data = useCart();
  const priceRef = useRef();
  let options = props.option;
  let priceOption = Object.keys(options);

  const [qty,setQty] = useState(1);
  const [size,setSize] = useState("");

 const handleAddToCart = async()=>{

  let food = [];
  for (let item of data) {
      if (item.id === props.fooditem._id) {
          food = item;
          break;
        }
  }

  if (food !== []) {
     
    if (food.size === size) {
      await dispatch({ type: "UPDATE", id: props.fooditem._id, price: finalPrice, qty: qty })
      
      return
    }
    if (food.size !== size) {
      
      await dispatch({type:"ADD", id:props.fooditem._id, name:props.fooditem.name, price:finalPrice, qty:qty, size:size})
      // console.log("Size different so simply ADD one more to the list")
       return
  }

  await dispatch({type:"ADD", id:props.fooditem._id, name:props.fooditem.name, price:finalPrice, qty:qty, size:size})
 // await console.log(data);
  }
}
const finalPrice = qty * parseInt(options[size]);

useEffect(()=>{
   setSize(priceRef.current.value)
},[])

  return (
    <div>
        <div className="card mt-3" style={{ "width":"20rem", "maxHeight": "380px"}}>
          <img src={props.fooditem.img} className="card-img-top" alt="..."  style={{height:"180px", objectFit:"fill" }}/>
          <div className="card-body">
            <h5 className="card-title">{props.fooditem.name}</h5>
       {/* <p className="card-text">Some quick example text to card's content. </p> */}
            <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded" onChange={(e)=>setQty(e.target.value)}>
               {Array.from(Array(6), (e,i)=>{  //e is just a placeholder
                return(
                    <option key={i+1} value={i+1} >{i+1}</option>
                )
               })}
            </select>

            <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                {priceOption.map((data)=>{
                  return(
                    <option key={data} value={data} > {data} </option>
                  )
                })}
            </select>

            <div className=" d-inline h-100 fs-7"> Rs.{finalPrice}/-</div>
            </div>
            <hr></hr>
            <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
    </div>
  )
}
