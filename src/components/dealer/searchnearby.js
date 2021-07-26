function SearchNearBy() {
  return (
    <>
      <div className="searchNearBy">
        <form action="/dealers" method="POST">
          <label htmlFor="pincode">
            Search for Nearest Dealers, Enter Pincode:
            <input type="text" name="pincode" id="pincode" required />
          </label>
          
          <label htmlFor="raddi"> Enter Radius of Nearby Distance in KM:
          <input type="text" name="radius" id="raddi" required />
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
