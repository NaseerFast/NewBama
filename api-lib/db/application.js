import { ObjectId } from 'mongodb';
import { dbProjectionUsers } from './user';

export async function findApplicationsById(db, id) {
  const applications = await db
    .collection('applications')
    .aggregate([
      { $match: { _id: new ObjectId(id) } },
      { $limit: 1 },
      {
        $lookup: {
          from: 'users',
          localField: 'creatorId',
          foreignField: '_id',
          as: 'creator',
        },
      },
      { $unwind: '$creator' },
      { $project: dbProjectionUsers('creator.') },
    ])
    .toArray();
  if (!applications[0]) return null;
  return applications[0];
}

export async function findApplications(db, before, by, limit = 10) {
  return db
    .collection('applications')
    .aggregate([
      {
        $match: {
          ...(by && { creatorId: new ObjectId(by) }),
          ...(before && { createdAt: { $lt: before } }),
        },
      },
      { $sort: { _id: -1 } },
      { $limit: limit },
      {
        $lookup: {
          from: 'users',
          localField: 'creatorId',
          foreignField: '_id',
          as: 'creator',
        },
      },
      { $unwind: '$creator' },
      { $project: dbProjectionUsers('creator.') },
    ])
    .toArray();
}

export async function insertApplication(db, {  creatorId, firstname, 
    middlename,lastname, email, gender, dateofbirth, phone, residentialaddress,
    landmark,
    qualification,
    instituition,
    yearofgraduation,
    course,
    certificatefile,
    idtype,
    idnumber,
    idfile, certificatefile: certificateFilePath,
    idfile: idFilePath,  }) {
  const application = {
    
    creatorId,
    firstname, 
    middlename, 
    lastname,
    email,
    gender,
    dateofbirth,
    phone,
    residentialaddress,
    landmark,
    qualification,
    instituition,
    yearofgraduation,
    course,
    certificatefile,
    idtype,
    idnumber,
    idfile,
    certificatefile: certificateFilePath,
    idfile: idFilePath,
    
    createdAt: new Date(),
  };
  const { insertedId } = await db.collection('applications').insertOne(application);
  application._id = insertedId;
  return application;
}
