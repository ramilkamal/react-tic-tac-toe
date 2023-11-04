import "./square.scss";

interface Prop {
    value: string;
    onSquareClick: () => void;
}

export const Square: React.FC<Prop> = ({ value, onSquareClick }) => {
    return <button onClick={onSquareClick}>{value}</button>;
};
