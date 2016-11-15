<?php $data = file_get_contents('http://evanjones.xyz/evanjonesprod/wp-proxy/?type=getJson'); ?>
<html>
	<head>
		<meta content="initial-scale=1,maximum-scale=1,user-scalable=no,width=device-width" name="viewport">
		<meta name="google-site-verification" content="lCE-U4hjA1J7q3ep1DVFC7tG_4yXjGyOdRAikk0N1v0" />
		<link rel="icon" href="http://evanjones.xyz/evansapps.ico?reload=true">
		<link rel="stylesheet" href="/bundle.min.css">
	</head>
	<body>
		<div id="root"></div>
		<script>window.data=<?=json_encode($data);?></script>
		<script src="/bundle.min.js"></script>
	</body>
</html>