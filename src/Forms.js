import React from 'react';

export default function Form() {
  const [formData, setFormData]= React.useState(
    {
      firstName: '',
      lastName: '',
      email: '',
      comments: '',
      isFriendly: true,
      employment: '',
      favColor: ''
    }
  );

  console.log(formData.favColor);

  function handleChange(event){
    setFormData(prevFormData =>{
      const {name,value,type, checked} =event.target;
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      }
    });
  }

  function handlerSubmit(event){
    event.preventDefault();
    console.log('Submit Now', formData)
  }

  return (
    <form className='form' onSubmit={handlerSubmit}>
      <input
        type='text'
        name='firstName'
        placeholder='First Name'
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type='text'
        name='lastName'
        placeholder='Last Name'
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        type='email'
        name='email'
        placeholder='Email'
        onChange={handleChange}
        value={formData.email}
      />
      <textarea
        placeholder='Comments'
        name='comments'
        onChange={handleChange}
        value={formData.comments}
      />
      <div style={{display: 'flex'}}>
        <input
          type='checkbox'
          id='isFriendly'
          name='isFriendly'
          checked={formData.isFriendly}
          onChange={handleChange}
        />
        <label htmlFor='isFriendly'>Are you friendly?</label>
      </div>
      <br/>
      <fieldset style={{display: 'flex'}}>
        <legend>Current employment status</legend>
        <input 
          type='radio'
          id='unemployed'
          name='employment'
          value='unemployed'
          checked={formData.employment === 'unemployed'}
          onChange={handleChange}
        />
        <label htmlFor='unemployed'>Unemployed</label>
        <br/>
        <input 
          type='radio'
          id='part-time'
          name='employment'
          value='part-time'
          checked={formData.employment === 'part-time'}
          onChange={handleChange}
        />
        <label htmlFor='part-time'>Part-time</label>
        <br/>
        <input 
          type='radio'
          id='full-time'
          name='employment'
          value='full-time'
          checked={formData.employment === 'full-time'}
          onChange={handleChange}
        />
        <label htmlFor='full-time'>Full-time</label>
        <br/>
      </fieldset>
      <br/>
      <label htmlFor='favColor'>What is your favorite color?</label>
      <br/>
      <select 
        id='favColor'
        value={formData.favColor}
        onChange={handleChange}
        name='favColor'
      >
        <option value=''>--choose--</option>
        <option value='red'>Red</option>
        <option value='orange'>Orange</option>
        <option value='yellow'>Yellow</option>
      </select>
      <br/>
      <br/>
      <button>Submit</button>
    </form>
  );
}