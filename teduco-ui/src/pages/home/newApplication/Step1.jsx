import { Component } from "react";


export class Step1 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
      
    render() {
        const { values, handleChange } = this.props;
                return(
        <form>
        <div className="choice" >
            <label>Home Country  <br></br> </label>
            <input type="text"  defaultValue={values.Country} onChange={handleChange('Country')} placeholder="Germany"></input>
        </div>
        <div className="choice">
            <label>Education Background <br></br></label>
            <input type="text"  defaultValue={values.EducationBackground} onChange={handleChange('EducationBackground')} placeholder="Abitur"></input>
        </div>
        

    
      
        <p  onClick={this.continue} className="next">Next</p>
        </form>
        )

    };
  }

export default Step1;

  