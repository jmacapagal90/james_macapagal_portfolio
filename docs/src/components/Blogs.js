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
            publish_date={blog.readable_publish_date}
            reading_time={blog.reading_time}
            tags={blog.tags}
            />
        )
    })

    return (
        <div class="container-fluid">
            <h1>My Blogs</h1>
            <div class="w-auto">
                <div class="position-relative">
                        <div class="position-relative top-0 start-50 translate-middle-x">
                                <div class="row row-cols-1 row-cols-md-1 g-4">
                                <div class="col">
                                 {showBlogs}
                                </div>
                                </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs;