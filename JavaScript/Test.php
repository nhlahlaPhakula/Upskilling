
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

                $servername = "Localhost";
                $username = "root";
                $password = "";
                $dbname = "movies";

                //connect to the database
                $connection = new mysqli($servername, $username, $password, $dbname);

                //check if connection is successful
                if($connection->connect_error) {
                    die("Connection failed:" . $connection->connect_error);
                }else {
                   // echo "Connection successful";
                }


                //call everything from the database
                $sql = "SELECT * FROM `you_might_also_like`";

                $results = $connection->query($sql);


                if($results->num_rows > 0) {
                    //Output data of each row
                    while($row = $results->fetch_assoc()) {
                        echo "<br>";
                        //echo "id: " . $row["ID"].  '<img width="100", height="100", src="data:image/png;base64, ' . base64_encode($row['Poster']) . '" >' . "title: " . $row["Title"]. "year: " . $row["Year"]. "runtime: " . $row["Runtime"]. "label: " . $row["Label"]. "<br>";
                        
                        //echo'<img src="data:image/png;base64, ' . base64_encode($row['Poster']) . '" >';
                        //echo '<div class="database-content">
                           // <img src="data:image/png;base64, ' . base64_encode($row['Poster']).'" >
                       // </div>';
                        

                    }


                }else {
                    echo "<br>";
                    echo "There is nothing to show here";
                }




                ?> 

                
                
            
        </div>


    
        <div class="resultsContainer">
            <!--<div>Hey</div>
            <div>Hey</div>
            <div>Hey</div>-->
        

        <?php 
            $sql = "SELECT * FROM `you_might_also_like`";

            $results = $connection->query($sql);
            while($row = $results->fetch_assoc())
            {
        ?>

        
        <div class="database-content">
            <div class="databaseImage"><?php echo '<img width="100", height="150", src="data:image/png;base64, ' . base64_encode($row['Poster']) . '" >'; ?></div>
            <div class="databaseContent-descrip">
                <div><?php echo $row['Title']; ?></div>
                <div><?php echo $row['Year']; ?></div>
                <div><?php echo $row['Runtime']; ?></div>
                <div><?php echo $row['Label']; ?></div>
            </div>
        </div>

        
        

        <?php
            }
        ?>

        </div>

        <!--<div class="database-content-container">
                            <div class="database-content-heading">
                                <h2>You May Also Like</h2>
                            </div>
                            <div class="database-content">
                                <div class="database-content-movie">
                                    <div class="database-image">
                                        <?php

                                            $sql = "SELECT * FROM `you_might_also_like`";

                                            $results = $connection->query($sql);

                                        while($row = $results->fetch_assoc()){
                                        echo '<img width="100", height="100", src="data:image/png;base64, ' . base64_encode($row['Poster']) . '" >';
                                        }
                                        ?>
                                    </div>
                                    <div class="database-title">
                                        <h3>
                                            
                                        </h3>
                                    </div>
                                </div>
                                
                            </div>
                        </div>-->
        


        
        
    </body>
    
</html>


<?php



