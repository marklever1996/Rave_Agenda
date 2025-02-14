import React from 'react'
import './Pagination.css'

const Pagination = () => {
  return (
    <div className="pagination">
      <button className="pagination-arrow">
        <i className="fas fa-chevron-left"></i>
      </button>
      
      <div className="pagination-numbers">
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <span className="pagination-dots">...</span>
        <button>12</button>
      </div>

      <button className="pagination-arrow">
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  )
}

export default Pagination 