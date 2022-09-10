

function About(){
    return(
        <div class="container">
            <h1>About Me</h1>
            <div class="container-sm">
                <img src="https://i.imgur.com/T3vXh7N.jpg" alt="profile-pic" class="w-25"/>
            </div>
            <br></br>
            <p>Hello! My name is James Macapagal, and I'm a Software Engineer based out of Chicago, IL.  I enjoy making weird, fun games. </p>
                <h2>Contact Info:</h2>
            <div class="container-sm">
                <ul class="list-group">
                    <li class="list-group-item">
                            <a target="_blank" href="https://www.linkedin.com/in/jamesmacapagal/">LinkedIn</a>
                    </li>
                    <li class="list-group-item">
                            <a target="_blank" href="https://github.com/jmacapagal90">Github</a>
                            </li>
                    <li class="list-group-item">
                            <a target="_blank" href="https://dev.to/jmacapagal90">DEV Blog</a>
                            </li>
                    <li class="list-group-item">
                            <a target="_blank" href="mailto:j.macapagal90@gmail.com">Email</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About;