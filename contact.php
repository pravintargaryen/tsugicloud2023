<!DOCTYPE HTML>
<html>
<head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet">    
<link rel="stylesheet" type="text/css" href="style.css" >
<title>Contact Us - TsugiCloud </title>
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<link rel="icon" type="image/x-icon" href="logo/tsugiLogo/png/miniCloud_blackBack.png">
</head>
<body>
<div id="nav"></div>
<div id="banner" hidden></div>
<div id="flex" hidden></div>
<div id="division1" hidden></div>
<div id="division2" hidden></div>
<div id="division3" hidden></div>
<div id="division4" hidden></div>
<div id="division5" hidden></div>
<div id="division6" hidden></div>
<div id="testimonial" hidden></div>
<div id="community" hidden></div>
<div class="contact">
<h1>Write to Us</h1>
<p>We would love to hear back. Please write to us with anything including getting involved, inquiries, problems & bugs.</p>
<form method="POST" name="contact-form" action="https://formspree.io/info@learnxp.com"  id="contact-form">
<p>Name: <input type="text" name="name" size="20"></p>
<p>Email: <input type="email" name="email" size="20"></p>  
<p>Phone: <input type="text" name="phone" size="20"></p>
<p>Message : <textarea rows="10" cols="40" id="inp08" name="message"></textarea></p>
<input type="submit" id="contactsubmit" value="Send">
</form>
</div>
<div id="footer"></div>
<script type ="text/babel" src="index.js"></script>	
</body>
</html>