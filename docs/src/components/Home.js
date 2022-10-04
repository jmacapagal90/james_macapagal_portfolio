import ProjectCarousel from "./ProjectCarousel";

function Home(){
    return (
        <div class="container-py-4">
            <div class="container-medium">
                <div class="d-flex justify-content-center">
                        <div id="jumbotron" >
                            <div class="p-5 mb-4 bg-transparent text-bg-dark" >
                                <div class="text-end">
                                    <div id="title-message">
                                        <h1 class="display-6">James Macapagal <br></br>Software Engineer</h1>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                </div>
            </div>
            <br></br>
            <div class="btn-group" role="group">
                <a href="/projects" class="btn btn-outline-secondary btn-lg" >Projects</a>
                <a href="/blogs" class="btn btn-outline-secondary btn-lg" >Blogs</a>
                <a href="/contact" class="btn btn-outline-secondary btn-lg" >Contact</a>
                <a href="https://docs.google.com/document/d/1I_pZNsYvH0QjxPerzahE5xoL-7mEf9LQiJyMhxPObwg/export?format=pdf" target="_blank" class="btn btn-outline-secondary btn-lg" >Resume</a>
            </div>
            <br></br>
            <ProjectCarousel />
            <br></br>

        </div>

    )
}

export default Home;