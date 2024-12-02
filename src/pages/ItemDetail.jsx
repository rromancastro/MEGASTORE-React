import { useParams } from "react-router"
import { Layout, printStars } from "../index"
import { useGetProductById } from "../hooks/useGetProductById";
import { useState } from "react";

export const ItemDetail = () => {

    const { id } = useParams();
    const { product } = useGetProductById(id.replace(':', ""))

    //LOGICA ZOOM IMAGEN
    const [transformOrigin, setTransformOrigin] = useState("center center");

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        setTransformOrigin(`${xPercent}% ${yPercent}%`);
    };

    //FUNCION IMAGENES
    const [imgSelected, setImageSelected] = useState(0)
    const [imgTransition, setImgTransition] = useState(false);

    const functionSetImage = (img) => {
        setImgTransition(true); // Activa la transición
        setTimeout(() => {
          setImageSelected(img);
          setImgTransition(false);
        }, 300);
      };

    return(
        <Layout>
            <section id="itemDetail">
                <div id="imagesSelector">
                {product.images && product.images.length > 0 ? <img src={product.images[0]} alt="" onClick={() => functionSetImage(0)}/> : null}
                {product.images && product.images.length > 1 ? <img src={product.images[1]} alt="" onClick={() => functionSetImage(1)}/> : null}
                {product.images && product.images.length > 2 ? <img src={product.images[2]} alt="" onClick={() => functionSetImage(2)}/> : null}
                </div>
                <div id="itemDetailImage" onMouseMove={handleMouseMove}>
                {
                    product.images && product.images.length > 0 ? <img src={product.images[imgSelected]} alt="" style={{ transformOrigin }} className={imgTransition ? 'fade-out' : 'fade-in'}/> : null
                }
                </div>
                <div id="itemDetailText">
                    <h2>{product.title}</h2>
                    <h3>{product.description}</h3>
                    <ul>
                        <li>{product.warrantyInformation}</li>
                        <li>{product.shippingInformation}</li>
                        <li>{product.returnPolicy} after </li>
                    </ul>
                    {printStars(Math.round(product.rating))}
                    <h4>${product.price} USD</h4>
                    <button>Add To Cart</button>
                </div>
            </section>
        </Layout>
    )
}