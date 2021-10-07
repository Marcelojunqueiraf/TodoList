// Nome
// id
// bio

import { useState } from "react"



function Profile(){

    const [user,setUser] = useState({
        name: "Marcelo",
        bio: "Professor de react",
        id: 1
    })

    return(
        <div>
            <h1>Profile</h1>
            <span>{user.name}</span>
            <p>{user.bio}</p>
        </div>
    )

}

export default Profile