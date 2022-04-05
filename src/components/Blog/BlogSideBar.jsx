import React from 'react'
import SearchContainer from './SearchContainer'
import "./BlogComponent.style.scss";
import Category from './Category';
import RecentPosts from './RecentBlogs';

function BlogSideBar() {
  return (
    <div className="blog-sidebar-container">
        <SearchContainer />
        <Category />
        <RecentPosts />
    </div>
  )
}

export default BlogSideBar