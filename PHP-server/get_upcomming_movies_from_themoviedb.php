<?php
/**
 * Get upcomming movies from https://www.themoviedb.org/
 */

include("get_api_key.php");
include("themoviedb_requests.php");

$url_1 = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=$themoviedb_apikey";
$url_2 = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2&api_key=$themoviedb_apikey";
$url_3 = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=3&api_key=$themoviedb_apikey";

$responseFromToTheMovieDB_1 = json_decode(makeRequestToTheMovieDB($url_1));
$responseFromToTheMovieDB_2 = json_decode(makeRequestToTheMovieDB($url_2));
$responseFromToTheMovieDB_3 = json_decode(makeRequestToTheMovieDB($url_3));

$mergedResponseArrays = array_merge($responseFromToTheMovieDB_1->results, $responseFromToTheMovieDB_2->results, $responseFromToTheMovieDB_3->results);

header('Content-Type: application/json; charset=utf-8');
echo json_encode($mergedResponseArrays);

exit();

?>