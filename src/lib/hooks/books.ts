// hooks/useBookApi.ts
import {useState} from 'react'
import api from "../api.ts"

const useBooksApi = () => {
  const [bookTitle, setBookTitle] = useState('none')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const fetchBookTitle = async (titleQuery: string = 'clean code') => {
    try {
      setLoading(true)
      setError(null)

      const response = await api.books.$get({
        query: {title: titleQuery}
      })

      if (response.ok) {
        const data = await response.json()
        setBookTitle(data.title)
        return data
      } else {
        throw new Error(`Error: ${response.status}`)
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'))
      return null
    } finally {
      setLoading(false)
    }
  }

  return {bookTitle, loading, error, fetchBookTitle}
}

export default useBooksApi