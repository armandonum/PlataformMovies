import { useState, useEffect } from 'react';
import './App.css'
import images from './logo/ours.jpeg'
import images2 from './logo/ours2.jpeg'
import images3 from './logo/ours3.jpg'
import images4 from './logo/Imagen1.jpg'
import images5 from './logo/Imagen2.jpg'


const imageList = [images4, images5, images, images2, images3];

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 6000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <>
      <div id="carrusel-contenido">
        <div id="carrusel-caja">
          <img src={imageList[currentImageIndex]} alt={`Imagen ${currentImageIndex + 1}`} />
        </div>
      </div>
    </>
  );
}

export default App;