import { useParams } from "react-router-dom"
import productsData from "../../data/data"

export default function ProductDetails() {
    const { productId } = useParams()
    const product = productsData.find((product) => product.id === parseInt(productId))

    return (
        <main>
            <div className="details__top">
                <div className="container">
                    <img className="details__image" src={product.image} alt={product.name} />
                    <h1>{product.name}</h1>
                    <p className="price">${product.price}</p>
                    <span className="category">{product.category}</span>
                    <p className="margin__top margin__bot">{product.description}</p>
                    <button className="btn">Agregar al carrito</button>
                </div>
            </div>
        </main>
    )
}
