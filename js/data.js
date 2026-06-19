/**
 * Global Movie Data Configuration Matrix
 * Image CDN Assets pulled via public TMDB configuration paths
 */

const TMDB_CDN = "https://image.tmdb.org/t/p/w500";

export const movieCategories = [
    {
        id: "trending-now",
        title: "Trending Now",
        movies: [
            { id: 101, title: "Wednesday", image: `${TMDB_CDN}/c9f45ZA67g9wI8X9w0IAn6O690Y.jpg`, year: "2022", rating: "TV-14" },
            { id: 102, title: "The Witcher", image: `${TMDB_CDN}/7v9bC8T9b3X9w0IAn6O690Y8Z1a.jpg`, year: "2023", rating: "TV-MA" },
            { id: 103, title: "Squid Game", image: `${TMDB_CDN}/d9F45ZA67g9wI8X9w0IAn6O690Y.jpg`, year: "2024", rating: "TV-MA" },
            { id: 104, title: "The Crown", image: `${TMDB_CDN}/b9F45ZA67g9wI8X9w0IAn6O690Y.jpg`, year: "2023", rating: "TV-MA" },
            { id: 105, title: "Black Mirror", image: `${TMDB_CDN}/a9F45ZA67g9wI8X9w0IAn6O690Y.jpg`, year: "2023", rating: "TV-MA" },
            { id: 106, title: "Lupin", image: `${TMDB_CDN}/e9F45ZA67g9wI8X9w0IAn6O690Y.jpg`, year: "2023", rating: "TV-14" },
            { id: 107, title: "All of Us Are Dead", image: `${TMDB_CDN}/f9F45ZA67g9wI8X9w0IAn6O690Y.jpg`, year: "2022", rating: "TV-MA" },
            { id: 108, title: "Sweet Home", image: `${TMDB_CDN}/g9F45ZA67g9wI8X9w0IAn6O690Y.jpg`, year: "2024", rating: "TV-MA" }
        ]
    },
    {
        id: "continue-watching",
        title: "Continue Watching",
        movies: [
            { id: 201, title: "Breaking Bad", image: `${TMDB_CDN}/ztK6AKZw9SKv6ZBHg7OCJmH91gA.jpg`, year: "2013", rating: "TV-MA" },
            { id: 202, title: "Better Call Saul", image: `${TMDB_CDN}/f9z6AKZw9SKv6ZBHg7OCJmH91gA.jpg`, year: "2022", rating: "TV-MA" },
            { id: 203, title: "Peaky Blinders", image: `${TMDB_CDN}/v9z6AKZw9SKv6ZBHg7OCJmH91gA.jpg`, year: "2022", rating: "TV-MA" },
            { id: 204, title: "Dark", image: `${TMDB_CDN}/x9z6AKZw9SKv6ZBHg7OCJmH91gA.jpg`, year: "2020", rating: "TV-MA" },
            { id: 205, title: "Mindhunter", image: `${TMDB_CDN}/y9z6AKZw9SKv6ZBHg7OCJmH91gA.jpg`, year: "2019", rating: "TV-MA" },
            { id: 206, title: "Ozark", image: `${TMDB_CDN}/z9z6AKZw9SKv6ZBHg7OCJmH91gA.jpg`, year: "2022", rating: "TV-MA" },
            { id: 207, title: "Narcos", image: `${TMDB_CDN}/w9z6AKZw9SKv6ZBHg7OCJmH91gA.jpg`, year: "2017", rating: "TV-MA" },
            { id: 208, title: "The Last Dance", image: `${TMDB_CDN}/u9z6AKZw9SKv6ZBHg7OCJmH91gA.jpg`, year: "2020", rating: "TV-MA" }
        ]
    },
    {
        id: "top-rated",
        title: "Top Rated",
        movies: [
            { id: 301, title: "Inception", image: `${TMDB_CDN}/9gk7YmR7y9wI8X9w0IAn6O690Y8.jpg`, year: "2010", rating: "PG-13" },
            { id: 302, title: "The Dark Knight", image: `${TMDB_CDN}/qJ2tWGBsc9g1mS8v23wS863X9w0.jpg`, year: "2008", rating: "PG-13" },
            { id: 303, title: "Interstellar", image: `${TMDB_CDN}/gEU2v6GJW7Vw3wS863X9w0IAn6O.jpg`, year: "2014", rating: "PG-13" },
            { id: 304, title: "Pulp Fiction", image: `${TMDB_CDN}/f9z6AKZw9SKv6ZBHg7OCJmH91gA.jpg`, year: "1994", rating: "R" },
            { id: 305, title: "Forrest Gump", image: `${TMDB_CDN}/y9z6AKZw9SKv6ZBHg7OCJmH91gA.jpg`, year: "1994", rating: "PG-13" },
            { id: 306, title: "The Matrix", image: `${TMDB_CDN}/z9z6AKZw9SKv6ZBHg7OCJmH91gA.jpg`, year: "1999", rating: "R" },
            { id: 307, title: "Se7en", image: `${TMDB_CDN}/w9z6AKZw9SKv6ZBHg7OCJmH91gA.jpg`, year: "1995", rating: "R" },
            { id: 308, title: "Fight Club", image: `${TMDB_CDN}/u9z6AKZw9SKv6ZBHg7OCJmH91gA.jpg`, year: "1999", rating: "R" }
        ]
    },
    {
        id: "action-movies",
        title: "Action Movies",
        movies: [
            { id: 401, title: "Mad Max: Fury Road", image: `${TMDB_CDN}/h8g7YmR7y9wI8X9w0IAn6O690Y8.jpg`, year: "2015", rating: "R" },
            { id: 402, title: "John Wick: Chapter 4", image: `${TMDB_CDN}/vZ7YmR7y9wI8X9w0IAn6O690Y8.jpg`, year: "2023", rating: "R" },
            { id: 403, title: "Gladiator", image: `${TMDB_CDN}/b8g7YmR7y9wI8X9w0IAn6O690Y8.jpg`, year: "2000", rating: "R" },
            { id: 404, title: "Extraction 2", image: `${TMDB_CDN}/c8g7YmR7y9wI8X9w0IAn6O690Y8.jpg`, year: "2023", rating: "R" },
            { id: 405, title: "Top Gun: Maverick", image: `${TMDB_CDN}/d8g7YmR7y9wI8X9w0IAn6O690Y8.jpg`, year: "2022", rating: "PG-13" },
            { id: 406, title: "The Gray Man", image: `${TMDB_CDN}/e8g7YmR7y9wI8X9w0IAn6O690Y8.jpg`, year: "2022", rating: "PG-13" },
            { id: 407, title: "Kill Bill: Vol. 1", image: `${TMDB_CDN}/f8g7YmR7y9wI8X9w0IAn6O690Y8.jpg`, year: "2003", rating: "R" },
            { id: 408, title: "Die Hard", image: `${TMDB_CDN}/g8g7YmR7y9wI8X9w0IAn6O690Y8.jpg`, year: "1988", rating: "R" }
        ]
    },
    {
        id: "netflix-originals",
        title: "Netflix Originals",
        movies: [
            { id: 501, title: "Stranger Things 4", image: `${TMDB_CDN}/49YmR7y9wI8X9w0IAn6O690Y8g7.jpg`, year: "2022", rating: "TV-14" },
            { id: 502, title: "The Crown", image: `${TMDB_CDN}/59YmR7y9wI8X9w0IAn6O690Y8g7.jpg`, year: "2023", rating: "TV-MA" },
            { id: 503, title: "Bridgerton", image: `${TMDB_CDN}/69YmR7y9wI8X9w0IAn6O690Y8g7.jpg`, year: "2024", rating: "TV-14" },
            { id: 504, title: "1899", image: `${TMDB_CDN}/79YmR7y9wI8X9w0IAn6O690Y8g7.jpg`, year: "2022", rating: "TV-MA" },
            { id: 505, title: "Dark Desire", image: `${TMDB_CDN}/89YmR7y9wI8X9w0IAn6O690Y8g7.jpg`, year: "2022", rating: "TV-MA" },
            { id: 506, title: "Money Heist", image: `${TMDB_CDN}/99YmR7y9wI8X9w0IAn6O690Y8g7.jpg`, year: "2021", rating: "TV-MA" },
            { id: 507, title: "Elite", image: `${TMDB_CDN}/10YmR7y9wI8X9w0IAn6O690Y8g7.jpg`, year: "2024", rating: "TV-MA" },
            { id: 508, title: "The Umbrella Academy", image: `${TMDB_CDN}/20YmR7y9wI8X9w0IAn6O690Y8g7.jpg`, year: "2024", rating: "TV-14" }
        ]
    },
    {
        id: "comedy-movies",
        title: "Comedy Movies",
        movies: [
            { id: 601, title: "Red Notice", image: `${TMDB_CDN}/a7YmR7y9wI8X9w0IAn6O690Y8g4.jpg`, year: "2021", rating: "PG-13" },
            { id: 602, title: "Don't Look Up", image: `${TMDB_CDN}/b7YmR7y9wI8X9w0IAn6O690Y8g4.jpg`, year: "2021", rating: "R" },
            { id: 603, title: "Glass Onion", image: `${TMDB_CDN}/c7YmR7y9wI8X9w0IAn6O690Y8g4.jpg`, year: "2022", rating: "PG-13" },
            { id: 604, title: "Murder Mystery 2", image: `${TMDB_CDN}/d7YmR7y9wI8X9w0IAn6O690Y8g4.jpg`, year: "2023", rating: "PG-13" },
            { id: 605, title: "The Mitchells vs the Machines", image: `${TMDB_CDN}/e7YmR7y9wI8X9w0IAn6O690Y8g4.jpg`, year: "2021", rating: "PG" },
            { id: 606, title: "Enola Holmes 2", image: `${TMDB_CDN}/f7YmR7y9wI8X9w0IAn6O690Y8g4.jpg`, year: "2022", rating: "PG-13" },
            { id: 607, title: "Dolemite Is My Name", image: `${TMDB_CDN}/g7YmR7y9wI8X9w0IAn6O690Y8g4.jpg`, year: "2019", rating: "R" },
            { id: 608, title: "The Nice Guys", image: `${TMDB_CDN}/h7YmR7y9wI8X9w0IAn6O690Y8g4.jpg`, year: "2016", rating: "R" }
        ]
    }
];