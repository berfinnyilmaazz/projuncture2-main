import React from "react";
import '../components/PublishProject.css';



export default function PublishProject () {
    return (
        <main>
            <div className="container mb-3">
              <div className="project">
                <form className="project-info row g-3 p-3">
                  <div className="form-header">
                    <h1 className="form-title">Proje Bilgileri</h1>
                  </div>               
                  <p className="text-start">Proje Resmi</p>
                  <div className="input-group m-3 pt-0 mt-0 p-3">
                      <input
                          type="file"
                          className="form-control"
                          placeholder="Proje Adı" 
                      />
                  </div>
                        
                  <div className="input-group m-3 p-3"> 
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Proje Adı"
                      />
                  </div>

                  <div className="input-group m-3 p-3">
                      <select className="form-select">
                          <option selected>Kategori</option>
                          <option value="1">Psikoloji</option>
                          <option value="2">Çevre</option>
                          <option value="3">Makine</option>
                          <option value="3">Elektrik</option>
                          <option value="3">Yazılım</option>
                        </select>
                      </div>
                    <div className="input-group m-3 p-3">
                      <div className="input-group">
                        <textarea className="form-control" placeholder="Proje Açıklaması"></textarea>
                      </div>
                    </div>

                    <div className="input-group m-3 p-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Proje için kaç kişi arıyorsunuz?"
                      />
                    </div>
                              
                    <label className="text-start m-3 p-3">Mentörlük desteği arıyor musunuz?</label>

                    <div className="form-check m-3 p-3">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label className="form-check-label" for="flexRadioDefault1">
                        Evet
                      </label>
                    </div>
                    <div className="form-check m-3 p-3">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                      <label className="form-check-label text-start" for="flexRadioDefault2">
                        Hayır
                      </label>
                    </div>

                    <div className="input-group m-3 p-3">
                      <div className="input-group">
                        <textarea className="form-control" placeholder="Projeye katılacak kişilerde aradığınız özellikler"></textarea>
                      </div>
                    </div>
                </form> 
              </div>            
            </div>
        </main>
    );
}