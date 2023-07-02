import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function StudentView() {
    const [info,setInfo] = useState({})
    const params = useParams()
    const { user } = useAuth

    useEffect(() => {
        const id = params.id.toString()
        const getInfo = async () => {
            const response = await fetch(`http://localhost:5000/api/app/lecture/student-info/${id}`, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            })

            const json = await response.json()

            if(response.ok) {
                setInfo(json)
            } else {
                console.log(json.error)
            }
        }

        getInfo()
    },[])
    return (
        <div>
            <h1>Welcome to student view</h1>
            <main>
                <h1>{info.email}</h1>
            </main>
        </div>
    )
}