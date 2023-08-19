import { ValidateProps } from '@/api-lib/constants';
import { findPosts, insertPost, findTestPosts, insertTest, findApplications, insertApplication } from '@/api-lib/db';
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
      content: ValidateProps.application.content,
    },
    required: ['content'],
    additionalProperties: false,
  }),
  async (req, res) => {
    if (!req.user) {
      return res.status(401).end();
    }

    const db = await getMongoDb();

    const application = await insertApplication(db, {
      content: req.body.content,
      creatorId: req.user._id,
    });

    return res.json({ application });
  }
);

export default handler;
