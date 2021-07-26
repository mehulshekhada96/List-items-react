import React from "react";

import Tablerow from "./tableRow";

function Tablebody (props){

  const {dealers, editForm, deleteData} = props;
  // console.log(filterData.cityFilter)
  //  const newDealer = dealers.filter(e => filterData.cityFilter.includes(e["City"])  )
// console.log("newdealer", newDealer)
    const tableRows = dealers.map((user, i) => {
      return (
        <Tablerow 
        key={dealers[i]._id}
        id={dealers[i]._id}
        costCode = {dealers[i]["Customer Code"]}
        company = {dealers[i]["Company Name"]}
        ship = {dealers[i]["Ship to Name"]}
        address = {dealers[i]["Physical Address Line 1"]}
        city = {dealers[i]["City"]}
        state = {dealers[i]["State"]}
        Zip = {dealers[i]['Zip']}
        areaCode = {dealers[i]["Area Code"]}
        phoneEx = {dealers[i]["Phone Exchange"]}
        phyPhone = {dealers[i]["Physical Phone"]}
        email1 = {dealers[i]["EMAIL_ADDRESS"]}
        email2 = {dealers[i]["EMAIL_ADDRESS_2"]}
        profileDesc = {dealers[i]["Profile Desc"]}
        dist = {dealers[i]["Dist"]}
        account = {dealers[i]["Account"]}
        display = {dealers[i]["Display"]}
        date = {dealers[i]["Date"]}
        endDate= {dealers[i]["EndDate"]}
        crm = {dealers[i]["CRM"]}
        website = {dealers[i]["Website"]}
        lat= {dealers[i]["Lat"]}
        long = {dealers[i]["Long"]}
        editForm = {editForm}
        deleteData = {deleteData}
        />
      );
    });

    return (
        <>
        {tableRows}
        </>
    )
}

export default Tablebody;