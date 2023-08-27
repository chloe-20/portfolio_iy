import React, { useEffect, useRef } from "react";
import  { workText } from "../constants"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Work = () => {
    const horizontalRef = useRef(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const horizontal = horizontalRef.current;
        const sections = sectionsRef.current;

        let scrollTween = gsap.to(sections, {
        xPercent: -130 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: horizontal,
            start: "top 56px",
            end: () => "+=" + horizontal.offsetWidth,
            pin: true,
            scrub: 1,
            markers: false,
            invalidateOnRefresh: true,
            anticipatePin: 1,
        },
        });

        return () => {
        scrollTween.kill();
        };
    }, []);

    return (
        <section id="work" ref={horizontalRef}>
            <div className="work__inner">
                <div className="work__title">WORK</div>
                <div className="work__wrap">
                    {workText.map((work, key) => (
                        <article className={`work__item p${key + 1}`} key={key}ref={(el) => (sectionsRef.current[key] = el)
                        }>
                            <span className="num">{work.num}.</span>
                            <div className="img">
                                <img src={work.img} alt={work.name} />
                            </div>
                            <h3 className="title">{work.title}</h3>
                            <p className="desc">{work.desc}</p>
                            <a href={work.view} target="_blank" className="site" rel="noopener noreferrer">VISIT WEBSITE</a>
                        </article>
                    ))}                   
                </div>
            </div>
        </section>
    );
};

export default Work;