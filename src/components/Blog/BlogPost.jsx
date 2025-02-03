import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { marked } from 'marked'
import './Blogpost.css'  // Import BlogPost-specific CSS file


const BlogPost = () => {
  const { slug } = useParams() // Get the slug from the URL
  const [post, setPost] = useState(null)

  useEffect(() => {
    // Fetch the post data when the component mounts
    const fetchPost = async () => {
      try {
        const response = await fetch('/data/posts.json')
        const data = await response.json()
        const currentPost = data.find((post) => post.slug === slug)
        setPost(currentPost)
      } catch (error) {
        console.error('Error fetching post data:', error)
      }
    }

    fetchPost()
  }, [slug]) // Re-fetch when the slug changes

  if (!post) return <div>Loading...</div> // Show loading state if no post is found

  // Convert markdown content to HTML using marked
  const content = marked(post.content)

  return (
    <section className="blogpost-container py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h1 className="blogpost-title text-center mb-6">
          {post.title}
        </h1>
        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title}
            className="blogpost-image"
          />
        )}
        <div
          className="blogpost-markdown text-lg mb-6"
          // Inject the converted markdown as HTML
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </section>
  )
}

export default BlogPost
