import { ThumbsupIcon, CommentIcon } from "@primer/octicons-react"


function BlogCard({
        title,
        url,
        description,
        likes,
        comments,
        publish_date,
        reading_time,
        tags,
        cover_img
    }){

     const publishDate = new Date(publish_date)


    return (
        <div class="col">
            <div class="card" style={{width: "22rem"}}>
                <img class="card-img-top" src={cover_img} alt={title} />
                <div class="card-body">
                    <h5 class="card-title"><strong>{title}</strong></h5>
                    <h6 class="card-subtitle mb-2 text-muted"></h6>
                    <p class="card-subtitle mb-2 text-muted">{reading_time} minute read</p>
                    <p class="card-text">{description}</p>

                    <p class="card-text text-muted"><em>{tags.map((tag)=> `#${tag} `)}</em></p>
                    <a class="btn btn-primary" target="_blank" href={url}>Read More</a>
                </div>
                <div class="card-footer text-muted">
                    <p class="card-text"><ThumbsupIcon size={16}/> {likes} <CommentIcon size={16}/> {comments}</p>  
                </div>
            </div>
        </div>
    )
}

export default BlogCard