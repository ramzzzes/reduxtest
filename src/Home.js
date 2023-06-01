import { useContext, useState } from "react"
import UserContext from "./UserContext"
import { useDispatch, useSelector } from "react-redux"

const Home = () => {
    // const {name,setName} = useContext(UserContext)

    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()
 
    return (
        <div>
            {counter}
            <br/>
            <button onClick={() => 
            dispatch({type : "INCREMENT",payload : 5})}
                >
             +
            </button>
            <button onClick={() => 
            dispatch({type : "DECREMENT",payload : 5})}
                >
             -
            </button>
            <br/>
            this is Home page
        </div>
    )
}

export default Home