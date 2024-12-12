
interface props {
    title?: string;
    children?: React.ReactNode;
}
function Card({ title, children }: props) {

    return (
        <div className="card">
            <div className="card-header">{title}</div>
            <hr style={{ width: "90%", margin: "10px", border: "1px solid #c0c0c0" }} />
            <div className="card-body">{children}</div>
        </div>
    )
}

export default Card;