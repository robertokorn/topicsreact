import React from "react";
import Table from 'react-bootstrap/Table';

export const RelatedTopics = (props) =>{
const { relatedTopics } = props;

    return (
        <div>
        <h2>List of Related Topics</h2>
        <Table striped bordered hover>
          <thead>
          <tr>
            <th>
                SubTopic name:                          
            </th>
            <th>
              Stargarzers
            </th>
          </tr>
        </thead>
        <tbody>
          {
            relatedTopics.map( topics => (
            <tr key={topics.name}>
            <td>
                { topics.name ?  topics.name: ''}
            </td>
            <td>
                { topics.stargazerCount ? topics.stargazerCount: '' }
            </td>                          
            </tr>                              
            ))
          }
          </tbody>
        </Table>
      </div>
      )
}

export default RelatedTopics;