import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BlogList from './components/Blog/BlogList';
import BlogPost from './components/Blog/BlogPost';
import NotFound from './components/NotFound/NotFound';
import { useEffect, useState } from 'react';
import { parseMarkdown, sortPostsByDate } from './utils/mdParser';

// Function to load blog posts dynamically
const loadBlogPosts = async () => {
  const context = import.meta.glob('./content/blog/*.md', { as: 'raw' });
  const posts = [];

  for (const path in context) {
    const markdown = await context[path]();
    const parsed = await parseMarkdown(markdown);
    posts.push({ ...parsed, slug: path.split('/').pop().replace('.md', '') });
  }

  return sortPostsByDate(posts);
};

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadBlogPosts().then(setPosts);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-black transition-theme">
        <Navbar />
        <main>
          <Routes>
            <Route exact path="/" element={
              <>
                <section id="home" className="section-default"><Hero /></section>
                <section id="about" className="section-alternate"><About /></section>
                <section id="experience" className="section-default"><Experience /></section>
                <section id="skills" className="section-alternate"><Skills /></section>
                <section id="projects" className="section-default"><Projects /></section>
                <section id="contact" className="section-alternate"><Contact /></section>
              </>
            } />
            <Route exact path="/blog" element={<BlogList posts={posts} />} />
            <Route exact path="/blog/:slug" element={<BlogPost posts={posts} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
