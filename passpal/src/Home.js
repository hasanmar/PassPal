import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center mb-4" style={{ fontFamily: 'Roboto', color: '#0C70A5' }}>Welcome to PassPal</h1>
        <div className="row">
          <div className="col-md-6">
            <p className="fs-5" style={{ fontFamily: 'Open Sans', color: '#666' }}>
              PassPal is a highly useful and secure password manager application designed to help individuals store and manage their passwords effectively. The app is designed to provide a highly intuitive user interface that makes it easy for users to organize and manage their passwords in a safe and secure manner.
            </p>
            <p className="fs-5" style={{ fontFamily: 'Open Sans', color: '#666' }}>
              PassPal allows users to store passwords for a wide range of accounts, including social media, banking, and email accounts. The app also has a password generator feature that creates highly secure passwords that are difficult to hack. PassPal uses advanced encryption technology to ensure that user data is fully protected at all times.
            </p>
          </div>
          <div className="col-md-6">
             <img src="Data_security_271-1140x570.jpg" alt="PassPal App" className="img-fluid rounded" style={{ float: 'right', width: '100%', height: 'auto', marginRight: '0px' }} />
          </div>

        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <p className="fs-5" style={{ fontFamily: 'Open Sans', color: '#666' }}>
              Users can access their passwords from any device and can also share passwords with trusted family members or friends. With PassPal, users can say goodbye to the hassle of remembering multiple passwords and instead focus on keeping their online identities secure.
            </p>
          </div>
          <div className="col-md-6">
            <p className="fs-5" style={{ fontFamily: 'Open Sans', color: '#666' }}>
              Get started today and take the first step towards a more secure online experience. Download PassPal from the App Store or Google Play, or visit our website for more information.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
