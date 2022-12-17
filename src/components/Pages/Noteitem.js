import React, {useContext} from 'react'
import noteContext from "./contexts/notes/noteContext"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Notes.css'
const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (


        <>
        
        {/* <Card style={{ width: '18rem' }} >
      <Card.Body >
        <Card.Title > {note.title}</Card.Title>
        <Card.Text>
       
        <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id)}}></i>
        <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
        </Card.Text>

        <p className="card-text">{note.description}</p>
      </Card.Body>
    </Card> */}


    <Row xs={1} md={3} className="g-2">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col className='card-uppers'>
          <Card className='card-upper'>
            <Card.Body className='card-body box-model'>
              <Card.Title className='card-title'>{note.title}</Card.Title>
              <p className="card-text-desc">{note.description}</p>

              <Card.Text className='card-text'>
              
              </Card.Text>

              <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id)}}></i>
        <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>


            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>  
        </>
        // <div className="col-md-3">
        //     <div className="card my-3">
        //         <div className="card-body">
        //             <div className="d-flex align-items-center">
        //                 <h5 className="card-title">{note.title}</h5>
        //                 <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id)}}></i>
        //                 <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
        //             </div>
        //             <p className="card-text">{note.description}</p>

        //         </div>
        //     </div>
        // </div>
    )
}

export default Noteitem