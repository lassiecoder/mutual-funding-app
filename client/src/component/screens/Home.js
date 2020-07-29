import React from 'react'
import {Link} from 'react-router-dom'
import Fundingdata from '../Jsondata/Fundingdata.json'

const Home =() => {
    return(
        <div className="homeWrapper">
            {Fundingdata.map((fundData, i) => {
                return(
                    <div key={i} className="card horizontal">
                        <div className="card-image">
                            <img src={fundData.companyImg} alt="Mutual Fund Logo" />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <h3> {fundData.policyName} </h3>
                            </div>
                            <div className="boxWrapper">
                                <div className="card-content card-action">
                                    <div className="dataHead">
                                        <div><h4> 10.3% </h4> </div>
                                        <div><h4> 10.3% </h4> </div>
                                        <div><h4> 10.3% </h4> </div>
                                    </div>
                                    <div className="dataDetails">
                                        <div><h4> 1D </h4> </div>
                                        <div><h4> 1Y </h4> </div>
                                        <div><h4> 3Y </h4> </div>
                                    </div>
                                </div>
                                <div className="card-action">
                                    <div className="linktoNext">
                                    {/* <Link to={`/${fundData.id}`}>Know more</Link> */}
                                    <Link to="/profile"> <b> Know more </b> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Home