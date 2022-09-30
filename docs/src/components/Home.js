import ProjectCarousel from "./ProjectCarousel";

function Home(){
    return (
        <div class="container-py-4">
            <div class="container-medium">
                <div class="d-flex justify-content-center">
                        <div id="jumbotron" >
                            <div class="p-5 mb-4 bg-transparent text-bg-dark" >
                                <div class="text-end">
                                        <h1 class="display-6 fw-bold">James Macapagal</h1>
                                        <p class="col-md-14 fs-4">software engineer</p>
                                </div>
                                
                            </div>
                        </div>
                </div>
            </div>
            <div>
                <a href="/projects" class="btn btn-primary btn-lg m-1" >Projects</a>
                <a href="/blogs" class="btn btn-secondary btn-lg m-1" >Blogs</a>
                <a href="/contact" class="btn btn-info btn-lg m-1" >Contact</a>
                <a href="https://docs.google.com/document/d/1I_pZNsYvH0QjxPerzahE5xoL-7mEf9LQiJyMhxPObwg/export?format=pdf" target="_blank" class="btn btn-dark btn-lg m-1" >Resume</a>
                
            </div>
            <ProjectCarousel />
        </div>

    )
}

export default Home;