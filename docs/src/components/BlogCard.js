

function BlogCard({
        title,
        url,
        description,
        likes,
        comments,
        publish_date,
        reading_time,
        tags
    }){

        console.log(title)

    return (
        <div class="card" style={{width: 'auto'}}>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Guide to external seeding</h6>
                <p class="card-text">As part of Phase 4 of Flatiron School's Software Engineering bootcamp, we are tasked with building a full-stack application, including standing up an API with Rails to communicate with a React client application...</p>
                <a target="_blank" href="https://dev.to/jmacapagal90/how-to-seed-your-rails-api-with-an-external-api-4h8n" class="card-link">Read More</a>
            </div>
        </div>


    )
}

export default BlogCard