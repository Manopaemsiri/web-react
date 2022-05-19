
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { onMounted } from '../../helpers/frontend';
import {
  ChevronRight, MapPin, PhoneCall, Briefcase, Mail, Clock,
} from 'react-feather';

import { connect } from 'react-redux';
import { setTopnavActiveIndex } from '../../actions/general.actions';


function CompanyContact(props) {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });
  const onChangeInput = (key, val) => {
    setValues({ ...values, [key]: val });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  /* eslint-disable */
  useEffect(() => {
    onMounted(true);
    props.setTopnavActiveIndex(52);
  }, []);
  /* eslint-enable */

  return (
    <>
      <section className="section-06">
        <div className="container">
          <p className="d-flex ai-center text-sm color-white">
            Home <ChevronRight size="15" className="ml-2 mr-2" /> Contact
          </p>
          <h3 className="fw-800 mt-2 color-white">Contact</h3>
          <div className="ss-sep-01 bg-white mt-4"></div>
        </div>
      </section>

      <section className="section-04 section-padding">
        <div className="container">
          <div className="grids">

            <div className="grid xl-70 lg-2-3 sm-100 mt-0">
              <div className="panel-left">
                <h3 className="fw-400">Contact Info</h3>
                <div className="ss-sep-01 bg-p mt-3"></div>
                <p className="mt-6 pt-1">
                  Please let us know if you have a question or would like
                  further information about products and services.
                </p>
                <div className="ss-sep-01 ss-sep-full ss-sep-thin bg-s mt-4"></div>
                <h6 className="mt-6">Headquarters Office</h6>
                <h3 className="mt-4">TECH ORIGIN CO., LTD.</h3>
                <div className="grids pt-2">

                  <div className="grid mt-0">
                    <div className="item-card">
                      <div className="icon-wrapper">
                        <MapPin size={20} className="color-p" />
                      </div>
                      <div className="text-wrapper">
                        <p>
                          1 Soi Ramkhamhaeng 166 Yaek 2 <br />
                          Ramkhamhaeng Rd., Minburi <br />
                          Bangkok 10510 Thailand
                        </p>
                      </div>
                    </div>
                    <div className="item-card">
                      <div className="icon-wrapper">
                        <PhoneCall size={20} className="color-p" />
                      </div>
                      <div className="text-wrapper">
                        <p>097 305 2239</p>
                      </div>
                    </div>
                    <div className="item-card">
                      <div className="icon-wrapper">
                        <Briefcase size={20} className="color-p" />
                      </div>
                      <div className="text-wrapper">
                        <p>097 305 2239</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid mt-0">
                    <div className="item-card">
                      <div className="icon-wrapper">
                        <Mail size={20} className="color-p" />
                      </div>
                      <div className="text-wrapper">
                        <p className="item-title">INQUIRIES</p>
                        <p>sarun.seepun@gmail.com</p>
                      </div>
                    </div>
                    <div className="item-card">
                      <div className="icon-wrapper">
                        <Mail size={20} className="color-p" />
                      </div>
                      <div className="text-wrapper">
                        <p className="item-title">INQUIRIES</p>
                        <p>sarun.seepun@gmail.com</p>
                      </div>
                    </div>
                    <div className="item-card">
                      <div className="icon-wrapper">
                        <Mail size={20} className="color-p" />
                      </div>
                      <div className="text-wrapper">
                        <p className="item-title">INQUIRIES</p>
                        <p>sarun.seepun@gmail.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid sm-100 mt-0">
                    <div className="item-card">
                      <div className="icon-wrapper">
                        <Clock size={20} className="color-p" />
                      </div>
                      <div className="text-wrapper">
                        <p>Monday - Friday:from 9:30 - 18:30 hrs.</p>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="ss-sep-01 ss-sep-full ss-sep-thin bg-s mt-6"></div>
              </div>
            </div>

            <div className="grid xl-30 lg-1-3 sm-100 mt-0">
              <div className="panel-right">
                <div className="bg-filter"></div>
                <div className="wrapper">
                  <h3 className="fw-400">Contact Us</h3>
                  <div className="ss-sep-01 bg-p mt-3"></div>
                  <form onSubmit={onSubmit}>
                    <div className="grids pt-2">
                      <div className="grid sm-100">
                        <div className="form-control">
                          <label>First Name <span className="color-danger">*</span></label>
                          <input 
                            type="text" required={true} 
                            value={values.firstname? values.firstname: ''} 
                            onChange={e => onChangeInput('firstname', e.target.value)} 
                          />
                        </div>
                      </div>
                      <div className="grid sm-100">
                        <div className="form-control">
                          <label>Last Name <span className="color-danger">*</span></label>
                          <input 
                            type="text" required={true} 
                            value={values.lastname? values.lastname: ''} 
                            onChange={e => onChangeInput('lastname', e.target.value)} 
                          />
                        </div>
                      </div>
                      <div className="grid sm-100">
                        <div className="form-control">
                          <label>Email <span className="color-danger">*</span></label>
                          <input 
                            type="email" required={true} 
                            value={values.email? values.email: ''} 
                            onChange={e => onChangeInput('email', e.target.value)} 
                          />
                        </div>
                      </div>
                      <div className="grid sm-100">
                        <div className="form-control">
                          <label>Message <span className="color-danger">*</span></label>
                          <textarea 
                            rows="4" required={true} 
                            value={values.message? values.message: ''} 
                            onChange={e => onChangeInput('message', e.target.value)} 
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="btns">
                      <button type="submit"className="btn btn-action btn-p">
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className="map-container">
          <div className="map-wrapper">
            <iframe 
              className="map-iframe" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.7228891893674!2d100.70779571474952!3d13.795571490319082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6151341d39b3%3A0x277078b9e6831ef6!2sBagrenew%20AndSpa!5e0!3m2!1sen!2sth!4v1652858287264!5m2!1sen!2sth" 
              allowFullScreen="" loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  setTopnavActiveIndex: setTopnavActiveIndex,
})(CompanyContact);
