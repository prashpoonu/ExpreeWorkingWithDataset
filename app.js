const express = require('express');
const morgan = require('morgan');
const movieData = require('./movie-data.json');
const app = express();
app.use(morgan('dev'));

app.get('/movie',(req,res)=>{
    console.log(req.query);
    const movieName = req.query.film_title;
    const movieType = req.query.genre;
    const movieContry = req.query.country;
    const movieAvgVotes = req.query.avg_vote;
if(movieType!=null)
{
    res.json(movieData.filter(md=>md.genre===movieType))
}
else if(movieContry!=null)
{
    res.json(movieData.filter(md=>md.movieContry===movieContry));
}
else if(movieAvgVotes!=null)
{
    res.json(movieData.filter(md=>md.avg_vote>=Number(movieAvgVotes)));
}
else
    res.json(movieData);
});

app.listen(8000, () => {
    console.log('Express server is listening on port 8000!');
  });