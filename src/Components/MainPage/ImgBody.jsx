import im from '../../img/im.png'
import vid from '../../img/vid.png'
import search from '../../img/search.png'
import vid2 from '../../img/vid2.png'
 
function ImgBody() {
    return(
        <div>
             <div className="bg-[#F8F8F8] flex">{/*  это div для картинки и текста  */}
                <div className=' container mx-auto my-auto w-[490px]' >
                    <p className='font-black text-3xl mb-12 w-[480px]'>Агрегатор онлайн-курсов</p>
                    <p className='w-[450px] font-normal text-lg'>Сравниваем онлайн-курсы по digital и IT. 
                    Мы — каталог-отзовик курсов. Выбирайте курсы по отзывам, 
                    цене, продолжительности и другим критериям!</p>
                </div> 
                <img src={im}  />
             </div>
              <div className='container mx-auto mt-[52px]'>{/* это div для наши преимущества  */}
                <p className='font-black text-3xl '>Наши преимущества</p>
                <div className='flex mt-[72px] justify-between'>
                      <div> {/* div с внутренним содержанием  */}
                        <div className='flex '>
                             <img src={vid} className='w-[60px]'  />
                             <p className='text-base w-[155px] font-bold pl-[21px]'>Большой выбор онлайн-курсов</p>
                        </div>
                            <p className='text-sm text-left w-[338px] text-[#7E7E7E] font-normal mt-[25px]'>Мы аккумулируем большое количество
                                онлайн-курсов по различным направлениям, 
                                позволяя сравнивать их, и выбирать то, 
                                что вам нравится</p>
                         </div>

                         <div> {/* div с внутренним содержанием  */}
                        <div className='flex '>
                             <img src={search} className='w-[60px]'  />
                             <p className='text-base w-[155px] font-bold pl-[21px]'>Актуальная информация</p>
                        </div>
                            <p className='text-sm text-left w-[338px] text-[#7E7E7E] font-normal mt-[25px]'>Мы аккумулируем большое количество
                            Мы регулярно обновляем наши базы данных,  чтобы предоставлять вам только самую свежую информацию
                            о новых курсах, старте обучения,  скидках и предложениях от онлайн-школ</p>
                         </div>

                         <div> {/* div с внутренним содержанием  */}
                        <div className='flex '>
                             <img src={vid2} className='w-[60px]'  />
                             <p className='text-base w-[140px] font-bold pl-[21px]'>Скорость поиска</p>
                        </div>
                            <p className='text-sm text-left w-[338px] text-[#7E7E7E] font-normal mt-[25px]'>Мы аккумулируем большое количество
                            Агрегатор курсов создан для экономии вашего времени.  Вы можете с легкостью найти подходящий курс в нашем каталоге
                            по различным фильтрам</p>
                         </div>
                </div>
             </div>
        </div>
    )
}
export default ImgBody