import React ,{useState} from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
           <h2>Without hook Cake</h2>
           <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}/>
           <h2>Number of Cakes {props.numberOfCakes}</h2> 
    <button onClick={()=>props.buycake(number)}> BuyCake {number} cake</button>
        </div>
    )
}

const mapStateToProps=state=>{
    // console.log(state)
    return{
        numberOfCakes:state.cake.numberOfCakes
    }
}
const mapDispatchFromProps=dispatch=>{
    return{
        buycake:(number)=>dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps,mapDispatchFromProps)(CakeContainer)

