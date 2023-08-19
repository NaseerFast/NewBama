// pages/index.js
import React from 'react';
import Head from 'next/head';
import { Input } from '@/components/Input';
import styles from '../page-components/Application/Application.module.css';
import Select from '@/components/Input/Select';
import FileUpload from '@/components/Input/FileUpload';

const Home = () => {

  const gender = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },

  ];

  const qualification = [
    
    { label: 'BSC', value: 'BSC' },
    { label: 'NCE', value: 'Nce' },
  ];

  const idtype = [
    
    { label: 'NATIONAL ID', value: 'NIN' },
    { label: 'DRIVERS LISCENCE', value: 'LISCENCE' },
  ];
  return (
    <div className="container">
      <Head>
        <title>Job Application Portal</title>
        <meta name="description" content="Apply for your dream job today!" />
      </Head>

      <main>
        <h1>Welcome to the Job Application Portal</h1>
        <form className="application-form">
          <div className="form-card">
            <h2>Personal Details</h2>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <Input
          ref={firstNameRef}
          className={styles.input}
          placeholder={"Last Name "}
          ariaLabel={"What's on your mind, ${user.name}?"}
        />
            </div>

            <div className="form-group">
              <label htmlFor="middleName">Middle Name</label>
              <Input
          ref={middleNameRef}
          className={styles.input}
          placeholder={"What's on your mind, ${user.name}?"}
          ariaLabel={"What's on your mind, ${user.name}?"}
        />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <Input
          ref={lastNameRef}
          className={styles.input}
          placeholder={"Last Name"}
          ariaLabel={"Last Name"}
        />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Input
        //   ref={contentRef}
          className={styles.input}
          placeholder={"Email"}
          ariaLabel={"Email"}
        />
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <Select
       ref={genderRef}
        options={gender}
        size="large" // Optional: You can customize the size class
        ariaLabel="Select Box"
        required
        defaultValue="option2" // Optional: Set the default selected value
      />
        
            </div>

            <div className="form-group">
              <label htmlFor="dateofbirth">Date Of Birth</label>
              <Input
          ref={dateOfBirthRef}
          className={styles.input}
          placeholder={"Date of birth"}
          ariaLabel={"Date of birth"}
        />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <Input
          ref={phoneRef}
          className={styles.input}
          placeholder={"Phone number"}
          ariaLabel={"Phone number"}
        />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Alternate Phone Number</label>
              <Input
          ref={alternatePhoneRef}
          className={styles.input}
          placeholder={"Alternate Phone number"}
          ariaLabel={"Alternate Phone number"}
        />
            </div>
            {/* ... other personal details fields */}
          </div>

          <div className="form-card">
            <h2>Residential Details</h2>
            <div className="form-group">
              <label htmlFor="residentialAddress">Residential Address</label>
              <Input
          ref={residentialAddressRef}
          className={styles.input}
          placeholder={"Residential Address "}
          ariaLabel={"Residential Address"}
        />
            </div>

            <div className="form-group">
              <label htmlFor="residentialAddress">Land Mark </label>
              <Input
          ref={landmark}
          className={styles.input}
          placeholder={"Closest Land Mark  "}
          ariaLabel={"Closest Land Mark"}
        />
            </div>
            {/* ... other experience fields */}
          </div>

          <div className="form-card">
            <h2>Educational Background</h2>
            <div className="form-group">
              <label htmlFor="education">Education</label>
              <Select
       
       options={qualification}
       ref={qualificationRef}
       size="large" // Optional: You can customize the size class
       ariaLabel="Qualification"
       required
       defaultValue="option2" // Optional: Set the default selected value
     />
            </div>


             <div className="form-group">
              <label htmlFor="Institution">Institution</label>
              <Input
          ref={instituitionRef}
          className={styles.input}
          placeholder={"Name of instituition "}
          ariaLabel={"Name of instituition"}
        />
            </div>
            <div className="form-group">
              <label htmlFor="courseOfStudy">Course Of Study</label>
              <Input
        //   ref={contentRef}
          className={styles.input}
          placeholder={"Course Of Study "}
          ariaLabel={"Course Of Study"}
        />
            </div>

            <div className="form-group">
              <label htmlFor="yearOfGraduation">Year of Graduation</label>
              <Input
          ref={yearOfGraduationRef}
          className={styles.input}
          placeholder={"Year of Graduation "}
          ariaLabel={"Year of Graduation"}
        />
            </div>

            <div className="form-group">
              {/* <label htmlFor="courseOfStudy">Upload Certificate </label> */}
              <FileUpload
  label="Upload your Certificate"
  ref={certificateFileRef}
  htmlType="file"
  accept="image/*"
  onChange={(event) => {
    const selectedFile = event.target.files[0];
    // Do something with the selected file
  }}
/>






            </div>
            {/* ... other education fields */}
          </div>

          <div className="form-card">
            <h2>Identification</h2>
            <div className="form-group">
            <Select
       
       options={idtype}
       size="large" // Optional: You can customize the size class
       ariaLabel="Type of ID"
       required
       defaultValue="option2" // Optional: Set the default selected value
     />
            </div>
            <div className="form-group">
              <label htmlFor="idNumber">ID Number </label>
              <Input
        //   ref={contentRef}
          ref={idNumberRef}
          className={styles.input}
          placeholder={"ID Number  "}
          ariaLabel={"ID Number"}
        />
            </div>
            <div className="form-group">
              {/* <label htmlFor="idNumber">Upload ID </label> */}
              <FileUpload
  label="Upload your ID"
  htmlType="file"
  accept="image/*"
  onChange={(event) => {
    const selectedFile = event.target.files[0];
    // Do something with the selected file
  }}
/>
            </div>
            {/* ... other identification fields */}
          </div>

          <button type="submit">Submit Application</button>
        </form>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Job Application Portal</p>
      </footer>

      <style jsx>{`
        /* Your existing styles here */
        .application-form {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
        }

        .form-card {
          margin-bottom: 2rem;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
          background-color: white;
        }

        h2 {
          margin-bottom: 1rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: bold;
        }

        input {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 5px;
        }

        button {
          display: block;
          margin: 0 auto;
          padding: 0.75rem 2rem;
          font-size: 1.2rem;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Home;
