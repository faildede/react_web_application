export default function Foooter(){ 
    return( 
        <div className="bg-black w-full">  
            <div className="container mx-auto flex justify-center justify-between text-white p-6"> 
                 
                <div> 
                <ul className="text-left"> 
                    <li className="font-bold text-base leading-4 pb-4">Категории</li> 
                    <li>Программирование </li> 
                    <li>Дизайн </li> 
                    <li>Управление </li> 
                    <li>Контент-маркентинг</li>    
                </ul> 
                </div> 
 
                <div> 
                    <ul className="text-left"> 
                        <li className="font-bold text-base leading-4 pb-4">Школы</li> 
                        <li>Skillbox</li> 
                        <li>Geekbrains</li> 
                        <li>Нетология</li> 
                        <li>Skillfactory</li> 
                        <li>Convertmonster</li> 
                    </ul> 
                </div> 
 
                <div> 
                     <ul className="text-left"> 
                        <li className="font-bold text-base leading-4 pb-4">ОТЗЫВЫ О ШКОЛАХ</li> 
                        <li>Отзывы о Skillbox</li> 
                        <li>Отзывы о Geekbrains</li> 
                        <li>Отзывы о Нетология</li> 
                        <li>Отзывы о Skillfactory</li> 
                        <li>Отзывы о Convertmonster</li> 
                    </ul> 
                </div> 
 
                <div> 
                    <ul className="text-left"> 
                        <li className="font-bold text-base leading-4 pb-4">КУРСЫ</li> 
                        <li>С дипломом</li> 
                        <li>С трудоустройстовом</li> 
                        <li>Платные</li> 
                        <li>Бесплатные</li> 
                        <li>Ближайшие по дате старта</li> 
                    </ul> 
                </div> 
            </div> 
 
            <br />
 
            <div className="border-solid container mx-auto flex justify-between text-white border-white"> 
                    <div className="flex justify-between"> 
                    <h1 className='font-medium text-2xl '>Logo</h1> 
                    <p className="font-medium py-2 px-4">© 2021. Logo. Все права защищены</p> 
                    </div> 
                    <div> 
                         <div>

                         </div>
                         <p>
                         Пользовательское соглашение
                         </p>
                    </div> 
            </div> 
        </div> 
    ) 
}