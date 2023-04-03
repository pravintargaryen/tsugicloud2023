<?php 
class footer {
    static function footer() {
        echo('
        <div class="container">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
          <div class="col mb-3">
            <a href="../../../index.php" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
              <img class="bi me-2" src="../../../logo/TsugiCloud.org/tsugicloud-org_gravatar_72.png"/></img>
            </a>
            <p class="text-muted">&copy; 2023</p>
          </div>
      
          <div class="col mb-3">
      
          </div>
      
          <div class="col mb-3">
            <h5>Links</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Community</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>
      
          <div class="col mb-3">
            <h5>Guides</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Getting Started</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">LTI Integration</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Cloud</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Developers</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">App Store</a></li>
            </ul>
          </div>
      
          <div class="col mb-3">
            <h5>Community</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Blog</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Discussions</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Users</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Testimonial</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Contribute</a></li>
            </ul>
          </div>
        </footer>
      </div>');
    }
}

footer::footer();
?>