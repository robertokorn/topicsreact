import React, {useState} from 'react';
import { useLazyQuery } from "@apollo/client";
import { GET_TOPICS } from "../Queries/queries";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import RelatedTopics from './RelatedTopics';

const Home = () => {

  const [getRepoName, {data, error}] = useLazyQuery(GET_TOPICS);
  const [mainTopic, setMaingTopic] = useState('');

  const onChange = (e) =>{
    setMaingTopic(e.target.value)
  }

  const onSearch = () =>{
    getRepoName({ variables: { name: mainTopic } });
  }

  return (
    <div className="home">
       {
          error ? <h1>Error found</h1> : ''
       }
      <h1>Topic: {mainTopic}</h1>
      <div className="searchbar">
        <input 
            placeholder="Enter a topic name and click search e.g react"
            type="text" 
            value={mainTopic}
            onChange={(event) => {onChange(event)}}
            style={{width:'400px'}}
        />
        <Button type="button" className="searchButton" 
                onClick={onSearch}>Search
        </Button>
        </div>      
      <div>          
          { // first display the list of the topics
            data ? (
                <>
                <div>
                  <Table striped bordered hover>
                    <thead> 
                      <tr>
                        <th>
                            Topic name:                          
                        </th>
                        <th>
                          Stargarzers
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>
                            { data.topic ?  data.topic.name: ''}
                          </td>
                          <td>
                            { data.topic ? data.topic.stargazerCount: '' }
                          </td>                          
                        </tr>
                    </tbody>
                  </Table>
                </div>
                  {
                    //display the related topics 
                  }
                  { data.topic ? (
                      <RelatedTopics 
                        relatedTopics={data.topic.relatedTopics} 
                      />
                    ) : 'NO DATA FOUND'
                  }  
                </>
              )
              : ''
          }
      </div>   
    </div>
  );
};

export default Home;