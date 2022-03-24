import React, { useState } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addFullName, } from './state/action-creators';
// import {countries} from 'country-data';


function App(props) {
  const { addName, addProbability } = props
  const [setter, setSetter] = useState(false)
  const [fullName, setName] = useState({
    name: ""
  });
  //get country name from country code
  const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
  const newCountry = regionNamesInEnglish.of(addName);


  //handling input value change
  const handleChange = (e) => {
    console.log(`value ${e.target.value} name: ${e.target.name}`)
    setName({
      ...fullName,
      [e.target.name]: e.target.value
    });
  }
  //submit name to state
  const handleSubmit = (e) => {
    e.preventDefault()
    setSetter(true)
    props.addFullName({
      ...fullName,
      [e.target.name]: e.target.value
    })
  }
  //reset
  const resetHandler = () => {
    return setSetter(false)
  }

  const { name } = fullName
  return (
    <>
    <form 
      id='cool-form'
      onSubmit={handleSubmit}
      >
      <h2>Enter your name and get your nationality. NO SPACES!</h2>
      <div className='diverrors'>
        <div>Errors will appear here</div>
      </div>
      <label>Enter your name&nbsp;
        <input
          value= {name}
          name='name'
          type='text'
          id='name-input'
          onChange={handleChange}
        />
      </label>
      <button 
        id="submit"
        onClick={handleSubmit}>Submit</button>
    </form>
    <button
        onClick={resetHandler}
      >Start Again</button>
    {
      setter ? <h4>Hi , { fullName.name }, there is a { (addProbability*100).toFixed(2) }% probability that you might be from : { newCountry } </h4> :
      <h4>Enter your name and get your nationality. Is it magic? Maybe</h4>
    }
    </>
  );
}

const mapStateToProps = state => {
  return {
    addName: state.addName,
    addProbability: state.addProbability
  }
}

export default connect(mapStateToProps, {addFullName}) (App);