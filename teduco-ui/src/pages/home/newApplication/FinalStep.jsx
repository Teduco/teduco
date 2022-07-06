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
            <label>Passport Copy</label>
            <input type="file"  
            onChange={handleChange('University')} 
            ></input>
            </div>

            <div className="choice">
            <label>Latest Transcript</label>
            <input type="file"  
            onChange={handleChange('University')} 
            ></input>
            </div>

            <div className="choice">
            <label>Motivation Letter</label>
            <input type="file"  
            onChange={handleChange('University')} 
            ></input>
            </div>

        <p  onClick={this.back} className="next">Back</p>
        <p  onClick={this.continue} className="next">Next</p>

        </form>
       )
    };
  }

  export default FinalStep;

