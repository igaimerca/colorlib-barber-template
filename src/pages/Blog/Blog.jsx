import React from 'react'
import BlogSection from '../../sections/Blog/BlogSection'
import NavBar from '../../sections/NavBar/NavBar'

function Blog() {
    return (
        <div>
            <NavBar />
            <div className='header'>
                <h1>Blog</h1>
            </div>
            <BlogSection />
        </div>
    )
}

export default Blog
