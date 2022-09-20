import Header from './Header'
import ImgBody from './ImgBody'
import Carusel from './Carusel'
import Direction from './Direction'
// import Blog from './Blog'
import Footer from './Footer'

function MainPage() {
    return(
        <div>
            <Header />
            <ImgBody />
            <Carusel />
            <Direction />
            {/* <Blog /> */}
            <Footer />
        </div>
    )   
}

export default MainPage