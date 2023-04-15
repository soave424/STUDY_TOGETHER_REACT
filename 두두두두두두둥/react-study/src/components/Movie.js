import { Box, Image, Link } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';

function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch(
          `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
        );
        const data = await res.json();
        const movieData = data.data.movies;
        setMovies(movieData);
      } catch (err) {
        console.log(err);
      }
    }
    fetchMovies();
  }, []);
  const settings = {
    centerMode: true,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 2000,
    slideToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <>
      <Box>
        <Slider {...settings}>
          {movies.map(movie => (
            <Box>
              <Link href={`${movie.url}`}>
                <Image src={`${movie.medium_cover_image}`} />
              </Link>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}

export default Movie;
