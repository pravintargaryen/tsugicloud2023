<?php
require_once 'head.php';
require_once 'nav.php';
?>
<html>
<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/ArtAndFeminism_MoMA18_-_30_-_Editing_with_Megan_Wacha.jpg/1024px-ArtAndFeminism_MoMA18_-_30_-_Editing_with_Megan_Wacha.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/200131-D-RQ659-0001.JPG/1024px-200131-D-RQ659-0001.JPG" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Junction_2015.jpg/1024px-Junction_2015.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 
<div class="container text-center">
  <div class="row align-items-center">
    <div class="col">
      <h2>Including all Voices</h2>
      <p>Everyone matters in our community since it's built from scratch because of open source developers like you </p>
    </div>
    <div class="col">
    <h2>Unlocking Opportunity</h2>
    <p>Everyone matters in our community since it's built from scratch because of open source developers like you </p>
    </div>
    <div class="col">
    <h2>Protecting Users</h2>
    <p>Everyone matters in our community since it's built from scratch because of open source developers like you </p>
    </div>
  </div>
</div>
<?php
require_once 'footer.php'; 
?>
</html>