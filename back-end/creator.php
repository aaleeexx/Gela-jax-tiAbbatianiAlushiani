<?php
    include('connection.php');

    $name       = $_POST['ic_name'];
    $cost       = $_POST['ic_cost'];
    $productor  = $_POST['ic_productor'];

    if(mysqli_query($connection, "INSERT INTO TABLE gusti(nome, costo, produttore) VALUES ($name, $cost, $productor)"))
        echo("200");
    else
        echo("404");

    mysqli_close($connection);
?>