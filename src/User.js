import { useEffect, useState } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom"

const User = (props) => {

    const params = useParams()

    const [user,setUser] = useState({})

    const fetchInfo = () => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
        .then( r => r.json())
        .then( response => setUser(response))
    }

    
    useEffect(() => {
        fetchInfo()
    },[])
    
    return (
        <div>
            {props.name}
            <br/>
            {user.title}
    </div>
    )
}

export default User