export default function Footer() {
  return (
    <footer
      className="Footer shrink-0 h-[720px] w-[1280px] max-w-[1280px] flex flex-col items-center pt-0 pr-0 pb-[479px] pl-0"
      style={{ background: 'url("/assets/images/footer-section.png") center / cover no-repeat' }}
    >
      <div className="shrink-0 h-[211px] w-[1280px] [background:linear-gradient(180deg,_var(--color-bg-page)_42.57%,_rgb(var(--color-bg-page-rgb)_/_0)_100%)]"></div>
      <img className="shrink-0 h-10 w-10 mt-6 opacity-80 hover:opacity-100 transition-opacity cursor-pointer" src="/assets/images/meta-color.svg" alt="Meta" />
    </footer>
  );
}
