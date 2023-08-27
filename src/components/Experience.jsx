import React from "react";
import  { experienceText } from "../constants"

const Experience = () => {
    return (
        <section id="experience">
            <div className="experience__inner">
                <h2 className="experience__title">EXPERIENCE</h2>
                <div className="experience__wrap">
                    {experienceText.map((experience, key) => (
                        <article className={`experience__item s${key+1}`} key={key}>
                            <span className="period">{experience.period}</span>
                            <div className="text">
                                <div>{experience.text[0]}</div>
                                <div>{experience.text[1]}</div>
                            </div>
                            <h3 className="title">{experience.title}</h3>
                            <div className="info">
                                <span>{experience.info[0]}</span>
                                <span>{experience.info[1]}</span>
                            </div>
                            <a href="https://iy-memo.notion.site/df72620d0e2d41b0aab011470f069215?pvs=4" target="_blank" className="career" rel="noopener noreferrer">CAREER</a>                    
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;