interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  points: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: "Amdocs LLP",
      role: "Software Developer",
      duration: "July 2020 - Present",
      location: "Pune, Maharashtra",
      points: [
        "Developing and working on a CRM Application. Helping stakeholders in increasing the profitability by providing new features to the application.",
        "Bringing improvement to software/business processes by utilizing software engineering tools and automate the solution process to bring efficiency and reduce design complexity.",
        "Update/modify existing application to resolve errors and adapt it to new performance requirements.",
        "Explored new ways to automate redundant tasks in Production and Non Production by writing shell scripts which helped both me and my team to cut down time and increase the productivity.",
      ],
    },
    {
      company: "ORNNOVA Technologies India Pvt Ltd",
      role: "Application Developer Intern",
      duration: "November 2018 - December 2018",
      location: "Bengaluru, Karnataka",
      points: [
        "Developed and implemented a Food Ordering System which can be used right from ordering the Food till closing order and generating the bill using PHP, HTML and JS.",
        "Completely transformed the manual ordering to web/online ordering as per the client requirement thus minimizing the time and providing real time updates back to the kitchen/admin.",
        "Implemented an Admin Login where the admin can see the real time analytics like No. of orders processed, revenue generated, and also can add/modify menu's items to the menu",
        "Provided functionalities like, Real time data sharing to the kitchen using MySQL triggers, as chefs to work on the orders and billing the Order with pre-configurable Tax rates which can be configured at admin area.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="max-w-2xl mx-auto px-3 sm:px-4 py-6 sm:py-8 scroll-mt-20"
    >
      <h2 className="text-2xl font-bold mb-6 inline-block border-b-2 border-gray-800 pb-2">
        Experience
      </h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-8">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-semibold">{exp.company}</h3>
              <p className="text-gray-400">{exp.role}</p>
            </div>
            <div className="text-right">
              <p>{exp.duration}</p>
              <p className="text-gray-400">{exp.location}</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-gray-300">
            {exp.points.map((point, i) => (
              <li key={i} className="font-normal mb-2">
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
