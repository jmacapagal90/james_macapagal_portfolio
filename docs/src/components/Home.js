import ProjectCarousel from "./ProjectCarousel";

function Home(){
    return (
        <div class="container-py-4">
            <div id="jumbotron" >
                <div class="p-5 mb-4 bg-transparent text-bg-dark" >
                    <div class="container-fluid py-5 text-end" >
                                    <h1 class="display-5 fw-bold">James Macapagal</h1>
                                    <p class="col-md-14 fs-4">Software Engineer</p>
                    </div>
                </div>
            </div>
            <a href="/projects" class="btn btn-primary btn-lg m-1" >Projects</a>
            <a href="/blogs" class="btn btn-secondary btn-lg m-1" >Blogs</a>
            <a href="/contact" class="btn btn-info btn-lg m-1" >Contact</a>
            <a href="https://drive.google.com/file/d/1Skr6KMNuuaz3Hbd7NcrPfDDVjzVzFNqb/view?usp=sharing" target="_blank" class="btn btn-dark btn-lg m-1" >Resume</a>
            <ProjectCarousel />
        </div>

    )
}

export default Home;