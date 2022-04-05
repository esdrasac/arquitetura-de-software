/**
 * Dependency Inversion Principle
 * 
 * Dependa de abstrações e não de implementações.
 * Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender da abstração.
 * Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.
 * 
 * ex:
 *  Eduard Mãos de tesoura - a tesoura é acoplada à ele
 * 
 * 
 *      
 */
//Ruim
// const mongoDb = require('./database')

// class Movie {
//     getMovie(id) {
//         const movie = mongoDb.get(id)
//     }
// }

// const movie = new Movie()


// //Quase ideal

// class Movies {
//     constructor(mongoDb) {
//         this.mongoDb = mongoDb
//     }

//     getMovie(id) {
//         const movie = this.mongoDb.get(id)
//     }
// }

// class Series {
//     constructor(mongoDb) {
//         this.mongoDb = mongoDb
//     }

//     getSeries(id) {
//         const movie = this.mongoDb.get(id)
//     }
// } 

// class MovieController {
//     constructor(movie) {
//         this.movie = movie
//     }

//     getMovie(req, res) {
//         //validations

//         const movie = this.movie.get(req.body.id)

//         return res.joson(movie)
//     }
// }

// const mongoDataBase = require('./mongodb')
// //const Movies = require('./Movies')
// // const MovieController = 

// class Composer {
//     build() {
//         const movies = new Movies(mongoDataBase)
//         const series = new Series(mongoDataBase)

//         const movieController = new MovieController(movie)

//         const routes = new Router(movieController)
//     }
// }

// //index.js
// const composer = new Composer()
// composer.build()

//ideal
class Movie {
    constructor(movieRepository) {
        this.movieRepository = movieRepository
    }

    getMovie(id) {
        //...
        const movie = this.movieRepository.get(id)

        return movie
    }
}

//adapter file
//mongo imp
// const mongoose = require('mongoose')
// class MovieRepository {
//     get(id) {
//         mongoose.find(id)
//     }
// }
//mysql imp
const mysql = require('mysql')
class MovieRepository {
    get(id) {
        const query = `select ... ${id}`
        mysql.query(query)
    }
}
class MongHelper {
    //mongo instance
    
}


class MySqlHelper {
    //mongo instance
}


const movieRepo = MovieRepository
const Movie = Movie

class Composer {
    build() {
        const movieRepository = new MovieRepository()
        const MovieService = new Movie(movieRepository)
    }
}