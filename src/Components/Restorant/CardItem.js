import React from 'react'


function CardItem({data}) {


    
    return (
        <>

            <div className='container'>
                <div className='row justify-content-center'>
                    

                        {data.map((ele, index) => {
                            return (
                            <div className='col-md-3' key={index}>
                                <div className="card">
                                    <img src={ele.imgurl} className="card-img-top" alt="..." style={{ height: "150px", width: "200px" }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{ele.dish}</h5>
                                        <p className="card-text">{ele.description}</p>
                                        <span className="btn btn-primary">{ele.catagory}</span>
                                    </div>
                                </div>
                                </div>
                            );
                        })


                        }

                    
                </div>
            </div>
        </>
    )
}

export default CardItem;