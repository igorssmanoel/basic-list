import { FC, useState } from "react";
import ListItem from "./ListItem";

import "../styles/list.css";

interface Prop {
    title: string;
}

const List: FC<Prop> = ({ title }) => {
    const [items, setItems] = useState<string[]>([]);
    const [newItem, setNewItem] = useState("");
    const addItem = (item: string) => {
        setItems([...items, item])
    }

    return <div className={"container"}>
        <h2 className={"title"}>{title}</h2>
        <div className={"card"}>
            <input
                placeholder={"Digite um novo item"}
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)} />
            <button onClick={() => addItem(newItem)}>Adicionar</button>
            <div className={"amount"}>
                {`${items.length} itens na lista`}
            </div>
            <ul>
                {items.map(item => <ListItem key={item} value={item} />)}
            </ul>
        </div>
    </div>
}

export default List;