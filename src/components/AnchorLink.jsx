import { FaExternalLinkAlt } from "react-icons/fa";

function AnchorLink({ href, text, target, external }) {
  return (
    <a
      href={href}
      className="flex flex-row gap-2 items-center jactive:text-red-500/90 transition-all duration-200 hover:text-mist-200 hover:cursor-pointer"
      target={target}
    >
      {text}
      {external && <FaExternalLinkAlt className="h-3 w-3"/>}
    </a>
  );
}

export default AnchorLink;