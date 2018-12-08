<?php
    include('connection.php');

    $name       = $_POST['ic_name'];
    $cost       = $_POST['ic_cost'];
    $productor  = $_POST['ic_productor'];
    $query = mysqli_query($connection, "INSERT INTO gusti SET nome='$name', costo='$cost', produttore='$productor'") or die("Something has gone wrong");

    mysqli_close($connection);
    echo("200");

    //header('location:index.html');
?>