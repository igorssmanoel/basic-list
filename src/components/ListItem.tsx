import { FC } from "react";

import "../styles/list-item.css";

interface Prop {
    value: string;
}

const ListItem: FC<Prop> = ({ value }) => {

    return <>
        <li>{value}</li>
    </>
}

export default ListItem;