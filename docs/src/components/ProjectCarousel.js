
function ProjectCarousel(){
    return (
        <div class="container">
            <h1>Preview My Work:</h1>
        <div class="d-flex justify-content-center">
                <div class="w-75">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            </div>

                        <div class="carousel-inner">

                            <div class="carousel-item active">
                                <img src="https://i.imgur.com/UVpCyRy.png" class="d-block w-100 rounded-4" alt="..."/>

                            </div>
                            
                            <div class="carousel-item">
                                <img src="https://i.imgur.com/pmJrmfG.png" class="d-block w-100 rounded-4" alt="..."/>

                            </div>
                            <div class="carousel-item">
                                <img src="https://i.imgur.com/0d1mgWT.png" class="d-block w-100 rounded-4" alt="..."/>

                            </div>

                            <div class="carousel-item">
                                <img src="https://i.imgur.com/2mlo1ed.png" class="d-block w-100 rounded-4" alt="..."/>

                            </div>

                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default ProjectCarousel;