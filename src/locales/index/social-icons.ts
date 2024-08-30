import { getRelativeLocaleUrl } from "astro:i18n";
import Blog from "~/components/icon/blog.astro";
import Github from "~/components/icon/github.astro";
import Linkedin from "~/components/icon/linkedin.astro";
import Youtube from "~/components/icon/youtube.astro";

export const getSocialIcons = (lang: string) => {
  return [
    {
      href: "https://github.com/angelchavez19",
      aria: "Github",
      icon: Github,
      text: "Follow Me",
    },
    {
      href: "https://www.linkedin.com/in/angel-ch%C3%A1vez/",
      aria: "Linkedin",
      icon: Linkedin,
      text: "Let's Connect",
    },
    {
      href: getRelativeLocaleUrl(lang, "blog-subscribe"),
      aria: "Blog",
      icon: Blog,
      text: "Subscribe",
    },
    {
      href: "https://youtube.com/@caminoAsenior?feature=shared",
      aria: "Youtube",
      icon: Youtube,
      text: "Subscribe",
    },
  ];
};
