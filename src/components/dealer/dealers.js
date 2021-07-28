import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import Tablebody from "./tableBody";
import "./dealer.css";
import TableHead from "./tableHead";
import Pagination1 from "./pagination";
import SearchNearBy from "./searchnearby";
import UploadData from "./uploadNewData";
import AddDataForm from "./addDataFrom";
import EditDealerForm from "./editDealerForm";
import NoFilter from "./nofilter";

function Dealers({ path, setPath }) {
  const [dealers, setdealers] = useState([]);
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [zips, setZip] = useState([]);
  const [areaCode, setAreaCode] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pages, setPages] = useState(0);
  const [count, setCount] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [page, setPage] = useState(current);
  const [sort, setSort] = useState("");
  const [filterData, setFilterData] = useState({});
  const [pincode, setPincode] = useState();
  const [radius, setRadius] = useState();
  const [searchbypincode, setSearchbypincode] = useState(false)
  const filters = {
    cityFilter: [],
    stateFilter: [],
    zipFilter: [],
    areaFilter: [],
  };
  const showForm1 = (event) => {
    event.preventDefault();
    setShowForm(!showForm);
  };
  const handleFilterChange = (e) => {
    // console.log(e.target.closest('form'));
    // e.target.closest('form').submit();
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    // console.log(e.target.name, ":", value);
    const filterName = e.target.name;
    if (filterName === "cityFilter") {
      filters.cityFilter.push(...value);
    }
    if (filterName === "stateFilter") {
      filters.stateFilter.push(...value);
    }
    if (filterName === "zipFilter") {
      filters.zipFilter.push(...value);
    }
    if (filterName === "areaFilter") {
      filters.areaFilter.push(...value);
    }
    // console.log(filters);
    setFilterData(filters);
  };
  function removeFilter() {
    setFilterData({});
  }
  // console.log(filterData);
  const [showEditForm, setShowEditForm] = useState(false);
  const editDealerForm = (event) => {
    event.preventDefault();
    // console.log(event.target.id);
    setEditId(event.target.id);
    setShowEditForm(!showEditForm);
  };
  const deleteData = (event) => {
    event.preventDefault();
    setDeleteId(event.target.id);
    // console.log("delete this", deleteId);
  };
  function setPageCurrent(pageNumber) {
    setCurrent(pageNumber);
    setPage(pageNumber);
    // console.log("setpagecurretn", pageNumber);
  }
  function sortby(event) {
    setSort(event.target.id);
  }
 
  function changePincode(e){
    setPincode(e.target.value)
  }
  function changeRadius(e){
    setRadius(e.target.value)
  }
  console.log(pincode, Number(radius));
  function searchby(e) {
     e.preventDefault();
     setSearchbypincode(true)
     console.log(searchbypincode)
  }
  useEffect(() => {
    // console.log("page in effect", page);
    if (deleteId) {
      fetch(`http://localhost:5000/delete/${deleteId}`);
    }

    var url = new URL(`http://localhost:5000/dealers/${page}?`),
      params = {
    
        sort: sort,
        cityFilter: filterData.cityFilter,
        stateFilter: filterData.stateFilter,
        areaFilter: filterData.areaFilter,
        zipFilter: filterData.zipFilter
       
      };
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
    fetch(url)
      .then((response) => response.json())
      .then((dealers) => {
        // console.log(1, dealers);
        setdealers(dealers.dealers);
        setAreaCode(dealers.areaCodes);
        setCities(dealers.cities);
        setStates(dealers.states);
        setZip(dealers.zips);
        setCurrent(dealers.current);
        setPages(dealers.pages);
        setCount(dealers.count);
        setPage(Number(dealers.current));
        setPath("/dealers");
      })
      .catch((err) => console.log(err));

    // console.log('page, current, pages',page, current, pages)
    //scrollsssssssss-----------------
    let table = document.getElementsByClassName("table-container");
    let scrollArrow = document.querySelector(".scroll-to-left");
    scrollArrow.style.display = "none";
    table[0].addEventListener("scroll", () => {
      if (table[0].scrollLeft > 150) {
        scrollArrow.style.display = "flex";
      } else {
        scrollArrow.style.display = "none";
      }
    });
    scrollArrow.addEventListener("click", () => {
      table[0].scrollTo(0, 0);
    });
    let select1 = document.getElementsByTagName("select");
    for (let e of select1) {
      e.style.display = "none";
    }
  }, [page, deleteId, filterData, sort, count,setPath]);
  
  function goToPage(event) {
    const pageNumber = event.target.getAttribute("data-page");
    // console.log("Target pageNumber:", Number(pageNumber));
    setPage(Number(pageNumber));
  }

  return (
    <>
      <div className="parent">
        <form
          action="http://localhost:5000/dealers"
          name="sortFilter"
          method="GET"
          id="filterForm"
        >
          <div className="table-container">
            <NoFilter removeFilter={removeFilter} />
            <Table
              className="table dealer-table table-secondary"
              striped
              bordered
              hover
            >
              <TableHead
                cities={cities}
                states={states}
                zips={zips}
                areaCode={areaCode}
                handleFilterChange={handleFilterChange}
                sortby={sortby}
              />
              <tbody>
                <Tablebody
                  dealers={dealers}
                  editForm={editDealerForm}
                  deleteData={deleteData}
                  filterData={filterData}
                />
              </tbody>
            </Table>
          </div>
        </form>
        {showForm ? (
          <AddDataForm setPath={setPath} showform={showForm1} />
        ) : null}
        {showEditForm ? (
          <EditDealerForm
            dealers={dealers}
            showEditForm={editDealerForm}
            id={editId}
            currentPage={current}
            setPageCurrent={setPageCurrent}
          />
        ) : null}
        <div className="scroll-to-left">
          <span>
            {" "}
            <i className="fas fa-chevron-left"></i>{" "}
            <i className="fas fa-circle dot"></i>{" "}
          </span>
        </div>
      </div>
      <Pagination1
        current={current}
        pages={pages}
        count={count}
        goToPage={goToPage}
      />
      <div className="bold text-center">Total Dealers = {count} Found</div>
      <SearchNearBy
        changeRadius={changeRadius} 
        changePincode={changePincode}
        searchby={searchby}
      />
      <UploadData setPath={setPath} showform={showForm1} />
    </>
  );
}

export default Dealers;
