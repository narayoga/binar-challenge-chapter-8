import { Modal } from 'react-bootstrap';
import { PlayerContext } from '../context/PlayerContext';
import { useContext, useState, useEffect } from 'react';
import EditForm from './EditForm';

const Player = ({player}) => {

  const [show, setShow] = useState(false)
  const handlesShow = () => setShow(true)
  const handleClose = () => setShow(false)

  useEffect(() => {
    handleClose()
  }, [player])

  const {deletePlayer} = useContext(PlayerContext)

  return(
    <>
        <td>{player.username}</td>
        <td>{player.email}</td>
        <td>{player.experience}</td>
        <td>{player.level}</td>
        <td className='d-flex'>
          <div onClick={handlesShow} className="button-act text-warning" data-toggle="modal" >edit</div> <span className='mx-3'>||</span>
          <div onClick={() => deletePlayer(player.id)} className="button-act"  data-toggle="modal" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/trash-can-png/trash-can-png-transparent-images-png-only-1.png" width="25" alt="trash can png transparent images png only" /></div>

        </td>

      <Modal show={show} onHide={handleClose}> 
        <Modal.Header closeButton>
            <Modal.Title>
              Edit Player
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditForm thePlayer={player} />
        </Modal.Body>
        <Modal.Footer>
          copyright binar@2022
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Player;