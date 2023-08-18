import React from "react";

import work01 from "../assets/img/port01.jpg";
import work02 from "../assets/img/port02.jpg";
import work03 from "../assets/img/port03.jpg";
import work04 from "../assets/img/port04.jpg";
import work05 from "../assets/img/port05.jpg";
import work06 from "../assets/img/port06.jpg";
import work07 from "../assets/img/port07.jpg";
import work08 from "../assets/img/port08.jpg";
import work09 from "../assets/img/port09.jpg";
import work10 from "../assets/img/port10.jpg";

const workText = [
    {
        num: "01",
        title: "포트폴리오 사이트(2023)",
        desc: "개인 포트폴리오 사이트 2023 리액트 버전입니다.",
        img: work01,
        code: "https://github.com/chloe-20/portfolio_iy",
        view: "https://github.com/chloe-20/portfolio_iy",
        name: "2023 리액트로 만든 포트폴리오",
    },
    {
        num: "02",
        title: "포트폴리오 사이트(2023)",
        desc: "개인 포트폴리오 사이트 2023 리액트 버전입니다.",
        img: work02,
        code: "https://github.com/chloe-20/portfolio_iy",
        view: "https://github.com/chloe-20/portfolio_iy",
        name: "023 리액트로 만든 포트폴리오",
    },
    {
        num: "03",
        title: "포트폴리오 사이트(2023)",
        desc: "개인 포트폴리오 사이트 2023 리액트 버전입니다.",
        img: work03,
        code: "https://github.com/chloe-20/portfolio_iy",
        view: "https://github.com/chloe-20/portfolio_iy",
        name: "023 리액트로 만든 포트폴리오",
    },
    {
        num: "04",
        title: "포트폴리오 사이트(2023)",
        desc: "개인 포트폴리오 사이트 2023 리액트 버전입니다.",
        img: work04,
        code: "https://github.com/chloe-20/portfolio_iy",
        view: "https://github.com/chloe-20/portfolio_iy",
        name: "023 리액트로 만든 포트폴리오",
    },
    {
        num: "05",
        title: "포트폴리오 사이트(2023)",
        desc: "개인 포트폴리오 사이트 2023 리액트 버전입니다.",
        img: work05,
        code: "https://github.com/chloe-20/portfolio_iy",
        view: "https://github.com/chloe-20/portfolio_iy",
        name: "023 리액트로 만든 포트폴리오",
    },
    {
        num: "06",
        title: "포트폴리오 사이트(2023)",
        desc: "개인 포트폴리오 사이트 2023 리액트 버전입니다.",
        img: work06,
        code: "https://github.com/chloe-20/portfolio_iy",
        view: "https://github.com/chloe-20/portfolio_iy",
        name: "023 리액트로 만든 포트폴리오",
    },
    {
        num: "07",
        title: "포트폴리오 사이트(2023)",
        desc: "개인 포트폴리오 사이트 2023 리액트 버전입니다.",
        img: work07,
        code: "https://github.com/chloe-20/portfolio_iy",
        view: "https://github.com/chloe-20/portfolio_iy",
        name: "023 리액트로 만든 포트폴리오",
    },
    {
        num: "08",
        title: "포트폴리오 사이트(2023)",
        desc: "개인 포트폴리오 사이트 2023 리액트 버전입니다.",
        img: work08,
        code: "https://github.com/chloe-20/portfolio_iy",
        view: "https://github.com/chloe-20/portfolio_iy",
        name: "023 리액트로 만든 포트폴리오",
    },
    {
        num: "09",
        title: "포트폴리오 사이트(2023)",
        desc: "개인 포트폴리오 사이트 2023 리액트 버전입니다.",
        img: work09,
        code: "https://github.com/chloe-20/portfolio_iy",
        view: "https://github.com/chloe-20/portfolio_iy",
        name: "023 리액트로 만든 포트폴리오",
    },
    {
        num: "10",
        title: "포트폴리오 사이트(2023)",
        desc: "개인 포트폴리오 사이트 2023 리액트 버전입니다.",
        img: work10,
        code: "https://github.com/chloe-20/portfolio_iy",
        view: "https://github.com/chloe-20/portfolio_iy",
        name: "023 리액트로 만든 포트폴리오",
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
                            <a href={work.code} target="_blank" className="img" rel="noreferrer">
                                <img src={work.img} alt={work.name} />
                            </a>
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