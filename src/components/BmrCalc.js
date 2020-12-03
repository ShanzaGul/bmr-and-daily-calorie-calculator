import React, { Component } from "react";

class BmrCalc extends Component {
  constructor() {
    super();
    this.state = {
      gender: "",
      weight: "",
      age: "",
      heightFeet: "",
      heightInches: "",
      activity: "",
      bmr: "",
      Cal: "",
      formula: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlegenderChange = (event) => {
    this.setState({ gender: event.target.value });
  };
  handleweightChange = (event) => {
    this.setState({ weight: event.target.value });
  };

  handleAgeChange = (event) => {
    this.setState({ age: event.target.value });
  };
  handleheightFeetChange = (event) => {
    this.setState({ heightFeet: event.target.value });
  };
  handleheightInchesChange = (event) => {
    this.setState({ heightInches: event.target.value });
  };
  handleactivityChange = (event) => {
    this.setState({ activity: event.target.value });
  };

  handleChange = (event) => {
    this.setState({ formula: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    let age = this.state.age;
    let weight = this.state.weight;
    let heightFeet = this.state.heightFeet;
    let heightInches = this.state.heightInches;
    let gender = this.state.gender;
    let formula = this.state.formula;

    let bmrC = "";
    let height;

    if (formula === "1") {
      height = heightFeet * 30.48 + heightInches * 2.54;
    } else if (formula === "2") {
      height = heightFeet * 100 + heightInches;
    }

    if (gender === "1" && formula === "1") {
      bmrC = 66 + 6.2 * weight + 12.7 * height - 6.76 * age;
    } else if (gender === "2" && formula === "1") {
      bmrC = 655.1 + 4.35 * weight + 4.7 * height - 4.7 * age;
    } else if (gender === "1" && formula === "2") {
      bmrC = 66.5 + 13.75 * weight + 5.003 * height - 6.755 * age;
    } else if (gender === "1" && formula === "2") {
      bmrC = 665 + 9.563 * weight + 1.85 * height - 4.676 * age;
    }

    bmrC = Math.round(bmrC);
    this.setState({ bmr: bmrC });
  }

  CalculateCal() {
    let bmrValue = this.state.bmr;
    let act = this.state.activity;
    let CalC = "";
    CalC = Math.round(bmrValue * act);
    console.log(CalC + "calc");
    this.setState({ Cal: CalC });
  }

  render() {
    let resultBmr;
    let form;

    if (this.state.bmr) {
      resultBmr = <div className="result bg-success p-2">{this.state.bmr}</div>;

      form = (
        <div>
          <div className="form-group">
            <label>Workout in a Week</label>
            <select
              className="form-control"
              value={this.state.activity}
              onChange={this.handleactivityChange}
              required
            >
              <option value="1.2">Sedentary</option>
              <option value="1.375">Lightly Active</option>
              <option value="1.55">Moderatley Active</option>
              <option value="1.725">Very Active</option>
              <option value="1.9">Extremely Active</option>
            </select>
          </div>

          <button
            type="button"
            onClick={() => {
              this.CalculateCal();
            }}
            className="btn btn-block btn-primary"
          >
            Calculate Calorie
          </button>

          <div className="form-group bg-success p-2 mt-2">{this.state.Cal}</div>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <form className="formBox bg-light" onSubmit={this.handleSubmit}>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  onChange={this.handlegenderChange}
                  name="gender"
                  id="exampleRadios1"
                  value="1"
                  required
                />
                <label className="form-check-label">Male</label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  onChange={this.handlegenderChange}
                  name="gender"
                  id="exampleRadios2"
                  value="2"
                />
                <label className="form-check-label">Female</label>
              </div>

              <div className="form-group">
                <label>Weight In Pounds/Kg</label>
                <input
                  type="number"
                  value={this.state.weight}
                  onChange={this.handleweightChange}
                  className="form-control"
                  min="1"
                  max="500"
                  required
                />
              </div>

              <label>Height</label>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Feet/Meter</label>
                  <input
                    type="number"
                    value={this.state.heightFeet}
                    onChange={this.handleheightFeetChange}
                    className="form-control"
                    min="4"
                    max="500"
                    required
                  />
                </div>

                <div className="form-group col-md-6">
                  <label>Inches/cm</label>
                  <input
                    type="number"
                    value={this.state.heightInches}
                    onChange={this.handleheightInchesChange}
                    className="form-control"
                    min="1"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Age in years</label>
                <input
                  type="number"
                  value={this.state.age}
                  onChange={this.handleAgeChange}
                  className="form-control"
                  min="1"
                  max="100"
                  required
                />
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  onChange={this.handleChange}
                  name="formula"
                  id="exampleRadios3"
                  value="1"
                />
                <label className="form-check-label">Imperial</label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  onChange={this.handleChange}
                  name="formula"
                  id="exampleRadios4"
                  value="2"
                  required
                />
                <label className="form-check-label">Metric</label>
              </div>

              <button type="submit" className="btn btn-block btn-primary mt-1">
                Calculate BMR
              </button>

              <div className="form-group mt-2">{resultBmr}</div>
              <div>{form}</div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default BmrCalc;
