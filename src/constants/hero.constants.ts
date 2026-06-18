export interface CodeLine {
  indent: number;
  text: string;
}

// The animated code snippet shown in the hero card
export const CODE_LINES: CodeLine[] = [
  { indent: 0, text: "const Developer = () => {" },
  { indent: 1, text: 'const [passion, setPassion] = useState("∞");' },
  { indent: 1, text: 'const skills = ["React", "Next.js", "JavaScript", "React Native"];' },
  { indent: 1, text: "" },
  { indent: 1, text: "return (" },
  { indent: 2, text: "<Portfolio>" },
  { indent: 3, text: '<Code quality="production" />' },
  { indent: 3, text: "<Innovation level={passion} />" },
  { indent: 2, text: "</Portfolio>" },
  { indent: 1, text: ");" },
  { indent: 0, text: "};" },
];

export const HERO_CONTENT = {
  greeting: "// Hello World, I'm",
  name: "Vignesh",
  nameHighlight: "R",
  titlePrefix: "Frontend Developer –",
  titleTech1: "React",
  titleTech2: "Next.js",
  subtitle:
    "Building modern, performant web applications with clean architecture and reusable components.",
  resumePath: "/docs/Vignesh_Resume.pdf",
  codeFileName: "Developer.tsx",
} as const;
