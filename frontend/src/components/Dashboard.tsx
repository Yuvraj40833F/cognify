import { useState } from "react";

import type { StudyDocument } from "../types";


import SearchBar from "./SearchBar"
import DocumentGrid from "./DocumentGrid";
import DashboardHeader from "./DashboardHeader";

const documents : StudyDocument[]=[
    { id:1,title: "Physics", pages: 100 },
    { id:2,title: "Chemistry", pages: 150 },
    { id:3,title: "Biology", pages: 200 },
    { id:4,title: "Mathematics", pages: 250 }
];
const stats = {
    streak: 7,
    weeklyRecord: 124,
    currentProgress: 78,
    weeklyGoal: 125,
}


function Dashboard() {
    const [selectedDocument, setSelectedDocument] = useState("");
    const [searchText, setSearchText] = useState("");
    const filteredDocuments = documents.filter((document) =>
        document.title.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <div className="dashboard">
            
            <DashboardHeader
                name= "Yuvraj"
                greeting="Good Morning"
                stats={stats}
            />

            <SearchBar
                value={searchText}
                placeholder="Search documents..."
                onChange={(value) => setSearchText(value)}
            />            
            <DocumentGrid
            documents={filteredDocuments}
            selectedDocument={selectedDocument}
            onSelect={setSelectedDocument}/>
        </div>
    );
}

export default Dashboard;

