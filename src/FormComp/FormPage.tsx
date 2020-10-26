// Controlled component.

import React from "react";
import { IUserProfile } from "../Models/IUserProfile";
export class FormPage extends React.Component<any, any> {
  options: Array<string>;
  userProfile: Array<IUserProfile> = [];
  constructor(props: any) {
    super(props);
    this.onhandleChange = this.onhandleChange.bind(this);
    this.options = ["laffaire", "bols", "morphes", "Zues"]; // Brandy Brands.
    this.userProfile = [
      {
        label: "First Name",
        name: "firstName",
        placeholder: "Type Your First Name"
      },
      {
        label: "Last Name",
        name: "lastName",
        placeholder: "Type Your Last Name"
      },
      {
        label: "Mobile Number",
        name: "mobileNumber",
        placeholder: "Type Your Mobile Number"
      }
    ];
    this.state = { firstName: "", selectedOptions: [] };
  }

  render() {
    //console.log(this.state);
    return (
      <div>
        <h1>:Form Example:</h1>
        <label htmlFor="first_Name">
          first Name:{" "}
          <input
            type="text"
            name="firstName"
            id="first_Name"
            value={this.state.firstName}
            onChange={this.onhandleChange}
          />
        </label>
        <label htmlFor="description_form">
          <textarea
            value={this.state.firstName}
            onChange={this.onhandleChange}
          />
        </label>
        <select
          multiple={true}
          name="Fruits"
          id=""
          value={[...this.state.selectedOptions]}
          onChange={this.optionHandleChange}
        >
          {this.options.map((option) => (
            <option key={`opt_${option}`} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div>
          {this.userProfile.map((profile: IUserProfile) => (
            <React.Fragment key={`profile ${profile.name}`}>
              <label htmlFor={profile}></label>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  onhandleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    this.setState({ firstName: e.currentTarget.value });
  };
  optionHandleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    e.preventDefault();
    let currentValue: string = e.currentTarget.value;
    let existingOption: string = this.state.selectedOptions.find(
      (option: string) => (option === currentValue ? true : false)
    );
    const isDuplicate: Boolean = existingOption ? true : false;
    console.log("Duplicate", existingOption, isDuplicate);

    this.setState((prevState: any, prevProp: any) => {
      let currentOptions: Array<string> = [...prevState.selectedOptions];
      currentOptions = isDuplicate
        ? currentOptions.splice(currentOptions.indexOf(currentValue), 1) &&
          currentOptions
        : [...currentOptions, currentValue];
      return {
        selectedOptions: [...currentOptions]
      };
    });
  };
}
