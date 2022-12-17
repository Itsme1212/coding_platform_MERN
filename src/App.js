import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";

import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Landing } from "./components/Pages/Landing";
import { LoginForm } from "./components/Pages/LoginForm";
import {Certificate} from "./components/Pages/Certificate";
import {ForgetPassword} from './components/Pages/ForgetPassword'
import {NewSubmit} from './components/Pages/NewSubmit'
import {Hackathon} from './components/Pages/Hackathon'
import { Mainapp } from "./components/Pages/Mainapp";
import NoteState from './components/Pages/contexts/notes/NoteState';
import { Placement } from "./components/Pages/Placement";

import { Fresher } from "./components/Pages/Fresher";

function App() {


  return (


    <>

    <NoteState>
      <Router>
        <div className="pages">
             <Routes>
            <Route exact path='/' element={< Home />}></Route>

            <Route exact path='/nav' element={< NavBar />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route path="/editor" element={<Landing />} />
            <Route path="/loginform" element={<LoginForm />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/forget-pass" element={<ForgetPassword />} />
            <Route path="/otp" element={<NewSubmit />} />
            <Route path="/hackathon" element={<Hackathon />} />
            <Route path="/mainapp" element={<Mainapp />} />
            <Route path="/placement" element={<Placement />} />

            <Route path="/fresher" element={<Fresher />} />


          </Routes>

        </div>
      </Router>
      </NoteState>

    </>
  );
}

export default App;





/*



import React,{useState} from "react";
import {
  LoginButton,
  Text,
  LogoutButton,
  useSession,
  CombinedDataProvider,
} from "@inrupt/solid-ui-react";

import {AddTodo} from "./components/Pages/AddTodo";  

const authOptions = {
    clientName: "Solid Todo App",
  };

function App() {
  const { session } = useSession();
  const [oidcIssuer, setOidcIssuer] = useState("");

  const handleChange = (event) => {
    setOidcIssuer(event.target.value);
  };
  return (
    
    <div className="app-container">
      {session.info.isLoggedIn ? (
        <CombinedDataProvider
          datasetUrl={session.info.webId}
          thingUrl={session.info.webId}
        >
          <div className="message logged-in">
            <span>You are logged in as: </span>
            <Text properties={[
                "http://www.w3.org/2006/vcard/ns#fn",
                "http://xmlns.com/foaf/0.1/name",
              ]} />
          </div>
        </CombinedDataProvider>
      ) : (
        <div className="message">
          <span>You are not logged in. </span>
          <span>
            Log in with:
            <input
              className="oidc-issuer-input "
              type="text"
              name="oidcIssuer"
              list="providers"
              value={oidcIssuer}
              onChange={handleChange}
            />
           <datalist id="providers">
             <option value="https://broker.pod.inrupt.com/" />
             <option value="https://inrupt.net/" />
           </datalist>
          </span>
          <LoginButton
            oidcIssuer={oidcIssuer}
            redirectUrl={window.location.href}
            authOptions={authOptions}
          />
          <LogoutButton />

          <section>
            <AddTodo />
          </section>
         
        </div>
        
      )}
    </div>
  );
}

export default App;




*/