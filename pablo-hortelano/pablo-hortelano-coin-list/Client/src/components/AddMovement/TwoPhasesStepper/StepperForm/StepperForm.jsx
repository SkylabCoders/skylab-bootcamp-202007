import React from "react";
import RadioForm from "./RadioForm/RadioForm";
import CallendarForm from "./CallendarForm/CallendarForm";
import FormInput from "./FormInput/FormInput";
import DollarInput from "./DollarInput/DollarInput";
import SelectCrypto from "./SelectCrypto/SelectCrypto";
import "./StepperForm.scss";

export default function StepperForm(props) {
  return (
    <div className="add-movements__form-box">
      <CallendarForm
        selectedDate={props.selectedDate}
        handleDateChange={props.handleDateChange}
      />
      <div className="add-movements__form-box--radio">
        <SelectCrypto
          cryptoMovement={props.cryptoMovement}
          handleChangeCryptoName={props.handleChangeCryptoName}
        />
        <RadioForm value={props.value} handleChange={props.handleChange} />
      </div>
      <div className="form-input-box">
        <FormInput
          name="Quantity"
          values={props.quantityValues}
          handleQuantity={props.handleQuantity}
        />
        <DollarInput
          priceValues={props.priceValues}
          handlePrice={props.handlePrice}
        />
      </div>
    </div>
  );
}
