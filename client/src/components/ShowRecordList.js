import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RecordCard from './RecordCard';

function ShowRecordList() {
  const [hsptlmmt, setHsptl] = useState([]);

  useEffect(() => {
    axios
      .get('/api/hsptlmmt')
      .then((res) => {
        setHsptl(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowRecordList ->');
        console.log(err)
      });
  }, []);

  const RecordList =
    hsptlmmt.length === 0
      ? 'there is no record!'
      : hsptlmmt.map((hsptlmmt, k) => <RecordCard hsptlmmt={hsptlmmt} key={k} />);

  return (
    <div className='ShowRecordList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center text-light'><b>Records List</b></h2>
          </div>


          <div className='col-md-11'>
            <Link
              to='/create-record'
              className='btn btn-outline-light float-right'
            >
             <b> + Add New Record</b>
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{RecordList}</div>
      </div>
    </div>
  );
}

export default ShowRecordList;