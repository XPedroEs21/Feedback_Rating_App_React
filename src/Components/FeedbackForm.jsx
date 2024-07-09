import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {                                //App for feedback form for survey, contains 3 inputs for name, email and feedback and a submit button
  const[formData, setFormData] = useState({
  name: '',
  email: '',
  feedback: '',
  rating: ''
  });

  const handleChange = (event) => {                         //This line declares a constant named handleChange and assigns it an arrow function. The function takes an event parameter, representing the event triggered by the user's interaction with an input element.
    const {name, value} = event.target;                     //This line extracts the name and value properties from the event object's target property. The target property refers to the DOM element that triggered the event, which, in this case, is an input field. The name property corresponds to the 'name' attribute of the input field, while the value property represents the current 'value' entered by the user into the input field.
    setFormData({                                           //The setFormData function is a state updater function provided by React's useState hook to update the state variable formData. It spreads the existing formData object and then updates the property specified by the 'name' variable with the new value. This pattern ensures that the state is updated immutably, meaning a new object is created with the updated property rather than modifying the existing state directly.
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();                                 //This template constructs a confirmation message using the data from the formData object. It includes the name, email, and feedback fields the user enters.
    const confirmationMessage = `                         
    Name: ${formData.name}
    Email: ${formData.email}
    Feedback: ${formData.feedback}
    Rating: ${formData.rating}
    `;
  const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);   //This line displays a confirmation dialog using the window.confirm(), presenting the confirmationMessage to the user. If the user confirms the details in the dialog, isConfirmed is set to true; otherwise, it's set to false.
  if (isConfirmed){                                         //This conditional statement checks if the user has confirmed their details by clicking "OK" in the confirmation dialog.
    console.log('Submitting feedback:', formData);
    setFormData({                                           //The setFormData function is called to reset the formData state to empty values, clearing the form fields after submission.
      name: '',
      email: '',
      feedback: '',
      rating: ''
    });
    alert('Thank you for your valuable feedback!');         //After resetting the form, an alert is displayed to the user thanking them for their feedback.
    }
  };

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        
        <input 
          type='text'
          name='name'
          placeholder='Your Name'
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type='email'
          name='email'
          placeholder='Your Email'
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name='feedback'
          placeholder='Your Feedback'
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>

        <div style={{display:'flex',gap:'10px',flexDirection:'column'}}> {/*Has the section for the rating buttons, with the style CSS in line*/}
          <span>Rate Us:</span>
         
          <p><input 
          type='radio'
          name='rating'
          value="1"
          onChange={handleChange}
          />1</p>

          <p><input 
          type='radio'
          name='rating'
          value="2"
          onChange={handleChange}
          />2</p>

          <p><input 
          type='radio'
          name='rating'
          value="3"
          onChange={handleChange}
          />3</p>

          <p><input 
          type='radio'
          name='rating'
          value="4"
          onChange={handleChange}
          />4</p>

          <p><input 
          type='radio'
          name='rating'
          value="5"
          onChange={handleChange}
          />5</p>
        </div>

        <button type='submit'>Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
