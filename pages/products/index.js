import Link from "next/link"

function ProductList( { productId = 100 } ) {
    return <>
        <Link href='/'>
        <a>Home</a>
        </Link>
        <h1>Products lists:</h1>
        <li>
            <Link href='/products/1'>
                <a>Product 1</a>
            </Link>
        </li>
        <li>
            <Link href='/products/2'>
                <a>Product 2</a>
            </Link>
        </li>
        <li>
            <Link href='/products/3' replace>
                <a>Product 3</a>
            </Link>
        </li>
        <li>
            <Link href={`/products/${productId}`}>
                <a>Product {productId}</a>
            </Link>
        </li>
    </>
}

export default ProductList