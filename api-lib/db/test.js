import { ObjectId } from 'mongodb';
import { dbProjectionUsers } from './user';

export async function findTestPostById(db, id) {
  const tests = await db
    .collection('tests')
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
  if (!tests[0]) return null;
  return tests[0];
}

export async function findTestPosts(db, before, by, limit = 10) {
  return db
    .collection('tests')
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

export async function insertTest(db, { content, creatorId }) {
  const test = {
    content,
    creatorId,
    createdAt: new Date(),
  };
  const { insertedId } = await db.collection('tests').insertOne(test);
  test._id = insertedId;
  return test;
}
