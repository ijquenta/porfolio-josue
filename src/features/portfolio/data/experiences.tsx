import {
  CodeXmlIcon,
  GraduationCapIcon,
} from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "certivo",
    companyName: "Certivo",
    companyWebsite: "#",
    positions: [
      {
        id: "1",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "07.2025",
          end: "12.2025",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description:
          "- Desarrollo de aplicacion web con Next.js y aplicacion movil con Flutter para la certificacion de parcelas de productores mediante listas de verificacion y planes de acciones correctivas.\n- Implementacion de soluciones backend utilizando Node.js, Express y Firebase para el procesamiento de mensajes y la gestion de datos.\n- Colaboracion en el desarrollo de interfaces de usuario responsivas en plataformas web y moviles.",
        skills: [
          "Next.js",
          "Flutter",
          "Node.js",
          "Express",
          "Firebase",
          "TypeScript",
          "Dart",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "bucle-venture",
    companyName: "Bucle Venture",
    companyWebsite: "#",
    positions: [
      {
        id: "2",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "04.2025",
          end: "06.2025",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description:
          "- Desarrollo de una plataforma unificada de componentes y herramientas utilizando Flutter (extension de LinkedIn), Node.js, Express y Firebase para acelerar la entrega de productos.\n- Creacion de un perfil de LinkedIn y una herramienta de analisis y optimizacion de CV como extension de Flutter.\n- Diseno e implementacion de soluciones backend para analisis de datos y mejora de perfiles de LinkedIn.",
        skills: [
          "Flutter",
          "Dart",
          "Node.js",
          "Express",
          "Firebase",
          "TypeScript",
        ],
      },
      {
        id: "1",
        title: "Junior Product Developer",
        employmentPeriod: {
          start: "01.2025",
          end: "03.2025",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description:
          "- Desarrollo de aplicaciones ChatBot en WhatsApp utilizando FastAPI y aplicaciones web con React.\n- Implementacion de soluciones backend para el procesamiento de mensajes.\n- Colaboracion en el desarrollo de interfaces de usuario responsivas.",
        skills: [
          "FastAPI",
          "Python",
          "React",
          "TypeScript",
          "Node.js",
        ],
      },
    ],
  },
  {
    id: "mefp",
    companyName: "MEFP | Ministerio de Economia y Finanzas Publicas",
    companyWebsite: "#",
    positions: [
      {
        id: "1",
        title: "Software Developer (Internship)",
        employmentPeriod: {
          start: "07.2024",
          end: "12.2024",
        },
        employmentType: "Internship",
        icon: <CodeXmlIcon />,
        description:
          "- Gestion bajo la metodologia SCRUM.\n- Implementacion del sitio web de documentacion para JasperReport en el modulo de formularios del sistema.\n- Ejecucion de pruebas funcionales para asegurar la calidad de los sistemas de informacion.\n- Participacion en capacitaciones y evaluaciones impartidas por las unidades correspondientes.",
        skills: [
          "SCRUM",
          "JasperReport",
          "Documentation",
          "Functional Testing",
        ],
      },
    ],
  },
  {
    id: "umsa-dtic",
    companyName: "UMSA — DTIC",
    companyWebsite: "#",
    positions: [
      {
        id: "1",
        title: "Full Stack Developer (Work Scholarship)",
        employmentPeriod: {
          start: "02.2023",
          end: "12.2023",
        },
        employmentType: "Part-time",
        icon: <CodeXmlIcon />,
        description:
          "- Desarrollo y mantenimiento de modulos y sistemas administrativos, calculo de liquidaciones, beneficios sociales y sistema de recursos humanos.\n- Soporte en linea para sistemas de informacion.\n- Creacion de manuales tecnicos, de usuario y de programacion.\n- Formacion dirigida a usuarios administrativos.",
        skills: [
          "Web Development",
          "Technical Documentation",
          "User Support",
        ],
      },
    ],
  },
  {
    id: "umsa-teaching",
    companyName: "UMSA — Auxiliar de Docencia",
    companyIcon: <GraduationCapIcon strokeWidth={1.8} />,
    positions: [
      {
        id: "2",
        title: "Auxiliar de Docencia Titular — Informatica",
        employmentPeriod: {
          start: "2022",
        },
        employmentType: "Part-time",
        icon: <GraduationCapIcon />,
        description:
          "- INF 142 — Fundamentos Digitales\n- INF 112 — Organizacion de Computadoras",
        skills: ["Digital Fundamentals", "Computer Organization"],
      },
      {
        id: "1",
        title: "Auxiliar de Docencia — Curso Preuniversitario",
        employmentPeriod: {
          start: "2021",
        },
        employmentType: "Part-time",
        icon: <GraduationCapIcon />,
        description:
          "- MAT 99 — Introduccion a la Matematica",
        skills: ["Mathematics"],
      },
    ],
  },
  {
    id: "education",
    companyName: "Educacion",
    companyIcon: <GraduationCapIcon strokeWidth={1.8} />,
    positions: [
      {
        id: "1",
        title: "Universidad Mayor de San Andres (UMSA)",
        employmentPeriod: {
          start: "11.2024",
        },
        icon: <GraduationCapIcon />,
        description:
          "- Licenciatura en Ciencias de la Computacion, con mencion en Ingenieria de Sistemas.\n- Nivel Intermedio de Ingles (B1–B2) — CETI UMSA (2023–Presente).",
        skills: [
          "Java",
          "Python",
          "TypeScript",
          "Algorithms",
          "Software Engineering",
          "Database Design",
        ],
      },
    ],
  },
]
