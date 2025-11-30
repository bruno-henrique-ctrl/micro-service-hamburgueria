import styles from "./Cardapio.module.css";

export default function Cardapio() {
    const cardapio = [
        { id: 1, nome: 'Hamburguer', preco: 30.00 },
        { id: 2, nome: 'Hamburguer duplo', preco: 25.00 },
        { id: 3, nome: 'Batata frita', preco: 15.00 },
        { id: 4, nome: 'Coca-Cola', preco: 10.00 },
        { id: 5, nome: 'Hamburguer v8', preco: 35.00 },
        { id: 6, nome: 'Milkshake', preco: 12.00 },
        { id: 7, nome: 'Salada', preco: 18.00 },
        { id: 8, nome: 'Suco natural', preco: 8.00 },
        { id: 9, nome: 'Sobremesa', preco: 20.00 },
        { id: 10, nome: 'Café', preco: 5.00 }
    ];

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
                        onClick={() => {
                            const event = new CustomEvent('adicionarPedido', { detail: item });
                            window.dispatchEvent(event);
                        }}
                    >
                        Adicionar ao pedido
                    </button>
                </li>
            ))}
        </ul>
    );
}
