import { useState } from "react";
function UploadData(props) {
  const { showform } = props;
  const [selectedFile, setSelectedFile] = useState();
  // const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  
  };
  const handleSubmission = () => {
    const formData = new FormData();

    formData.append("csvFile", selectedFile);

    fetch("http://localhost:5000/uploadFile", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="upload">
        <button className="btn btn-success open-form" onClick={showform}>
          Add Data
        </button>
        <b> Or Upload CSV File:</b>
        <form className="form-control uploadCsv" >
          <input
            type="file"
            className="form-control"
            name="csvFile"
            accept=".csv"
            required
            onChange={changeHandler}
          />

          <button type="submit" onClick={handleSubmission} className="btn btn-primary">
            Upload
          </button>
        </form>
      </div>
    </>
  );
}
export default UploadData;
