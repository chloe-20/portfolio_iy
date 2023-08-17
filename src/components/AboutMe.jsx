import React from "react";

const AboutMe = () => {
    return (
        <section id="aboutMe">
            <div className="aboutMe__inner">
                <h2 className="aboutMe__title">ABOUT ME</h2>
                <div className="aboutMe__desc">
                    <div>
                        <span>1.</span>
                        <h3>보고, 듣고, 고민하는 웹 퍼블리셔 최인영</h3>
                        <p>
                            <em className="highlight">Seeing</em><br/>
                            <em className="highlight">Listening</em><br/>
                            <em className="highlight">Thinking</em><br/><br/>
                            2년 동안 다양한 프로젝트를 경험하며, 웹사이트가 사용자에게 제공하는 가치와 경험을 끊임없이 향상시키는 것에 배움의 즐거움을 느꼈습니다.<br/>
                            도전과 성장을 추구하는 웹 퍼블리셔로서 더욱 전문성을 갖춰, 다양한 사용자들에게 더 나은 경험을 제공하기 위해 노력하고 있습니다.
                        </p>
                    </div>
                    <div>
                        <span>2.</span>
                        <h3>I work with these Skill</h3>
                        <p>
                            <em className="highlight">HTML5</em>,&nbsp;&nbsp;
                            <em className="highlight">CSS3</em>,&nbsp;&nbsp;
                            <em className="highlight">SCSS</em>,&nbsp;&nbsp;
                            <em className="highlight">Javascript</em>,&nbsp;&nbsp;
                            <em className="highlight">Jquery</em>,&nbsp;&nbsp;
                            <em className="highlight">SVN</em>,&nbsp;&nbsp;
                            <em className="highlight">Figma</em>,&nbsp;&nbsp;
                            <em className="highlight">Zeplin</em>,&nbsp;&nbsp;
                            <em className="highlight">Photoshop</em>,&nbsp;&nbsp;
                            <em className="highlight">Slack</em>,&nbsp;&nbsp;
                            <em className="highlight">CMS</em><br/><br/>
                            And&nbsp;&nbsp;
                            <em className="highlight">긍정적</em>,&nbsp;&nbsp;
                            <em className="highlight">끈기</em>,&nbsp;&nbsp;
                            <em className="highlight">책임감</em>,&nbsp;&nbsp;
                            <em className="highlight">협동심</em>,&nbsp;&nbsp;
                            <em className="highlight">계획성</em>
                        </p>
                    </div>
                    <div>
                        <span>3.</span>
                        <h3>I worked at</h3>
                        <ol className="timeline">
                            <li>
                                <p>
                                    Web Agency <em className="period">2021 - 2023</em>
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;