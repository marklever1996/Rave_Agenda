import React, { useState } from 'react'
import './FilterSidebar.css'

const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState({ min: '', max: '' })
  const [selectedDate, setSelectedDate] = useState('')

  return (
    <div className="filters-sidebar">
      <div className="filters-header">
        <h3>FILTERS</h3>
        <button className="clear-filters">
          <i className="fas fa-undo-alt"></i>
          Reset
        </button>
      </div>

      <div className="filter-section">
        <h4>
          <i className="far fa-calendar-alt"></i>
          Date
        </h4>
        <input 
          type="date" 
          className="date-filter"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      <div className="filter-section">
        <h4>
          <i className="fas fa-euro-sign"></i>
          Price Range
        </h4>
        <div className="price-inputs">
          <div className="price-input-wrapper">
            <span className="price-currency">€</span>
            <input 
              type="number" 
              placeholder="0"
              value={priceRange.min}
              onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
            />
          </div>
          <span className="price-separator">—</span>
          <div className="price-input-wrapper">
            <span className="price-currency">€</span>
            <input 
              type="number" 
              placeholder="150"
              value={priceRange.max}
              onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
            />
          </div>
        </div>
      </div>

      <div className="filter-section">
        <h4>
          <i className="fas fa-ticket-alt"></i>
          Event Type
        </h4>
        <div className="checkbox-group">
          <label className="custom-checkbox">
            <input type="checkbox" />
            <span className="checkbox-mark"></span>
            <span className="checkbox-label">Indoor</span>
          </label>
          <label className="custom-checkbox">
            <input type="checkbox" />
            <span className="checkbox-mark"></span>
            <span className="checkbox-label">Outdoor</span>
          </label>
          <label className="custom-checkbox">
            <input type="checkbox" />
            <span className="checkbox-mark"></span>
            <span className="checkbox-label">Multi-day</span>
          </label>
        </div>
      </div>

      <div className="filter-section">
        <h4>
          <i className="fas fa-music"></i>
          Genres
        </h4>
        <div className="checkbox-group">
          <label className="custom-checkbox">
            <input type="checkbox" />
            <span className="checkbox-mark"></span>
            <span className="checkbox-label">Techno</span>
          </label>
          <label className="custom-checkbox">
            <input type="checkbox" />
            <span className="checkbox-mark"></span>
            <span className="checkbox-label">House</span>
          </label>
          <label className="custom-checkbox">
            <input type="checkbox" />
            <span className="checkbox-mark"></span>
            <span className="checkbox-label">Drum & Bass</span>
          </label>
          <label className="custom-checkbox">
            <input type="checkbox" />
            <span className="checkbox-mark"></span>
            <span className="checkbox-label">Hardstyle</span>
          </label>
        </div>
      </div>

      <button className="apply-filters">
        Apply Filters
        <i className="fas fa-filter"></i>
      </button>
    </div>
  )
}

export default FilterSidebar 