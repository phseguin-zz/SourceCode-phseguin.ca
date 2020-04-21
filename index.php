<?php
include 'includes/menu.php';
include 'includes/footer.php';
?>

<!DOCTYPE html>
<html>
<head>
   <meta charset="utf-8"/>  
    <title>Pascal Hamish Seguin</title>   

   <link rel="stylesheet" href="css/stylesheet.css">
</head>
<body id="body">
<div id="gridcontainer" class="gridDiv">
   <div id="menu" class="gridDiv"><?=printMenu();?></div>
   <div id="homepage" class="gridDiv"> </div>
   <div id="education" class="gridDiv"></div>
   <div id="volunteer_experince" class="gridDiv"></div>
   <div id="work_experince" class="gridDiv"></div>
   <div id="projects"class="gridDiv"></div>
   <div id="footer" class="gridDiv"><?=printFooter()?></div>
</div>
<script src="js/index.js" ></script>

</body>
</html>