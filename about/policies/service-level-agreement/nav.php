<?php
class nav {
static function navbar() {
    echo ('
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
  <div class="container-fluid">
    <a class="navbar-brand" href="../../../index.php"><img src ="../../../logo/logo.png" height="30px"/></a>
    <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="../../../index.php">Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="https://www.tsugicloud.org/tsugidash" target="_Blank">App Store</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">More</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" >Docs</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="../../../about/documentation/howto/">How To</a></li>
            <li><a class="dropdown-item" href="../../../about/documentation/faq/">FAQ</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item">Policy</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="../../../about/policies/privacy">Privacy</a></li>
            <li><a class="dropdown-item" href="../../../about/policies/data-retention">Data Retention</a></li>
            <li><a class="dropdown-item" href="../../../about/policies/service-level-agreement">Service Level</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-danger" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>');
    
    }
} 

nav::navbar();


?>
