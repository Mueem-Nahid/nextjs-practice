import Link from "next/link"
import { useRouter } from "next/router"

function Home() {
    const router = useRouter()

    const handleClick = () => {
        console.log('Placing your order')
        router.push('/products')
    }

    return <div>
        <h1>Home Page</h1>
        <Link href='/blog'>
            <a>Blog</a>
        </Link>
        <Link href='/products'>
            <a>Products</a>
        </Link>
        <button onClick={handleClick}>Place Order</button>
        <Link href='/users'>
            <a>Users</a>
        </Link>
    </div>
}

export default Home