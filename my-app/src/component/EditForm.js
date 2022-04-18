import {Button, Form} from "react-bootstrap"
import { PlayerContext } from "../context/PlayerContext";
import { useContext, useState } from "react";

const EditForm = ({thePlayer}) => {

  const id = thePlayer.id;
  const [username,setUsername] = useState(thePlayer.username)
  const [email,setEmail] = useState(thePlayer.email)
  const [experience,setExperience] = useState(thePlayer.experience)
  const [level,setLevel] = useState(thePlayer.level)

  const {updatePlayer} =useContext(PlayerContext)

  const updatedPlayer = {id, username, email, experience, level}
  
  const handleSubmit = (e) => {
    e.preventDefault()  ;
    updatePlayer(id, updatedPlayer)
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
            type="text"
            placeholder="username"
            name="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
            type="text"
            placeholder="Experience"
            name="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
            type="text"
            placeholder="Level"
            name="level"
            onChange={(e) => setLevel(e.target.value)}
            value={level}

        />
      </Form.Group>

      <Button variant="success" type="submit" block>
        Edit Player
      </Button>

    </Form>
  )
}

export default EditForm;