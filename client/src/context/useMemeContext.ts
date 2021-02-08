import {useContext} from 'react'
import {memeContext} from '../context/memeContextProvider'

export const useMemeContext = () => {
  return useContext(memeContext)
}