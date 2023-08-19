import { ObjectId } from 'mongodb';
import { dbProjectionUsers } from './user';

export async function findUploadId(db, id) {
  const uploads = await db
    .collection('uploads')
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
  if (!uploads[0]) return null;
  return uploads[0];
}

export async function findUploads(db, before, by, limit = 10) {
  return db
    .collection('uploads')
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

export async function insertUpload(db, 
    {  creatorId, firstname, middlename}){

        const upload = {
    
            creatorId,
            firstname, 
            middlename, 
            // lastname,  
            // email,
            // gender,
            // dateofbirth,
            // phone,
            // alternatephone,
            // residentialaddress,
            // landmark,
            // qualification,
            // instituition,
            // yearofgraduation,
            // course,
            // certificatefile,
            // idtype,
            // idnumber,
            // idfile,
            createdAt: new Date(),
} ;
   
  
  const { insertedId } = await db.collection('uploads').insertOne(upload);
  upload._id = insertedId;
  return upload;
}