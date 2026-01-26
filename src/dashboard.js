import React from "react";
import Page from "./pages";
import HTMLFlipBook from 'react-pageflip';

function Dashboard() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-300 overflow-hidden">
            <div className="card bg-white shadow-2xl rounded-md">
                <HTMLFlipBook width={300} height={500}  showCover={true} useMouseEvents={true}>
                    <Page>Page 1</Page>
                    <Page>Page 2</Page>
                    <Page>Page 3</Page>
                    <Page>Page 4</Page>
                </HTMLFlipBook>
            </div>
        </div>
    );
}

export default Dashboard;