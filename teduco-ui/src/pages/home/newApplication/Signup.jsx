import { Component } from "react";
import FinalStep from "./FinalStep";
import Step1 from "./Step1";
import Step2 from "./Step2";

export default class Signup extends Component{
    state = {
        step: 1,
        Country: '',
        EducationBackround: '',
        Note_Average: '',
        Exam_Result: '',
        University: '',
        Course: ''
      };

      nextStep = () => {
        const { step } = this.state;
        this.setState({
          step: step + 1
        });
      };
    
      // Go back to prev step
      prevStep = () => {
        const { step } = this.state;
        this.setState({
          step: step - 1
        });
      };
    
      // Handle fields change
      handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      };

      render() {
        const { step } = this.state;
        const { Country, EducationBackground, Note_Average, Exam_Result, University, Course } = this.state;
        const values = { Country, EducationBackground, Note_Average, Exam_Result, University, Course };
    
        switch (step) {
          case 1:
            return (
              <Step1
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            );
          case 2:
            return (
              <Step2
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            );
          case 3:
            return (
              <FinalStep
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            );
          default:
            (console.log('This is a multi-step form built with React.'))
        }
      }

}

