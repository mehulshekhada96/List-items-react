import { useState, useEffect } from "react";
import { $ } from "react-jquery-plugin";

function AddDataForm(props) {
  const { showform, setPath,  setShowForm } = props;
  const [customerCode, setCustomerCode] = useState("");
  const [company, setCompany] = useState("");
  const [shipToName, setShipToName] = useState("");
  const [physicalAddress, setPhysicalAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [areaCode, setAreaCode] = useState("");
  const [phoneExchange, setPhoneExchange] = useState("");
  const [physicalPhone, setPhysicalPhone] = useState("");
  const [emailAddress, setEmailAdd1] = useState("");
  const [emailAddress2, setEmailAdd2] = useState("");
  const [profileDesc, setProfileDesc] = useState("");
  const [dist, setDist] = useState("");
  const [account, setAccount] = useState("");
  const [display, setDisplay] = useState("");
  const [date, setDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [crm, setCrm] = useState("");
  const [website, setWebsite] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  const data = {
    customerCode: customerCode,
    company: company,
    shipToName: shipToName,
    physicalAddress: physicalAddress,
    city: city,
    state: state,
    zip: zip,
    areaCode,
    phoneExchange,
    physicalPhone,
    emailAddress,
    emailAddress2,
    profileDesc,
    dist,
    account,
    display,
    date,
    endDate,
    crm,
    website,
    lat,
    long,
  };
  const submitAddDataForm = (e) => {
    e.preventDefault()
    fetch("http://localhost:5000/dealer-data", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.error);
        setPath("/dealers");
      })
      .catch((error) => alert(error));
      setShowForm(false)
  };
  useEffect(() => {
    let bodyHeight = document.body.scrollHeight;
    $(".overlay").css({ height: bodyHeight });
    $("input[type=text]").keyup(function () {
      $(this).val($(this).val().toUpperCase());
    });
  }, []);

  return (
    <>
      {/* <tr className="table-primary table-form-row display_none"> */}
      <form onSubmit={submitAddDataForm} className="form-control dealer-form">
        <div className="inputDiv1">
          <b>Enter Your Details:</b>
        </div>
        <div className="inputDiv">
          <input
            className="form-control"
            type="text"
            name="customerCode"
            placeholder="Customer Code"
            onChange={(event) => {
              setCustomerCode(event.target.value);
            }}
            required
          />
        </div>
        <div className="inputDiv">
          <input
            className="form-control"
            type="text"
            name="company"
            placeholder="Company Name"
            onChange={(event) => {
              setCompany(event.target.value);
            }}
          />
        </div>
        <div className="inputDiv">
          <input
            className="form-control"
            type="text"
            name="shipToName"
            placeholder="Ship To Name"
            onChange={(event) => {
              setShipToName(event.target.value);
            }}
          />
        </div>
        <div className="inputDiv">
          <input
            className="form-control"
            type="text"
            name="physicalAddress"
            placeholder="Physical Address"
            onChange={(event) => {
              setPhysicalAddress(event.target.value);
            }}
          />
        </div>
        <div className="inputDiv">
          <input
            className="form-control"
            type="text"
            name="city"
            placeholder="City"
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
        </div>
        <div className="inputDiv">
          <input
            className="form-control"
            type="text"
            name="state"
            placeholder="State"
            onChange={(event) => {
              setState(event.target.value);
            }}
          />
        </div>
        <div className="inputDiv">
          <input
            className="form-control"
            type="text"
            name="zip"
            placeholder="Zip"
            onChange={(event) => {
              setZip(event.target.value);
            }}
          />
        </div>
        <div className="inputDiv">
          <input
            className="form-control"
            type="text"
            name="areaCode"
            placeholder="Area Code"
            onChange={(event) => {
              setAreaCode(event.target.value);
            }}
          />
        </div>
        <div className="inputDiv">
          <input
            className="form-control"
            type="text"
            name="phoneExchange"
            placeholder="Phone Exchange"
            onChange={(event) => {
              setPhoneExchange(event.target.value);
            }}
          />
        </div>
        <div className="inputDiv">
          <input
            className="form-control"
            type="text"
            name="physicalPhone"
            placeholder="Physical Phone"
            onChange={(event) => {
              setPhysicalPhone(event.target.value);
            }}
          />
        </div>
        <div className="inputDiv">
          <input
            className="form-control"
            type="text"
            name="emailAddress"
            placeholder="Email Address"
            onChange={(event) => {
              setEmailAdd1(event.target.value);
            }}
          />
        </div>
        <div className="inputDiv">
          <input
            className="form-control"
            type="text"
            name="emailAddress2"
            placeholder="Email Address 2"
            onChange={(event) => {
              setEmailAdd2(event.target.value);
            }}
          />
        </div>
        <div className="inputDiv">
          <input
            className="form-control"
            type="text"
            name="profileDesc"
            placeholder="Profile Desc"
            onChange={(event) => {
              setProfileDesc(event.target.value);
            }}
          />
        </div>
        <div className="inputDiv">
          <input
            className="form-control"
            type="text"
            name="dist"
            placeholder="Dist"
            onChange={(event) => {
              setDist(event.target.value);
            }}
          />
        </div>
        <div className="inputDiv">
          <input
            className="form-control"
            type="text"
            name="account"
            placeholder="Account"
            onChange={(event) => {
              setAccount(event.target.value);
            }}
          />
        </div>
        <div className="inputDiv">
          <input
            className="form-control"
            type="text"
            name="display"
            placeholder="Display"
            onChange={(event) => {
              setDisplay(event.target.value);
            }}
          />
        </div>
        <div className="inputDiv">
          <input
            className="form-control"
            type="text"
            name="date"
            placeholder="Date"
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />
        </div>
        <div className="inputDiv">
          <input
            className="form-control"
            type="text"
            name="endDate"
            placeholder="End Date"
            onChange={(event) => {
              setEndDate(event.target.value);
            }}
          />
        </div>
        <div className="inputDiv">
          <input
            className="form-control"
            type="text"
            name="crm"
            placeholder="CRM"
            onChange={(event) => {
              setCrm(event.target.value);
            }}
          />
        </div>
        <div className="inputDiv">
          <input className="form-control" type="text" name="" placeholder="" />
        </div>

        <div className="inputDiv">
          <input
            className="form-control"
            type="text"
            name="website"
            placeholder="Website"
            onChange={(event) => {
              setWebsite(event.target.value);
            }}
          />
        </div>
        <div className="inputDiv">
          <input
            className="form-control"
            type="text"
            name="lat"
            placeholder="Lattitude"
            onChange={(event) => {
              setLat(event.target.value);
            }}
          />
        </div>
        <div className="inputDiv">
          <input
            className="form-control"
            type="text"
            name="long"
            placeholder="Longitude"
            onChange={(event) => {
              setLong(event.target.value);
            }}
          />
        </div>

        <div className="dealer-form-btn inputDiv1">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <span className="btn btn-danger" onClick={showform} id="cancle">
            Cancle
          </span>
        </div>
      </form>
      <div class="overlay display_none"></div>
    </>
  );
}
export default AddDataForm;
