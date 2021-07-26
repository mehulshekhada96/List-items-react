


function Tablerow(props) {
  const {id, editForm, deleteData} = props;
  
  return (
    <>
    <tr>
      <td>
        <div className="edit-delete">
          <i id={id} className="fas fa-edit edit editbtn"  onClick={editForm}></i>
           
              <i id={id} className="far fa-trash-alt" onClick={deleteData}></i>
           
          {/* <form action="/delete/<%= d.id ">
            <input type='hidden' name='pageNumber' id='pageNumber1' >
            <button type="submit" className="edit">
              <i className="far fa-trash-alt"></i>
            </button>
          
          </form> */}
        </div>
      </td>
      <td>{props.costCode}</td>
      <td>{props.company}</td>
      <td>{props.ship}</td>
      <td>{props.address}</td>
      <td>{props.city}</td>
      <td>{props.state}</td>
      <td>{props.Zip}</td>
      <td>{props.areaCode}</td>
      <td>{props.phoneEx}</td>
      <td>{props.phyPhone}</td>
      <td>{props.email1}</td>
      <td>{props.email2}</td>
      <td>{props.profileDesc}</td>
      <td>{props.dist}</td>
      <td>{props.account}</td>
      <td>{props.display}</td>
      <td>{props.date}</td>
      <td>{props.endDate}</td>
      <td>{props.crm}</td>
      <td>{}</td>
      <td>{props.website}</td>
      <td>{props.lat}</td>
      <td>{props.long}</td>
    </tr>
    
    </>
  );
}
export default Tablerow;
