

function Header() {
    return(        
        <div className='flex'>   
            <div className="container flex justify-between p-5 my-auto border-r-2 border-b-2 font-bold">
                <h1 className='font-medium text-2xl top-2 '>Logo</h1>
                <p className="text-base">Курсы</p>
                <p className="text-base">Школы</p>
                <p className="text-base">Отзывы о школах</p>
                <p className="text-base">Акции школ</p>
                <p className="text-base">Блог</p>
            </div>
            <div className='p-4 my-auto border-r-2 border-b-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10  text-lg font-semibold">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
            </svg>
        </div>
        
            <div className='px-8  border-b-2 border-r-2  flex relative' >
                <input type="text" placeholder="Искать курсы" className='outline-none '/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5  left-2 top-[26px]  absolute container my-auto text-[#B5B5B5] ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </div>
            </div>
    )
}

export default Header