import React from "react";
import Footer from "../components/Footer";
import Home from "../components/Blog-Home";

const blogPosts = [
    {
        id: 1,
        title: "MyCase, Transforming Legal Practice",
        description:
            "Our commitment to providing value extends beyond the features of our products or services. We believe in fostering long-term partnerships by ensuring that our pricing plans. Many legal professionals find it difficult to accurately keep track of all case-related time, which often results in billable time slipping through the tracks and revenue left on the table.",
        date: "22 Dec 2023",
        tags: ["News", "Inspiration"],
        author: {
            name: "Cody Fisher",
            avatar:
                "https://randomuser.me/api/portraits/men/45.jpg",
        },
        image: "/image/inst1.jpg",
        featured: true,
    },
    {
        id: 2,
        title: "MyCase: Transforming Legal Practice",
        description:
            "Embark on a journey through the innovation that is MyCase, redefining how legal",
        date: "22 Dec 2023",
        tags: ["News", "Inspiration"],
        author: {
            name: "Cody Fisher",
            avatar:
                "https://randomuser.me/api/portraits/men/45.jpg",
        },
        image: "/image/inst2.jpg",
    },
    {
        id: 3,
        title: "How MyCase: Addresses Legal Challenges",
        description:
            "MyCase stands out through its unique features and user-centric design.",
        date: "21 Dec 2023",
        tags: ["News", "Inspiration"],
        author: {
            name: "Guy Hawkins",
            avatar:
                "https://randomuser.me/api/portraits/men/46.jpg",
        },
        image: "/image/inst3.jpg",
    },
    {
        id: 4,
        title: "MyCase: Transforming Legal Practice",
        description:
            "Embark on a journey through the innovation that is MyCase, redefining how legal",
        date: "22 Dec 2023",
        tags: ["News", "Inspiration"],
        author: {
            name: "Floyd Miles",
            avatar:
                "https://randomuser.me/api/portraits/men/47.jpg",
        },
        image: "/image/inst4.jpg",
    },
];

const Tag = ({ label }) => (
    <span className="text-xs font-semibold bg-gray-200 text-gray-700 rounded-full px-3 py-1 mr-2">
        {label}
    </span>
);

const BlogPage = () => {
    return (
        <>
            <Home />
            <div className="relative bg-[var(--brown-soft-bg)]">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="w-full h-full bg-[radial-gradient(#dab370_1px,transparent_1px)] [background-size:25px_25px] opacity-20 animate-pulse"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-6 py-12 ">
                    {/* Dot pattern background */}

                    <h2 className="text-center text-5xl pb-10 text-[var(--brown-red)]">Our Blog</h2>

                    {/* Featured Post */}
                    {blogPosts
                        .filter((post) => post.featured)
                        .map(({ id, title, description, date, tags, image }) => (
                            <div
                                key={id}
                                className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-20 items-center relative z-10"
                            >
                                <img
                                    src={image}
                                    alt={title}
                                    className="rounded-lg object-cover w-full max-h-[400px]"
                                />
                                <div>
                                    <div className="mb-3 flex flex-wrap ">
                                        {tags.map((tag) => (
                                            <Tag key={tag} label={tag} />
                                        ))}
                                        <span className="text-xs text-gray-400 ml-auto">{date}</span>
                                    </div>
                                    <h2 className="text-3xl font-semibold mb-4 text-[var(--brown-red)]">{title}</h2>
                                    <p className="text-[var(--brown-red)] leading-relaxed mb-6">{description}</p>
                                </div>
                            </div>
                        ))}

                    {/* Other Posts */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 relative z-10">
                        {blogPosts
                            .filter((post) => !post.featured)
                            .map(({ id, title, description, date, tags, image }) => (
                                <div
                                    key={id}
                                    className="bg-[var(--brown-red)] rounded-lg shadow-md overflow-hidden"
                                >
                                    <img
                                        src={image}
                                        alt={title}
                                        className="w-full h-60 object-cover"
                                    />
                                    <div className="p-6 text-white">
                                        <div className="flex flex-wrap mb-2">
                                            {tags.map((tag) => (
                                                <Tag key={tag} label={tag} />
                                            ))}
                                            <span className="text-xs ml-auto">{date}</span>
                                        </div>
                                        <h3 className="text-lg font-semibold mb-2 tracking-widest">{title}</h3>
                                        <p className="text-sm mb-4 tracking-widest">{description}</p>
                                        {/* Author info removed as per your last code */}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
};

export default BlogPage;
