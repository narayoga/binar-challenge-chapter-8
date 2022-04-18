import { Modal, Button } from 'react-bootstrap';
import Player from './Player'
import { useContext, useEffect, useState } from 'react';
import {PlayerContext} from '../context/PlayerContext'
import AddForm from './AddForm';


const PlayerList = () => {

  const {players} = useContext(PlayerContext)

  const [show, setShow] = useState(false)
  const handlesShow = () => setShow(true)
  const handleClose = () => setShow(false)

  useEffect(() => {
    handleClose()
  }, [players])

  return(
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>Manage <b>players</b></h2>
          </div>
          
        </div>
		  </div>
      <table class="table">
        <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Experience</th>
              <th>Level</th>
              <th>Actions</th>
            </tr>
          </thead>
        <tbody>
          {
            players.map((player) => (
              <tr key={player.id} className="shelf-container">
                <Player player={player}/>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className="col-sm-6 mt-4">
            <Button onClick={handlesShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New player</span></Button>					
      </div>

      <Modal show={show} onHide={handleClose}> 
        <Modal.Header closeButton>
            <Modal.Title>
              Add player
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddForm/>
        </Modal.Body>
        <Modal.Footer>
          copyright binar@2022
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default PlayerList;