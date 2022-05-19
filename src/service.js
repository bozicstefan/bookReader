import axios from 'axios'

export function bookSearch(searchQuery, pageNumber) {
    return axios.get(`https://openlibrary.org/search.json?q=${searchQuery}&page=${pageNumber}`)
}