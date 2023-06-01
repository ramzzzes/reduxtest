import { useContext } from "react"
import UserContext from "./UserContext"
import { useSelector } from "react-redux"


const About = () => {

    const {user} = useContext(UserContext)
    const counter = useSelector(state => state.counter)


    return (
        <div>
            {counter}
            <br/>
            this is about page
        </div>
    )
}

export default About