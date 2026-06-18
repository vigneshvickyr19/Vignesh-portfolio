import type { ComponentType } from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export interface SocialLink {
  icon: ComponentType<any>;
  label: string;
  href: string;
  subtitle: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/vigneshvickyr19",
    subtitle: "github.com/vigneshvickyr19",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vignesh-r-frontend-developer-d/",
    subtitle: "linkedin.com/in/vignesh-r-frontend-developer-d",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:vigneshr0819@gmail.com",
    subtitle: "vigneshr0819@gmail.com",
  },
  {
    icon: SiWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/917604999984?text=Hi%20Vignesh,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20a%20frontend%20development%20opportunity.",
    subtitle: "Chat on WhatsApp",
  },
  {
    icon: MapPin,
    label: "Location",
    href: "#",
    subtitle: "Chennai, India",
  },
];
