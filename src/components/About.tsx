export default function About() {
  return (
    <div className="About relative flex w-full flex-col items-center [background:linear-gradient(180deg,_rgb(var(--color-bg-page-rgb)_/_0)_0,_var(--color-bg-page)_100px)] pt-40 pb-6">
      {/* Identity & Coordinates */}

      <div className=" w-full max-w-5xl mx-auto ">
          <div
        id="about"
        className="shrink-0 self-stretch max-w-5xl flex flex-col justify-center items-center py-0 px-6 relative scroll-mt-[104px]"
      >
        <p className="shrink-0 self-stretch [text-shadow:0_4px_4px_rgb(var(--color-shadow-rgb)_/_0.47)] font-['Koulen',_sans-serif] text-[length:38px]  md:text-[length:58px] font-normal leading-[30px] md:leading-[48px] tracking-[1px] text-[var(--color-text-accent)]">
          <span className="text-[var(--color-text-heading)]">the</span>
          <span className="text-[var(--color-text-primary)]">
            {" "}
            <br />
          </span>
          HUMAN ELEMENT
        </p>
        <p className="shrink-0  self-stretch opacity-30 font-['Lekton',_sans-serif] text-[length:10px] md:text-[length:18px] font-normal leading-[16px] tracking-normal text-[var(--color-text-primary)]">
          COORD // N25.0330 / E121.5654 / TPE
        </p>
        <p className="absolute left-[80px] md:left-[106px] top-[11px] w-[221px]  opacity-30 font-['Lekton',_sans-serif] text-[length:10px] md:text-[length:18px] font-normal leading-[22px] md:leading-[53px] tracking-normal text-[var(--color-text-primary)]">
          IDENTITY // ART JAZMINES
        </p>
      </div>

      {/* Hologram Bio */}
      <div className="shrink-0 max-w-[880px] flex flex-wrap justify-center items-start py-1.5 px-8">
        <div
          className="relative shrink-0 w-[207px] h-[364px] [mix-blend-mode:luminosity]"
          role="img"
          aria-label="Amber hologram on sci-fi platform"
        >
          <img
            className="art-figure absolute inset-0 z-10 size-full object-contain"
            src="/assets/images/art-fullbody.png"
            alt=""
            aria-hidden="true"
          />
          <img
            className="absolute bottom-0 left-1/2 z-0 w-full -translate-x-1/2 object-contain opacity-60"
            src="/assets/images/hologram-base.png"
            alt=""
            aria-hidden="true"
          />
        </div>
        <p className="shrink-0 w-full max-w-[499px]  opacity-60 text-[length:16px] font-normal tracking-normal text-[var(--color-text-primary)]">
          Turns design into interfaces people use.
          <br />
          <br />
          Is a frontend and UI developer with 14 years of experience building
          responsive digital products. His background in visual design shapes
          how he approaches every interface, balancing structure, usability, and
          visual clarity.
          <br />
          <br />
          He specializes in HTML/CSS, Vue, Tailwind, design systems, and Figma,
          with growing experience in React and AI-assisted development.
          <br />
          <br />
          From design to production, he focuses on one thing: building
          interfaces with purpose.
        </p>
      </div>
      </div>
    
    </div>
  );
}
