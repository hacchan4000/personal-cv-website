// page untuk blogs
import React from "react";

const blogs = [
  {
    title: "Judul Blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga rerum exercitationem nemo repellendus beatae magnam ex, nostrum deleniti dolores.",
    img: "https://assets.aceternity.com/templates/startup-1.webp"
  },
  {
    title: "Judul Blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga rerum exercitationem nemo repellendus beatae magnam ex, nostrum deleniti dolores.",
    img: "https://assets.aceternity.com/templates/startup-1.webp",
  },
  {
    title: "Judul Blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga rerum exercitationem nemo repellendus beatae magnam ex, nostrum deleniti dolores.",
    img: "https://assets.aceternity.com/templates/startup-1.webp",
  },
  {
    title: "Judul Blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga rerum exercitationem nemo repellendus beatae magnam ex, nostrum deleniti dolores.",
    img: "https://assets.aceternity.com/templates/startup-1.webp",
  },
  {
    title: "Judul Blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga rerum exercitationem nemo repellendus beatae magnam ex, nostrum deleniti dolores.",
    img: "https://assets.aceternity.com/templates/startup-1.webp",
  },
  {
    title: "Judul Blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga rerum exercitationem nemo repellendus beatae magnam ex, nostrum deleniti dolores.",
    img: "https://assets.aceternity.com/templates/startup-1.webp",
  },
  {
    title: "Judul Blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga rerum exercitationem nemo repellendus beatae magnam ex, nostrum deleniti dolores.",
    img: "https://assets.aceternity.com/templates/startup-1.webp",
  },
];

const Page6 = () => {
  return (
    <div className="relative w-full min-h-screen bg-black text-white flex flex-col items-center overflow-hidden rounded-4xl">
      <h1
        className="mt-10 mb-0 text-center font-extrabold 
        text-[clamp(3rem,10vw,10rem)] tracking-tight"
      >
        BLOGS
      </h1>

      <div className="relative w-full py-6 z-20">

        <div className="flex space-x-8 overflow-x-auto px-10 scrollbar-hide">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="flex flex-col border-2 border-white bg-black rounded-2xl min-w-[300px] max-w-[320px] p-4"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-40 rounded-lg object-cover shadow-md"
              />
              <h3 className="text-2xl mt-4 font-semibold">{blog.title}</h3>
              <p className="text-sm mt-2">{blog.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Page6;
