import React from 'react'
import { FaCheck } from 'react-icons/fa';
import { BiCheck } from "react-icons/bi";
const Pricing = () => {
    return (
        <div className='m-4 '>
            <div>
                <p className='price'>Pricing</p>
                <div>
                    <h1 className='timeline mb-3'>Simple,transparent pricing</h1>
                    <p className='sub-heading  '>We believe Untitled should be accessible to all companies , no matter the size. </p>
                </div>
                <div class="row mt-4">
                    <div class="col mt-4">
                        <div className='cardDiv py-4'>
                            <div>
                                <h1 className="text-center timeline">$10/mth</h1>
                            </div>
                            <div className="text-center heading">Basic Plan</div>
                            <p className="text-center text-secondary content" >Billed annually</p>
                            <div className='py-2'>
                                <div class="d-flex list"><BiCheck className='icon'/>
                                    <p className='content'>Access to all basic features</p>
                                </div>
                                <div class="d-flex list"><BiCheck className='icon'/>
                                    <p className='content'>Basic reporting and analytics</p>
                                </div>
                                <div class="d-flex list"><BiCheck className='icon'/>
                                    <p className='content'>Up to 10 individual users</p>
                                </div>
                                <div class="d-flex list"><BiCheck className='icon'/>
                                    <p className='content'>20GB individual data each user</p>
                                </div>
                                <div class="d-flex list"><BiCheck className='icon'/>
                                    <p className='content'>Basic chat and email support</p>
                                </div>
                                <div class="d-flex justify-content-center mt-3 "><button className='startbtn'>Get Started</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mt-4">
                        <div  className='cardDiv py-4'>
                            <div>
                                <h1 className="text-center timeline">$20/mth</h1>
                            </div>
                            <div className="text-center heading">Business Plan</div>
                            <p className="text-center text-secondary content" >Billed annually</p>
                            <div className='py-2'>
                                <div class="d-flex list"><BiCheck className='icon'/>
                                    <p className='content'>200+ Integrations</p>
                                </div>
                                <div class="d-flex list"><BiCheck className='icon'/>
                                    <p className='content'>Advanced reporting and analytics</p>
                                </div>
                                <div class="d-flex list "><BiCheck className='icon'/>
                                    <p className='content'>Up to 20 individual users</p>
                                </div>
                                <div class="d-flex list"><BiCheck className='icon'/>
                                    <p className='content'>40GB individual data each user</p>
                                </div>
                                <div class="d-flex list"><BiCheck className='icon'/>
                                    <p className='content'>Priority chat and email support</p>
                                </div>
                                <div class="d-flex justify-content-center mt-3 "><button className='startbtn'>Get Started</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mt-4">
                        <div  className='cardDiv py-4'>
                            <div>
                                <h1 className="text-center timeline">$40/mth</h1>
                            </div>
                            <div className="text-center heading">Enterprise Plan</div>
                            <p className="text-center text-secondary content">Billed annually</p>
                            <div className='py-2'>
                                <div class="d-flex list"><BiCheck className='icon'/>
                                    <p className='content'>Advanced custom fields</p>
                                </div>
                                <div class="d-flex list"><BiCheck className='icon'/>
                                    <p className='content'>Audit log and data history</p>
                                </div>
                                <div class="d-flex list"><BiCheck className='icon'/>
                                    <p className='content'>Unlimited individual users</p>
                                </div>
                                <div class="d-flex list"><BiCheck className='icon'/>
                                    <p className='content'>Unlimited individual data</p>
                                </div>
                                <div class="d-flex list"><BiCheck className='icon'/>
                                    <p className='content'>Personalised+priority service</p>
                                </div>
                                <div class="d-flex justify-content-center mt-3"><button className='startbtn'>Get Started</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing