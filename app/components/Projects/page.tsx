"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";

type Project = {
  _id: string;
  name: string;
  category: string;
  image: string;
  git?: string;
  live?: string;
};

const categories = [
  "All",
  "Website Design",
  "App Mobile Design",
  "App Desktop",
  "Branding",
] as const;

type Category = (typeof categories)[number];

export default function ProjectSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [projects, setProjects] = useState<Project[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const fetchProjects = async () => {
      try {
        const res = await axios.get<Project[]>(
          "http://localhost:5000/api/projects"
        );
        setProjects(res.data);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((proj) => proj.category === activeCategory);

  if (!isClient) return null;

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20" id="portfolio">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-orange-400">
          Projects
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-6">
          Explore some of my recent projects by category.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-orange-500 text-black shadow-md scale-105"
                  : "border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:scale-105"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {filteredProjects.map((project, idx) => (
          <div
            key={project._id || idx}
            className="bg-gradient-to-br from-[#1c1c1c] to-[#121212] border border-gray-800 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-orange-500/30 shadow-lg transition-all duration-300 hover:scale-[1.03] flex flex-col"
          >
            {/* Image */}
            <div className="w-full h-[220px] relative overflow-hidden rounded-t-2xl">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-all duration-300 hover:scale-105"
                priority={idx < 3}
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between flex-grow p-5 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-orange-400">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{project.category}</p>
              </div>

              {(project.git || project.live) && (
                <div className="flex gap-4 mt-2">
                  {project.git && (
                    <a
                      href={project.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-orange-400 transition-colors"
                      aria-label="GitHub repository"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-orange-400 transition-colors"
                      aria-label="Live demo"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
