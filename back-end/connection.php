<?php
    $connection = mysqli_connect('localhost', 'root', '', 'gelati');
    if (!$connection)
	{
		die("That damn databse..." . mysqli_connect_error());
	}
?>