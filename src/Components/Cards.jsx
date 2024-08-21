import React from 'react'

function Cards({data}) {
    
  return <>
  <div className="col-lg-4 col-sm-6 mb-4">
    <div className="card h-100">
      <a href="#"><img className="card-img-top" src={data.image} alt=""/></a>
      <div className="card-body">
        <h4 className="card-title">
          <a href="#">{data.title}</a>
        </h4>
        <p className="card-text">{data.description}</p>
      </div>
    </div>
  </div>
  </>
}

export default Cards
