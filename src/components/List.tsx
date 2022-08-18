import { FC } from "react";
import ListItem from "./ListItem";

interface Prop {
    title: string;
}

const List: FC<Prop> = ({ title }) => {
    return <>
        <h2>{title}</h2>
        <ul>
            <ListItem value={"Item 1"} />
            <ListItem value={"Item 2"} />
            <ListItem value={"Item 3"} />
        </ul>
    </>
}

export default List;