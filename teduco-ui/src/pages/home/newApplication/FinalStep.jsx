import { Component } from "react";
import "./FinalStep.css"

export class FinalStep extends Component {
    continue = e => {
        this.props.nextStep();
      };

      back = e => {
        this.props.prevStep();
      };
    render() {
        const { values, handleChange } = this.props;
        return(
        <form>
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
            placeholder="Bachelor Informatik"></input>
            </div>

        <p  onClick={this.back} className="next">Back</p>
        <p  onClick={this.continue} className="next">Next</p>

        </form>
       )
    };
  }

  export default FinalStep;

