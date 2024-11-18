import React from 'react';
// import { Link } from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = ({ setCategory }) => {
  return (
    <div className="sidebar">
      <ul>
        <li className="sidebar-item">
          <button onClick={() => setCategory('All')}>Home</button>
        </li>
        <li className="sidebar-item">
          <button onClick={()=> setCategory('All')}>All</button>
        </li>
       {/* <li className="sidebar-item1">
          <hr className="separator" />
          <Link>Basics</Link>
        </li>*/}
        <li className="sidebar-item">
          <button onClick={() => setCategory('Java')}>Java</button>
        </li>
        <li className="sidebar-item">
          <button onClick={() => setCategory('C++')}>C++</button>
        </li>
        <li className="sidebar-item">
          <button onClick={() => setCategory('Phyton')}>Python</button>
        </li>
        <li className="sidebar-item">
          <button onClick={() => setCategory('Javascript')}>JavaScript</button>
        </li>
        <li className="sidebar-item">
          <button onClick={() => setCategory('DSA')}>DSA</button>
        </li>
        {/* <li className="sidebar-item1">
          <hr className="separator" />
          <Link>Design</Link>
        </li> */}
        <li className="sidebar-item">
          <button onClick={() => setCategory('UI/UX')}>UI/UX</button>
        </li>
        <li className="sidebar-item">
          <button onClick={() => setCategory('HTML/CSS')}>Html css</button>
        </li>
        <li className="sidebar-item">
          <button onClick={() => setCategory('Tailwind CSS')}>Tailwind CSS</button>
        </li>
        {/* <li className="sidebar-item1">
          <hr className="separator" />
          <Link>Database</Link>
        </li> */}
        <li className="sidebar-item">
          <button onClick={() => setCategory('NoSQL')}>NoSQL</button>
        </li>
        <li className="sidebar-item">
          <button onClick={() => setCategory('SQL')}>SQL</button>
        </li>
       
        {/* <li className="sidebar-item1">
          <hr className="separator" />
          <Link>Cloud</Link>
        </li> */}
        <li className="sidebar-item">
          <button onClick={() => setCategory('Cloud')}>Cloud</button>
        </li>
        <li className="sidebar-item">
          <button onClick={() => setCategory('AWS')}>AWS</button>
        </li>
        <li className="sidebar-item">
          <button onClick={() => setCategory('Azure')}>Azure</button>
        </li>
       
        {/* <li className="sidebar-item1">
          <hr className="separator" />
          <Link>Web Development</Link>
        </li> */}
        <li className="sidebar-item">
          <button onClick={() => setCategory('React')}>React</button>
        </li>
        <li className="sidebar-item">
          <button onClick={() => setCategory('Node.js')}>Node.js</button>
        </li>
        <li className="sidebar-item">
          <button onClick={() => setCategory('Angular')}>Angular</button>
        </li>
      
        <hr className="separator" />
        <hr className="separator" />
        <hr className="separator" />
        <hr className="separator" />
        <hr className="separator" />
        <hr className="separator" /><hr className="separator" />
        <hr className="separator" />
        <hr className="separator" />
        <hr className="separator" />

      </ul>
    </div>
  );
};

export default Sidebar;
