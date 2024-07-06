<?php
/**
 * Get movie by name from https://www.themoviedb.org/
 */

include("get_api_key.php");
include("themoviedb_requests.php");

$url_1 = "https://api.themoviedb.org/3/search/movie?language=en-US&query=$movieName&api_key=$themoviedb_apikey";

$responseFromToTheMovieDB = json_decode(makeRequestToTheMovieDB($url_1));
$responseArray = $responseFromToTheMovieDB->results;

header('Content-Type: application/json; charset=utf-8');
echo json_encode($responseArray);

exit();

?>