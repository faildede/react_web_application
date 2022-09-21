import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const baseURL ="http://localhost:3000/marketingSpecialist"


const Marketing = () => {  
    const [post, setPost] = useState([])

    useEffect(()=> {
        axios.get(baseURL).then((response) => {
            setPost(response.data)
            console.log(response.data);
        })
       
     }, [])

    
    return(
        <div>
             
            <div>
                {post.map((i) => {
                    return(
                        <div className="text-center flex p-2 my-auto container w-full" key={i.id}>
                          <div className=" border-2 p-12 flex justify-between ">
                      
                      <div className="w-full container text-left my-auto font-bold text-base">
                        <p>Профессия</p>
                      <p className='w-full'>{i.title}</p>
                      </div>


                         <div className="px-4 container my-auto mx-auto text-left w-full">
                         <p className='font-bold text-base'>{i.author}</p>
                            <div>
                       <div className="flex container ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#FFB800]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                           <p className='font-bold text-base'>{i.stars}</p>
                       </div>
                               <div className="w-full">
                               <p className="text-[#B5B5B5]  ">Отзывы о школе 58</p>
                               </div>
                            </div>
                         </div>
                        
                            <div className="w-full px-4 container m-auto">
                                <p className="font-medium text-[#B5B5B5] line-through">85 000 руб</p>
                                <p className='font-bold text-base'>{i.cost}</p>
                                <p className="font-medium text-[#00C213] w-full">от 4 745 руб./месяц</p>
                               
                            </div>

                            <div className="flex container my-auto px-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 container my-auto">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                                <p className="pl-2">{i.time}</p>
                            </div>
                            {i.revie.map((t) => {
                                return(
                                    <ul className="text-left ">
                              <li className="flex py-2 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
                            </svg>
                            {t.term}</li>
                            <li className="flex py-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                            </svg>
                            {t.level}</li>
                            <li className="flex py-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                            </svg>
                            {t.internship}</li>
                             <li className="flex py-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                            </svg>
                            {t.diplom}</li>
                             </ul>)
                            })}

                          <div className="container my-auto">
                          <div className='w-full my-auto rounded-full p-4 mx-4 bg-[#01E45C] text-white'>
                            <a href="https://skillbox.ru/course/profession-marketolog-analitik/"> На сайт курса </a>
                            </div>
                            <div className="rounded-full border-black text-gray  p-4 mx-4 w-full  ">
                          <Link to="/aboutCourses/${i.id}" >  Подробнее </Link>
                            </div>
                          </div>
                          </div>
                        </div>
                    )
                })
                }
                
            </div>
        </div>
    )
}
export default Marketing