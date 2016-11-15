<?php $data = file_get_contents('http://evanjones.xyz/evanjonesprod/wp-proxy/?type=getJson'); ?>
<html>
	<head>
		<meta content="initial-scale=1,maximum-scale=1,user-scalable=no,width=device-width" name="viewport">
		<link rel="icon" href="http://evanjones.xyz/evansapps.ico">
		<link rel="stylesheet" href="/bundle.min.css">
	</head>
	<body>
		<div id="root"></div>
		<script>window.data=<?=json_encode($data);?></script>
		<script src="/bundle.min.js" async></script>
	</body>
</html>