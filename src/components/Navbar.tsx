import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
    const { cart } = useCart();

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav style={styles.nav}>
            <h2 style={styles.logo}> === Gonzalo Oyarzún Panes === © 2026 GAP Nutrition</h2>

            <div style={styles.links}>
                <Link to="/" style={styles.link}>
                    Inicio
                </Link>
                <Link to="/cart" style={styles.link}>
                    Carrito ({totalItems})
                </Link>
            </div>
        </nav>
    );
}

const styles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 24px",
        backgroundColor: "#111",
        color: "white",
    },
    logo: {
        margin: 0,
        fontSize: "1.4rem",
        fontWeight: "bold",
    },
    links: {
        display: "flex",
        gap: "18px",
    },
    link: {
        color: "white",
        textDecoration: "none",
        fontWeight: "bold",
    },
};