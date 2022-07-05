import "./step2.css";
import { Component } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import "./progress-bar.css"
let notes = 76;
let exam = 50;
let resultInt = 100;
let resultText = "";

export class Step2 extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
          inputValue: 0,
          inputValue2: 0,
          res: 0
        };
        this.handleChange = this.handleChange.bind(this);
      };
      
      handleChange = (evt) => {
        this.setState({ [evt.target.name]: parseInt(evt.target.value) });
      }
      
      
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

  birsen(Note_Average,Exam_Result) {
        let first,second;

        if(Note_Average<250){first=1;}
        if(Note_Average>250){first=2;}
        if(Note_Average>325){first=3;}
        if(Note_Average>400){first=4;}
        if(Note_Average>450){first=5;}


        if(Exam_Result<250){second=1;}
        if(Exam_Result>250){second=2;}
        if(Exam_Result>325){second=3;}
        if(Exam_Result>400){second=4;}
        if(Exam_Result>450){second=5;}

        if(first+second<=2){return[20,"Very Unlikely"];}
        if(first+second>2){return[40,"Unlikely"];}
        if(first+second>4){return[60,"Average"];}
        if(first+second>6){return[80,"Likely"];}
        if(first+second>8){return[90,"Very Likely"];}
        }

    handleChange1 = (event) => {
        notes = event.target.value;
        resultInt = this.birsen(notes, exam)[0]
        resultText = this.birsen(notes, exam)[1]
        console.log("lool")

    }

    handleChange2 = (event) => {
        exam = event.target.value;
        resultInt = this.birsen(notes, exam)[0]
        resultText = this.birsen(notes, exam)[1]

    }

    render() {
        const { values, handleChange } = this.props;
        
        return(
            <div>
            
        <form>
        <div className="choice" >
            <label>Note Average </label>
            <input type="text" name="inputValue"  onChange={this.handleChange} placeholder="82"></input>
        </div>
        <div className="choice">
            <label>AYT/TYT Result</label>
            <input type="text" name="inputValue2"   onChange={this.handleChange} placeholder="382"></input>
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
            placeholder="Bachelor Informatik"></input>
            </div>
    
             
        <p  onClick={this.back} className="next">Back</p>
        <p  onClick={this.continue} className="next">Next</p>
        </form>
        <div className="display-linebreak"> 
        <CircularProgressbar maxValue={100} value={(this.state.inputValue * 5 + this.state.inputValue2)/10} text={`${this.prob((this.state.inputValue * 5 + this.state.inputValue2)/10)}`} />
        <label class="progress-bar-label">Probality of Admission</label>
        </div>
       
       </div>
        )


        };
  }

  export default Step2;
