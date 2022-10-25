

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
            <div class="card" style={{width: '20rem'}}>
                <img class="card-img-top" src={cover_img} alt={title} />
                <div class="card-body">
                    <h5 class="card-title"><strong>{title}</strong></h5>
                    <h6 class="card-subtitle mb-2 text-muted"></h6>
                    <p class="card-subtitle mb-2 text-muted">{reading_time} minute read</p>
                    <p class="card-text">{description}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-muted">Likes: {likes}, {comments} comments</li>
                    <li class="list-group-item text-muted"><em>{tags.map((tag)=> `#${tag}, `)}</em></li>
                </ul>
                <br></br>
                <a class="btn btn-primary" target="_blank" href={url}>Read More</a>
            </div>
        </div>
    )
}

export default BlogCard