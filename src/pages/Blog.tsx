
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/ui/BlogCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Hydraulic Hose Pressure Ratings",
      date: "May 2, 2023",
      imageSrc: "https://source.unsplash.com/photo-1482881497185-d4a9ddbe4151",
      author: "John Smith"
    },
    {
      id: 2,
      title: "PTFE vs. Rubber Hoses: A Comprehensive Comparison",
      date: "April 18, 2023",
      imageSrc: "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      author: "Emily Johnson"
    },
    {
      id: 3,
      title: "Maintenance Tips for Extending Hydraulic Hose Life",
      date: "April 5, 2023",
      imageSrc: "https://source.unsplash.com/photo-1487887235947-a955ef187fcc",
      author: "Robert Miller"
    },
    {
      id: 4,
      title: "Innovations in Turbo Oil Pipe Design",
      date: "March 22, 2023",
      imageSrc: "https://source.unsplash.com/photo-1487958449943-2429e8be8625",
      author: "Sarah Wilson"
    },
    {
      id: 5,
      title: "How to Select the Right Fittings for Your Application",
      date: "March 10, 2023",
      imageSrc: "https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      author: "David Thompson"
    },
    {
      id: 6,
      title: "The Future of Hydraulic Systems in Electric Vehicles",
      date: "February 25, 2023",
      imageSrc: "https://source.unsplash.com/photo-1494891848038-7bd202a2afeb",
      author: "Michael Lee"
    },
  ];

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
              {blogPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  date={post.date}
                  imageSrc={post.imageSrc}
                  author={post.author}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
