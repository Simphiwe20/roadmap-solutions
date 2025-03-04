#!/usr/bin/env node
import { program } from "commander"
import fetch from "node-fetch"

const url = "https://api.themoviedb.org/3/movie/"
const apiKey = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWVjMTZmZjdjYTg2NTRjOTRiMDdiOTE1M2E1MTFkNSIsIm5iZiI6MTc0MTExMjIxMS40MDEsInN1YiI6IjY3Yzc0MzkzMjZiNGUxOTZiMWYwNjg0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A5ncA27ozebdizyFYR3vFjsR3CwLqXx9VBTK41FELxk"
const types = ["now_playing", "upcoming", "top_rated", "popular"]


async function getPopularMs(_type) {
    try {
        const foundType = types.find(type => type == _type)

        if (_type == "undefined") {
            throw new Error(`Type is not provided, please provide _type`)
        } else if (!foundType) {
            throw new Error(`Please provide a valid tyle not ${_type}`)
        }

        const jsonData = await fetch(`${url}${_type}`, { method: "GET", headers: { Authorization: apiKey } });
        const movies = await jsonData.json()
        // Find type to check it it exists on my types

        console.log(`THESE ARE ALL "${_type}" movies: `, movies)
    } catch (err) {
        // console.log("RAN INTO AN ERR....", err)
        console.error(err)
    }
}

program
    .version("1.0.0")
    .description("My tmdb cli app")
    .option("-n, --type <type> ", "Add query")
    .action((option) => {
        console.log(`Hey ${option.type}!`)
        getPopularMs(`${option.type}`)
    })

program.parse(process.argv)