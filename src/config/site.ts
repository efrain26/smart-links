export const siteConfig = {
  name: "Enlace Inteligente",
  description:
    "Crea un enlace que abre tu app en iPhone o Android según el dispositivo del visitante. Sin SDK, listo en minutos.",
  url: "https://smart-links.vercel.app",
  lang: "es",
  locale: "es_MX",
  author: "Enlace Inteligente",
  ogImage: "/favicon.svg",
  headline: "Un solo enlace para abrir tu app en",
  headlineHighlight: "iOS y Android",
  headlineAlt: "Abre tu app desde cualquier link, en cualquier dispositivo.",
  subheadline:
    "Cada enlace detecta el dispositivo de tu visitante — iPhone, Android o desktop — y lo manda a la app correcta o a su tienda. Sin SDK, listo en minutos.",
  cta: "Quiero mi enlace",
  ctaFinal: "Notifícame cuando salga",
  capture: {
    endpoint:
      "https://buttondown.com/api/emails/embed-subscribe/enlaceinteligente",
    successMessage: "¡Listo! Revisa tu correo.",
    surveyUrl: "https://tally.so/r/WO6lpJ",
  },
} as const;
