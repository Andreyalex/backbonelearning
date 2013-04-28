<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="app/layouts/default/layout.css">
        
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <script data-main="app/bootstrap" src="tools/require.js?<?php echo rand(1,100000000); ?>"></script>
    </head>
    <body>
        <div id="header">
            <div class="inner">
                <div class="content" data-position="content-header">
                    <div class="logo" data-position="logo-header"></div>
                    <div class="toolbar" data-position="toolbar-header"></div>
                    <div class="menu" data-position="menu-header"></div>
                    <div class="search" data-position="search-header"></div>
                    <div class="breadcrumbs" data-position="breadcrumbs-header"></div>
                </div>
            </div>
        </div>

        <div id="page">
            <div class="inner">
                <div class="content" data-position="content-page"></div>
            </div>
        </div>

        <div id="footer">
            <div class="inner">
                <div class="content" data-position="content-footer">
                    <div class="menu" data-position="copyright-footer"></div>
                    <div class="copyright" data-position="copyright-footer"></div>
                </div>
            </div>
        </div>        
    </body>
</html>