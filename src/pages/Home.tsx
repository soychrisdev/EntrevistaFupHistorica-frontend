import { useApplication } from "@/providers/applicationProvider"
import { useEffect, useState } from "react"

export default async function Home() {
    // const data = store.getState()
    // const dataByRut = await getStudentByRut("123456789")
    const { getStudentByRut} = useApplication()
    const [data, setData] = useState({})


    useEffect(() => { 
        getStudentByRut("123456789").then(setData)
    }, [])
  return (
    <div>
        Home
        {JSON.stringify(data)}
    </div>
  )
}
