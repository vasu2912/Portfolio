interface BlogPost {
  date: string;
  title: string;
}

export default function BlogPosts() {
  const posts: BlogPost[] = [
    {
      date: "April 9, 2024",
      title: "Embracing Vim: The Unsung Hero of Code Editors",
    },
    {
      date: "April 8, 2024",
      title: "Spaces vs. Tabs: The Indentation Debate Continues",
    },
    {
      date: "April 7, 2024",
      title: "The Power of Static Typing in Programming",
    },
  ];

  return (
    <section className="max-w-2xl mx-auto px-4 py-8">
      {posts.map((post, index) => (
        <div key={index} className="mb-4 flex">
          <span className="text-gray-400 w-32">{post.date}</span>
          <a href="#" className="hover:text-gray-400 transition-colors">
            {post.title}
          </a>
        </div>
      ))}
    </section>
  );
}
