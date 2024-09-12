import { useContext, useEffect } from 'react';
import { PostsContext } from '../../contexts/PostsProviders/context';
import { loadPosts } from '../../contexts/PostsProviders/actions';

export const Posts = () => {
  const postsContext = useContext(PostsContext);
  // eslint-disable-next-line no-unused-vars
  const { postsState, postsDispatch } = postsContext;

  useEffect(() => {
    loadPosts(postsDispatch);
  }, [postsDispatch]);

  return (
    <div>
      <h1>POSTS</h1>
      {postsState.posts.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
};
