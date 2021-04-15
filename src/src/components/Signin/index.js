import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router';
import { Container, FormButton, FormContent, FormInput, FormLabel, FormWrap, Icon, Text, Form, FormH1 } from './SingElements'

const SignIn = () => {


  const [formData, setFormData] = useState({ emailPer: '', passPer: '' });

  const [redirect, setredirect] = useState(false);



  useEffect(() => {
    getUser();
  }, [])


  async function getUser() {

    try {

      await axios.get('https://pfe-cims.herokuapp.com/user/user', {
        headers: {
          'Content-Type': 'Application/json'
        },
        withCredentials: true
      }).then((res) => {

        var result = res.data;
        console.log(result);



        if (result.auth) {
          console.log('rahi mawjooda');
          // return <Redirect to='/admin/index' />
          setredirect(true);
        } else {
          console.log('rahi false');

          setredirect(false);
        }

      }).catch(error => {
        setredirect(false);
        alert(`error:: ${error}`);
      })

    } catch (error) {
      console(`erroer user:: ${error}`);
      setredirect(false)

    }


  }




  async function submit(event) {
    event.preventDefault();
    try {
      await axios.post('https://pfe-cims.herokuapp.com/user/login', formData, {
        headers: {
          'Content-Type': 'Application/json'
        },
        withCredentials: true
      }).then(res => {
        console.log(res.status)
        if (res.status == 404) {
          console.log('Error 404');

        }
      });
      setredirect(true);
      // return <Redirect to='/admin/index' />
      console.log('request 1');
      //  alert('Login Success');
      // <Redirect to='/admin/index' />
    } catch (error) {
      // console.log(`request 0:  ${error}`);

      alert(`Error :: ${error.response.data.message}`);
    }
  }

  if (redirect) {
    return <Redirect to='/admin/index' />
  }


  return (
    <>
      <Container style={{ background: '#FFF', overflow: 'scroll' }}>
        <FormWrap >
          <Icon to="/"></Icon>
          <FormContent>
            <Form onSubmit={submit}>
              <FormH1>Connectez-vous à votre compte</FormH1>
              <FormLabel htmlFor='for'>E-mail</FormLabel>
              <FormInput name='email' type='email' required onChange={e => setFormData({ ...formData, emailPer: e.target.value })} />
              <FormLabel htmlFor='for'>Mot de passe</FormLabel>
              <FormInput name='pw' type='password' required onChange={e => setFormData({ ...formData, passPer: e.target.value })} />
              <FormButton type='submit'>connexion</FormButton>
              <Text >Mot de passe oublié</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>

    </>
  )
}

export default SignIn
