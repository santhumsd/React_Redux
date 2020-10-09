import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { buyIceCream } from '../redux/index';

function HookIceCreamContainer() {
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams);
    const dispatch = useDispatch()
    return (
        <div>
        <h2>HookIceCream</h2>
        <h2>Number of IceCreams {numOfIceCreams}</h2> 
        <button onClick={()=>dispatch(buyIceCream())}> BuyIceCreams</button>
     </div>
    )
}

export default HookIceCreamContainer
