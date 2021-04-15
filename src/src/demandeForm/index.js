import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function DemandeForm() {

  const [formData, setFormData] = useState({ nomDem: '', prenomDem: '', emailDem: '', themeDem: '', confDem: 'yes', etatDem: 4, rmsqDem: 'ggg', })


  async function onSubmit(e) {
    e.preventDefault();

    console.log(formData);

    try {
      var result = await axios.post('https://pfe-cims.herokuapp.com/request/', formData);

      alert('Success');
    } catch (error) {
      alert(`Erroe: ${error} `);
    }
  }
  return (
    <div>
      <div className='container'>
        <div className='form-div'>
          <form onSubmit={onSubmit}>
            <select class="form-select" aria-label="Disabled select example" disabled>
              <option selected>Ouvrez ce menu de sélection</option>
              <option >   </option>

            </select>
            <select class="form-select" aria-label="Disabled select example" >
              <option selected>Ouvrez ce menu de sélection</option>
              <option  > </option>

            </select>
            <input type='text' placeholder="nom"
              onChange={(e) => setFormData({ ...formData, nomDem: e.target.value })}
              /*   value={this.state.fullName} */
              className='form-control form-group' />

            <input type='text' placeholder="Prenom"
              /*  onChange={this.changePrenom}
               value={this.state.fullName} */
              onChange={(e) => setFormData({ ...formData, prenomDem: e.target.value })}

              className='form-control form-group' />

            <input type='text' placeholder="email"
              /*  onChange={this.changeEmail}
               value={this.state.email} */
              onChange={(e) => setFormData({ ...formData, emailDem: e.target.value })}

              className='form-control form-group' />

            <input type='text' placeholder="Theme"
              /*  onChange={this.changeTheme}
               value={this.state.theme} */
              onChange={(e) => setFormData({ ...formData, themeDem: e.target.value })}

              className='form-control form-group' />

            <input type='submit' className='btn btn-success btn-block' value='Envoyer' />
            <input type='reset' className='btn btn-danger btn-block' value='Réinitialiser' />

          </form>
        </div>
      </div>
    </div>
  )
}



export default DemandeForm;

