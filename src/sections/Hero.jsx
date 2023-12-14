
import { statistics } from "../constants";
import { Button } from "../components";
import { arrowRight } from "../assets/icons";
import { TypeAnimation } from 'react-type-animation';

const readme = <div>&#123;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-coral-red">&#34;email&#34;</span>: &#34;dankim0213@gmail.com&#34;,&nbsp;&nbsp;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-coral-red">&#34;name&#34;</span>: &#34;Taewon Kim&#34;,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-coral-red">&#34;alias&#34;</span>: &#34;Wonnie&#34;,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#34;<span className="text-coral-red">birth&#34;</span>: &#34;1995-02-13&#34;,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#34;<span className="text-coral-red">who-am-i&#34;</span>: [<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#34;Hi, there 👋 &#34;,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#34;I am Wonnie&#34;,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#34;<TypeAnimation
        sequence={[
          // Same substring at the start will only be typed once, initially
          'who likes to talk about why-not',
          1000,
          'who likes to talk about so-what',
          1000,
        ]}
        speed={50}
        style={{ fontSize: '20px', lineHeight: '24.38px' }}
        repeat={Infinity}
      />&#34;,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-coral-red">&#34;skill&#34;</span>: &#123;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-coral-red">&#34;reactjs&#34;</span>: &#34;⭐️⭐️⭐️⭐️&#34;,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-coral-red">&#34;javascript&#34;</span>: &#34;⭐️⭐️⭐️⭐️&#34;,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-coral-red">&#34;typescript&#34;</span>: &#34;⭐️⭐️⭐️&#34;,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-coral-red">&#34;nextjs&#34;</span>: &#34;⭐️⭐️⭐️&#34;,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-coral-red">&#34;python&#34;</span>: &#34;⭐️⭐️&#34;,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-coral-red">&#34;git&#34;</span>: &#34;⭐️⭐️⭐️⭐️&#34;,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br /> &#125;</div>
  
const Hero = () => {

  return (
    <section
      id="home"
      className="flex min-h-screen flex-col justify-center gap-10 xl:gap-0 xl:flex-row"
    >
      <div className="flex flex-col items-start justify-center pt-28 flex-1">
        <p className="font-montserrat text-xl text-coral-red">
          Hello, World! 
        </p>
        <h1 className="mt-10 font-palanquin text-8xl font-bold">
          Frontend Developer
          <br />
          <span className="text-coral-red">Wonnie</span> 
        </h1>
        <p className="mb-14 mt-6 max-w-sm font-montserrat text-lg text-slate-gray">
          (한글소개) Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="mt-20 flex flex-wrap items-start justify-start gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
              <p className="font-montserrat  text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center bg-primary bg-hero bg-cover bg-center py-40 flex-1 text-xl">
        {readme}  
      </div>
    </section>
  );
};

export default Hero;
