import axios from "axios";
import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";

function Blogs(){
    const [ blogs, setBlogs ] = useState([])
    const baseURL = "https://dev.to/api/articles?username=jmacapagal90"

    useEffect(()=>{
        axios.get(baseURL).then((response)=> {
            setBlogs(response.data)
        })
    },[])

    const showBlogs = blogs.map((blog)=>{
        return (
            <BlogCard 
            key={blog.id} 
            title={blog.title} 
            url={blog.url} 
            description={blog.description} 
            likes={blog.public_reactions_count}
            comments={blog.comments_count}
            publish_date={blog.published_at}
            reading_time={blog.reading_time_minutes}
            tags={blog.tag_list}
            cover_img={blog.social_image}
            />
        )
    })

    return (
        <div class="container">
            <h1>My Blogs</h1>  
            <div class="row">
                    {showBlogs}
            </div>
        </div>
    )
}

export default Blogs;