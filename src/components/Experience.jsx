import React from "react";

const experienceText = [
    {
        period: "2021.04 - 2021.09",
        text: ["멀티미디어콘텐츠 제작(웹&영상)", "방송정보국제교육원"],
        title: "멀티미디어콘텐츠(웹&영상) 제작과 관련 교육 과정 수료",
        info: [
            "PERIOD : 6 MONTHS",
            "USE STACK : HTML5/CSS3, JAVASCRIPT, JQUERY, PHOTOSHOP, ILLUSTRATOR, PREMIERE PRO, AFTER EFFECTS, CINEMA 4D",
        ],
    },
    {
        period: "2021.09 - 2023.08",
        text: ["웹 에이전시", "UI연구개발부, 주임"],
        title: "웹 접근성, 반응형 웹, 크로스 브라우징 등 다양한 프로젝트 경험 습득",
        info: [
            "PERIOD : 6 MONTHS",
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
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;