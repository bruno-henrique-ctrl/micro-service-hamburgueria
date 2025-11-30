import { useState, useEffect } from "react";
import styles from "./Pedido.module.css";

export default function Pedidos() {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        const handler = (e) => {
            setPedidos((prevPedidos) => [...prevPedidos, e.detail]);
        };

        window.addEventListener("adicionarPedido", handler);

        return () => {
            window.removeEventListener("adicionarPedido", handler);
        };
    }, []);

    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>Pedidos</h2>

            <ul className={styles.lista}>
                {pedidos.map((pedido, index) => (
                    <li key={index} className={styles.item}>
                        <span className={styles.nome}>{pedido.nome}</span>
                        <span className={styles.preco}>R$ {pedido.preco.toFixed(2)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
