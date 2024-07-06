<?php

define("POPULAR_MOVIES", "popular_movies");
define("TOP_RATED_MOVIES", "top_rated_movies");
define("UPCOMING_MOVIES", "upcoming_movies");
define("MOVIE_SEARCH", "movie_search");

$mainRequestParam = isset($_REQUEST["type"]) ? $_REQUEST["type"] : null;
$movieName = isset($_REQUEST["movie"]) ? urlencode($_REQUEST["movie"]) : null;

switch($mainRequestParam) {
  case POPULAR_MOVIES:
    include("get_popular_movies_from_themoviedb.php");
    break;
  case TOP_RATED_MOVIES:
    include("get_toprated_movies_from_themoviedb.php");
    break;
  case UPCOMING_MOVIES:
    include("get_upcomming_movies_from_themoviedb.php");
    break;
  case MOVIE_SEARCH:
    include("get_moviebyname_from_themoviedb.php");
    break;
  default:
    echo "";
}

?>