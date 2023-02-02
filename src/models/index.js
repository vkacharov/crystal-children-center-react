// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Update, Member } = initSchema(schema);

export {
  Update,
  Member
};