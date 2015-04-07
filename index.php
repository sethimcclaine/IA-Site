<?php
    $page = $_GET['page'];
    $pages = array('expertise', 'products', 'company', 'contact');
    if(!in_array($page, $pages)) {
        $page = 'expertise';
    }
?>

<html>
    <head>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js" type="text/javascript"></script>
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
        <!-- Latest compiled and minified JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
        <!-- Our styles -->
        <!--link rel="stylesheet" href="fonts/webfontkit/stylesheet.css" /-->

        <link rel="stylesheet/less" type="text/css" href="styles/variables.less" />
        <link rel="stylesheet/less" type="text/css" href="styles/globals.less" />
        <link rel="stylesheet/less" type="text/css" href="styles/app.less" />
        <link rel="stylesheet/less" type="text/css" href="styles/header.less" />
        <link rel="stylesheet/less" type="text/css" href="styles/expertise.less" />
        <link rel="stylesheet/less" type="text/css" href="styles/<?php echo $page; ?>.less" />
        <!-- lesscss.js -->
        <script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.3.1/less.min.js"></script>
     </head>
    <body>
<?php 
    require 'header.php';
    require($page . '.php');
    require 'footer.php';
?>
    </body>
</html>
