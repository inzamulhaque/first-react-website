import React, { useState } from 'react';

const Contact = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const inputEvent = (event) => {
        const { name, value } = event.target;

        setData( (preVal) => {
            return {
                ...preVal,
                [name]: value
            };
        } );
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`sorry, ${data.name} Contact failed, Development Going On`);
        setData(
            {
                name: "",
                email: "",
                phone: "",
                message: ""
            }
        );
    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact US </h1> 
                <div className="container cotact_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form onSubmit={formSubmit}>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" name="name" onChange={inputEvent} value={data.name} autocomplete="off" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Email Address:</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" name="email" onChange={inputEvent} value={data.email}autocomplete="off" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Phone Number:</label>
                                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phone Number" name="phone" onChange={inputEvent} value={data.phone} autocomplete="off" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Message:</label>
                                    <textarea className="form-control" onChange={inputEvent} value={data.message} id="exampleFormControlTextarea1" rows="3" placeholder="Enter Your Message" name="message"></textarea>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-outline-primary" type="submit"> Submit </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;