import { useEffect, useState } from 'react'
import useFetch from './hooks/useFetch'


function Direction() {
    const [data, loading] = useFetch('')
    const [pages, setPages] =useState(data)

    useEffect (() => {
        if (data) {
            setPages(data);
            setActivePages(data[0])
        }
    }, [data])

    if(loading || !data){
        return(<div className='container x-auto my-auto'> Loading ...</div>)
    }

    return(
        <div>

        </div>
    )
}
export default Direction 