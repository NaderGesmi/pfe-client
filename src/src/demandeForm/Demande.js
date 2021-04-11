import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Demande() {


  async function onSubmit() {


    try {

    } catch (error) {

    }
  }
  return (
    <div>
      <div className='container' style={{ width: '50%' }}>
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
              /*  onChange={this.changeName}
                value={this.state.fullName} */
              className='form-control form-group' />

            <input type='text' placeholder="Prenom"
              /*  onChange={this.changePrenom}
               value={this.state.fullName} */
              className='form-control form-group' />

            <input type='text' placeholder="email"
              /*  onChange={this.changeEmail}
               value={this.state.email} */
              className='form-control form-group' />

            <input type='text' placeholder="Theme"
              /*  onChange={this.changeTheme}
               value={this.state.theme} */
              className='form-control form-group' />

            <input type='submit' className='btn btn-success btn-block' value='Envoyer' />
            <input type='reset' className='btn btn-danger btn-block' value='Réinitialiser' />

          </form>
        </div>
      </div>
    </div>
  )
}

export default Demande
