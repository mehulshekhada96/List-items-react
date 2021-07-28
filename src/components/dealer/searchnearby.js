function SearchNearBy({  changePincode,changeRadius, searchby}) {
 
 
  
  return (
    <>
      <div className="searchNearBy">
        <form onSubmit={searchby} >
          <label htmlFor="pincode">
            Search for Nearest Dealers, Enter Pincode:
            <input type="text" onChange={changePincode} name="pincode" id="pincode" required />
          </label>
          
          <label htmlFor="raddi"> Enter Radius of Nearby Distance in KM:
          <input type="text" name="radius" onChange={changeRadius} id="raddi" required />
          </label>
          
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default SearchNearBy;
