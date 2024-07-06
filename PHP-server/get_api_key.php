<?php

$apikey_filename = "themoviedb.env";
$apikey_resource = fopen($apikey_filename, "r") or die("Can not find $$apikey_filename");
$themoviedb_apikey = fread($apikey_resource, filesize($apikey_filename));

fclose($apikey_resource);
?>