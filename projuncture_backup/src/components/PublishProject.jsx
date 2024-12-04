import React from "react";



export default function PublishProject () {
    return (
        <main>
            <div className="container border">
                
                    <form className="row g-3">                       
                        <div className="input-group m-3 p-3"> 
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Proje Adı"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                        <div className="input-group m-3 p-3">
  <input
    type="text"
    className="form-control"
    placeholder="Username"
    aria-label="Username"
    aria-describedby="basic-addon1"
  />
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">
    @
  </span>
  <input
    type="text"
    className="form-control"
    placeholder="Username"
    aria-label="Username"
    aria-describedby="basic-addon1"
  />
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">
    @
  </span>
  <input
    type="text"
    className="form-control"
    placeholder="Username"
    aria-label="Username"
    aria-describedby="basic-addon1"
  />
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">
    @
  </span>
  <input
    type="text"
    className="form-control"
    placeholder="Username"
    aria-label="Username"
    aria-describedby="basic-addon1"
  />
</div>

                    </form>
                
            </div>
        </main>
    );
}