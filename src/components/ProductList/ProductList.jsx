import productsData from '../../data/data'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function ProductList() {
    const [producstData, setProductsData] = useState(productsData)
    const [searchTerm, setSearchTerm] = useState("")
    const [searchByCategory, setSearchByCategory] = useState("")

    const searchTermValue = searchTerm.toLowerCase()

    const categorySearchHandler = () => {
        const filteredData = productsData.filter((product) =>
            product.category.toLowerCase().includes(searchByCategory.toLowerCase())
        )

        setProductsData(filteredData);
    }

    const filterCategoryData = (e) => {
        const filterValue = e.target.value
        if (filterValue === 'Todas las categorías') {
            setProductsData(productsData)
        } else {
            const filteredData = productsData.filter((product) =>
                product.category.toLowerCase() === filterValue.toLowerCase()
            );

            setProductsData(filteredData);
        }
    }

    const getUniqueCategories = (productsData) => {
        const allCategories = productsData.map(product => product.category)
        return ['Todas las categorías', ...new Set(allCategories)]
    }
    const uniqueCategories = getUniqueCategories(productsData)

    return (
        <section className='product__list'>
            <div className='container'>
                <div className='product__list__wrapper'>
                    <div className='search__panel'>
                        <div className='search__panel-01'>
                            <input
                                type="text"
                                placeholder='Búsqueda por nombre, descripción'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="search__panel-02">
                            <input
                                type="text"
                                placeholder='Búsqueda por categoría'
                                value={searchByCategory}
                                onChange={(e) => setSearchByCategory(e.target.value)}
                            />
                            <button className='btn'
                                onClick={categorySearchHandler}
                            >
                                Buscar
                            </button>
                        </div>
                        <div className="search__panel-03">
                            <select
                                onChange={filterCategoryData}
                            >
                                <option value="" selected disabled>-- Categorías --</option>
                                {uniqueCategories.map((category, id) => (
                                    <option key={id} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="products__wrapper">
                        {producstData
                            ?.filter((product) => {
                                if (searchTerm === "") return product;
                                if (
                                    product.name.toLowerCase().includes(searchTermValue) ||
                                    product.description.toLowerCase().includes(searchTermValue)
                                ) return product;
                            })
                            .map((product) => (
                                <div className='product__item' key={product.id}>
                                    <Link to={`/product/${product.id}`}>
                                        <img src={product.image} alt={product.name} />
                                    </Link>
                                    <div className='product__content'>
                                        <h3>{product.name}</h3>
                                        <p className='margin__top margin__bot'>{product.description}</p>
                                        <span className='margin__bot category'>{product.category}</span>
                                        <p className='price'>${product.price}</p>
                                        <Link
                                            to={`/product/${product.id}`}
                                            className='btn'
                                        >
                                            Ver Producto
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
