import axios from 'axios'

const baseURL = 'https://my12.digitalexperience.ibm.com/api/859f2008-a40a-4b92-afd0-24bb44d10124'

const api = axios.create({
  baseURL: baseURL
})

export { 
  api, 
  baseURL 
}