import { useEffect, useState } from 'react'
import axios from 'axios'


const baseURL ="http://localhost:3000/somedata "

function Direction() {
    const [type, setType] = useState()    
    const [post, setPost] = useState([])

   
 useEffect(()=> {
    axios.get(baseURL).then((response) => {
        setPost(response.data)
        console.log(response.data);
    })
   
 }, [type])
 
    return(
        <div className='bg-[#F8F8F8]'>
            <div className='mt-8 p-4 container'>
                <h1 className='font-black text-3xl'>Популярные онлайн-курсы</h1>
                <div className='flex justify-between mt-8 mx-12'>
             <div>
             <button onClick={() => setType('programing')}>Программирование </button>
            
            <div className='flex text-center justify-between'>
      
              {post.map((post, index) => (
                <div key={index}>
                    <p>{index.title}</p>
                </div>
              ))}
              
            </div>


             </div>
                <button onClick={() => setType('design')}> дизаин</button>
                <button onClick={() => setType('data')}>Аналитика</button>
                <button onClick={() => setType('marketing specialist')} >Маркетинг</button>
             {/* Todo fetch */}
           
                </div>
            </div>
        </div>
    )
 
}
export default Direction 