export default function Navigation() {
  return (
    <header className="Navigation fixed left-[23px] top-[21px] w-[1025px] h-[63px] flex items-center gap-[118px] z-10">
      <img className="shrink-0 w-[157px]" src="/assets/images/logo.svg" alt="Logo" />
      <nav className="flex-1 min-w-0 h-[51px] flex justify-center items-center gap-8 py-4 px-0 rounded-full [background:linear-gradient(rgb(var(--color-surface-glass-rgb)_/_0),_rgb(var(--color-surface-glass-rgb)_/_0)),_rgb(var(--color-surface-glass-rgb)_/_0.6)] [border:1px_solid_rgb(var(--color-surface-glass-rgb)_/_0.4)] shadow-[0_10px_15px_-3px_rgb(var(--color-shadow-accent-rgb)_/_0.05),_0_4px_6px_-4px_rgb(var(--color-shadow-accent-rgb)_/_0.05)] backdrop-blur-sm">
        <a href="#work" className="shrink-0 font-['Plus_Jakarta_Sans',_sans-serif] text-[length:14px] font-bold leading-[20px] text-[var(--color-text-inverse)] whitespace-nowrap hover:opacity-75 transition-opacity">Work</a>
        <a href="#about" className="shrink-0 font-['Plus_Jakarta_Sans',_sans-serif] text-[length:14px] font-bold leading-[20px] text-[var(--color-text-inverse)] whitespace-nowrap hover:opacity-75 transition-opacity">About</a>
        <a href="#portfolio" className="shrink-0 font-['Plus_Jakarta_Sans',_sans-serif] text-[length:14px] font-bold leading-[20px] text-[var(--color-text-inverse)] whitespace-nowrap hover:opacity-75 transition-opacity">Portfolio</a>
        <a href="#services" className="shrink-0 font-['Plus_Jakarta_Sans',_sans-serif] text-[length:14px] font-bold leading-[20px] text-[var(--color-text-inverse)] whitespace-nowrap hover:opacity-75 transition-opacity">Services</a>
        <a href="#contact" className="shrink-0 font-['Plus_Jakarta_Sans',_sans-serif] text-[length:14px] font-bold leading-[20px] text-[var(--color-text-inverse)] whitespace-nowrap hover:opacity-75 transition-opacity">Contact</a>
      </nav>
    </header>
  );
}
