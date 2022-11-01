

function Projects(){
    return(
        <div class="container-md">
            <div class="w-100">
            <div class="position-relative">
                <div class="position-relative top-0 start-50 translate-middle-x">
                    <h1>My Projects</h1>
                        <div class="row row-cols-1 g-4">
                            <div class="col">
                                <div class="card" style={{width: 'auto'}}>
                                    <img src="https://i.imgur.com/UVpCyRy.png" class="card-img-top rounded-4" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">The Basement Game</h5>
                                        <p class="card-text">A text-based, choose-your-own-adventure style game where a user tries to escape from a nefarious basement by answering (and surviving) a series of Yes/No questions.</p>
                                        <a href="https://the-basement-game.herokuapp.com/" target="_blank" class="btn btn-primary">Demo</a>
                                        <a href="https://github.com/jmacapagal90/the-basement-game" target="_blank" class="btn btn-secondary">Repo</a>
                                    </div>
                                </div> 
                            </div>
                            <div class="col">
                                <div class="card" style={{width: 'auto'}}>
                                    <img src="https://i.imgur.com/pmJrmfG.png" class="card-img-top rounded-4" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Beer Buddy</h5>
                                        <p class="card-text">Beer Buddy is a SPA that allows users to search through beers and update tabs with different beer order</p>
                                        <a href="https://chimerical-begonia-834f94.netlify.app/"  target="_blank" class="btn btn-primary">Demo</a>
                                        <a href="https://github.com/jmacapagal90/p2-project-beer-buddy" target="_blank" class="btn btn-secondary">Repo</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card" style={{width: 'auto'}}>
                                <img src="https://i.imgur.com/0d1mgWT.png" class="card-img-top rounded-4" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">GameSquad</h5>
                                    <p class="card-text">A SPA where users can browse, rate, and create review games.</p>
                                    <a href="https://62ed3e838fac9d0500d76eed--funny-beijinho-5a7c41.netlify.app/" target="_blank" class="btn btn-primary">Demo</a>
                                        <a href="https://github.com/batmanonwheels/game_squad_backend" target="_blank" class="btn btn-secondary">Repo</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={{width: 'auto'}}>
                                <img src="https://i.imgur.com/2mlo1ed.png" class="card-img-top rounded-4" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Zoo Guide</h5>
                                    <p class="card-text">Zoo Guide is a SPA for browsing various exhibits and animals at your local zoo!</p>
                                    <a href="https://thunderous-mandazi-ff9ffc.netlify.app/#reloaded" target="_blank" class="btn btn-primary">Demo</a>
                                        <a href="https://github.com/jmacapagal90/p3-sinatra-react-project-front-end" target="_blank" class="btn btn-secondary">Repo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Projects;