interface Project {
  title: string;
  technologies: string;
  points: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Vision-Based Skin Disease Identification Using Deep Learning",
      technologies: "Python, Open CV, Pandas, Numpy",
      points: [
        "Developed an CNN Model which can predict up to 20 kinds of skin diseases",
        "Custom Implemented mixture of three models there by making the model fault tolerance, highly reliable and accuracy 87%.",
      ],
    },
    {
      title: "Fake-data API",
      technologies: "Node.js, Express.js, Amazon Web Services",
      points: [
        "Created an Fake data API which serves the fake data of different categories",
        "Ported the API to the AWS as Lambda Server-less Function to increase the efficiency and availability.",
      ],
    },
    {
      title: "Hotel Database Management GUI",
      technologies: "Python, Tkinter, SQLite",
      points: [
        "Created an standalone Hotel Application which stores Customer and Staff Information.",
        "Processed user inputted information on the GUI to validate it and store it in SQLite DB.",
        "Implemented Admin and Customer Logins into the App to show related data to user i.e, staff can use the access to book new room, and customer can view the room details and avail other hotel services.",
      ],
    },
    {
      title:
        "Number Plate Recognition System for Automatic Toll Tax Calculation using ML",
      technologies: "Python, Open CV, Pandas, PIL",
      points: [
        "Developed an ML Model that calculates and generates Toll Tax Bill with a provided video stream.",
        "Processed information automatically in the back-end of the app to return a Total price based on the KMs used on Toll Road by customer in a drive.",
        "Implemented different Image processing techniques to acquire the data from live image feedback with an accuracy of 92%.",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-2xl mx-auto px-3 sm:px-4 py-6 sm:py-8 scroll-mt-20"
    >
      <h2 className="text-2xl font-bold mb-6 inline-block border-b-2 border-gray-800 pb-2">
        Projects
      </h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-8">
          <div className="mb-2">
            <h3 className="font-semibold">{project.title}</h3>
            <p className="text-gray-400 text-sm italic">
              {project.technologies}
            </p>
          </div>
          <ul className="list-disc list-inside text-gray-300">
            {project.points.map((point, i) => (
              <li key={i} className="mb-2">
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
