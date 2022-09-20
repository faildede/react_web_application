import netolo from '../../img/netolo.png'
import skill from '../../img/skill.jpg'
import Geekbrain from '../../img/Geekbrains.svg' 

function Carusel() {
    return(
      <div className='mt-24'>
          <h1 className='text-center font-black text-2xl'>Школы</h1>
       <div className="container mx-auto p-24 py-24">
        
         <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
            <img
              src={netolo}
              class=" w-full"
            />
          </div>
          <div class="carousel-item relative float-left w-full">
            <img
              src={skill}
              class="p-4  w-full"
              alt="..."
            />
          </div>
          <div class="carousel-item relative float-left w-full">
            <img
              src={Geekbrain}
              class="block w-full"
              alt="..."
            />
            
          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon bg-[#01E45C] rounded-full p-8 inline-block bg-no-repeat" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next  absolute top-0 bottom-0 flex items-center justify-center  text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon bg-[#01E45C] rounded-full p-8 inline-block bg-no-repeat" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
       </div>
      </div>
    )
}
export default Carusel