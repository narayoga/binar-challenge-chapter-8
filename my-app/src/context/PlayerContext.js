import { createContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export const PlayerContext = createContext()

const PlayerContextProvider = (props) => {

  const [players, setPlayers] = useState([
    {id:uuidv4(), username:'PussySlayer613', email:"pussy.slay3r@gmail.com", experience:"600000", level:"600"},
    {id:uuidv4(), username:'HardcoreLevellingWarrior', email:"hclw@gmail.com", experience:"600000", level:"666"},
    {id:uuidv4(), username:'dummyuser', email:"user123@mail.com", experience:"100", level:"1"}
  ])

  const addPlayer =(username, email, experience, level) => {
    setPlayers([...players, {id:uuidv4(), username, email, experience, level}])
  }

  const deletePlayer = (id) => {
    setPlayers(players.filter(player => player.id !== id))
  }

  const updatePlayer = (id, updatedPlayer) => {
    setPlayers(players.map((player) => player.id === id ? updatedPlayer : player))
  }

  return (
    <PlayerContext.Provider value={{players, addPlayer, deletePlayer, updatePlayer}}>
        {props.children}
    </PlayerContext.Provider>
  )

}

export default PlayerContextProvider