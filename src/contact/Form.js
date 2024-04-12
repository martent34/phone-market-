

import React from 'react'

function Form() {
    return (
        <div>
            <div className="container all">
                <div className="row">
                    <div className="col-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.5256182776557!2d31.35146272465726!3d30.050464618285833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f9de914c883%3A0x485235fe4cbbe4ab!2sPhone%20market!5e0!3m2!1sar!2seg!4v1701123614249!5m2!1sar!2seg" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-6">
                        <div className="box">
                            <div className="container">
                                <i className="fa-solid massage fa-envelope"></i>
                                <form action="">
                                    <div className="names">
                                        <input type="text" className="name form-control" placeholder="first name" />
                                        <input type="text" className="name form-control" placeholder="last name" />
                                    </div>
                                    <input type="email" placeholder="email address" className="form-control email" />
                                    <textarea className="form-control" name="" placeholder="your massage" id="" cols="30" rows="10"></textarea>
                                    <input type="submit" className="submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form