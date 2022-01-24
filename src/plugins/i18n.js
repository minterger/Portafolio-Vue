import { createI18n } from "vue-i18n";
import formTexts from "./contactForm";
import homeTexts from "./homeMessages";
import navItems from "./navItems";

const i18n = createI18n({
  locale: "es",
  fallbackLocale: "en",
  messages: {
    es: {
      headerContain: {
        description:
          "Programador Web FullStack (MEVN Stack) apasionado por la tecnología y la programación",
        info: "Aca podras ver mi informacion, proyectos y formas de contactarme",
      },
      textMoreHeader: {
        home: "Inicio",
        contact: "Contactar",
        proyects: "Proyectos",
      },
      homeTexts: homeTexts.es,
      formTexts: formTexts.es,
      navItems: navItems.es,
    },
    en: {
      headerContain: {
        description:
          "FullStack Web Developer (MEVN Stack) passionate about technology and programming",
        info: "Here you can see my information, projects and ways to contact me",
      },
      textMoreHeader: {
        home: "Home",
        contact: "Contact",
        proyects: "Proyects",
      },
      homeTexts: homeTexts.en,
      formTexts: formTexts.en,
      navItems: navItems.en
    },
  },
});

export default i18n;
