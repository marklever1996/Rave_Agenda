import React from 'react'

const FilterSidebar = () => {
  return (
    <div className="filters-sidebar">
      <h3>FILTERS</h3>
      <div className="filter-group">
        <h4>Date</h4>
        <input type="date" className="date-filter" />
      </div>
      <div className="filter-group">
        <h4>Price Range</h4>
        <div className="price-inputs">
          <input type="number" placeholder="Min €" />
          <input type="number" placeholder="Max €" />
        </div>
      </div>
      <div className="filter-group">
        <h4>Event Type</h4>
        <label><input type="checkbox" /> Indoor</label>
        <label><input type="checkbox" /> Outdoor</label>
        <label><input type="checkbox" /> Multi-day</label>
      </div>
    </div>
  )
}

export default FilterSidebar 