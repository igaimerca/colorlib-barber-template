import React from 'react';
import BlogCard from '../../components/Blog/BlogCard';
import BlogSideBar from '../../components/Blog/BlogSideBar';
import './Blog.styles.scss'

function Blog() {
    return (
        <div className="blog-wrapper">
            <div className="blog-card-wrapper">
                <BlogCard
                    banner="https://preview.colorlib.com/theme/brber/assets/img/blog/xsingle_blog_1.png.pagespeed.ic.Vb11bfvxZv.webp"
                />
                <BlogCard
                    banner="https://preview.colorlib.com/theme/brber/assets/img/blog/xsingle_blog_3.png.pagespeed.ic.v6Ae06IH1p.webp"
                />
                <BlogCard
                    banner="https://preview.colorlib.com/theme/brber/assets/img/blog/xsingle_blog_5.png.pagespeed.ic.gUD60PPVoP.webp"
                />
            </div>
            <div className="blog-sidebar">
                <BlogSideBar />
            </div>
        </div>
    );
}

export default Blog;
