import axios from "axios"
import { useEffect, useState } from "react"

const baseURL = 'response.data'

export default function Blog() {
    const [post, setPost] = useState([])


    useEffect(() =>{
        axios.get(baseURL).then((response) => {
            setPost(response.data)
            console.log(response.data);
        })
    })

    return (
        <div>

        </div>
    )
}