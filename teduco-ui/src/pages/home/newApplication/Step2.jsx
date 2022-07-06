import "./step2.css";
import { Component } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import "./progress-bar.css"
import { useLocation, Route, Router} from "react-router-dom";

let notes = 76;
let exam = 50;
let resultInt = 100;
let resultText = "";
export class Step2 extends Component {

      
      
    continue = e => {
        this.props.nextStep();
      };

  back = e => {
    this.props.prevStep();
  };

  prob(a) {
    if(a>80){return "Very Likely";}
    if(a>60){return "Likely";}
    if(a>40){return "Average";}
    if(a>20){return "Unlikely";}
    if(a<=20){return "Very Unlikely";}
    
  }

    render() {

        const { values, handleChange } = this.props;
        
        
        return(
            <div>
            
        <form>
        <div className="choice" >
            <label>Note Average </label>
            <input type="text"  onChange={handleChange('Note_Average')} placeholder="82"></input>
        </div>
        <div className="choice">
            <label>AYT/TYT Result</label>
            <input type="text"  onChange={handleChange('Exam_Result')} placeholder="382"></input>
        </div>

        <div className="choice">
            <label>University</label>
            <input type="text"  defaultValue={values.University} 
            onChange={handleChange('University')} 
            placeholder="Technical University of Munich"></input>
            </div>

            <div className="choice">
            <label>Course</label>
            <input type="text"  
            defaultValue={values.Course} 
            onChange={handleChange('Course')} 
            placeholder={"Bachelor Informatik"}></input>
            </div>
    
             
        <p  onClick={this.back} className="next">Back</p>
        <p  onClick={this.continue} className="next">Next</p>
        </form>
        <div className="display-linebreak"> 
        <CircularProgressbar maxValue={100} value={(parseInt(values.Note_Average) * 5 + parseInt(values.Exam_Result))/10} text={`${this.prob((parseInt(values.Note_Average) * 5 + parseInt(values.Exam_Result))/10)}`} />
        <label class="progress-bar-label">Probality of Admission</label>
        </div>
       
       </div>
        )


        };
        
  }

  export default Step2;
