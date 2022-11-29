import React from 'react';

function Portfolio() {
    return(
        <section class="portfolio" id='portfolio'>
        <h1 class="about">My Projects</h1>
        <div id="myCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <ol class="carousel-indicators">
                <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
                <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
              </ol>
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active">
                <a href='https://github.com/nhanng19/music_wordle'><img class="d-block w-100" src="./assets/music-wordle.png?auto=yes&bg=666&fg=444&text=First slide" alt="First slide"/></a>
              </div>
              <div class="carousel-item">
                <a href='https://github.com/aurorayihe/Project2_team10'><img class="d-block w-100" src="./assets/bark-movie.png?auto=yes&bg=666&fg=444&text=Second slide"  alt="Second slide"/></a>
              </div>
              <div class="carousel-item ">
                <a href='https://github.com/quynhlien2002/Challenge-6'><img class="d-block w-100" src="./assets/Weather-forecast.png?auto=yes&bg=666&fg=444&text=Third slide"  alt="Third slide"/></a>
              </div>
            </div>
            <a class="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
             
    </section>

    );
}

export default Portfolio;