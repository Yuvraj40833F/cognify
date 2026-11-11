import "./DocumentCard.css";


type DocumentCardProps = {
    title: string;
    pages: number;
    isSelected: boolean;
    onClick: () => void;
}

function DocumentCard({title, pages, isSelected, onClick}: DocumentCardProps) {
    return (
        <div
            className={`card ${isSelected ? "selected" : ""}`}
            onClick={onClick}>
            <h3>{title}</h3>
            <p>{pages} pages</p>
        </div>
    );
}

export default DocumentCard;