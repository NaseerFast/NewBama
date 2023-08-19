import { ValidateProps } from '@/api-lib/constants';
import { findPosts, insertPost, findApplications, insertApplication } from '@/api-lib/db';
import { auths, validateBody } from '@/api-lib/middlewares';
import { getMongoDb } from '@/api-lib/mongodb';
import { ncOpts } from '@/api-lib/nc';
import nc from 'next-connect';

const handler = nc(ncOpts);

handler.get(async (req, res) => {
  const db = await getMongoDb();

  const applications = await findApplications(
    db,
    req.query.before ? new Date(req.query.before) : undefined,
    req.query.by,
    req.query.limit ? parseInt(req.query.limit, 10) : undefined
  );

  res.json({ applications });
});

handler.post(
  ...auths,
  validateBody({
    type: 'object',
    properties: {
      // content: ValidateProps.application.content,
      firstname: ValidateProps.application.firstname,
      middlename: ValidateProps.application.middlename,
      email: ValidateProps.application.email,
      gender: ValidateProps.application.gender,
      dateofbirth: ValidateProps.application.dateofbirth,
      phone: ValidateProps.application.phone,
      residentialaddress: ValidateProps.application.residentialaddress,
      landmark: ValidateProps.application.landmark,
      qualification: ValidateProps.application.qualification,
      instituition: ValidateProps.application.instituition,
      yearofgraduation: ValidateProps.application.yearofgraduation,
      course: ValidateProps.application.course,
      certificatefile: ValidateProps.application.certificatefile,
      idtype: ValidateProps.application.idtype,
      idnumber: ValidateProps.application.idnumber,
      idfile: ValidateProps.application.idfile,
    
    },
    required: ['firstname'],
    additionalProperties: true,
  }),
  async (req, res) => {
    if (!req.user) {
      return res.status(401).end();
    }

    const db = await getMongoDb();

    const application = await insertApplication(db, {
      // content: req.body.content,
      creatorId: req.user._id,
      firstname: req.body.firstname,
      middlename: req.body.middlename,
      lastname: req.body.lastname,
      email: req.body.email,
      gender: req.body.gender,
      dateofbirth: req.body.dateofbirth,
      phone: req.body.phone,
      residentialaddress: req.body.residentialaddress,
      landmark: req.body.landmark,
      qualification: req.body.qualification,
      instituition: req.body.insituition,
      yearofgraduation: req.body.yearofgraduation,
      course: req.body.course,
      certificatefile: req.body.certificatefile,   
      idtype: req.body.idtype,
      idnumber: req.body.idnumber,
      idfile: req.body.idfile,
    });

    return res.json({ application });
  }
);

export default handler;
