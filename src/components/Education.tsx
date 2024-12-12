interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  location: string;
}

export default function Education() {
  const education: EducationItem[] = [
    {
      institution: "S.R.M Institute of Science and Technology",
      degree: "Bachelor of Science in Information Technology",
      duration: "July 2016 - June 2020",
      location: "Chennai, Tamil Nadu",
    },
    {
      institution: "Narayana Junior College",
      degree: "Higher Secondary Education",
      duration: "June 2014 - June 2016",
      location: "Hyderabad, Telangana",
    },
  ];

  return (
    <section
      id="education"
      className="max-w-2xl mx-auto px-4 py-8 scroll-mt-20"
    >
      <h2 className="text-2xl font-bold mb-6 inline-block border-b-2 border-gray-800 pb-2">
        Education
      </h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">{edu.institution}</h3>
              <p className="text-gray-400">{edu.degree}</p>
            </div>
            <div className="text-right">
              <p>{edu.duration}</p>
              <p className="text-gray-400">{edu.location}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
