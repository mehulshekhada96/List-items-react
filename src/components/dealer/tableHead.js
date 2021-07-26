import {useEffect} from 'react';
import { $ } from 'react-jquery-plugin';


function TableHead (props){
    const {cities, states, zips, areaCode, handleFilterChange} = props;
    const toggler = (e) => {
      let select = e.target.parentNode.nextElementSibling
      $(select).toggle()
    }
 
    useEffect(()=>{
  
    })
    return(
        <thead className='table table-primary'>
        <tr>
        <th> Edit/Delete </th>
       
              <th>
                <span className="filterTag">
                  
                  Customer Code
                  <i
                    // onClick='sortby("custCode")'
                    id="custCode"
                    className="fas fa-sort-alpha-down"
                  ></i>
                  <i
                    // onClick={sortby("-custCode")}
                    id="-custCode"
                    className="fas fa-sort-alpha-up"
                  ></i>
                </span>
              </th>
              <th>
                <span className="filterTag">
                  
                  Company Name
                  <i
                    // onClick='sortby("companyName")'
                    id="companyName"
                    className="fas fa-sort-alpha-down"
                  ></i>
                  <i
                    // onClick='sortby("-companyName")'
                    id="-companyName"
                    className="fas fa-sort-alpha-up"
                  ></i>
                </span>
              </th>
              <th>
                <span className="filterTag">
                  Ship to Name
                  <i
                    // onClick='sortby("shipToName")'
                    id="shipToName"
                    className="fas fa-sort-alpha-down"
                  ></i>
                  <i
                    // onClick='sortby("-shipToName")'
                    id="-shipToName"
                    className="fas fa-sort-alpha-up"
                  ></i>
                </span>
              </th>

              <th>Physical Address Line 1</th>

              <th>
                
                <span className="filterTag">
                
                  City <i className="fas fa-filter" onClick={toggler}></i>
                </span>
                <select
                  onChange={handleFilterChange}
                  name="cityFilter"
                  id="cityfilter"
                  className="filter form-select"
                  size="10"
                  aria-label="size 4 select example"
                  style={{display:'none'}}
                  multiple
                >
                  { cities.map(c=>{
                    return <option key={c}  value={c}>{c}</option>
                  }) }
                </select>
              </th>
              <th>
                
                <span className="filterTag">
                  State <i className="fas fa-filter" onClick={toggler}></i>
                </span>
                <select
                  // onChange="this.form.submit()"
                  name="stateFilter"
                  onChange={handleFilterChange}
                  id="statefilter"
                  className="filter form-select"
                  size="10"
                  aria-label="size 4 select example"
                  multiple
                  style={{display:'none'}}
                >
                { states.map(c=>{
                    return <option key={c}  value={c}>{c}</option>
                  }) }
                </select>
              </th>
              <th>
                <span className="filterTag">
                  
                  Zip <i className="fas fa-filter" onClick={toggler}></i>
                </span>
                <select
                  // onChange="this.form.submit()"
                  name="zipFilter"
                  onChange={handleFilterChange}
                  id="zipfilter"
                  className="filter form-select"
                  multiple
                  size="10"
                  aria-label="size 3 select example"
                  style={{display:'none'}}
                >
               { zips.map(c=>{
                    return <option key={c}  value={c}>{c}</option>
                  }) }
                </select>
              </th>
              <th>
                <span className="filterTag">
                  Area Code <i className="fas fa-filter" onClick={toggler}></i>
                </span>
                <select
                  // onChange="this.form.submit()"
                  name="areaFilter"
                  id="areafilter"
                  onChange={handleFilterChange}
                  className="filter form-select display_none"
                  multiple
                  size="10"
                  aria-label="size 4 select example"
                  style={{display:'none'}}
                >
                { areaCode.map(c=>{
                    return <option key={c} value={c}>{c}</option>
                  }) }
                </select>
              </th>
              <th>Phone Exchange</th>
              <th>Physical Phone</th>
              <th>EMAIL_ADDRESS</th>
              <th>EMAIL_ADDRESS_2</th>
              <th>Profile Desc</th>
              <th>Dist</th>
              <th>Account</th>
              <th>Display</th>
              <th>Date</th>
              <th>EndDate</th>
              <th>CRM</th>
              <th></th>
              <th>Website</th>
              <th>Lat</th>
              <th>Long</th>
          
        </tr>
      </thead>
    )
}
export default TableHead