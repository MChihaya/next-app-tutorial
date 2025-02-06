import Link from "next/link";
import styles from "../../Home.module.css";

// SSGの場合

export async function getProduct(id) {
    const req = await fetch(`http://localhost:3000/${id}.json`);
    const data = req.json();
    return data;
}

const Product = async ({ params }) => {
    const { id } = await params;
    const product = await getProduct(id);
    if (!product) {
        return <div>商品が見つかりません</div>;
    }
    return (
        <div>
            <main className={styles.main}>
                <h1>{id}のページです</h1>
                <img src={product.image} width="300" height="400" alt={product.name} />
                <p>{product.name}</p>
                <br />
                <Link href="/products">
                    商品一覧へ
                </ Link>
            </main>
        </div>
    );
}

export default Product;