import { Spacer } from '@/components/Layout';
import styles from './Feed.module.css';
import ApplicationForm from './ApplicationForm';
import PostList from './PostList';

export const Feed = () => {
  return (
    <div className={styles.root}>
      <Spacer size={1} axis="vertical" />
      <ApplicationForm />
      {/* <PostList /> */}
    </div>
  );
};