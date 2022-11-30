import React from "react";
import { useState} from 'react';


export default function Login(props) {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <>
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
        <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              nog niet geregistreerd?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                registreer hier
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Passwoord</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
        </div>
      </div>
      </div>
      </>
    )
  }
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-12">
            <div className="Auth-form-container">
                <form className="Auth-form">
                  <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="text-center">
                      Al geregistreerd?{" "}
                      <span className="link-primary" onClick={changeAuthMode}>
                        Login
                      </span>
                    </div>
                    <div className="form-group mt-3">
                      <label>Naam</label>
                      <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Naam"
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label>Email adres</label>
                      <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Email Adres"
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label>Passwoord</label>
                      <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Passwoord"
                      />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                      <button type="submit" className="btn btn-primary">
                        registreer
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}