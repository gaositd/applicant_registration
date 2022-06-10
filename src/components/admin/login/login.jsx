import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Login = () => {
  const { loginWithRedirect } = useAuth0();

  // return(
  //     <button
  //       className="btn btn-outline-secondary mb-4"
  //     >
  //       Login Administración
  //     </button>
  // );

  // return <button onClick={() => loginWithRedirect()}>Log In</button>;
  return (
    <div className="container m-2">
      <div className="row">
        <aside className="col-sm-3">
        </aside>
        <aside className="col-sm-5">
          <p>Administración Registro de aplicantes</p>

          <div className="card">
            <article className="card-body">
              <p>
                <button className="btn btn-block btn-outline-primary m-2"  onClick={() => loginWithRedirect()}>
                  <i className="fab fa-google"></i> Login via Google
                </button>
                <a href="" className="btn btn-block btn-outline-primary">
                  <i className="fab fa-facebook-f"></i> Login via facebook
                </a>
              </p>
              <hr />
              <form>
                <div className="form-group">
                  <input
                    name=""
                    className="form-control"
                    placeholder="correo electrónico mail@mailejemplo.com"
                    type="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="************************ "
                    type="password"
                  />
                </div>                                      
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Entrar
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6 text-right">
                    <a className="small" href="#">
                      ¿Olvidó su password?
                    </a>
                  </div>
                </div>
              </form>
            </article>
          </div>
        </aside>
      </div>
    </div>
  );

};
