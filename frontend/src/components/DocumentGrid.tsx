import type { StudyDocument } from "../types";
import DocumentCard from "./DocumentCard";

type DocumentGridProps = {
    documents: StudyDocument[];
    selectedDocument: string;
    onSelect: (title: string) => void;
}

function DocumentGrid({documents, selectedDocument, onSelect }: DocumentGridProps) {
    return (
        <div className="card">
            {documents.map((document) =>(
                <DocumentCard
                key={document.id}   
                title={document.title}
                pages={document.pages}
                isSelected={selectedDocument === document.title}
                onClick={() => onSelect(document.title)}/>
            ))}
        </div>
)}

export default DocumentGrid;