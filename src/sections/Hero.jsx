import { TypeAnimation } from "react-type-animation";

const readme = (
  <div>
    &#123;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span className="text-coral-red">&#34;email&#34;</span>:
    &#34;dankim0213@gmail.com&#34;,&nbsp;&nbsp;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span className="text-coral-red">&#34;name&#34;</span>: &#34;Taewon
    Kim&#34;,
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span className="text-coral-red">&#34;alias&#34;</span>: &#34;Wonnie&#34;,
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#34;
    <span className="text-coral-red">birth&#34;</span>: &#34;1995-02-13&#34;,
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#34;
    <span className="text-coral-red">who-am-i&#34;</span>: [<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#34;Hi, there 👋
    &#34;,
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#34;I am Wonnie&#34;,
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#34;
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "who likes to talk about why-not",
        1000,
        "who likes to talk about so-what",
        1000,
      ]}
      speed={50}
      style={{ fontSize: "20px", lineHeight: "24.38px" }}
      repeat={Infinity}
    />
    &#34;,
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span className="text-coral-red">&#34;skill&#34;</span>: &#123;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span className="text-coral-red">&#34;reactjs&#34;</span>:
    &#34;⭐️⭐️⭐️⭐️&#34;,
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span className="text-coral-red">&#34;javascript&#34;</span>:
    &#34;⭐️⭐️⭐️⭐️&#34;,
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span className="text-coral-red">&#34;typescript&#34;</span>:
    &#34;⭐️⭐️⭐️&#34;,
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span className="text-coral-red">&#34;nextjs&#34;</span>:
    &#34;⭐️⭐️⭐️&#34;,
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span className="text-coral-red">&#34;python&#34;</span>: &#34;⭐️⭐️&#34;,
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span className="text-coral-red">&#34;git&#34;</span>:
    &#34;⭐️⭐️⭐️⭐️&#34;,
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;
    <br /> &#125;
  </div>
);

const Hero = () => {
  return (
    <div id="home" className="mx-auto flex max-w-[1440px] flex-col xl:flex-row">
      <section className="flex min-h-screen flex-1 flex-col items-start justify-center ">
        <p className="mt-4 font-montserrat text-xl text-coral-red">
          Hello, World!
        </p>
        <h1 className="mt-10 font-palanquin text-8xl font-bold">
          Frontend Developer
          <br />
          <span className="text-coral-red">Wonnie</span>
        </h1>
        <p className="mt-6 max-w-sm font-montserrat text-2xl leading-8 text-slate-gray ">
          변치않는 꾸준함으로
          <br />
          변하는 세상에 적응하는
          <br />
          프론트엔드 개발자 김태원입니다 👋
        </p>
      </section>
      <section className="flex min-h-screen w-full flex-1 items-center justify-center bg-primary text-xl">
        <div>{readme}</div>
      </section>
    </div>
  );
};

export default Hero;
