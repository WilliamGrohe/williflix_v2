import { useParams } from 'react-router-dom'

export function Details() {
  const { id } = useParams()

  return (
    <h1>Detalhes de {id}</h1>
  )
}