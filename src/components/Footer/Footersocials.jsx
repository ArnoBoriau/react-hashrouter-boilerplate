import { AtSign, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footersocials = () => {
  return (
    <>
      <a className="footer__icon" href="" aria-label="link to facebook">
        <Facebook />
      </a>
      <a className="footer__icon" href="" aria-label="link to instagram">
        <Instagram />
      </a>
      <a className="footer__icon" href="" aria-label="link to linkedin">
        <Linkedin />
      </a>
      <a className="footer__icon" href="" aria-label="link to youtube">
        <Youtube />
      </a>
      <a className="footer__icon" href="" aria-label="link to threads">
        <AtSign />
      </a>
    </>
  );
};

export default Footersocials;
