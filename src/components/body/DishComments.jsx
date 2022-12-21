import React from 'react';
import {Table} from 'react-bootstrap';

const DishComments = props => {
    return(
        props.comments.map(comment => {
            return(
                <div>
                    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Rating</th>
          <th>Author</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{comment.id}</td>
          <td>{comment.rating}</td>
          <td>{comment.author}</td>
          
        </tr>
      </tbody>
    </Table>
                </div>
            )
        })
    )
}

export default DishComments;