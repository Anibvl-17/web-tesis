function AnchorLink({ href, text, target }) {
  return (
    <a
      href={href}
      className="active:text-red-500/90 transition-all duration-200 hover:text-mist-200 hover:cursor-pointer"
      target={target}
    >
      {text}
    </a>
  );
}

export default AnchorLink;