/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    safelist: [
      "bg-[#0c0c0c]", "text-white", "antialiased", "text-base", "leading-relaxed",
      "max-w-7xl", "mx-auto", "flex", "items-center", "justify-between", "px-4", "md:px-8", "py-4", "md:py-6",
      "md:flex", "space-x-8", "bg-black/20", "backdrop-blur-md", "border-b", "border-white/10",
      "fixed", "inset-0", "z-[999]", "peer-checked:flex", "flex-col",
      "relative", "isolate", "z-10", "bg-gradient-to-br", "from-purple-800", "via-blue-800", "to-indigo-900",
      "py-20", "text-center", "px-4", "text-4xl", "md:text-6xl", "font-bold", "font-playfair",
      "mt-4", "text-xl", "sm:flex-row", "space-y-4", "sm:space-y-0", "sm:space-x-4",
      "px-8", "py-3", "bg-blue-600", "rounded-md", "font-semibold", "transition", "transform", "hover:scale-105", "hover:bg-blue-700",
      "border", "hover:bg-white/20", "bg-gray-950/70", "h-12", "w-12", "mb-3", "bg-white/10", "rounded-full",
      "text-gray-100", "text-gray-300", "text-gray-400", "text-opacity-90", "text-green-500",
      "text-2xl", "text-sm", "text-lg", "border-blue-500", "text-blue-500", "hover:text-white",
      "shadow-lg", "p-8", "pointer-events-none", "z-0", "md:block",
      "stroke-white/10", "fill-transparent", "hover:fill-blue-500/10", "transition-all", "duration-100", "ease-in-out", "[&:not(:hover)]:duration-1000",
      "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }  