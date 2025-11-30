import styles from "./Cardapio.module.css";
import { cardapio } from "@/_utils/lista";

export default function Cardapio() {
    const adicionarPedido = (item) => {
        const event = new CustomEvent('adicionarPedido', { detail: item });
        window.dispatchEvent(event);
    };

    return (
        <ul className={styles.list}>
            {cardapio.map((item) => (
                <li key={item.id} className={styles.item}>
                    <div className={styles.info}>
                        <span className={styles.nome}>{item.nome}</span>
                        <span className={styles.preco}>R$ {item.preco.toFixed(2)}</span>
                    </div>

                    <button
                        type="button"
                        className={styles.botao}
                        onClick={() => adicionarPedido(item)}
                    >
                        Adicionar ao pedido
                    </button>
                </li>
            ))}
        </ul>
    );
}
