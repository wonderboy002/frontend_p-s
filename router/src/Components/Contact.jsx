import React from "react";
import TextField from "@mui/material/TextField";
function Contact() {
  return (
    <div className="contactForm flex my-10 items-center justify-center p-3 gap-8">
      <div className="img w-[500px] h-full">
        <img src="https://static.vecteezy.com/system/resources/previews/004/759/051/non_2x/teamwork-or-partnership-for-business-success-innovation-or-creativity-to-solve-problem-brainstorm-or-connect-idea-concept-businessman-team-members-partner-connect-lightbulb-jigsaw-puzzle-together-vector.jpg" alt="" />
      </div>
     <div className="fields flex flex-col flex-wrap gap-3">
     <TextField  id="outlined-basic" label="Enter Your First Name" variant="outlined"/>
      <TextField id="outlined-basic" label="Enter Your Last Name" variant="outlined"/>
      <TextField id="outlined-basic" type="password" label="Enter Your Password" variant="outlined"/>
      <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Say Hello!!!"
        />
        <button className="bg-blue-500 p-2 font-bold rounded-md text-white hover:bg-black hover:text-white">Contact Us</button>
     </div>
    </div>
  );
}

export default Contact;
