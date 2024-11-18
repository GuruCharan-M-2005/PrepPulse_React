import React from "react";
import "../css/CoreConcepts.css";
import { CORE_CONCEPTS } from "../utils/Data";
import CoreConcept from "./CoreConcept";
import arrowImage from '../assets/arrow.png';

const CoreConcepts = (prop) => {
  if (!prop.data || !CORE_CONCEPTS[prop.data]) {
    return <div></div>;
  }

  return (
    <section id="coreConcepts">
      <ul>
        {CORE_CONCEPTS[prop.data].map((item, index) => (
          <React.Fragment key={index}>
            <CoreConcept
              key={index}
              img={item.image}
              title={item.title}
              desc={item.description}
            />
            {index < CORE_CONCEPTS[prop.data].length - 1 && (
              <li className="arrow">
                <img src={arrowImage} alt="Arrow" className="arrow-img" width={60} height={55} />
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
};

export default CoreConcepts;
