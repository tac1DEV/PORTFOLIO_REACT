import { TextField } from "../atom/TextField";
import { Button } from "../atom/Button";
import { useState } from "react";

export const CommentForm = ({addComment}) => {
  const [error, setError] = useState(null)
  

  const handleSubmit = (event) =>{
    event.preventDefault();

    const formData =  new FormData(event.target);
    const username = formData.get("username");
    const comment = formData.get("comment");

    if(username.length < 4 || username.length > 20){
      setError("Username must be between 4 and 20 characters");
      return;
    }

    if(comment.length < 10 || comment.length > 100){
      setError("Comment must be between 10 and 100 characters");
      return;
    }

    addComment({username, comment}).then(()=>{
      event.target.reset();
    }).catch((err) =>{
      setError(err);
    })
  }

  return (
    <form 
    onSubmit={handleSubmit}
    className="flex flex-col w-full gap-4 md:px-8">
      <TextField
        label="Commentaire"
        type="text"
        name="username"
        placeholder="Username"
      />

      <TextField
        label="Username"
        name="comment"
        type="text"
        placeholder="Username"
        component="textarea"
      />
      {error ? <p style={{
        color: "#c82a32",
        fontWeight: "bold"
        }}>{error}</p>: null}
      <Button type="submit">Submit</Button>
    </form>
  );
};
