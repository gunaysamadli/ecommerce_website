import React from 'react';
import './index.scss';
import Button from '../../components/Button/index'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="container">
                <form method="post" className="form-horizontal">
                    <fieldset>
                        <legend>Contact Form</legend>
                        <div className="form-group required">
                            <label className="col-sm-2 control-label" for="input-name">Your Name</label>
                            <div className="col-sm-12">
                                <input type="text" name="name" value="" id="input-name" class="form-control" />
                            </div>
                        </div>
                        <div className="form-group required">
                            <label className="col-sm-2 control-label" for="input-email">E-Mail Address</label>
                            <div className="col-sm-12">
                                <input type="text" name="email" value="" id="input-email" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group required">
                            <label className="col-sm-2 control-label" for="input-enquiry">Enquiry</label>
                            <div className="col-sm-12">
                                <textarea name="enquiry" rows="10" id="input-enquiry" className="form-control"></textarea>
                            </div>
                        </div>
                    </fieldset>
                    <div className="buttons d-flex justify-content-end">
                        <div className="pull-right">
                            <Button base>Submit</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact