import { Component } from "react";
import "./RealFinalStep.css"

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
            <div className="Header">
            <label>Ready To Send</label>
            </div>

            <div className="def">
            <label>Check your documents one last time</label>
            </div>


        <p className="button">Send</p>

        </form>
       )
    };
  }

  export default FinalStep;

