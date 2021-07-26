import { useState, useEffect } from "react";
import { $ } from "react-jquery-plugin";
function EditDealerForm(props) {
  const { dealers, id, showEditForm, currentPage, setPageCurrent } = props;

  const editDealer1 = dealers.find((e) => e._id === id);
  const [editDealer, SetEditDealer] = useState(false);
  const [customerCode, setCustomerCode] = useState("");
  const [company, setCompany] = useState("");
  const [shipToName, setShipToName] = useState('');
  const [physicalAddress, setPhysicalAddress]=useState('')
  const [city, setCity]=useState('')
  const [state, setState]=useState('')
  const [zip, setZip]=useState('')
  const [areaCode, setAreaCode]=useState('')
  const [phoneExchange, setPhoneExchange]=useState('')
  const [physicalPhone, setPhysicalPhone]=useState('')
  const [emailAddress, setEmailAdd1]=useState('')
  const [emailAddress2, setEmailAdd2]=useState('')
  const [profileDesc, setProfileDesc]=useState('')
  const [dist, setDist]=useState('')
  const [account, setAccount]=useState('')
  const [display, setDisplay]=useState('')
  const [date, setDate]=useState('')
  const [endDate, setEndDate]=useState('')
  const [crm, setCrm]=useState('')
  const [website, setWebsite]=useState('')
  const [lat, setLat]=useState('')
  const [long, setLong]=useState('')

  

  useEffect(() => {
    // SetEditDealer(editDealer1);
    // console.log("refreshed");
    // setCustomerCode(editDealer["Customer Code"]);
    // setCompany(editDealer["Company Name"]);
    // setShipToName(editDealer["Ship to Name"]);
    // setPhysicalAddress(editDealer["Physical Address Line 1"]);
    // setCity(editDealer["City"]);
    // setState(editDealer["State"]);
    // setZip(editDealer["Zip"]);
    // setAreaCode(editDealer["Area Code"]);
    // setPhoneExchange(editDealer["Phone Exchange"]);
    // setPhysicalPhone(editDealer['Physical Phone']);
    // setEmailAdd1(editDealer['EMAIL_ADDRESS'])
    // setEmailAdd2(editDealer['EMAIL_ADDRESS_2'])
    // setProfileDesc(editDealer['Profile Desc']);
    // setDist(editDealer['Dist']);
    // setAccount(editDealer['Account']);
    // setDisplay(editDealer['Display']);
    // setDate(editDealer['Date']);
    // setEndDate(editDealer['EndDate']);
    // setCrm(editDealer['CRM']);
    // setWebsite(editDealer['Website']);
    // setLat(editDealer['Lat']);
    // setLong(editDealer['Long'])
    let bodyHeight = document.body.scrollHeight;
    $(".overlay").css({ height: bodyHeight });
    $('input[type=text]').keyup(function () {
      $(this).val($(this).val().toUpperCase());
    });
  }, [editDealer1, editDealer]);
  const reset = () => {
    SetEditDealer(editDealer1);
  };
  const clearForm = () => {
    SetEditDealer(false);
  };
  

  const data = {
    customerCode: customerCode,
    company: company,
    shipToName : shipToName,
    physicalAddress: physicalAddress,
    city: city,
    state : state,
    zip :zip,
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
    pageNumber: currentPage

  };
  console.log(currentPage);
  const sendEditFromData = () => {
    setPageCurrent(currentPage)
    fetch(`http://localhost:5000/dealers/update-dealer-data/${id}`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      // .then((response) => response.json())
      // .then((res) => console.log(res))
      // .catch((err) => console.log(err));
  };
  return (
    <>
      <form
        onSubmit={sendEditFromData}
      
        className="form-control dealer-form"
      >
        <input type="hidden" name="pageNumber" id="pageNumber" />

        <div className="inputDiv1">
          <h2 className="text-center">Edit Your Details</h2>
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
            defaultValue={editDealer ? editDealer["Customer Code"] : null}
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
            defaultValue={
              editDealer["Company Name"] ? editDealer["Company Name"] : null
            }
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
            defaultValue={
              editDealer["Ship to Name"] ? editDealer["Ship to Name"] : null
            }
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
            defaultValue={
              editDealer["Physical Address Line 1"]
                ? editDealer["Physical Address Line 1"]
                : null
            }
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
            defaultValue={editDealer["City"] ? editDealer["City"] : null}
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
            defaultValue={editDealer["State"] ? editDealer["State"] : null}
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
            defaultValue={editDealer["Zip"] ? editDealer["Zip"] : null}
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
            defaultValue={
              editDealer["Area Code"] ? editDealer["Area Code"] : null
            }
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
            defaultValue={
              editDealer["Phone Exchange"] ? editDealer["Phone Exchange"] : null
            }
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
            defaultValue={
              editDealer["Physical Phone"] ? editDealer["Physical Phone"] : null
            }
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
            defaultValue={
              editDealer["EMAIL_ADDRESS"] ? editDealer["EMAIL_ADDRESS"] : null
            }
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
            defaultValue={
              editDealer["EMAIL_ADDRESS_2"]
                ? editDealer["EMAIL_ADDRESS_2"]
                : null
            }
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
            defaultValue={
              editDealer["Profile Desc"] ? editDealer["Profile Desc"] : null
            }
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
            defaultValue={editDealer["Dist"] ? editDealer["Dist"] : null}
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
            defaultValue={editDealer["Account"] ? editDealer["Account"] : null}
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
            defaultValue={editDealer["Display"] ? editDealer["Display"] : null}
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
            defaultValue={editDealer["Date"] ? editDealer["Date"] : null}
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
            defaultValue={editDealer["EndDate"] ? editDealer["EndDate"] : null}
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
            defaultValue={editDealer["CRM"] ? editDealer["CRM"] : null}
          />
        </div>
        <div className="inputDiv">
          <input
            className="form-control"
            type="text"
            name=""
            placeholder=""
            defaultValue={editDealer[""] ? editDealer[""] : null}
          />
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
            defaultValue={editDealer["Website"] ? editDealer["Website"] : null}
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
            defaultValue={
              editDealer["Lat"] ? editDealer["Lat"] : null
            }
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
            defaultValue={
              editDealer["Long"] ? editDealer["Long"] : null
            }
          />
        </div>

        <div className="inputDiv1 dealer-form-btn">
          <button type="reset" className="btn btn-success" onClick={clearForm}>
            Clear
          </button>

          <button type="reset" className="btn btn-success" onClick={reset}>
            Reset
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <span className="btn btn-danger" onClick={showEditForm} id="cancle">
            Cancle
          </span>
        </div>
      </form>
      <div class="overlay display_none"></div>
    </>
  );
}
export default EditDealerForm;
