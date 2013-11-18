/* http://meyerweb.com/eric/tools/css/reset/
 v2.0 | 20110126
 License: none (public domain)
 */

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after, q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* ---------------------------------------------------------- */
/* ---------------------------------------------------------- */
/* ------------------------ END RESET ----------------------- */
/* ---------------------------------------------------------- */
/* ---------------------------------------------------------- */

body {
	font-family: helvetica, 'helvetica neue', arial, sans-serif;
	color: #222;
	font-size: 14px;
	line-height: 1.5em;
	margin-top: 20px;
}

h1, h2 {
	color: #FF4F6C;
	font-family: 'Pacifico';
	margin: 10px 0;
	line-height: 1.5em;
}

h1 {
	font-size: 2em;
	margin-bottom: 20px;
}

h2 {
	font-size: 1.5em;
}

header {
	background: #9cbe84;
	color: #FDFAEF;
	height: 40px;
	line-height: 40px;
	width: 100%;
	margin: 0px;
	display: block;
	position: fixed;
	z-index: 1000;
	top: 0;
	right: 0;
	box-shadow: 0 0 1em rgba(0, 0, 0, 0.5);
}

#header_placeholder {
	height: 40px;
	width: 100%;
}

.document-header-controls {
	display: inline-block;
	float: right;
	margin-right: 5px;
}

.document-header-controls a {
	cursor: pointer;
	color: #fff;
	font-weight: lighter;
	text-decoration: none;
	padding: 5px 10px;
	border-radius: 5px;
}

.document-header-controls a:hover {
	background: #aed095;
}

.container {
	width: 960px;
	margin: 0 auto;
	text-align: center;
}

.document-body {
	margin: 0 auto;
	width: 820px;
	height: 870px;
}

#logo {
	display: block;
	background: url('/img/logo.png') no-repeat;
	background-position: 0 0;
	height: 40px;
	width: 135px;
	margin: 0;
	text-indent: -1000000%;
	margin-left: 1%;
}