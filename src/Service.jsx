import React from 'react';
import Card from "./Card";
import CardData from "./CardData";

const Service = () => {
    return (
        <>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="mt-5">
                            <h1 className="text-center"> Services </h1>
                        </div>
                        <div className="row gy-3">
                            {
                                CardData.map( (val, index) => {
                                    return <Card
                                        key={index}
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                    />;
                                } )
                            }
                        </div>     
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;