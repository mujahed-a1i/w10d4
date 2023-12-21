import { Navigate, useParams } from 'react-router-dom';

const GalleryView = ({ galleries }) => {
    const galleryIds = galleries.map(gallery => gallery.id)
    console.log(galleryIds);
    const { galleryId } = useParams();
    debugger
    if (galleryIds.includes(parseInt(galleryId))) {
        return ( <h1>Hello from GalleryView!</h1> )
    } else {
        return ( <Navigate to='/' />)
    }
}

export default GalleryView;