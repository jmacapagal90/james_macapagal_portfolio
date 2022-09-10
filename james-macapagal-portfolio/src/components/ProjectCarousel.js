
function ProjectCarousel(){
    return (
        <div class="container">
        <div class="d-flex justify-content-center">
                <div class="w-25">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                        <h1>My Work</h1>
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            </div>

                        <div class="carousel-inner">

                            <div class="carousel-item active">
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>The Basement Game</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                                <img src="https://i.imgur.com/sJyra3n.png" class="d-block w-100" alt="..."/>

                            </div>
                            
                            <div class="carousel-item">
                                <div class="carousel-caption d-none d-md-block">
                                        <h5>Beer Buddy</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                </div>
                                <img src="https://i.imgur.com/5g8nfxq.jpeg" class="d-block w-100" alt="..."/>

                            </div>
                            <div class="carousel-item">
                                <div class="carousel-caption d-none d-md-block">
                                        <h5>Game Squad</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                </div>
                                <img src="https://i.imgur.com/5g8nfxq.jpeg" class="d-block w-100" alt="..."/>

                            </div>

                            <div class="carousel-item">
                                <div class="carousel-caption d-none d-md-block">
                                        <h5>Zoo Guide</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                </div>
                                <img src="https://i.imgur.com/5g8nfxq.jpeg" class="d-block w-100" alt="..."/>

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