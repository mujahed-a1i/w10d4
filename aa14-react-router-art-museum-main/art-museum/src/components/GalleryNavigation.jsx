import { NavLink } from "react-router-dom"

function GalleryNavigation(props) {
    const galleries = Object.values(props.galleries)
    console.log(galleries);
    return (
    <nav>
    <NavLink to="/">Home</NavLink>
        <h1>Galleries</h1>
            {/* {galleryList} */}
            {galleries.map((gallery) => (
           <>
           <NavLink key={gallery.id} to={`/galleries/${gallery.id}`}>
                {gallery.name}
           </NavLink>
           <br></br>
           </> 
        ))}
    </nav>
    )

}

export default GalleryNavigation
