import React from "react";

const Experience = () => {
    return (
        <section id="experience">
            <div className="experience__inner">
                <h2 className="experience__title">EXPERIENCE</h2>
                <div className="experience__wrap">
                    <article className="experience__item s1">
                        <span className="period">2021.04 - 2021.09</span>
                        <div className="text">
                            <div>멀티미디어콘텐츠 제작(웹&영상)</div>
                            <div>방송정보국제교육원</div>
                        </div>
                        <h3 className="title">멀티미디어콘텐츠(웹&영상) 제작과 관련 교육 과정 수료</h3>
                        <div className="info">
                            <span>PERIOD : 6 MONTHS</span>
                            <span>USE STACK : HTML5/CSS3, JAVASCRIPT, JQUERY, PHOTOSHOP, ILLUSTRATOR, PREMIERE PRO, AFTER EFFECTS,CINEMA 4D</span>
                        </div>
                    </article>
                    <article className="experience__item s2">
                        <span className="period">2021.09 - 2023.08</span>
                        <div className="text">
                            <div>웹 에이전시</div>
                            <div>UI연구개발부, 주임</div>
                        </div>
                        <h3 className="title">웹 접근성, 반응형 웹, 크로스 브라우징 등 다양한 프로젝트 경험 습득</h3>                        
                        <div className="info">
                            <span>PERIOD : 6 MONTHS</span>
                            <span>USE STACK : HTML5/CSS3, JAVASCRIPT, JQUERY, PHOTOSHOP</span>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Experience;