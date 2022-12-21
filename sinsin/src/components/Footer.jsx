import Contact from "./contactMail";
export default function Footer() {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4 pb-0"></div>
      <div className="text-center p-3 my-auto h4">
        Contacteer ons hier: <Contact />
      </div>
    </footer>
  );
}
