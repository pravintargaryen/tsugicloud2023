<div>
<?php 
include_once ('head.php');
include_once ('nav.php');


?>
</div>
<div style="background-color:#5290F5;color:white;padding:50px;"></div>  
<div style="float:left;padding-bottom:3500px;padding-right:30px">
<nav class="nav flex-column">
  <a class="nav-link active" aria-current="page" href="#">Canvas</a>
  <a class="nav-link" href="#">Google</a>
  <a class="nav-link" href="#">Sakai</a>
  <a class="nav-link" href="#">Blackboard</a>
  <a class="nav-link" href="#">Brightspace</a>
</nav>    
</div>
<div>
<?php
require_once 'Parsedown.php';
$parsedown = new Parsedown(); 
$content = file_get_contents('howto.md');
echo $parsedown->text($content);
?>
</div>    
<div>
<?php require_once ('footer.php'); ?>    
</div>
