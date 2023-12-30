import React, {useState} from 'react'

function RsvpForm() {
  const [name, setName] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState('');
  const [BrideOrGroom,setBrideOrGroom] = useState('');
  const [GoOrNot,setGoOrNot] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all required fields are filled before submitting
    if (name && numberOfGuests && BrideOrGroom && GoOrNot) {
      // Perform the action to submit the form data (e.g., API call)
      console.log('Form submitted:', { name, numberOfGuests, BrideOrGroom, GoOrNot });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
        <div className='RsvpForm'>
            <form >
                <h1 className='RSVPTitle'>RSVP</h1>
                <div className='FormContainer'>
                    <ul className='BrideOrGroom'>
                        <li><button type='button' onClick={() => {setBrideOrGroom('Bride')}} >Bride</button></li>
                        <li><button type='button' onClick={() => {setBrideOrGroom('Groom')}}>Groom</button></li>
                    </ul>
                    <label>
                        Name: <br/>
                        <input value={name} onChange={({target}) => {setName(target.value)}} className='GuestName'/>
                    </label>
                    <br/>
                    <label>
                        Number of Guests: <br/>
                        <input value={numberOfGuests} onChange={({target}) => {setNumberOfGuests(target.value)}}  className='GuestsNumber'/>
                    </label>
                    <ul className='GoOrNot'>
                        <li><button type='button' onClick={() => {setGoOrNot('Yes')}}>Yes</button></li>
                        <li><button type='button' onClick={() => {setGoOrNot('No')}}>No</button></li>
                        <li><button type='button' onClick={() => {setGoOrNot('Maybe')}}>Maybe</button></li>
                    </ul>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default RsvpForm;