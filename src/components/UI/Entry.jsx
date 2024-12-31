import React from 'react'

const Entry = ({data, values, setValues}) => {

  return (
    <div className='entry-div'>
      <label htmlFor="inp">{data}</label>
      <input id='inp' type="text" value={values.data} onChange={(e)=> setValues({...values,[data]:e.target.value})} />
    </div>
  )
}

export default Entry
