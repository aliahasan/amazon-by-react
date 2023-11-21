import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const Products = () => {
    const {products} = useLoaderData()
    console.log(products)
    return (
        <div className="container mx-auto grid md:grid-cols-3 gap-4 p-5">
         {
            products.map(product => <ProductsCard key={product.id} product={product}></ProductsCard>)
         }
        </div>
    );
};

export default Products;