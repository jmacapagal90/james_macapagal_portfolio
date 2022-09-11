import ProjectCarousel from "./ProjectCarousel";

function Home(){
    return (
        <div class="container-py-4">
            <div id="jumbotron" >
                <div class="p-5 mb-4 bg-transparent text-bg-dark" >
                    <div class="container-fluid py-5 text-end" >
                        <div class="position relative bottom-100 end-100">
                                    <h1 class="display-5 fw-bold">James Macapagal</h1>
                                    <p class="col-md-14 fs-4">Software Engineer</p>
                                    <a href="/projects" class="btn btn-primary btn-lg m-1" >My Projects</a>
                                    <a href="/blogs" class="btn btn-secondary btn-lg m-1" >My Blogs</a>
                                    <a href="/contact" class="btn btn-info btn-lg m-1" >Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>
            <ProjectCarousel />
        </div>

    )
}

export default Home;