import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import BackButton from "../../Components/BackButton";
import CustomModal from "../../Components/CustomModal";
import CustomInput from "../../Components/CustomInput";
import { SelectBox } from "../../Components/CustomSelect";
import CustomButton from "../../Components/CustomButton";
export const EditPoductManagement = () => {
  const consumerKey = process.env.REACT_APP_CONSUMERKEY
  const consumerSecret = process.env.REACT_APP_CONSUMERSECRET;
  const encodedCredentials = btoa(`${consumerKey}:${consumerSecret}`);
  const { id } = useParams();
  const [filePreviews, setFilePreviews] = useState([]); // Ensure this state is defined

  const [categories, setCategories] = useState({});
  const [unit, setUnit] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ images: [] });






  const [file, setFile] = useState([]);
  const [data, setData] = useState({})
  const [files, setFiles] = useState([])




  const filehandleChange = (event) => {
    const selectedFiles = event.target.files;
    const filesArray = Array.from(selectedFiles);

    Promise.all(filesArray.map(file => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve({ file, src: reader.result });
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    })).then(dataUrls => {
      setFormData(prevData => ({
        ...prevData,
        images: [...(prevData?.images || []), ...dataUrls]
      }));
    }).catch(error => {
      console.error("Error reading files: ", error);
    });
  };





  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };


  const base_url = process.env.REACT_APP_API_URL;

  const ProductData_byid = () => {



    document.querySelector(".loaderBox").classList.remove("d-none");

    fetch(
      `${base_url}/wc/v3/products/${id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Basic ${encodedCredentials}`,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        document.querySelector(".loaderBox").classList.add("d-none");
        setFormData(data);
        setFilePreviews(data)
        setFile()
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };

  useEffect(() => {
    ProductData_byid()
  }, [id])

  console.log(data)
  const LogoutData = localStorage.getItem("login");

  const handleSubmit = (event) => {

    event.preventDefault();

    // Create a new FormData object
    const formDataMethod = new FormData();
    for (const key in formData) {
      formDataMethod.append(key, formData[key]);
    }

    console.log(formData);
    document.querySelector(".loaderBox").classList.remove("d-none");
    // Make the fetch request
    fetch(
      `${base_url}/wc/v3/products/${id}`,
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Basic ${encodedCredentials}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(data);
        setShowModal(true);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };






  const handleRemoveImage = (index) => {
    console.log("index", index);
    setFormData((prevData) => ({
      ...prevData,
      images: prevData.images.filter((_, id) => id !== index),
    }));
    setFilePreviews((prevPreviews) => prevPreviews?.images?.filter((_, id) => id !== index));
  };



  return (
    <>
      <DashboardLayout>
        <div className="dashCard mb-4">
          <div className="row mb-3">
            <div className="col-12 mb-2">
              <h2 className="mainTitle">
                <BackButton />
                Edit Product
              </h2>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <CustomInput
                          label="  Name"
                          required
                          id="name"
                          type="text"
                          placeholder="  Name"
                          labelClass="mainLabel"
                          inputClass="mainInput"
                          name="name"
                          value={formData?.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <CustomInput
                          label="SKU"
                          required
                          id="jobID"
                          type="text"
                          placeholder="SKU"
                          labelClass="mainLabel"
                          inputClass="mainInput"
                          name="sku"
                          value={formData?.sku}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <CustomInput
                          label="STOCK"
                          required
                          id="email"
                          type="text"
                          placeholder="STOCK"
                          labelClass="mainLabel"
                          inputClass="mainInput"
                          name="stock_quantity"
                          value={formData?.stock_quantity}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <CustomInput
                          label="PRICE"
                          required
                          id="info"
                          type="text"
                          placeholder="PRICE"
                          labelClass="mainLabel"
                          inputClass="mainInput"
                          name="price"
                          value={formData?.price}
                          onChange={handleChange}
                        />
                      </div>



                      <div className="col-md-6 mb-4">
                        <CustomInput
                          label="CATEGORIES"
                          required
                          id="info"
                          type="text"
                          placeholder="CATEGORIES"
                          labelClass="mainLabel"
                          inputClass="mainInput"
                          name="info"
                          value={formData?.info}
                          onChange={handleChange}
                        />
                      </div>


                      <div className="col-md-6 mb-4">
                        <CustomInput
                          label="DATE"
                          required
                          id="info"
                          type="date"
                          placeholder="DATE"
                          labelClass="mainLabel"
                          inputClass="mainInput"
                          name="date_created"
                          value={formData?.date_created}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <CustomInput
                          label="Product Image"
                          required
                          id="info"
                          type="file"
                          placeholder="DATE"
                          labelClass="mainLabel"
                          inputClass="mainInput"
                          multiple
                          name="image"
                          // value={formData?.info}
                          onChange={filehandleChange}
                        />
                        {/* <image src={formData?.image} /> */}

                        <div className="row">
                          {formData?.images?.map((dataUrl, index) => (
                            <div key={index} className="galleryItem col-md-4 mb-3 position-relative">
                              <div className="remove-icon" onClick={() => handleRemoveImage(index)}>x</div>
                              <img src={dataUrl?.src} className="product_images w-100" alt={`Image ${index}`} />
                            </div>
                          ))}
                        </div>


                      </div>


                      <div className="col-md-6 mb-4">
                        <div className="inputWrapper">
                          <div className="form-controls">
                            <label htmlFor="">Description</label>
                            <textarea
                              name="description"
                              className="form-control shadow border-0"
                              id=""
                              cols="30"
                              rows="10"
                              value={formData?.description}
                              onChange={handleChange}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-md-6 mb-4">
                        <SelectBox
                          selectClass="mainInput"
                          name="category_id"
                          label="Select Category"
                          required
                          value={formData?.category_id}
                          option={categories}
                          onChange={handleChange}
                        />
                      </div> */}


                      <div className="col-md-12">
                        <CustomButton
                          variant="primaryButton"
                          text="Submit"
                          type="submit"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <CustomModal
          show={showModal}
          close={() => {
            setShowModal(false);
          }}
          success
          heading="Book Update Successfully."
        />
      </DashboardLayout>
    </>
  );
};