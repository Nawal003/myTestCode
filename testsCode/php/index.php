<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php free Code Camp</title>
</head>

<body>
    <!-- hello world -->
    <!-- <?php
            echo "<p> C est mon site</p>";
            echo "<h1>Nawal</h1>";
            echo "<hr>";
            ?>  -->

    <!-- les variables -->

    <!-- <?php
            $characterName = "Tom";
            $characterAge = 80;
            echo "There once  was a man named $characterName <br>";
            echo "He was $characterAge years old <br>";
            // $characterName = "Mike";
            echo "He really liked the name $characterName <br>";
            echo "But didn't like bein $characterAge <br>";
            ?> -->




    <!-- data types -->
    <!-- <?php
            $phrase = "to be or not to be";
            $age = 30;
            $gpa = 3.7;
            $isMale = true;
            // null = no value

            echo $phrase;
            ?> -->


    <!-- working with strings -->

    <!-- <?php
            $phrase = "Giraffe Academy";
            // echo strtolower($phrase);
            // echo strtoupper($phrase);
            // echo strlen($phrase);//nous donne le nombre de caractères
            // $phrase[0] = "B";//remplace une lettredans phrase;
            // echo $phrase[0];
            // echo str_replace("affe", "Panda", $phrase);//il faut 3 arguments
            echo substr($phrase, 8, 3) //var, index, length;

            ?> -->


    <!-- working with numbers -->
    <!-- <?php
            // $num = 10;
            // $num *= 25;
            // echo $num;

            // echo abs(-100);
            // echo pow(2, 4);
            // echo sqrt(144);
            // echo max(2, 10); // ou min 
            // echo round(3.2);
            // echo ceil(3.3);
            // echo floor(3.9);
            ?> -->

    <!-- Getting user input -->


    <!-- <form action="index.php" method="get">
        Name: <input type="text" name="name">
        <input type="submit">
        <br>
        Age: <input type="number" name="age">
        <input type="submit">
    </form>
    <br>

   Your name is  <?php echo $_GET["name"] ?>
   <br>
   Your age is  <?php echo $_GET["age"] ?> -->


    <!-- Building a basic Caluclator -->


    <!-- <form action="index.php" method="get">
    <input type="number" name="num1">
    <br>
    <input type="number" name="num2">
    
        <input type="submit">
    </form>

    Answer: <?php  echo $_GET["num1"] + $_GET["num2"] ?> -->
    <?php 
    
    echo "Roses are red <br>";
    echo "Violet are blue <br>";
    echo "I love you <br>"
    
    
    ?>



    <!-- Building a Mad Libs Game -->






</body>

</html>