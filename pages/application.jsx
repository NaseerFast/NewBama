// import ApplicationForm from '@/page-components/Application/ApplicationForm';
// import { SignUp } from '@/page-components/Auth';
// import Head from 'next/head';

// const ApplicationPage = () => {
//   return (
//     <>
//       <Head>
//         <title>Application Form</title>
//       </Head>
//       <ApplicationForm />
//     </>
//   );
// };


// import { Feed } from '@/page-components/TestFeed';

import { Feed } from '@/page-components/ApplicantPage';
import Head from 'next/head';

const ApplicationPage = () => {
  return (
    <>
      <Head>
        <title>Applicant Page</title>
      </Head>
      <Feed />
    </>
  );
};

export default ApplicationPage;
