import React, { useState } from "react";

function Contact() {
  //--STATE IS BASICALLY USED FOR ACCESS THE FORM KEYS AND SET THE DATA
  const [data, setData] = useState({
    Fullname: "",
    Phonenumber: "",
    Email: "",
    Message: "",
  });
  //--JO BHI DATA USE STATE KE PASS HAI ISKE PASS BHI RHTA HAI
  //--INPUT EVENT MEAN USER NE KUCH BHI VO HME MILNE WAALA HAI
  const InputEvent = (event) => {
    const { name, value } = event.target;
    //--FOR DIRECTLY UPDATE WITH THE HELP OF SETDATA WE CALL THE PREVIOUS VALUE MEAN ISKE PHLE JOBHI VALUE THA
    //--WITH THE HELP OF INLINE FUNCTION
    //--I GET ALL THE DATA IN A PREVIOUSVALUE
   setData((PreviousValue) => {
      return {
        //--spread operator
        ...PreviousValue,
        [name]: value,
      };
    });
  };
  function FormSubmit(e) {
    e.preventDefault();
    alert(`My name is ${data.Fullname}.
    My phone number is ${data.Phonenumber}
    and email is ${data.Email}
    Here is what i want to say ${data.Message}`);
    e.reset();
  }


  return (
    <>
      <div className="my-5"
      >
        <h1 className="text-center"> Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form  onSubmit={FormSubmit}
            >
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="Fullname"
                  value={data.Fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="Phonenumber"
                  value={data.Phonenumber}
                  onChange={InputEvent}
                  placeholder="mobile number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="Email"
                  value={data.Email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="Message"
                  value={data.Message}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
