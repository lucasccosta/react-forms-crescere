import React, { Component} from 'react'
import { Field, reduxForm} from 'redux-form'

//Component
let InitForm = (props) =>{
    return (
      <div>
        <form action=''>
          <div>
              <label htmlFor=''></label>
            <Field
            name='name'
            placeholder='Enter your name'
            type='text'
            component='input'
            />
          </div>
        </form>
      </div>
    )
  }
  
  // Config
 export default reduxForm({
    form: 'initForm'
  })(InitForm)