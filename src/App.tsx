import { createPortal } from "react-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {createPortal(<Hero  />, document.body)}
      {createPortal(<Navigation  />, document.body)}
      {createPortal(<About  />, document.body)}
      {createPortal(<Work  />, document.body)}
      {createPortal(<Services  />, document.body)}
      {createPortal(<Contact  />, document.body)}
      {createPortal(<Footer  />, document.body)}
      <div>
      </div>
    </>
  );
}
