import { Carousel } from '../components/carousel';
import './gallery.scss';

export function Gallery() {
    return (
        <div className="page">
            <div id="gallery" className=" card ">
                <h2>Gallery</h2>
                <Carousel />
                <p>(swipe)</p>
            </div>
        </div>
    );
}
  