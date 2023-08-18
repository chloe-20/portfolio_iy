import React from "react";

import work01 from "../assets/img/port01.jpg";
import work02 from "../assets/img/port02.jpg";
import work03 from "../assets/img/port03.jpg";
import work04 from "../assets/img/port04.jpg";
import work05 from "../assets/img/port05.jpg";
import work06 from "../assets/img/port06.jpg";

const workText = [
    {
        num: "01",
        title: "포트폴리오 사이트(2023)",
        desc: "개인 포트폴리오 사이트 2023 리액트 버전입니다.",
        img: work01,
        view: "https://github.com/chloe-20/portfolio_iy",
        name: "2023 리액트로 만든 포트폴리오",
    },
    {
        num: "02",
        title: "하나원큐 회원가입개편",
        desc: "HTML, CSS, Javascript, JQuery를 활용하여 페이지 구축했습니다.",
        img: work02,
        view: "https://www.hanabank.com/oneQp/index.html#none",
        name: "하나원큐 앱",
    },
    {
        num: "03",
        title: "한경 아르테 구축",
        desc: "HTML, CSS, Javascript, JQuery를 활용하여 페이지 구축했습니다.",
        img: work03,
        view: "https://www.arte.co.kr/",
        name: "한경 아르떼 웹 사이트",
    },
    {
        num: "04",
        title: "삼성 언팩 2022",
        desc: "AEM 프로그램을 활용하여 국가별 출시 예정인 제품 관련 데이터 입력 및 배포하였습니다.",
        img: work04,
        view: "https://www.samsung.com/sec/smartphones/galaxy-s23/",
        name: "삼성 갤럭시 S23 웹 사이트",
    },
    {
        num: "05",
        title: "LG CNS MOP 광고플랫폼 구축",
        desc: "HTML, CSS, Javascript, JQuery를 활용하여 페이지 구축했습니다.",
        img: work05,
        view: "https://mop.co.kr/intro-page/index.html",
        name: "LG CNS MOP 광고플랫폼 웹 사이트",
    },
    {
        num: "06",
        title: "MG기업뱅킹(인터넷/스마트) 구축",
        desc: "HTML, CSS, Javascript, JQuery를 활용하여 페이지 구축했습니다.",
        img: work06,
        view: "https://biz.kfcc.co.kr/",
        name: "MG기업뱅킹 웹 사이트",
    },
]

const Work = () => {
    return (
        <section id="work">
            <div className="work__inner">
                <div className="work__title">WORK</div>
                <div className="work__wrap">
                    {workText.map((work, key) => (
                        <article className={`work__item p${key + 1}`} key={key}>
                            <span className="num">{work.num}.</span>
                            <div className="img">
                                <img src={work.img} alt={work.name} />
                            </div>
                            <h3 className="title">{work.title}</h3>
                            <p className="desc">{work.desc}</p>
                            <a href={work.view} target="_blank" className="site" rel="noreferrer">VISIT WEBSITE</a>
                        </article>
                    ))}                   
                </div>
            </div>
        </section>
    );
};

export default Work;