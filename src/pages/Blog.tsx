
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/ui/BlogCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Hydraulic Hose Pressure Ratings",
      date: "May 2, 2023",
      imageSrc: "/lovable-uploads/c67f11da-5f6e-4947-967b-561db5be6fbc.png",
      author: "John Smith",
      excerpt: "A comprehensive guide to hydraulic hose pressure ratings and their importance in system design and safety.",
      slug: "hydraulic-hose-pressure-ratings"
    },
    {
      id: 2,
      title: "PTFE vs. Rubber Hoses: A Comprehensive Comparison",
      date: "April 18, 2023",
      imageSrc: "/lovable-uploads/7fa516f9-9179-47be-a76b-bc95ff5fc8e3.png",
      author: "Emily Johnson",
      excerpt: "Examining the key differences, advantages, and applications of PTFE and rubber hoses in industrial settings.",
      slug: "ptfe-vs-rubber-hoses-comparison"
    },
    {
      id: 3,
      title: "Maintenance Tips for Extending Hydraulic Hose Life",
      date: "April 5, 2023",
      imageSrc: "/lovable-uploads/b1a8a813-45c6-4ebe-a086-4399557903c0.png",
      author: "Robert Miller",
      excerpt: "Best practices and preventive maintenance strategies to maximize the lifespan of your hydraulic hoses.",
      slug: "hydraulic-hose-maintenance-tips"
    },
    {
      id: 4,
      title: "Innovations in Turbo Oil Pipe Design",
      date: "March 22, 2023",
      imageSrc: "/lovable-uploads/35cc28ff-b5ca-441f-824d-b980213e7a24.png",
      author: "Sarah Wilson",
      excerpt: "Exploring recent advancements in turbo oil pipe technology and how they enhance engine performance.",
      slug: "turbo-oil-pipe-innovations"
    },
    {
      id: 5,
      title: "How to Select the Right Fittings for Your Application",
      date: "March 10, 2023",
      imageSrc: "/lovable-uploads/a346c74e-9889-4d7b-8cd9-86a0ff46b89d.png",
      author: "David Thompson",
      excerpt: "Essential guidelines for choosing appropriate fittings based on pressure, temperature, and compatibility requirements.",
      slug: "selecting-right-fittings"
    },
    {
      id: 6,
      title: "The Future of Hydraulic Systems in Electric Vehicles",
      date: "February 25, 2023",
      imageSrc: "/lovable-uploads/276c3c3f-5523-4672-b280-b673bb29c985.png",
      author: "Michael Lee",
      excerpt: "How hydraulic technologies are evolving to meet the unique requirements of electric and hybrid vehicle systems.",
      slug: "hydraulic-systems-electric-vehicles"
    },
  ];

  // Filter blogs based on search query
  const filteredBlogs = blogPosts.filter(blog => 
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBlogClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        <section className="section-padding">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-kumru-navy">Blog</h1>
            
            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder="Search articles" 
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="whitespace-nowrap">All Categories</Button>
                  <Button variant="outline" className="whitespace-nowrap">Latest First</Button>
                </div>
              </div>
            </div>
            
            {/* Blog Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  date={post.date}
                  imageSrc={post.imageSrc}
                  author={post.author}
                  excerpt={post.excerpt}
                  onClick={() => handleBlogClick(post.slug)}
                  className="cursor-pointer"
                />
              ))}
            </div>

            {filteredBlogs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No blog posts found matching your search.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
