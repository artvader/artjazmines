export default function Contact() {
  return (
    <div id="contact" className="shrink-0 self-stretch max-w-[1280px] flex flex-col justify-center items-start gap-[26px] py-0 px-6">
      <div className="shrink-0 h-24 w-[1451px] relative">
        <p className="absolute left-0 top-0 [text-shadow:0_4px_4px_rgba(0,_0,_0,_0.47)] font-['Koulen',_sans-serif] text-[length:58px] font-normal leading-[48px] tracking-[1px] text-[#d8e2ea] whitespace-nowrap">
          COMMUNICATIONS<span className="text-[#ffffff]"> <br /></span><span className="text-[#ffd166]">CHANNELS</span>
        </p>
        <p className="absolute left-[219px] top-[52px] w-[1232px] h-[38px] opacity-80 font-['Lekton',_sans-serif] text-[length:18px] font-normal leading-[16px] tracking-normal text-[#ffffff]">
          CONTACT FORM
        </p>
      </div>

      <div className="shrink-0 self-stretch flex flex-col items-center gap-2.5">
        <div className="shrink-0 h-[312px] w-[812px] relative">
          <img className="absolute left-[209px] top-[21px] w-[259px] h-[109px]" src="/assets/images/group-6.svg" alt="" />

          {/* Telemetry / Signal Status */}
          <div className="absolute left-52 top-[151px] w-[261px] h-[79px]">
            <div className="absolute left-0 top-0 w-[261px] h-[79px] grid grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)] grid-rows-[minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)] gap-y-[1px] gap-x-0">
              <p className="row-[2_/_span_1] col-[1_/_span_1] w-[129px] justify-self-start self-center font-['Koulen',_sans-serif] text-[length:10px] font-normal leading-none tracking-normal text-[rgba(255,_255,_255,_0.3)]">
                MESSAGE INTEGRITY
              </p>
              <div className="row-[1_/_span_1] col-[2_/_span_1] h-1 self-center rounded-[4px] bg-[rgba(217,_217,_217,_0.3)]"></div>
              <div className="row-[2_/_span_1] col-[2_/_span_1] h-1 self-center rounded-[4px] bg-[rgba(217,_217,_217,_0.3)]"></div>
              <div className="row-[3_/_span_1] col-[2_/_span_1] h-1 self-center rounded-[4px] bg-[rgba(217,_217,_217,_0.3)]"></div>
              <div className="row-[4_/_span_1] col-[2_/_span_1] h-1 self-center rounded-[4px] bg-[rgba(217,_217,_217,_0.3)]"></div>
              <p className="row-[4_/_span_1] col-[1_/_span_1] w-[122px] justify-self-start self-center font-['Koulen',_sans-serif] text-[length:10px] font-normal leading-none tracking-normal text-[rgba(255,_255,_255,_0.3)]">
                DATA STREAM
              </p>
              <p className="row-[1_/_span_1] col-[1_/_span_1] self-center font-['Koulen',_sans-serif] text-[length:10px] font-normal leading-none tracking-normal text-[rgba(255,_255,_255,_0.3)] flex flex-col justify-end">
                <span>Signal Strength</span>
              </p>
              <p className="row-[3_/_span_1] col-[1_/_span_1] justify-self-start self-center font-['Koulen',_sans-serif] text-[length:10px] font-normal leading-none tracking-normal text-[rgba(255,_255,_255,_0.3)] whitespace-nowrap">
                Signal Strength
              </p>
            </div>
          </div>

          {/* Form Controls */}
          <form onSubmit={(e) => e.preventDefault()} className="absolute left-[507px] top-[23px] w-[305px] h-[289px]">
            <div className="absolute left-0 top-0 w-[305px] h-10 flex items-center gap-2.5 rounded-[8px] bg-[rgba(217,_217,_217,_0.6)]">
              <input
                className="w-full h-full bg-transparent px-4 font-['Inter',_sans-serif] text-[length:16px] font-normal text-[#290c01] placeholder:text-[#290c01] outline-none"
                type="text"
                placeholder="Name"
                aria-label="Name"
              />
            </div>
            <input
              className="absolute left-0 top-14 w-[305px] h-10 flex items-center gap-2.5 px-4 rounded-[8px] bg-[rgba(217,_217,_217,_0.6)] font-['Inter',_sans-serif] text-[length:16px] font-normal text-[#290c01] placeholder:text-[#290c01] outline-none"
              type="email"
              placeholder="Email"
              aria-label="Email"
            />
            <textarea
              className="absolute left-0 top-28 w-[305px] h-[119px] flex items-start gap-2.5 py-2.5 px-4 rounded-[8px] bg-[rgba(217,_217,_217,_0.6)] font-['Inter',_sans-serif] text-[length:16px] font-normal text-[#290c01] placeholder:text-[#290c01] outline-none resize-none"
              placeholder="Message"
              aria-label="Message"
            ></textarea>
            <button
              type="submit"
              className="absolute left-52 top-[247px] w-[97px] h-[42px] flex justify-center items-center gap-2.5 py-3 px-6 rounded-[8px] bg-[#607a44] hover:bg-[#6e8c4e] transition-colors cursor-pointer"
            >
              <span className="shrink-0 font-['Lato',_sans-serif] text-[length:18px] font-bold leading-[18px] tracking-normal text-[rgba(255,_255,_255,_0.8)] whitespace-nowrap">
                SEND
              </span>
            </button>
          </form>

          <img className="absolute left-0 top-0 w-[185px] h-[239px] [mix-blend-mode:luminosity] pointer-events-none" src="/assets/images/group.svg" alt="" />
          <img className="absolute left-0 top-0 w-[185px] h-[239px] [mix-blend-mode:color-burn] pointer-events-none" src="/assets/images/group-2.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
