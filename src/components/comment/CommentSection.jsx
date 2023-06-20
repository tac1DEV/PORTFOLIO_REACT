import { SectionWrapper } from '../atom/SectionWrapper';
import { Comment } from './Comment';
import { CommentForm } from './CommentForm';
import { useFetch } from './../../hooks/useFetch';
import { commentsUrl } from '../../lib/api-url';
import { Loader } from '../atom/Loader/Loader';

export const CommentSection = () => {

  const {
    data: comments,
    run,
    error,
    isResolved,
    isLoading,
    isIdle,
    isRejected
  } = useFetch(commentsUrl);

  const addComment = (comment) => {
    return fetch(
      commentsUrl, {
        method: "POST",
        body: JSON.stringify(comment),
      })
        .then(async (res) =>{
      const json = await res.json();

      if(res.ok){
        run();
        return json;
      }else{
        Promise.reject(json.error);
      }
    })
  }

  return (
    <SectionWrapper title="On est à l'époque de FaceBook ?">
      <div className="flex flex-col items-center w-full max-w-2xl gap-8 m-auto ">
          {isLoading || isIdle ? <Loader /> : null}
        <div className="grid justify-center w-full gap-4 grid-cols-auto-fill-200-300">
          {isResolved 
            ? comments.map(comment =>(
            <Comment {...comment} key={comment.id} />
          )):null}
          {isRejected ? <p>{String(error)}</p>: null}
        </div>
        <CommentForm addComment={addComment}/>
      </div>
    </SectionWrapper>
  );
};
