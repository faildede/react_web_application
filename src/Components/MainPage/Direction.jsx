import { useEffect, useState } from 'react'
import axios from 'axios'
import Prog from './axiosRequest/Prog'
import Design from './axiosRequest/Design'
import {Link} from 'react-router-dom'

const baseURL ="http://localhost:3000/somedata "

function Direction(props) {

    const [post, setPost] = useState([])
 
    const [prog, setProg] = useState()

   

    console.log(prog);

 useEffect(()=> {
    axios.get(baseURL).then((response) => {
        setPost(response.data)
        console.log(response.data);
    })
   
 }, [])
 console.log(Prog);
    return(
        <div className=''>

         <div >
         <div className='mt-8 p-4 container'>
                <h1 className='font-black text-3xl'>Популярные онлайн-курсы</h1>
                <div className='flex justify-between mt-8 mx-12 font-bold text-base'>
               <button onClick={() => setProg()} className="">Программирование </button>        
                <button > дизаин</button>
                <button >Аналитика</button>
                <button  >Маркетинг</button>
             {/* Todo fetch */}
                </div>
        
         </div>
         </div>
            <div className='flex justify-center' >   
            <Prog />
                 <Design/>
                </div>
            
        </div>
    )
 
}
export default Direction 