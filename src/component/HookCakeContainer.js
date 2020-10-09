import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from '../redux';


function HookCakeContainer() {
    const numOfCakes=useSelector(state=>state.cake.numberOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
           <h2>HookCake</h2>
           <h2>Number of Cakes {numOfCakes}</h2> 
           <button onClick={()=>dispatch(buyCake(3))}> BuyCake</button>
        </div>
    )
}

export default HookCakeContainer
