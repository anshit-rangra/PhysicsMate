import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getQuestions } from '../api/GetApi';

const Card = () => {
  const [data, setData] = useState(null);
    const params = useParams()
    
      useEffect(() => {
        const fetchData = async () => {
          const result = await getQuestions();
          const filteredData = result.filter((item) => item.title === params.id);  
          setData(filteredData[0]);
        };
        fetchData();
      }, []);

      
  
    if (data){
  return (
    <main className='result-container'>
        <h2>{data.title}</h2>
        <div>
        <p>{data.theorem}</p>
        </div>
        <div>
          <p>{data.definition} <br/> <span>{data.formula}</span></p>
        </div>
        <div className='div-btns'>
          <NavLink to={"/cards"}><button className="next result-btn">Explore More!</button></NavLink>
          <NavLink to={"/"}><button className="go-home result-btn">Go Home</button></NavLink>
        </div>
    </main>
  )
}
}

export default Card
