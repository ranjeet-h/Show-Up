import React from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from './../../../common/form/TextInput';
import { connect } from 'react-redux';
import { login } from '../authActions';

const actions = {
  login
}

const LoginForm = ({login, handleSubmit}) => {
  return (
    <Form error size="large" onSubmit={handleSubmit(login)}>
      <Segment>
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="password"
        />
        <Button fluid size="large" style={{ backgroundColor: "#FCAF45" }}>
          Login
        </Button>
      </Segment>
    </Form>
  );
};

export default connect(null, actions)(reduxForm({form: 'loginForm'})(LoginForm));