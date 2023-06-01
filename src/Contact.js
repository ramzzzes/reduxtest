import { useContext } from "react"
import UserContext from "./UserContext"
import { useDispatch, useSelector } from "react-redux"


const Contact = () => {

    const {user,setUser} = useContext(UserContext)
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return (
        <div>
            {counter}
            <br/>
            <button onClick={() => dispatch({
                type : 'INCREMENT',
                payload : 1,
            })}>increment</button>
            <br/>
            this is contact page
        </div>
    )
}

export default Contact