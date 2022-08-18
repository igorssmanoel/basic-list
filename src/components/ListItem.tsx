import { FC } from "react";

interface Prop {
    value: string;
}

const ListItem: FC<Prop> = ({ value }) => {

    return <>
        <li>{value}</li>
    </>
}

export default ListItem;