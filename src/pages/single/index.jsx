import { useParams } from "react-router-dom"

const Index = () => {
    const {id} = useParams()
  return (
    <div>
      <h1>SingleCar: {id}</h1>
    </div>
  )
}

export default Index
