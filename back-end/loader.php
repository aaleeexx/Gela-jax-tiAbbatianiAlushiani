<?php
    include('connection.php');
    $query = mysqli_query($connection, "SELECT * FROM gusti;");
    $ices = array();
    
    while($row = mysqli_fetch_assoc($query))
        array_push($ices, ['ID' => $row['id'], 'name' => $row['nome'], 'cost' => $row['costo'], 'producer' => $row['produttore']]);

    mysqli_close($connection);
    echo(json_encode($ices));
?>