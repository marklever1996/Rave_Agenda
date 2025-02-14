import React from 'react'
import './Blog.css'

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: "The Evolution of Electronic Dance Music",
            excerpt: "From the early days of disco to modern techno, explore the fascinating journey of electronic music...",
            category: "History",
            date: "March 15, 2024",
            image: "https://images.unsplash.com/photo-1574434312346-9621a2be5b12?q=80&w=800",
            readTime: "5 min read"
        },
        {
            id: 2,
            title: "Top Underground Venues in Groningen",
            excerpt: "Discover the hidden gems of Groningen's electronic music scene, from intimate clubs to warehouse parties...",
            category: "Venues",
            date: "March 10, 2024",
            image: "https://images.unsplash.com/photo-1571070703151-4f99616b198b?q=80&w=800",
            readTime: "4 min read"
        },
        {
            id: 3,
            title: "Interview: Rising DJ Stars",
            excerpt: "Meet the new generation of DJs who are reshaping the electronic music landscape in the Netherlands...",
            category: "Artists",
            date: "March 5, 2024",
            image: "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?q=80&w=800",
            readTime: "6 min read"
        },
        {
            id: 3,
            title: "Interview: Rising DJ Stars",
            excerpt: "Meet the new generation of DJs who are reshaping the electronic music landscape in the Netherlands...",
            category: "Artists",
            date: "March 5, 2024",
            image: "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?q=80&w=800",
            readTime: "6 min read"
        },
        {
            id: 3,
            title: "Interview: Rising DJ Stars",
            excerpt: "Meet the new generation of DJs who are reshaping the electronic music landscape in the Netherlands...",
            category: "Artists",
            date: "March 5, 2024",
            image: "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?q=80&w=800",
            readTime: "6 min read"
        },
        {
            id: 3,
            title: "Interview: Rising DJ Stars",
            excerpt: "Meet the new generation of DJs who are reshaping the electronic music landscape in the Netherlands...",
            category: "Artists",
            date: "March 5, 2024",
            image: "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?q=80&w=800",
            readTime: "6 min read"
        }
    ]

    return (
        <div className="blog-page">
            <div className="blog-glow"></div>
            <div className="blog-container">
                <div className="blog-header">
                    <h1>RAVE INSIGHTS</h1>
                    <p>Stories, interviews, and insights from the electronic music scene</p>
                </div>
                <div className="blog-grid">
                    {blogPosts.map(post => (
                        <article key={post.id} className="blog-card">
                            <div className="blog-card-image">
                                <img src={post.image} alt={post.title} />
                                <div className="blog-card-category">{post.category}</div>
                            </div>
                            <div className="blog-card-content">
                                <div className="blog-card-meta">
                                    <span className="blog-date">
                                        <i className="far fa-calendar"></i>
                                        {post.date}
                                    </span>
                                    <span className="blog-read-time">
                                        <i className="far fa-clock"></i>
                                        {post.readTime}
                                    </span>
                                </div>
                                <h2>{post.title}</h2>
                                <p>{post.excerpt}</p>
                                <button className="blog-read-more">
                                    Read Article
                                    <i className="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="blog-newsletter">
                    <div className="newsletter-content">
                        <h3>Stay in the Loop</h3>
                        <p>Subscribe to our newsletter for the latest stories and updates</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Enter your email" />
                            <button type="submit">
                                Subscribe
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog