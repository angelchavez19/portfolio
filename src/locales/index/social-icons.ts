// import { getRelativeLocaleUrl } from "astro:i18n";
// import Blog from "~/components/icon/blog.astro";
import Github from "~/components/icon/github.astro";
import Linkedin from "~/components/icon/linkedin.astro";
import Youtube from "~/components/icon/youtube.astro";

export const getSocialIcons = (lang: string) => {
  return [
    {
      href: "https://github.com/angelchavez19",
      aria: "Github",
      icon: Github,
      enText: "Follow Me",
      esText: "Sígueme",
    },
    {
      href: "https://www.linkedin.com/in/angel-ch%C3%A1vez/",
      aria: "Linkedin",
      icon: Linkedin,
      enText: "Let's Connect",
      esText: "Conectemos",
    },
    // {
    //   href: getRelativeLocaleUrl(lang, "blog"),
    //   aria: "Blog",
    //   icon: Blog,
    //   enText: "Subscribe",
    //   esText: "Suscribete",
    // },
    {
      href: "https://youtube.com/@caminoAsenior?feature=shared",
      aria: "Youtube",
      icon: Youtube,
      enText: "Subscribe",
      esText: "Suscribete",
    },
  ];
};
