import React, { useState } from 'react';
import '../css/RoadmapHome.css';
import CoreConcepts from './CoreConcepts';

export default function RoadmapHome() {
    const [selectedMap, setSelectedMap] = useState('');
    const items = [
        { "name": "React", "image": "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" },
        { "name": "Java", "image": "https://static-00.iconduck.com/assets.00/java-icon-1511x2048-6ikx8301.png" },
        { "name": "Python", "image": "https://cdn-icons-png.freepik.com/256/5968/5968350.png?ga=GA1.1.1426473255.1721884190&semt=ais_hybrid" },
        { "name": "C++", "image": "https://cdn-icons-png.freepik.com/256/6132/6132222.png?ga=GA1.1.1426473255.1721884190&semt=ais_hybrid" },
        { "name": "MongoDB", "image": "https://cdn-icons-png.freepik.com/256/5732/5732935.png?uid=R145816969&ga=GA1.1.1426473255.1721884190&semt=ais_hybrid" },
        { "name": "SQL", "image": "https://cdn-icons-png.freepik.com/256/4492/4492311.png?uid=R145816969&ga=GA1.1.1426473255.1721884190&semt=ais_hybrid" },
        { "name": "R", "image": "https://cdn-icons-png.freepik.com/256/11350/11350464.png?uid=R145816969&ga=GA1.1.1426473255.1721884190&semt=ais_hybrid" },
        { "name": "C#", "image": "https://cdn-icons-png.freepik.com/256/358/358879.png?uid=R145816969&ga=GA1.1.1426473255.1721884190&semt=ais_hybrid" },
        { "name": "WebDev", "image": "https://cdn-icons-png.freepik.com/256/524/524584.png?uid=R145816969&ga=GA1.1.1426473255.1721884190&semt=ais_hybrid" },
        { "name": "SpringBoot", "image": "https://img.icons8.com/?size=80&id=A3Ulk2RcONKs&format=png" },
        { "name": "Django", "image": "https://img.icons8.com/?size=80&id=IuuVVwsdTi2v&format=png" },
        { "name": "AI", "image": "https://img.icons8.com/?size=80&id=97384&format=png" },
        { "name": "ML", "image": "https://img.icons8.com/?size=80&id=yjSFO4TGzhsn&format=png" },
        { "name": "DL", "image": "https://img.icons8.com/?size=80&id=SjiWAVoSrkoM&format=png" },
        { "name": "GenAI", "image": "https://img.icons8.com/?size=80&id=zWboUH54iJ0N&format=png" },
        { "name": "Angular", "image": "https://img.icons8.com/?size=80&id=6SWtW8hxZWSo&format=png" },
        { "name": "Express", "image": "https://img.icons8.com/?size=48&id=Lk2Q5FRKDWGI&format=png" },
        { "name": "Node", "image": "https://image.shutterstock.com/image-vector/node-vector-logo-backend-programming-260nw-1764554228.jpg" },
        { "name": "Flask", "image": "https://img.icons8.com/?size=64&id=hCWb1IvpcBZ0&format=png" },
        { "name": "Cybersecurity", "image": "https://img.icons8.com/?size=80&id=pXbJmmqmsmIY&format=png" },
        { "name": "Blockchain", "image": "https://img.icons8.com/?size=80&id=ycE2WQlU ZgKw&format=png" },
        { "name": "Cloud Computing", "image": "https://img.icons8.com/?size=48&id=6n6UAK58NMvK&format=png" },
        { "name": "DevOps", "image": "https://img.icons8.com/?size=50&id=VtjfBxoWcDCK&format=png" },
        { "name": "Quantum Computing", "image": "https://img.icons8.com/?size=80&id=zjRDQvOLYaH5&format=png" },
        { "name": "Data Science", "image": "https://img.icons8.com/?size=80&id=M73lsyWiqdgR&format=png" },
        { "name": "IoT", "image": "https://img.icons8.com/?size=80&id=M73lsyWiqdgR&format=png" },
        { "name": "AR/VR", "image": "https://img.icons8.com/?size=80&id=9QniGNRZJUql&format=png" },
        { "name": "Edge Computing", "image": "https://img.icons8.com/?size=64&id=PIItW9oeF9vP&format=png" },
        { "name": "Serverless Computing", "image": "https://img.icons8.com/?size=80&id=91869&format=png" }
    ];
    


    return (
        <div className="roadmap-container">
                <div className="header">
                    <div className="app-name">PrepPulse</div>
                    <div className="nav-sections">
                        <a href="/">Home</a>
                        <a href="/learn">Learn</a>
                        <a href="/login">Login</a>
                        </div>
                </div>
            <div className="grid-container grid-container-background">
                {items.map((item, index) => (
                    <div className="grid-item"  onClick={() => setSelectedMap(item.name)}>
                        <img className='grid-item-image' src={item.image} alt={item.name} />
                        <h2 className='grid-item-text'>{item.name}</h2>
                    </div>
                ))}
            </div>
            {selectedMap && (
                <div className="core-concepts-overlay" onClick={()=>setSelectedMap('')}>
                    <CoreConcepts data={selectedMap} />
                </div>
            )}
        </div>
    );
}
