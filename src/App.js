import logo from './logo.svg';
import './App.css';

import {i18n} from "./dict.js"; 
import "primereact/resources/themes/md-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import { localeOption, addLocale } from 'primereact/api';  //localização

import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Toast} from 'primereact/toast';

import {useState, useRef } from 'react';

function App() {
  
  const [text, setText] = useState('');
  const toast = useRef();
  const [localidade, setLocalidade] = useState('en')
  
    addLocale('es', i18n);

  return (
    <div className="App p-input-filled">
      <Toast ref={toast}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span className='p-float-label'>
          <InputText id="input_txt"  value={text} onChange={e=> setText(e.target.value)}/>
          <label htmlFor="input_txt" className='p-component'>Nome completo</label>
        </span>
        <p>{localeOption(text, localidade)}</p>
        <Button className="p-button-success" type="button" label="Espanhol" icon="pi pi-check-circle" onClick={()=>setLocalidade('es')}></Button>
        <br/>
        <Button className="p-button-info" type="button" label="Inglês" icon="pi pi-check-circle" onClick={()=>setLocalidade('en')}></Button>
      </header>
    </div>
  );
}

export default App;
