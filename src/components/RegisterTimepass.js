import React from "react";
import "./RegisterTimepass.css";
import studenttime from "../svg/studenttime.jpg";

export default class Registertimepass extends React.Component{
    render(){
        return(
            <div>
                <div className="container-fluid Registertimepass__container">
                    <div className="row Registertimepass__row">
                        <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6 Registertimepass__svg-column1">
                            <div className="Registertimepass__svg">
                                <img src={studenttime} alt="register-timepass" className="Registertimepass__image" />
                            </div>
                        </div>

                       <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6 Registertimepass__svg-column2">
                           <div className="Registertimepass__heading">
                               Daily Activities
                           </div>
                           <form className="Registertimepass__Form-main">
                               <div className="form-row Registertimepass__Form">
                                   <div className="Registertimepass__property">Activity 1:</div>
                                   <input type="text" name="activity_1" id="activity_1" className="form-control Registertimepass__activity" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]" placeholder=" " required />
                               </div>

                               <div className="form-row Registertimepass__Form">
                                   <div className="Registertimepass__property">Activity 2:</div>
                                   <input type="text" name="activity_2" id="activity_2" className="form-control Registertimepass__activity" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]" placeholder=" " required />
                                </div>
                                
                                <div className="form-row Registertimepass__Form">
                                   <div className="Registertimepass__property">Duration of Activity 1:</div>
                                   <input type="tel" name="activitytime_1" id="activitytime_1" className="form-control Registertimepass__Time" title="*ENTER INTEGER VALUES ONLY" pattern="[0-9]" placeholder=" " required />
                                </div>

                                <div className="form-row Registertimepass__Form">
                                   <div className="Registertimepass__property">Duration of Activity 2:</div>
                                   <input type="tel" name="activitytime_2" id="activitytime_2" className="form-control Registertimepass__Time" title="*ENTER INTEGER VALUES ONLY" pattern="[0-9]" placeholder=" " required />
                                </div>

                                <div className="row Registertimepass__Submit-row">
                        <button type="submit" className="btn Registertimepass__Submit-Button">Submit</button>
                        </div>
                           </form>
                           </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}
