import React from "react";

const experienceText = [
    {
        period: "2021.04 - 2021.09",
        text: ["멀티미디어콘텐츠 제작(웹&영상)", "방송정보국제교육원(IIBI)"],
        title: "멀티미디어콘텐츠(웹&영상) 제작 교육 과정 수료",
        info: [
            "PERIOD : 6 MONTHS",
            "USE STACK : HTML5/CSS3, JAVASCRIPT, JQUERY, PHOTOSHOP, ILLUSTRATOR, PREMIERE PRO, AFTER EFFECTS, CINEMA 4D",
        ],
    },
    {
        period: "2021.09 - 2023.08",
        text: ["웹 에이전시", "UI연구개발부, 주임"],
        title: "운영, 구축, 개선 등 다양한 프로젝트 수행",
        info: [
            "PERIOD : 2 YEARS",
            "USE STACK : HTML5/CSS3, JAVASCRIPT, JQUERY, PHOTOSHOP, FIGMA, ZEPLIN, SLACK",
        ],
    },
];

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
                            <a href="https://iy-memo.notion.site/df72620d0e2d41b0aab011470f069215?pvs=4" target="_blank" className="career" rel="noreferrer">CAREER</a>                    
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;