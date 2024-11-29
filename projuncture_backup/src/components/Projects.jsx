import React, { useState } from "react";
import '../components/Projects.css';


export default function Projects () {
    return (
        <main>
            <div className="project-button">
                <button className="btn">Proje Yayınla</button>
            </div>



            <div className="container projects">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="./projectimg2.png" className=" card_img img-fluid rounded-start" alt="" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Project Name</h5>
                                <p className="card-text">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                                </p>
                                <p className="card-text">
                                <small className="text-body-secondary">Last updated 3 mins ago</small>
                                </p>
                                <button className="btn">Projeyi Görüntüle</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="./projectimg2.png" className=" card_img img-fluid rounded-start" alt="" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Project Name</h5>
                                <p className="card-text">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                                </p>
                                <p className="card-text">
                                <small className="text-body-secondary">Last updated 3 mins ago</small>
                                </p>
                                <button className="btn">Projeyi Görüntüle</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="./projectimg2.png" className=" card_img img-fluid rounded-start" alt="" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Project Name</h5>
                                <p className="card-text">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                                </p>
                                <p className="card-text">
                                <small className="text-body-secondary">Last updated 3 mins ago</small>
                                </p>
                                <button className="btn">Projeyi Görüntüle</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}