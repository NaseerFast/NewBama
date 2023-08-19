import { Spacer } from '@/components/Layout';
import styles from './ApplicantPage.module.css';

import ApplicationPoster from './ApplicationPoster';

export const Feed = () => {
  return (
    <div className={styles.root}>
      <Spacer size={1} axis="vertical" />
      {/* <Poster /> */}
      <ApplicationPoster />
      {/* <PostList /> */}
    </div>
  );
};
