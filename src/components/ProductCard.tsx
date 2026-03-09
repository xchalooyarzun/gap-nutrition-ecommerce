import type { Product } from "../types/Product";
import { useCart } from "../context/CartContext";

type Props = {
    product: Product;
};

export default function ProductCard({ product }: Props) {
    const { addToCart, cart } = useCart();
    const cartItem = cart.find((item) => item.id === product.id);

    return (
        <div
            style={styles.card}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
            }}
        >
            <img src={product.image} alt={product.name} style={styles.image} />

            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <strong>${product.price.toLocaleString("es-CL")}</strong>

            <button style={styles.button} onClick={() => addToCart(product)}>
                Agregar al carrito
            </button>

            {cartItem && (
                <p style={styles.cartText}>En Carrito: {cartItem.quantity}</p>
            )}
        </div>
    );
}

const styles = {
    card: {
        border: "1px solid #ddd",
        borderRadius: "14px",
        padding: "16px",
        display: "flex",
        flexDirection: "column" as const,
        gap: "10px",
        backgroundColor: "white",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },
    image: {
        width: "100%",
        height: "200px",
        objectFit: "cover" as const,
        borderRadius: "10px",
    },
    button: {
        marginTop: "auto",
        padding: "10px",
        border: "none",
        borderRadius: "8px",
        backgroundColor: "#111",
        color: "white",
        cursor: "pointer",
        fontWeight: "bold",
    },
    cartText: {
        margin: 0,
        fontSize: "14px",
        color: "#333",
        fontWeight: "bold",
    },

};