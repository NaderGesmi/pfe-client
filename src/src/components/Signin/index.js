import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router';
import { Container, FormButton, FormContent, FormInput, FormLabel, FormWrap, Icon,Text,Form,FormH1 } from './SingElements'

const SignIn = () => {


    const [formData, setFormData] = useState({emailPer:'', passPer: ''});

const [redirect, setredirect] = useState(false);



useEffect(() => {
    getUser();
}, [])


async function getUser(){

    try {
    
      await axios.get('http://localhost:5000/user/user',  {
        headers: {
          'Content-Type': 'Application/json'
        },
        withCredentials: true
      }).then( (res)=>{
  
     var result = res.data;
     console.log(result);
      if(res.data.hasOwnProperty('_id')){
        console.log('rahi mawjooda');
        setredirect(true);
      }else{
        console.log('rahi false');
  
        setredirect(false);
      }
  
    }).catch(error =>{
      setredirect(false);
      alert(`error:: ${error}`);
    })
  
    } catch (error) {
    console(`erroer user:: ${error}`);  
    setredirect(false)
  
    }
  
    
  }
  



async function submit(event){
event.preventDefault();
try {
    await axios.post('http://localhost:5000/user/login', formData,  {
        headers: {
          'Content-Type': 'Application/json'
        },
        withCredentials: true
      });
      setredirect(true);
    console.log('request 1');
  //  alert('Login Success');
   // <Redirect to='/admin/index'/>
} catch (error) {
    console.log(`request 0:  ${error}`);

//    alert(`Error :: ${error}`);
}
}

if (redirect) {
    return <Redirect to='/admin/index' />
}


    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/"></Icon>
                <FormContent>
                    <Form onSubmit={submit}>
                        <FormH1>Connectez-vous à votre compte</FormH1>
                        <FormLabel htmlFor='for'>E-mail</FormLabel>
                        <FormInput name='email' type='email' required  onChange={e=> setFormData({...formData, emailPer: e.target.value})}/>
                        <FormLabel htmlFor='for'>Mot de passe</FormLabel>
                        <FormInput name='pw' type='password' required  onChange={e=> setFormData({...formData, passPer: e.target.value})}/>
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
