export default function About() {
  return (
    <>
      {/* Identity & Coordinates */}
      <div id="about" className="shrink-0 self-stretch max-w-[1280px] flex flex-col justify-center items-center py-0 px-6 relative">
        <p className="shrink-0 self-stretch [text-shadow:0_4px_4px_rgba(0,_0,_0,_0.47)] font-['Koulen',_sans-serif] text-[length:58px] font-normal leading-[48px] tracking-[1px] text-[#ffd166]">
          <span className="text-[#d8e2ea]">the</span><span className="text-[#ffffff]"> <br /></span>HUMAN ELEMENT
        </p>
        <p className="shrink-0 h-[38px] self-stretch opacity-80 font-['Lekton',_sans-serif] text-[length:18px] font-normal leading-[16px] tracking-normal text-[#ffffff]">
          COORD // N25.0330 / E121.5654 / TPE
        </p>
        <p className="absolute left-[106px] top-[11px] w-[221px] h-[53px] opacity-80 font-['Lekton',_sans-serif] text-[length:18px] font-normal leading-[53px] tracking-normal text-[#ffffff]">
          IDENTITY // ART JAZMINES
        </p>
      </div>

      {/* Hologram Bio */}
      <div className="shrink-0 max-w-[880px] flex justify-center items-start py-1.5 px-8">
        <img
          className="shrink-0 w-[207px] h-[310px] opacity-60 [mix-blend-mode:luminosity] object-cover"
          src="/assets/images/amber-hologram-on-sci-fi-platform-1.png"
          alt="Amber Hologram on Sci-Fi Platform"
        />
        <p className="shrink-0 w-[499px] h-[289px] opacity-60 font-['Inter',_sans-serif] text-[length:16px] font-normal tracking-normal text-[#ffffff]">
          Turns design into interfaces people use.<br /><br />
          Is a frontend and UI developer with 14 years of experience building responsive digital products. His background in visual design shapes how he approaches every interface, balancing structure, usability, and visual clarity.<br /><br />
          He specializes in HTML/CSS, Vue, Tailwind, design systems, and Figma, with growing experience in React and AI-assisted development.<br /><br />
          From design to production, he focuses on one thing: building interfaces with purpose.
        </p>
      </div>
    </>
  );
}
