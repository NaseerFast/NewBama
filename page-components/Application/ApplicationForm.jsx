import { Avatar } from '@/components/Avatar';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import Select from '@/components/Input/Select';
import FileUpload from '@/components/Input/FileUpload';
import { Container, Wrapper } from '@/components/Layout';
import { LoadingDots } from '@/components/LoadingDots';
import { Text, TextLink } from '@/components/Text';
import { fetcher } from '@/lib/fetch';
import { usePostPages } from '@/lib/post';
import { useUploadPages } from '@/lib/upload';
import { useCurrentUser } from '@/lib/user';
import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import styles from './Application.module.css';
import DateInput from '@/components/Input/DateInput';

const ApplicationFormInner = ({ user }) => {
  
  const firstNameRef = useRef();
  const middleNameRef = useRef();
//   const lastNameRef = useRef();
//   const emailRef = useRef();
//   const genderRef = useRef();
//   const dateofBirthRef = useRef();
//   const phoneRef = useRef();
// //   const alternatePhoneRef = useRef();
//   const residentialAddressRef = useRef();
//   const landMarkRef = useRef();
//   const qualificationTypeRef = useRef();
//   const instituitionRef = useRef();
//   const yearOfGraduationRef = useRef();
//   const qualificationRef = useRef();
//   const courseRef = useRef();
//   const certificateFileRef = useRef();
//   const idTypeRef = useRef();
//   const idNumberRef = useRef();
//   const idFileRef = useRef();

  const [isLoading, setIsLoading] = useState(false);

  const { mutate } = useUploadPages();

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        setIsLoading(true);
        await fetcher('/api/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            

            firstname: firstNameRef.current.value,
            middlename: middleNameRef.current.value,
            // lastname: lastNameRef.current.value,
            // email: emailRef.current.value,
            // gender: genderRef.current.value,
            // dateofbirth: dateofBirthRef.current.value,
            // phone: phoneRef.current.value,
            // // alternatephone: alternatePhoneRef.current.value,
            // residentialaddress: residentialAddressRef.current.value,
            // landmark: landMarkRef.current.value,
            // qualification: qualificationRef.current.value,
            // insituition: instituitionRef.current.value,
            // yearofgraduation:yearOfGraduationRef.current.value,
            // course: courseRef.current.value,
            // certificatefile: certificateFileRef.current.value,
            // idtype: idTypeRef.current.value,
            // idfile: idFileRef.current.value,
            // idnumber: idNumberRef.current.value,
        
        }),
        });
        toast.success('You have posted successfully');
       
        firstNameRef.current.value = '';
        middleNameRef.current.value = '';
        // lastNameRef.current.value = '';
        // emailRef.current.value = '';
        // genderRef.current.value = '';
        // dateofBirthRef.current.value = '';
        // phoneRef.current.value = '';
        // // alternatePhoneRef.current.value = '';
        // residentialAddressRef.current.value = '';
        // landMarkRef.current.value = '';
        // qualificationRef.current.value = '';
        // instituitionRef.current.value = '';
        // yearOfGraduationRef.current.value = '';
        // courseRef.current.value = '';
        // certificateFileRef.current.value = '';
        // idTypeRef.current.value = '';
        // idFileRef.current.value = '';
        // idNumberRef.current.value = '';
        // refresh post lists
        mutate();
      } catch (e) {
        toast.error(e.message);
      } finally {
        setIsLoading(false);
      }
    },
    [mutate]
  );

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
      <form className="application-form">
        <div className="form-card">
          <h2>Personal Details</h2>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <Input
                ref={firstNameRef}
              className={styles.input}
              placeholder={'First Name '}
              ariaLabel={'First Name'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="middleName">Middle Name</label>
            <Input
                ref={middleNameRef}
              className={styles.input}
              placeholder={'Middle Name'}
              ariaLabel={'Middle Name'}
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <Input
                ref={lastNameRef}
              className={styles.input}
              placeholder={'Last Name'}
              ariaLabel={'Last Name'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Input
                ref={emailRef}
              className={styles.input}
              placeholder={'Email'}
              ariaLabel={'Email'}
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

            <DateInput
              label="Select a Date"
              placeholder="YYYY-MM-DD"
              autoComplete="off"
              ref={dateofBirthRef}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <Input
                ref={phoneRef}
              className={styles.input}
              placeholder={'Phone number'}
              ariaLabel={'Phone number'}
            />
          </div>

          {/* <div className="form-group">
            <label htmlFor="altphone">Alternate Phone Number</label>
            <Input
              ref={alternatePhoneRef}
              className={styles.input}
              placeholder={'Alternate Phone number'}
              ariaLabel={'Alternate Phone number'}
            />
          </div> */}
          {/* ... other personal details fields 
        </div>

        <div className="form-card">
          <h2>Residential Details</h2>
          <div className="form-group">
            <label htmlFor="residentialAddress">Residential Address</label>
            <Input
                ref={residentialAddressRef}
              className={styles.input}
              placeholder={'Residential Address '}
              ariaLabel={'Residential Address'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="landMark">Land Mark </label>
            <Input
              ref={landMarkRef}
              className={styles.input}
              placeholder={'Closest Land Mark  '}
              ariaLabel={'Closest Land Mark'}
            />
          </div>
          {/* ... other experience fields *
        </div>

        <div className="form-card">
          <h2>Educational Background</h2>
          <div className="form-group">
            <label htmlFor="education">Education</label>
            <Select
               ref={qualificationTypeRef}
              options={qualification}
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
              placeholder={'Name of instituition '}
              ariaLabel={'Name of instituition'}
            />
          </div>
          <div className="form-group">
            <label htmlFor="courseOfStudy">Course Of Study</label>
            <Input
                ref={courseRef}
              className={styles.input}
              placeholder={'Course Of Study '}
              ariaLabel={'Course Of Study'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="yearOfGraduation">Year of Graduation</label>
            <Input
                ref={yearOfGraduationRef}
              className={styles.input}
              placeholder={'Year of Graduation '}
              ariaLabel={'Year of Graduation'}
            />
          </div>

          <div className="form-group">
            {/* <label htmlFor="courseOfStudy">Upload Certificate </label> *
            <FileUpload
              ref={certificateFileRef}
              label="Upload your Certificate"
              htmlType="file"
              accept="image/*"
              onChange={(event) => {
                const selectedFile = event.target.files[0];
                // Do something with the selected file
              }}
            />
          </div>
          {/* ... other education fields *
        </div>

        <div className="form-card">
          <h2>Identification</h2>
          <div className="form-group">
            <Select
              ref={idTypeRef}
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
                ref={idNumberRef}
              className={styles.input}
              placeholder={'ID Number  '}
              ariaLabel={'ID Number'}
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="idNumber">Upload ID </label> *
            <FileUpload
              ref={idFileRef}
              label="Upload your ID"
              htmlType="file"
              accept="image/*"
              onChange={(event) => {
                const selectedFile = event.target.files[0];
                // Do something with the selected file
              }}
            />
          </div> 
          */}
          {/* ... other identification fields */}
        </div>

        <button type="submit">Submit Application</button>
      </form>
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

const ApplicationForm = () => {
  const { data, error } = useCurrentUser();
  const loading = !data && !error;

  return (
    <Wrapper>
      <div className={styles.root}>
        <h3 className={styles.heading}>Share your thoughts</h3>
        {loading ? (
          <LoadingDots>Loading</LoadingDots>
        ) : data?.user ? (
          <ApplicationFormInner user={data.user} />
        ) : (
          <Text color="secondary">
            Please{' '}
            <Link href="/login" passHref>
              <TextLink color="link" variant="highlight">
                sign in
              </TextLink>
            </Link>{' '}
            to post
          </Text>
        )}
      </div>
    </Wrapper>
  );
};

export default ApplicationForm;
