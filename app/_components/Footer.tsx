const Footer = () => {
  return (
    <footer className="border-t border-primary-800/60 bg-linear-to-b from-transparent to-primary-900/10">
      <div className="
        max-w-6xl mx-auto px-4 py-4 text-xs text-primary-300 
        animate-[fade-up_0.8s_ease-out]
      ">
        © {new Date().getFullYear()} Escuelita Vóley Leones. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;