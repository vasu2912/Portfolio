interface SkillCategory {
  category: string;
  skills: string;
}

export default function TechnicalSkills() {
  const skills: SkillCategory[] = [
    {
      category: "Languages",
      skills: "Java, Python, C, C++, HTML/CSS, SQL, Shell Script, PHP, Node.js",
    },
    {
      category: "Developer Tools",
      skills:
        "VS Code, Eclipse, Amazon Web Services, IntelliJ IDEA, Perforce, Soap UI, Maven, GIT",
    },
    {
      category: "Technologies/Frameworks",
      skills:
        "Spring Boot, SOAP&RESTful Web Services, APIs, ASCF, Bitbucket, Bamboo, Agile, Unix, Version Control System, CI/CD, JBoss Fuse, WordPress",
    },
  ];

  return (
    <section
      id="skills"
      className="max-w-2xl mx-auto px-3 sm:px-4 py-6 sm:py-8 scroll-mt-20"
    >
      <h2 className="text-2xl font-bold mb-6 inline-block border-b-2 border-gray-800 pb-2">
        Technical Skills
      </h2>
      {skills.map((category, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-semibold">{category.category}:</h3>
          <p className="text-gray-300 font-sm text-base">{category.skills}</p>
        </div>
      ))}
    </section>
  );
}
