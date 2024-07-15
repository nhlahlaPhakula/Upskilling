
<html>
    <meta name="viewport" content="width=device-width, user-scalable=no" />
    <head>
        <title>Test Template</title>
        <link rel="stylesheet" href="../Styles/style.css">
    </head>
    <header class="header">
        <div class="header-comp" onclick="humburgerMenu(this)">
            <div class="humburgerStyleMenu" >
                <div class="firstDivBar"></div>
                <div class="secDivBar"></div>
                <div class="thirdDivBar"></div>
            </div>
            <div class="spacer"></div>
            <div class="humburgerStyleMenu-cont" >
                <div class="HomeLink"><a href="../Templates/HomepageTemplate.html">Home</a></div>
                <div class="moviesLink"><a href="../Templates/Latest-Movies.html">Movies</a></div>
                <div class="aboutUsLink"><a href="../Templates/AboutUsTemplate.html">About Us</a></div>
                <div class="profileLink"><a href="../Templates/ProfileTemplate.html">Profile</a></div>
                <div class="faqLink"><a href="../Templates/FAQ.html">FAQ</a></div>
            </div>
        </div>
        <div class="header-text">
            <h1 id="header">Movies</h1>
        </div>
        <div class="loginLogout">
            <div class="userIcon"><img src="../Media/personIcon.png" alt="userIcon"></div>
            <div class="userIconDetails">
                <div class="userIconDetailsDiv1"><a href="">Sign In</a></div>
                <div class="userIconDetailsDiv2"><a href="">Sign Up</a></div>
            </div>
        </div>
        
    </header>
    <div class="spacer"></div>
    <body>
        <div class="databaseContent">
            <h2 >Database Content: </h2>

            <?php 

                $servername = "localhost";
                $username = "username";
                $password = "password";

                //connect to the database
                $connection = new mysqli($servername, $username, $password);

                //check if connection is successful
                if($connection->connect_error) {
                    die("Connection failed:" . $connection->connect_error)
                }else {
                    echo "Connection successful";
                }


                ?> 
            
        </div>
        

        
    </body>
</html>


<?php



