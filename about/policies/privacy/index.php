<div>
<?php 
include_once ('head.php');
include_once ('nav.php');

?>
</div>
<div style="background-color:#5290F5;color:white;padding:50px;">   
</div>
<div>
<?php
require_once 'Parsedown.php';
$parsedown = new Parsedown(); 
$content = file_get_contents('privacy.md');
echo $parsedown->text($content);
?>
</div>    
<div>
<?php require_once ('footer.php'); ?>    
</div>
