import React, { useState } from "react"
import '../components/Profile.css';


export default function Profile () {

    const [activeTab,setActiveTab] = useState("account-general");

    const renderTabContent = () => {
        if (activeTab === "account-general") {
            return (
                <div className="tab-pane fade show active" id="account-general">
                <div className="card-body media align-items-center">
                <img
                    src="/profileimg.png"
                    alt=""
                    className="d-block ui-w-80"
                />
                <div className="media-body ml-4">
                    <label className="btn btn-outline-primary">
                    Yeni Profil Fotoğrafı
                    <input type="file" className="account-settings-fileinput" />
                    </label>{" "}
                    &nbsp;
                    <button type="button" className="btn btn-default md-btn-flat">
                    Sıfırla
                    </button>
                    <div className="text-light small mt-1">
                    Allowed JPG, GIF or PNG. Max size of 800K
                    </div>
                </div>
                </div>
                <hr className="border-light m-0" />
                <div className="card-body">
                <div className="form-group">
                    <label className="form-label">Kullanıcı Adı</label>
                    <input
                    type="text"
                    className="form-control mb-1"
                    defaultValue=""
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">İsim</label>
                    <input
                    type="text"
                    className="form-control"
                    defaultValue=""
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">E-mail</label>
                    <input
                    type="text"
                    className="form-control mb-1"
                    defaultValue=""
                    />
                    <div className="alert alert-warning mt-3">
                    E-mail adresiniz doğrulanmadı.Lütfen kontrol edin.
                    <br />
                    <a href="javascript:void(0)">Yeniden Gönder</a>
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-label">Şirket</label>
                    <input
                    type="text"
                    className="form-control"
                    defaultValue=""
                    />
                </div>
                </div>
            </div>
            );
          }
        
        if (activeTab === "account-change-password") {
        return (
            
            <div className="tab-pane fade show active" id="account-change-password">
                <div className="card-body pb-2">
                <div className="form-group">
                    <label className="form-label">Mevcut Şifre</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Yeni Şifre</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Tekrar Yeni Şifre</label>
                    <input type="password" className="form-control" />
                </div>
                </div>
            </div>
            
        );
        }

        if (activeTab === "account-info") {
            return (                
                <div className="tab-pane fade show active" id="account-info">
                    <div className="card-body pb-2">
                    <div className="form-group">
                        <label className="form-label">Biyografi</label>
                        <textarea
                        className="form-control"
                        rows={5}
                        defaultValue={
                            ""
                        }
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Doğum Tarihi</label>
                        <input
                        type="text"
                        className="form-control"
                        defaultValue=""
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Ülke</label>
                        <select className="custom-select">
                        <option>USA</option>
                        <option selected="">Canada</option>
                        <option>UK</option>
                        <option>Germany</option>
                        <option>France</option>
                        </select>
                    </div>
                    </div>
                    <hr className="border-light m-0" />
                    <div className="card-body pb-2">
                    <h6 className="mb-4">Bağlantılar</h6>
                    <div className="form-group">
                        <label className="form-label">Telefon</label>
                        <input
                        type="text"
                        className="form-control"
                        defaultValue=""
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Website</label>
                        <input type="text" className="form-control" defaultValue="" />
                    </div>
                    </div>
                </div>               
            );
        }

        if (activeTab === "account-social-links") {
            return (                
                <div className="tab-pane fade show active" id="account-social-links">
                    <div className="card-body pb-2">
                    <div className="form-group">
                        <label className="form-label">Twitter</label>
                        <input
                        type="text"
                        className="form-control"
                        defaultValue=""
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Facebook</label>
                        <input
                        type="text"
                        className="form-control"
                        defaultValue=""
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Google+</label>
                        <input type="text" className="form-control" defaultValue="" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">LinkedIn</label>
                        <input type="text" className="form-control" defaultValue="" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Instagram</label>
                        <input
                        type="text"
                        className="form-control"
                        defaultValue=""
                        />
                    </div>
                    </div>
                </div>               
            );
        }

        if(activeTab === "account-connections") {
            return(
                <div className="tab-pane fade show active" id="account-connections">
                    <div className="card-body">
                    <button type="button" className="btn btn-twitter">
                      
                        <strong>Twitter'a</strong>
                         bağlan
                    </button>
                    </div>
                    <hr className="border-light m-0" />
                    <div className="card-body">
                    <h5 className="mb-2">
                        <a
                        href="javascript:void(0)"
                        className="float-right text-muted text-tiny"
                        >
                        <span className="material-icons" />  close
                        </a>
                        <span className="ion ion-logo-google text-google" />
                        Google'a bağlandınız:
                    </h5>
                    <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="f9979498818e9c9595b994989095d79a9694"
                    >
                        [email&nbsp;protected]
                    </a>
                    </div>
                    <hr className="border-light m-0" />
                    <div className="card-body">
                    <button type="button" className="btn btn-facebook">
                        
                        <strong>Facebook'a</strong>
                        bağlan
                    </button>
                    </div>
                    <hr className="border-light m-0" />
                    <div className="card-body">
                    <button type="button" className="btn btn-instagram">
                        
                        <strong>Instagram'a</strong>
                        bağlan
                    </button>
                    </div>
                </div>
            );
        }

        if(activeTab === "account-notifications") {
            return(
                <div className="tab-pane fade show active" id="account-notifications">
                    <div className="card-body pb-2">
                    <h6 className="mb-4">Activity</h6>
                    <div className="form-group">
                        <label className="switcher">
                        <input
                            type="checkbox"
                            className="switcher-input"
                            defaultChecked=""
                        />
                        <span className="switcher-indicator">
                            <span className="switcher-yes" />
                            <span className="switcher-no" />
                        </span>
                        <span className="switcher-label">
                            Projeme biri başvuru yaptığında bana e-posta gönder.
                        </span>
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="switcher">
                        <input
                            type="checkbox"
                            className="switcher-input"
                            defaultChecked=""
                        />
                        <span className="switcher-indicator">
                            <span className="switcher-yes" />
                            <span className="switcher-no" />
                        </span>
                        <span className="switcher-label">
                            Projeme biri yorum yaptığında bana e-posta gönder.
                        </span>
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="switcher">
                        <input type="checkbox" className="switcher-input" />
                        <span className="switcher-indicator">
                            <span className="switcher-yes" />
                            <span className="switcher-no" />
                        </span>
                        <span className="switcher-label">
                            Email me when someone follows me
                        </span>
                        </label>
                    </div>
                    </div>
                    <hr className="border-light m-0" />
                    <div className="card-body pb-2">
                    <h6 className="mb-4">Application</h6>
                    <div className="form-group">
                        <label className="switcher">
                        <input
                            type="checkbox"
                            className="switcher-input"
                            defaultChecked=""
                        />
                        <span className="switcher-indicator">
                            <span className="switcher-yes" />
                            <span className="switcher-no" />
                        </span>
                        <span className="switcher-label">Yeni yayınlanan projeler.</span>
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="switcher">
                        <input type="checkbox" className="switcher-input" />
                        <span className="switcher-indicator">
                            <span className="switcher-yes" />
                            <span className="switcher-no" />
                        </span>
                        <span className="switcher-label">Haftalık proje ilerlemeleri.</span>
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="switcher">
                        <input
                            type="checkbox"
                            className="switcher-input"
                            defaultChecked=""
                        />
                        <span className="switcher-indicator">
                            <span className="switcher-yes" />
                            <span className="switcher-no" />
                        </span>
                        <span className="switcher-label">Weekly blog digest</span>
                        </label>
                    </div>
                    </div>
                </div>
            );
        }
    };
    return(
       
        
            <main className="pb-3">
                <div className="container light-style  ">
                    <div className="card overflow-hidden">
                        <div className="row no-gutters row-bordered row-border-light">
                        <div className="col-md-3 pt-0">
                            <div className="list-group list-group-flush account-settings-links">
                            <a
                                href="#"
                                className={`list-group-item ${activeTab === "account-general" ? "active" : ""}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setActiveTab("account-general");
                                }}
                            >
                                Genel
                            </a>
                            <a
                                href="#"
                                className={`list-group-item ${activeTab === "account-change-password" ? "active" : ""}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setActiveTab("account-change-password");
                                }}                
                            >
                                Şifreyi Değiştir
                            </a>
                            <a
                                href="#"
                                className={`list-group-item ${activeTab === "account-info" ? "active" : ""}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setActiveTab("account-info");
                                }}
                            >
                                Bilgi
                            </a>
                            <a
                                href="#"
                                className={`list-group-item ${activeTab === "account-social-links" ? "active" : ""}`}
                                onClick={(e) => {
                                e.preventDefault();
                                setActiveTab("account-social-links");
                                }}
                            >
                                Sosyal Medya
                            </a>
                            <a
                                href="#"
                                className={`list-group-item ${activeTab === "account-connections" ? "active" : ""}`}
                                onClick={(e) => {
                                e.preventDefault();
                                setActiveTab("account-connections");
                                }}
                            >
                                Bağlantılar
                            </a>
                            <a
                                href="#"
                                className={`list-group-item ${activeTab === "account-notifications" ? "active" : ""}`}
                                onClick={(e) => {
                                e.preventDefault();
                                setActiveTab("account-notifications");
                                }}
                            >
                                İzinler
                            </a>
                            </div>
                        </div>
                        <div className="col-md-9">{renderTabContent()}
                            <div className="tab-content">
                            
                           
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="text-right mt-3">
                        <button type="button" className="btn btn-primary">
                        Kaydet
                        </button>
                        &nbsp;
                        <button type="button" className="btn btn-default">
                        İptal
                        </button>
                    </div>
                </div>

            
            
            
            

            
            </main>
    )
}