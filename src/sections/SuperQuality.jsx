
const SuperQuality = () => {
  return (
    <div className="bg-pale-blue">
      <section id="about-me" className="block lg:flex bg-pale-blue">
        <div className="flex-1">
          <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg">
            I Provide You With
            <span className="text-coral-red"> Quality </span>
          </h2>
          <p className="info-text mt-4 lg:max-w-lg break-keep">
            능숙한 Git 사용 뿐만 아니라 TypeScript를 활용해 Type Safety한 코드를 작성할 수 있습니다. 
            그리고 열린 마음으로 새로운 기술들을 적극 수용하고 있습니다. 
          </p>
          <div className="flex gap-2 mt-6 flex-wrap">
            <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" />
            <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="javascript" />
            <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="python" />
            <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwindcss" />
            <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="react" />
            <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="next" />
            <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="node" />
            <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="github" />
            <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="postman" />
            <img src="https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white" alt="jira" />
            <img src="https://img.shields.io/badge/VIM-%2311AB00.svg?style=for-the-badge&logo=vim&logoColor=white" alt="vim" />
            <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="linux" />
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-8">
          <img
            src="https://github-readme-stats.vercel.app/api?username=dankim0213&hide_rank=true&title_color=FF6452"
            alt="product detail"
            className="w-2/3 object-contain "
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=dankim0213&layout=compact&hide=java&title_color=FF6452"
            alt="product detail"
            className="w-2/3 object-contain "
          />
        </div>
      </section>
    </div>
  );
};

export default SuperQuality;

/*
 * TODO: img tag's width & height 어떻게 처리하나? block tag의 max를 정해도 내부 el의 크기가 크면 뻗어나갈텐데?
 *
 * `object-fit: contain` maintaines its aspect ratio
 *
 * TODO: website width를 300px 로 줄일수 잇을까?
 */
