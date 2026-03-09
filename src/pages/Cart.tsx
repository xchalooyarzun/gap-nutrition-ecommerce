import { useCart } from "../context/CartContext";

export default function Cart() {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart, total } = useCart();

    return (
        <main style={styles.container}>
            <h1>Tu carrito</h1>

            {cart.length === 0 ? (
                <p>No hay suplementos agregados todavía.</p>
            ) : (
                <>
                    <div style={styles.list}>
                        {cart.map((item) => (
                            <div key={item.id} style={styles.item}>
                                <img src={item.image} alt={item.name} style={styles.image} />

                                <div style={styles.info}>
                                    <h3>{item.name}</h3>

                                    <div style={styles.quantityBox}>
                                        <button
                                            style={styles.quantityButton}
                                            onClick={() => decreaseQuantity(item.id)}
                                        >
                                            -
                                        </button>

                                        <span style={styles.quantityText}>{item.quantity}</span>

                                        <button
                                            style={styles.quantityButton}
                                            onClick={() => increaseQuantity(item.id)}
                                        >
                                            +
                                        </button>
                                    </div>

                                    <p>Precio unitario: ${item.price.toLocaleString("es-CL")}</p>
                                    <p>
                                        Subtotal: $
                                        {(item.price * item.quantity).toLocaleString("es-CL")}
                                    </p>
                                </div>

                                <button
                                    style={styles.removeButton}
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Eliminar
                                </button>
                            </div>
                        ))}
                    </div>

                    <h2>Total: ${total.toLocaleString("es-CL")}</h2>

                    <button style={styles.clearButton} onClick={clearCart}>
                        Vaciar carrito
                    </button>
                </>
            )}
        </main>
    );
}

const styles = {
    container: {
        padding: "24px",
    },
    list: {
        display: "flex",
        flexDirection: "column" as const,
        gap: "16px",
        marginTop: "20px",
        marginBottom: "20px",
    },
    item: {
        display: "flex",
        gap: "16px",
        alignItems: "center",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "12px",
        backgroundColor: "white",
    },
    image: {
        width: "120px",
        height: "90px",
        objectFit: "cover" as const,
        borderRadius: "8px",
    },
    info: {
        flex: 1,
    },
    quantityBox: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginTop: "8px",
    },
    quantityButton: {
        width: "32px",
        height: "32px",
        border: "none",
        borderRadius: "6px",
        backgroundColor: "#111",
        color: "white",
        cursor: "pointer",
        fontSize: "18px",
        fontWeight: "bold",
    },
    quantityText: {
        minWidth: "24px",
        textAlign: "center" as const,
        fontWeight: "bold",
    },
    removeButton: {
        padding: "10px 14px",
        border: "none",
        borderRadius: "8px",
        backgroundColor: "#c62828",
        color: "white",
        cursor: "pointer",
    },
    clearButton: {
        padding: "12px 16px",
        border: "none",
        borderRadius: "8px",
        backgroundColor: "#111",
        color: "white",
        cursor: "pointer",
    },
};