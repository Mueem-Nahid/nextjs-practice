import { useRouter } from 'next/router'

function ProductDetails() {
    const router = useRouter()
    const productId = router.query.productId //this productId must be same as the [productId].js file name
    return <>
        <h1>Details of: {productId}</h1>
    </>
}

export default ProductDetails