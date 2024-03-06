// store.js
import { createStore } from 'redux';

const initialState = {
  user: {
    name: 'John Doe',
    country: 'USA',
    gender: 'Male',
    pan: 'ABCDE1234F',
    education: {
      tenth: { instituteName: 'ABC School', cgpa: 9.5 },
      higherSecondary: { instituteName: 'XYZ College', cgpa: 9.2 },
      graduation: { instituteName: 'University of ABC', cgpa: 8.8 },
    },
    certifications: ['Certification 1', 'Certification 2'],
  },
};

const reducer = (state = initialState, action) => {
  // Reducer logic goes here
  return state;
};

const store = createStore(reducer);

export default store;
