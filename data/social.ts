// data/social.ts
import {
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import { CONTACT } from "./contact";

export const socialLinks = [
  {
    href: CONTACT.social.linkedin,
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    href: CONTACT.social.instagram,
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    href: CONTACT.social.twitter,
    label: "X / Twitter",
    icon: FaXTwitter,
  },
  {
    href: CONTACT.social.facebook,
    label: "Facebook",
    icon: FaFacebookF,
  },
  {
    href: CONTACT.social.tiktok,
    label: "TikTok",
    icon: FaTiktok,
  },
  ...(CONTACT.social.youtube
    ? [
        {
          href: CONTACT.social.youtube,
          label: "YouTube",
          icon: FaYoutube,
        },
      ]
    : []),
].filter((s) => Boolean(s.href));