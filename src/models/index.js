// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Gender = {
  "BOY": "BOY",
  "GIRL": "GIRL"
};

const { Update, Member } = initSchema(schema);

export {
  Update,
  Member,
  Gender
};