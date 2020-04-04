var movies = [
  { title: "Endgame", rating: "5 stars", hasWatched: true },
  {
    title: "A Marriage Story",
    rating: "3 stars",
    hasWatched: true
  },
  { title: "Tiger King", rating: "4 stars", hasWatched: false }
];

movies.forEach(function(movies) {
  var result = "You have ";
  if (movies.hasWatched) {
    result += "watched ";
  } else {
    result = +"not seen ";
  }
  result += '"' + movies.title + '" - ';
  result += '"' + movies.rating + '" - ';
  console.log(result);
});
