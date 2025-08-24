import React, { useState } from "react";
import Footer from "../components/Footer";
import Home from "../components/Blog-Home";
import { HeadProvider, Title, Meta } from "react-head";

const categories = [
    "All",
    "Women’s Health & Wellness",
    "Nutrition & Lifestyle",
    "Emotional Wellbeing",
    "Success Stories & Inspiration"
];

// Example posts
const blogPosts = [
    {
        id: 1,
        title: "Healing After Cancer Treatment",
        description:
            "Discover strategies to restore physical and mental health after cancer recovery.",
        date: "22 Dec 2023",
        tags: ["Women’s Health & Wellness"],
        image: "/image/inst1.jpg",
        featured: true,
    },
    {
        id: 2,
        title: "Nutrition Tips for Long-Term Wellness",
        description: "Practical lifestyle changes to boost your recovery journey.",
        date: "20 Dec 2023",
        tags: ["Nutrition & Lifestyle"],
        image: "/image/inst2.jpg",
    },
    {
        id: 3,
        title: "Overcoming Anxiety During Recovery",
        description: "Learn how emotional support improves healing and confidence.",
        date: "18 Dec 2023",
        tags: ["Emotional Wellbeing"],
        image: "/image/inst3.jpg",
    },
    {
        id: 4,
        title: "Shalini’s Recovery Journey",
        description:
            "A story of resilience and strength after completing our program.",
        date: "15 Dec 2023",
        tags: ["Success Stories & Inspiration"],
        image: "/image/inst4.jpg",
    },
];


const Tag = ({ label }) => (
    <span className="text-xs font-semibold bg-gray-200 text-gray-700 rounded-full px-3 py-1 mr-2">
        {label}
    </span>
);

const BlogPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredPosts =
        selectedCategory === "All"
            ? blogPosts
            : blogPosts.filter((post) => post.tags.includes(selectedCategory));
    return (
        <>
            <HeadProvider>
                <Title> Women’s Health Blog | Embrace Wellness Resources</Title>
                <Meta name="description" content="Explore expert insights on women’s health, from pregnancy care and cancer recovery to menopause and lifestyle transformation. Practical tips, research-based guidance, and inspiring stories." />
            </HeadProvider>
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
                        .map(({ id, title, description, tags, image }) => (
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
                                    </div>
                                    <h2 className="text-3xl font-semibold mb-4 text-[var(--brown-red)]">{title}</h2>
                                    <p className="text-[var(--brown-red)] leading-relaxed mb-6">{description}</p>
                                </div>
                            </div>
                        ))}

                    <div className="py-12 px-6 ">
                        {/* Category Buttons */}
                        <div className="flex flex-wrap justify-center gap-4 mb-10">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-6 py-2 rounded-full font-semibold transition ${selectedCategory === cat
                                            ? "bg-[var(--brown-red)] text-white"
                                            : "bg-gray-200 text-gray-800"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Other Posts */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 relative z-10">
                            {filteredPosts
                                .filter((post) => !post.featured)
                                .map(({ id, title, description, tags, image }) => (
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
                                                    <span
                                                        key={tag}
                                                        className="bg-[var(--brown-red-bg)] text-xs px-2 py-1 rounded-full mr-2"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <h3 className="text-lg font-semibold mb-2 tracking-widest">
                                                {title}
                                            </h3>
                                            <p className="text-sm mb-4 tracking-widest">{description}</p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
};

export default BlogPage;
