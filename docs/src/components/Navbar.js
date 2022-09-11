import { useLocation } from 'react-router-dom'


function Navbar(){
    let location = useLocation()


    return(
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li class="nav-item">
                            <a class={location.pathname === "/" ? "nav-link active" : "nav-link"} aria-current="page" href="/">home</a>
                        </li>

                        <li class="nav-item">
                            <a class={location.pathname === "/projects" ? "nav-link active" : "nav-link"} href="/projects">projects</a>
                        </li>
                        <li class="nav-item">
                            <a class={location.pathname === "/blogs" ? "nav-link active" : "nav-link"} href="/blogs">blogs</a>
                        </li>

                        <li class="nav-item">
                            <a class={location.pathname === "/contact" ? "nav-link active" : "nav-link"} href="/contact">contact</a>
                        </li>
                    </ul>
                </div>
        </nav>
    )
}

export default Navbar;