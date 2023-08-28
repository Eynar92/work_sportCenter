import ProductDetails from '../components/ProductDetails/ProductDetails'
import ProductList from '../components/ProductList/ProductList'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

export default function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<ProductList />} />
                <Route path='/products' element={<ProductList />} />
                <Route path='/product/:productId' element={<ProductDetails />} />
            </Routes>
        </Router>
    )
}
