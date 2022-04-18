import {Button, Form} from "react-bootstrap"
import { PlayerContext } from "../context/PlayerContext";
import { useContext, useState } from "react";

const AddForm = () => {

  const {addPlayer} =useContext(PlayerContext)
  
  const [newPlayer, setNewPlayer] = useState({
    username:"", email:"", level:"", experience:""
  });

  const {username, email, experience, level} = newPlayer

  const onInputChange = (e) => {
    setNewPlayer({...newPlayer, [e.target.username]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(username, email, experience, level)
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => onInputChange(e)}
            required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
            required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
            type="text"
            placeholder="Experience"
            name="experience"
            value={experience}
            onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
            type="text"
            placeholder="Level"
            name="level"
            value={level}
            onChange={(e) => onInputChange(e)}
        />
      </Form.Group>

      <Button variant="success" type="submit" block>
        Add New Player
      </Button>

    </Form>
  )
}

export default AddForm;