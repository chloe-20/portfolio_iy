import React from "react";

const AboutMe = () => {
  return (
    <section id="aboutMe">
      <div className="aboutMe__inner">
        <h2 className="aboutMe__title">ABOUT ME</h2>
        <div className="aboutMe__desc">
          <div>
            <span className="num">1.</span>
            <h3>보고, 듣고, 고민하는 웹 퍼블리셔 최인영</h3>
            <p>
              <em className="highlight">Seeing</em>
              <br />
              <em className="highlight">Listening</em>
              <br />
              <em className="highlight">Thinking</em>
              <br />
              <br />
              각양각색의 삶을 살아온 타인과 대화할 때 얻는 다양한 생각과 의견을 경청하길 좋아합니다. 경청하는 습관은 새로운 것을 배우고 적용하며 배움의 넓이를 확장시켜 제 삶을 풍요롭게 만들어 주었습니다. 2년 동안 운영, 구축, 개선 등 다양한 프로젝트를 수행하면서 동료들과 긴밀히 소통하며 좋은 결과물을 만들어 내기 위해 노력하였습니다. 그 과정 가운데 다양한 지식을 배울 수 있었고, 한층 더 성장 할 수 있었습니다. 도전과 성장을 추구하는 웹 퍼블리셔로서 더욱 전문성을 갖춰, 다양한 사용자들에게 더 나은 경험을 제공하는 것을 목표로 더 열심히 나아가겠습니다.
            </p>
          </div>
          <div>
            <span className="num">2.</span>
            <h3>I work with these Skill</h3>
            <p>
              <em className="highlight">HTML5</em>
              <em className="highlight">CSS3</em>
              <em className="highlight">SCSS</em>
              <em className="highlight">Javascript</em>
              <em className="highlight">Jquery</em>
              <em className="highlight">SVN</em>
              <em className="highlight">Figma</em>
              <em className="highlight">Zeplin</em>
              <em className="highlight">Photoshop</em>
              <em className="highlight">Slack</em>
              <em className="highlight">CMS</em>
              <br />
              <br />
              And&nbsp;&nbsp;
              <em className="highlight">긍정적</em>
              <em className="highlight">끈기</em>
              <em className="highlight">책임감</em>
              <em className="highlight">협동심</em>
              <em className="highlight">계획성</em>
            </p>
          </div>
          <div>
            <span className="num">3.</span>
            <h3>I worked at</h3>
            <ol className="timeline">
              <li>
                <p>
                  Web Agency, freelancer <em className="period">2023.11 - 2024.05</em>
                </p>
              </li>
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
