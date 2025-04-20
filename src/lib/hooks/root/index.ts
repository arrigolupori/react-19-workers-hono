import {useState} from 'react'
import api from "../../api.ts"

const useRootApi = () => {
  const [name, setName] = useState('unknown')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const fetchName = async (nameQuery: string = 'arrigo') => {
    try {
      setLoading(true)
      setError(null)

      const response = await api.$get({
        query: {name: nameQuery}
      })

      if (response.ok) {
        const data = await response.json()
        setName(data.name)
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

  return {name, loading, error, fetchName}
}

export default useRootApi