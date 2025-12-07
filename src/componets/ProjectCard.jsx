
export default function ProjectCard({ title, description, image, gitlink , livelink }) {
  return (
    <div className="group bg-white dark:bg-black rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
      
      {/* Image */}
      <div className="overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="h-44 w-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-900 mb-2">
          {title}
        </h4>

        <p className="text-gray-600 text-sm mb-5 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <a
            href={gitlink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:opacity-90 transition hover:cursor-pointer"
          >
            View Project
          </a>

          <a
            href={livelink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition hover:cursor-pointer"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
}
