export default function Navigation() {
  return (
    <header className="absolute left-[23px] top-[21px] w-[1025px] h-[63px] flex items-center gap-[118px] z-10">
      <img className="shrink-0 w-[157px]" src="/assets/images/logo.svg" alt="Logo" />
      <nav className="flex-1 min-w-0 h-[51px] flex justify-center items-center gap-8 py-4 px-0 rounded-full [background:linear-gradient(rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0)),_rgba(255,_255,_255,_0.6)] [border:1px_solid_rgba(255,_255,_255,_0.4)] shadow-[0_10px_15px_-3px_rgba(242,_127,_13,_0.05),_0_4px_6px_-4px_rgba(242,_127,_13,_0.05)] backdrop-blur-sm">
        <a href="#work" className="shrink-0 font-['Plus_Jakarta_Sans',_sans-serif] text-[length:14px] font-bold leading-[20px] text-[#161e2b] whitespace-nowrap hover:opacity-75 transition-opacity">Work</a>
        <a href="#about" className="shrink-0 font-['Plus_Jakarta_Sans',_sans-serif] text-[length:14px] font-bold leading-[20px] text-[#161e2b] whitespace-nowrap hover:opacity-75 transition-opacity">About</a>
        <a href="#portfolio" className="shrink-0 font-['Plus_Jakarta_Sans',_sans-serif] text-[length:14px] font-bold leading-[20px] text-[#161e2b] whitespace-nowrap hover:opacity-75 transition-opacity">Portfolio</a>
        <a href="#services" className="shrink-0 font-['Plus_Jakarta_Sans',_sans-serif] text-[length:14px] font-bold leading-[20px] text-[#161e2b] whitespace-nowrap hover:opacity-75 transition-opacity">Services</a>
        <a href="#contact" className="shrink-0 font-['Plus_Jakarta_Sans',_sans-serif] text-[length:14px] font-bold leading-[20px] text-[#161e2b] whitespace-nowrap hover:opacity-75 transition-opacity">Contact</a>
      </nav>
    </header>
  );
}
