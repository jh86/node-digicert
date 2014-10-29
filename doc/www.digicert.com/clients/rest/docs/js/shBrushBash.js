<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />

	<title>DigiCert Account Login</title>

	<!-- extjs -->
	
	<!-- CSS -->
	<link href="/CB1242308/css/ks.css.php" rel="stylesheet" type="text/css" />
	<link href="/css/ks.account-area.css" rel="stylesheet" type="text/css" />
	<link href="/css/styled-buttons.css?cbr=CB1242308" rel="stylesheet" type="text/css" /><link href="/account/css/index.css?cbr=CB1242308" rel="stylesheet" type="text/css" /><link href="/css/formtips.css?cbr=CB1242308" rel="stylesheet" type="text/css" />	
	<!--[if IE]>
		<![endif]-->
	
	<!--[if IE 7]>
		<link rel="stylesheet" type="text/css" href="/css/ie7.css">
	<![endif]-->


	<!-- Inline JS -->
	<script type="text/javascript">
		var g_csrf_token = "a83296e36936ba2a69841ab874fd27f2df28a03e";
			</script>

	<!-- Scripts -->
	<script type="text/javascript" src="/CB1242308/./js/ks.base.js.php" charset="utf-8"></script>
	<script type="text/javascript" src="/account/js/index.js?cbr=CB1242308" charset="utf-8"></script><script type="text/javascript" src="/js/formtips.js?cbr=CB1242308" charset="utf-8"></script>	<script src="/account/js/ajax_csrf.js"></script>

	<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-8640690-1'],['_setDomainName','www.digicert.com']);
  if (typeof trackedPageView == 'undefined') { _gaq.push(['_trackPageview']); }  
function checkForCookie(cookiename) {
	var cookiecheck = 0;
	var cookies = document.cookie.split(';');
	for (var i=0;i<cookies.length;i++){
		while (cookies[i].charAt(0)==' ') cookies[i] = cookies[i].substring(1,cookies[i].length);
		if (cookies[i].indexOf(cookiename+'=') == 0){
			cookiecheck = 1;
		} //if
	} //for
	return cookiecheck;
}

function setCookie(c_name,value,exdays)
{
	var now= new Date();
	var exdate=new Date();
	exdate.setTime(now.getTime() + 1000*60*60*24*exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toGMTString()) + "; path=/";
	document.cookie=c_name + "=" + c_value;
}

