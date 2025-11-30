import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

const Cardapio = dynamic(() => import("cardapio/Cardapio"), { ssr: false });
const Pedidos = dynamic(() => import("pedido/Pedido"), { ssr: false });

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <Cardapio />
      </div>

      <div className={styles.col}>
        <Pedidos />
      </div>
    </div>
  );
}
