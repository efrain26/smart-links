export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const languages: Record<Locale, string> = {
  es: "Español",
  en: "English",
};

export interface Translation {
  lang: Locale;
  meta: {
    title: string;
    description: string;
  };
  nav: {
    howItWorks: string;
    differentiators: string;
    faq: string;
    cta: string;
  };
  badge: string;
  headline: string;
  headlineHighlight: string;
  subheadline: string;
  form: {
    emailLabel: string;
    emailPlaceholder: string;
    privacyNote: string;
    invalidEmail: string;
    successMessage: string;
    cta: string;
    ctaFinal: string;
  };
  pain: {
    eyebrow: string;
    title: string;
    body: string;
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    steps: Array<{ title: string; description: string }>;
  };
  differentiators: {
    eyebrow: string;
    title: string;
    items: Array<{ title: string; description: string; icon: string }>;
  };
  support: {
    title: string;
    body: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  ctaFinal: {
    title: string;
    body: string;
  };
  footer: {
    privacyContact: string;
  };
  selectLanguage: string;
  notFound: {
    title: string;
    description: string;
    heading: string;
    body: string;
    back: string;
  };
}

export const ui: Record<Locale, Translation> = {
  es: {
    lang: "es",
    meta: {
      title: "Enlace inteligente para iOS y Android, sin SDK",
      description:
        "Crea un enlace que abre tu app en iPhone o Android según el dispositivo del visitante. Sin SDK, listo en minutos, precio en pesos mexicanos.",
    },
    nav: {
      howItWorks: "Cómo funciona",
      differentiators: "Diferenciadores",
      faq: "Preguntas",
      cta: "Quiero mi enlace",
    },
    badge: "Sin SDK · Listo en minutos · Para marketers",
    headline: "Un solo enlace para abrir tu app en",
    headlineHighlight: "iOS y Android",
    subheadline:
      "Cada enlace detecta el dispositivo de tu visitante — iPhone, Android o desktop — y lo manda a la app correcta o a su tienda. Sin SDK, listo en minutos.",
    form: {
      emailLabel: "Tu correo",
      emailPlaceholder: "tucorreo@ejemplo.com",
      privacyNote: "Sin spam. Solo lo necesario para avisarte.",
      invalidEmail: "Ingresa un correo válido.",
      successMessage: "¡Listo! Revisa tu correo.",
      cta: "Quiero mi enlace",
      ctaFinal: "Notifícame cuando salga",
    },
    pain: {
      eyebrow: "¿Te suena esto?",
      title: "Tu campaña funciona, pero el link no abre la app",
      body: "Mandas un email o un SMS con un link a tu app… y el visitante cae en el navegador en vez de abrirla. En móvil, cada paso extra es un usuario perdido.",
    },
    howItWorks: {
      eyebrow: "Cómo funciona",
      title: "Listo en minutos, en 3 pasos",
      steps: [
        {
          title: "Crea tu enlace",
          description:
            "Pega el link de tu app en iOS y Android. Tu enlace inteligente queda listo en minutos, sin tocar código.",
        },
        {
          title: "Pégalo en tu campaña",
          description:
            "Úsalo en tus emails, SMS, ads o en la bio de tu herramienta de marketing. Un solo link para todo.",
        },
        {
          title: "Detectamos y redirigimos",
          description:
            "Según el dispositivo del visitante, lo mandamos a tu app o a la tienda correcta (App Store o Play Store).",
        },
      ],
    },
    differentiators: {
      eyebrow: "¿Por qué nosotros?",
      title: "Sin lo que hace caras a otras soluciones",
      items: [
        {
          title: "Sin SDK",
          description:
            "Sin integrar código en tu app ni depender de un desarrollador. Lo configuras tú.",
          icon: "✓",
        },
        {
          title: "Precio accesible",
          description:
            "Sin mensualidades de cientos de dólares ni costos de plataformas enterprise. Pagas solo por lo que usas.",
          icon: "✓",
        },
        {
          title: "Hecho para marketers",
          description:
            "Pensado para tus campañas de email, SMS y ads, sin depender de un desarrollador.",
          icon: "✓",
        },
      ],
    },
    support: {
      title: "¿Buscas alternativa a algo que dejó de funcionar?",
      body: "¿Tu solución de enlaces se apagó o cuesta demasiado? Si tu negocio depende de links que abran tu app, tienes que resolverlo hoy con una opción simple y barata.",
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Respuestas cortas",
      items: [
        {
          question: "¿Necesito un SDK?",
          answer:
            "No. En esta fase no se integra ningún SDK ni se depende de un desarrollador: el enlace hace el trabajo por ti.",
        },
        {
          question: "¿En qué se diferencia de otras soluciones de enlaces?",
          answer:
            "Es una opción simple y barata, self-serve y sin SDK, sin mensualidades de cientos de dólares.",
        },
        {
          question: "¿Cuánto cuesta?",
          answer:
            "Estamos cerrando el precio y lo probamos contigo antes de lanzar. Regístrate y te notificamos cuando esté disponible.",
        },
        {
          question: "¿Soporta mi herramienta de email o SMS?",
          answer:
            "Sí. Si pegas un link, funciona: emails, SMS y ads en tus campañas.",
        },
      ],
    },
    ctaFinal: {
      title: "Notifícame cuando salga",
      body: "Sin spam. Una notificación cuando esté listo y tu enlace pueda funcionar.",
    },
    footer: {
      privacyContact: "Privacidad · Contacto",
    },
    selectLanguage: "Cambiar idioma",
    notFound: {
      title: "404 — Página no encontrada",
      description: "La página que buscas no existe.",
      heading: "No encontramos esa página",
      body: "Puede que haya sido movida o ya no exista.",
      back: "Volver al inicio",
    },
  },
  en: {
    lang: "en",
    meta: {
      title: "Smart link for iOS and Android, no SDK",
      description:
        "Create a link that opens your app on iPhone or Android based on your visitor's device. No SDK, ready in minutes, affordable pricing.",
    },
    nav: {
      howItWorks: "How it works",
      differentiators: "Differentiators",
      faq: "FAQ",
      cta: "I want my link",
    },
    badge: "No SDK · Ready in minutes · For marketers",
    headline: "One link to open your app on",
    headlineHighlight: "iOS & Android",
    subheadline:
      "Each link detects your visitor's device — iPhone, Android or desktop — and sends them to the right app or store. No SDK, ready in minutes.",
    form: {
      emailLabel: "Your email",
      emailPlaceholder: "you@example.com",
      privacyNote: "No spam. We'll only reach out to let you know.",
      invalidEmail: "Please enter a valid email.",
      successMessage: "Done! Check your inbox.",
      cta: "I want my link",
      ctaFinal: "Notify me when it launches",
    },
    pain: {
      eyebrow: "Sound familiar?",
      title: "Your campaign works, but the link doesn't open the app",
      body: "You send an email or SMS with a link to your app… and the visitor ends up in the browser instead of opening it. On mobile, every extra step is a lost user.",
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Ready in minutes, in 3 steps",
      steps: [
        {
          title: "Create your link",
          description:
            "Paste your iOS and Android app links. Your smart link is ready in minutes, without touching code.",
        },
        {
          title: "Drop it in your campaign",
          description:
            "Use it in your emails, SMS, ads or marketing tool bio. One link for everything.",
        },
        {
          title: "We detect and redirect",
          description:
            "Based on your visitor's device, we send them to your app or the right store (App Store or Play Store).",
        },
      ],
    },
    differentiators: {
      eyebrow: "Why us?",
      title: "Without what makes other solutions expensive",
      items: [
        {
          title: "No SDK",
          description:
            "No code to integrate in your app, no dependency on a developer. You set it up yourself.",
          icon: "✓",
        },
        {
          title: "Affordable pricing",
          description:
            "No monthly bills of hundreds of dollars or enterprise platform costs. Pay only for what you use.",
          icon: "✓",
        },
        {
          title: "Built for marketers",
          description:
            "Made for your email, SMS and ad campaigns, without depending on a developer.",
          icon: "✓",
        },
      ],
    },
    support: {
      title: "Looking for an alternative to something that stopped working?",
      body: "Did your link solution shut down or cost too much? If your business depends on links that open your app, you need a simple, affordable option today.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Short answers",
      items: [
        {
          question: "Do I need an SDK?",
          answer:
            "No. At this stage no SDK is integrated and you don't depend on a developer: the link does the work for you.",
        },
        {
          question: "How is this different from other link solutions?",
          answer:
            "It's a simple, affordable, self-serve option with no SDK and no monthly bills of hundreds of dollars.",
        },
        {
          question: "How much does it cost?",
          answer:
            "We're finalizing the price and we'll test it with you before launching. Sign up and we'll notify you when it's available.",
        },
        {
          question: "Does it work with my email or SMS tool?",
          answer:
            "Yes. If you can paste a link, it works: emails, SMS and ads in your campaigns.",
        },
      ],
    },
    ctaFinal: {
      title: "Notify me when it launches",
      body: "No spam. One notification when it's ready and your link can work.",
    },
    footer: {
      privacyContact: "Privacy · Contact",
    },
    selectLanguage: "Select language",
    notFound: {
      title: "404 — Page not found",
      description: "The page you're looking for doesn't exist.",
      heading: "We couldn't find that page",
      body: "It may have been moved or no longer exists.",
      back: "Back to home",
    },
  },
};

export function useTranslations(lang: string | undefined): Translation {
  return ui[(lang ?? defaultLocale) as Locale] ?? ui[defaultLocale];
}
