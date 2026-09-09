import type {
  SiteConfig,
  Product,
  IncludeItem,
  CourseMetaItem,
} from "../types";

export const siteConfig: SiteConfig = {
  name: "Aula 360",
  email: "aula360pe@gmail.com",
  whatsappNumber: "51982599421",
  domain: "aula360.pe",
  location: "Lima, Perú",
  schedule: "Lun — Sáb, 9:00 AM – 7:00 PM",
  description:
    "Plataforma especializada en expedientes técnicos para arquitectos e ingenieros del Perú. Democratizamos el acceso a herramientas técnicas de calidad.",
};

export const waLink = (message: string): string =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const waMessages = {
  expedientes: "Hola Aula 360, quiero información sobre los expedientes",
  masterclass:
    "Hola Aula 360, quiero información sobre la clase magistral de Rehabilitación Estructural Hospitalaria",
  masterclassInscripcion:
    "Hola Aula 360, quiero inscribirme a la clase magistral de Rehabilitación Estructural Hospitalaria",
  masterclassConsulta:
    "Hola Aula 360, tengo una consulta sobre la clase magistral de Rehabilitación Estructural Hospitalaria",
} as const;

export const products: Product[] = [
  {
    icon: "🏥",
    name: "Expediente Técnico — Centros de Salud",
    description:
      "Expediente completo para postas, centros de salud y hospitales. Cumple normativa del MINSA y RNE.",
    price: "S/ 18",
    image: "/images/salud.webp",
    whatsappMessage: "Quiero el expediente de Centros de Salud",
  },
  {
    icon: "🏟️",
    name: "Expediente Técnico — Obras Deportivas",
    description:
      "Expediente para losas deportivas, complejos recreativos y campos multiusos.",
    price: "S/ 18",
    image: "/images/estadios.webp",
    whatsappMessage: "Quiero el expediente de Obras Deportivas",
  },
  {
    icon: "💧",
    name: "Expediente Técnico — Agua y Desagüe",
    description:
      "Expediente para redes de agua potable y alcantarillado sanitario. Cumple normativa de SEDAPAL y RNE.",
    price: "S/ 18",
    image: "/images/agua.webp",
    whatsappMessage: "Quiero el expediente de Agua y Desagüe",
  },
  {
    icon: "⚡",
    name: "Expediente Técnico — Instalaciones Eléctricas",
    description:
      "Expediente para sistemas eléctricos en edificaciones. Cumple el Código Nacional de Electricidad (CNE).",
    price: "S/ 18",
    image: "/images/electricas.webp",
    whatsappMessage: "Quiero el expediente de Instalaciones Eléctricas",
  },
];

export const expedienteIncludes: IncludeItem[] = [
  {
    title: "Memoria descriptiva",
    description:
      "Descripción detallada del proyecto, alcances y justificación técnica.",
  },
  {
    title: "Especificaciones técnicas",
    description:
      "Especificaciones de materiales, procesos y estándares de calidad.",
  },
  {
    title: "Planos de arquitectura y estructuras",
    description:
      "Planos completos en formato editable para adaptar a tu proyecto.",
  },
  {
    title: "Metrados y presupuesto",
    description:
      "Metrados detallados con presupuesto referencial para tu licitación.",
  },
  {
    title: "Cronograma de ejecución",
    description: "Cronograma valorizado con plazos estimados por partida.",
  },
  {
    title: "Fórmula polinómica",
    description:
      "Fórmula de reajuste de precios acorde a la normativa del OSCE.",
  },
];

export const masterclassIncludes: IncludeItem[] = [
  {
    title: "1 sesión en vivo",
    description: "1.5 horas con teoría concisa y Q&A dinámico.",
  },
  {
    title: "Material descargable",
    description: "Plantillas, checklists y ejemplos de informes periciales.",
  },
  {
    title: "Grabación por 30 días",
    description: "Revisa la sesión las veces que necesites.",
  },
  {
    title: "Certificado digital",
    description: "Al completar la clase magistral de entrada.",
  },
];

export const masterclassMeta: CourseMetaItem[] = [
  { label: "Fecha", value: "10 oct" },
  { label: "Horario", value: "7:00 – 8:30 pm" },
  { label: "Duración", value: "1 sesión" },
  { label: "Horas", value: "1.5 h en vivo" },
  { label: "Modalidad", value: "Virtual en vivo" },
  { label: "Nivel", value: "Intermedio – Avanzado" },
];
