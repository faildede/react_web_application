import { useEffect, useState } from 'react'


function Direction() {
    // const [data, loading] = useFetch('data')
    // const [pages, setPages] =useState(data)
    const [data, setData] = useState({})
    const [type, setType] = useState('')

    useEffect(() => {
        fetch(' http://localhost:3000/somedata')
        .then(response => response.json())
        .then(json => setData(json))

        return ()=> {
            
        }
    }, [type])

    // useEffect (() => {
    //     if (data) {
    //         setPages(data);
    //         setActivePages(data[0])
    //     }
    // }, [data])

    // if(loading || !data){
    //     return(<div className='container x-auto my-auto'> Loading ...</div>)
    // }
  

    return(
        <div className='bg-[#F8F8F8]'>
            <div className='mt-8 p-4 container'>
                <h1 className='font-black text-3xl'>Популярные онлайн-курсы</h1>
                <div className='flex justify-between mt-8 mx-12'>
                <button onClick={() => setType('programing')}>Программирование </button>
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