if (checkForCookie('order_origin') === 0)
{
	var origin_cookie = "l="+_varTruncate(window.location.pathname);
	origin_cookie += "&s=" + _varTruncate(window.location.search);
	origin_cookie += "&r=" + _varTruncate(document.referrer.substr(7,document.referrer.length));
	origin_cookie += "&q=" + _varTruncate(document.referrer.match(/(?:([#]|[?]|[&]))(?:(encquery|k|p|q|qs|qt|query|rdata|search_word|szukaj|terms|text|wd|words))=[^&]*/i));
	setCookie('order_origin', origin_cookie, 1);
}
function _varTruncate(input) {
	var byteLength = 63;
	//we can't decode if we happen to truncate part-way through an encoded entity so if the encoded string has a % near 63 characters, we truncate before the % before decoding
	if (encodeURIComponent(input).substr(byteLength-2,1) == "%"){
		truncatedInput = decodeURIComponent(encodeURIComponent(input).substr(0,byteLength-2));
	} else if (encodeURIComponent(input).substr(byteLength-1,1) == "%"){
		truncatedInput = decodeURIComponent(encodeURIComponent(input).substr(0,byteLength-1));
	} else {
		truncatedInput = decodeURIComponent(encodeURIComponent(input).substr(0,byteLength));
	}
	return truncatedInput;
}

	try {
		if (checkForCookie('__utma') === 0){
						_gaq.push(['_setCustomVar', 1, "l", _varTruncate(window.location.pathname), 1]);
			_gaq.push(['_setCustomVar', 2, "s", _varTruncate(window.location.search), 1]);
			_gaq.push(['_setCustomVar', 3, "r", _varTruncate(document.referrer.substr(7,document.referrer.length)), 1]);
			_gaq.push(['_setCustomVar', 4, "q", _varTruncate(document.referrer.match(/(?:([#]|[?]|[&]))(?:(encquery|k|p|q|qs|qt|query|rdata|search_word|szukaj|terms|text|wd|words))=[^&]*/i)[0]), 1]);
		}
	} catch (err) {}
  
 (function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })(); </script>
	<link rel="shortcut icon" href="/favicon.ico" >
</head>
<body id="top">
<!-- Adobe Marketing Cloud Tag Loader Code
Copyright 1996-2013 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/solutions/digital-marketing.html -->
<script type="text/javascript">//<![CDATA[
	var amc=amc||{};if(!amc.on){amc.on=amc.call=function(){}};
	document.write("<scr"+"ipt type=\"text/javascript\" src=\"//www.adobetag.com/d1/v2/ZDEtZGlnaWNlcnQtMTQ1MjItMzkxMy0=/amc.js\"></sc"+"ript>");
	//]]></script>
<!-- End Adobe Marketing Cloud Tag Loader Code -->
	<header class="spm spm-header">
	<div class="container">
		<a class="spm spm-logo"></a>


														<p class="phone">1.801.701.9600</p>
			<ul>
				<li class="my-account">
					<a class="spm spm-icon-account" href="/account/">
						My Account					</a>
				</li>
				<li class="live-chat">
					<a class="spm spm-icon-chat" href="javascript:void(0);" onclick="window.open('/link/chat.php','','width=450,height=400');s.linkTrackVars='events';s.linkTrackEvents=s.events='event13';s.tl(this,'o','Live chat clicked');">Live Chat</a>
				</li>
				<script type="text/javascript">
function updateQueryStringParameter(uri, key, value) { var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i'); var sep = uri.indexOf('?') !== -1 ? '&' : '?'; if (uri.match(re)) {return uri.replace(re, '$1' + key + '=' + value + '$2');}else {return uri + sep + key + '=' + value;} }
</script>
<li class="language-selector">
<a class="spm spm-icon-downarrow">English</a>
<ul class="dropdown">
<li><a href="#" onclick="location.href=updateQueryStringParameter(document.URL, 'lang', 'en'); return false;">English</a>
<li><a href="#" onclick="location.href=updateQueryStringParameter(document.URL, 'lang', 'es'); return false;">Español</a>
</ul>
</li>			</ul>
					

	</div>
	</header>
	
	<div id="mainContainer">

			<div id="mainMenu">
		<div class="container">
			<ul class="nav-primary">
				<li id="supportMenuID">
					<a href="/support">
						Support					</a>
				</li>
			</ul>
		</div>
	</div>
<script type="text/javascript">
var g_welcome_name = " ";
$(document).ready(function() {
	var $userLI = $('<li id="welcomeUserMenuID"><a></a></li>');
	$userLI.find("a").text(g_welcome_name);
	$("#mainMenu").find(".nav-primary").append($userLI);
});
</script>

		<div id="mainContent" class="main-content">

			
						<div class="container">
				
<style type="text/css">
div#yellowMessageHandlerErrorMessageDiv { min-height:10px; border: 1px solid #9F6000; background: none repeat scroll 0 0 #FEEFB3; padding:10px; font-size:10pt; margin:10px; border-radius: 6px;}
div#yellowMessageHandlerErrorMessageDiv a:link {text-decoration:none !important;}
</style>
<div id="yellowMessageHandlerErrorMessageDiv">
<div style="float:right;"><a href="javascript:;" title="clear message" onclick="(elem=document.getElementById('yellowMessageHandlerErrorMessageDiv')).parentNode.removeChild(elem);" style="color:#000">X</a>
</div>
You must be logged in to access this page (If you were previously logged in, your session has expired for your security). Please login below.
</div>			</div>
			
			<div class="container">
												


<div align="center">
	<h1>DigiCert Account Login</h1>

	<div id="login-div">
		<form method="POST" action="/account/login.php" accept-charset="UTF-8"><input type="hidden" name="csrf_token" value="a83296e36936ba2a69841ab874fd27f2df28a03e" />		<table class="login" cellspacing="5">
			<tr>
				<td width="30%"><label for="username">Username: </label></td>
				<td width="70%"><input id="username" type="text" name="username" required="required" value="" /></td>
			</tr>
			<tr>
				<td><label for="password">Password: </label></td>
				<td><input id="password" type="password" autocomplete="off" required="required" name="password" /></td>
			</tr>
			<tr>
				<td colspan="2" class="right">
					                    <input id="timezone-abbr" name="timezone-abbr" type="hidden" value="">
					<button name="button-clicked" class="ks-button blue small" type="submit" value="login">Login</button>
				</td>
			</tr>
			<tr>
				<td colspan="2">
					<div id="request-link">
						<a href="javascript:showRequestForm();">Request a Login</a>
					</div>

					<p class="right" style="margin-bottom: 2em;">
						<a href="javascript:forgotMyUsername();" >Forgot your username?</a>
						<br />
						<a href="javascript:forgotMyPassword();">Forgot your password?</a>
					</p>
				</td>
			</tr>
		</table>
		</form>	</div>
	
	<script>
    var today = new Date();
    var time = today.getTimezoneOffset() / 60;
    $('input[name=timezone-offset]').val(time);
</script>
</div>
<br />
<br />
<br />
<br />

	<hr class="clear" />
</div><!-- .container -->


</div><!-- #mainContent -->

<script type="text/javascript">
$(document).ready(function() {
		if(typeof(pageOnLoad) == "function")
		{
			pageOnLoad();
		}
});
</script>

<footer>
	<div class="container">
		<div class="copyright">
			<a class="spm spm-logo-footer"  style="display:inline"><img src="/images/digi-footer-logo.png" border="0" style="display:inline" align="left"></a>
							<div class="footer-nav" style="text-align:left; font-weight:bold">
				<ul>
					<li><a href="/security-terms.htm">Terms of Use</a></li><li><a href="/digital-certificate-guarantee.htm">Money Back Guarantee</a></li><li><a href="/digicert-privacy-policy.htm">Privacy Policy</a></li><li><a href="/ssl-cps-repository.htm">Legal Repository</a></li><li><a href="https://www.digicert.com/newsroom.htm">Newsroom</a></li>				</ul>
				</div>
					</div>
	</div>
	<hr width="980" style="border-bottom: 1px solid #a4a3a3; margin-top:-5px;">
	<div class="container copyright">&copy; 2003-2014 DigiCert&reg; Inc. All Rights Reserved. DigiCert, Direct Cert Portal, and DirectAssured are trademarks or registered trademarks of DigiCert, Inc. in the USA and elsewhere.  |
		 All other trademarks displayed on this website are the exclusive property of their respective owners.	</div>
	
<div style="height: 0;">
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 1071719024;
var google_conversion_language = "en";
var google_conversion_format = "3";
var google_conversion_color = "ffffff";
var google_conversion_label = "z5dgCKrC5wIQ8MSE_wM";
var google_conversion_value = 0;
/* ]]> */
</script>
<script type="text/javascript" src="https://www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="https://www.googleadservices.com/pagead/conversion/1071719024/?label=z5dgCKrC5wIQ8MSE_wM&amp;guid=ON&amp;script=0"/>
</div>
</noscript>
</div>

</footer>

	<script language="JavaScript" type="text/javascript"><!--
				$('a[href^="https://www.digicert.com/order/order-1.php"]').click(function() {
			s.linkTrackVars='events';
			s.linkTrackEvents=s.events='scCheckout';
			s.tl(this,'o','Order Step 1');
		});

		if(typeof(s) != "undefined")
		{
			s.pageName="account:login"
			var a = s.pageName.split(":");
			s.channel = a[0];
			s.prop1 = a[1];
			s.server="www.digicert.com"
			s.prop4=""
			s.prop5=""
						s.prop19=""
						/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
			var s_code=s.t();if(s_code)document.write(s_code)
		}
		//--></script>
</div><!-- #mainContainer -->
</body>
</html>
