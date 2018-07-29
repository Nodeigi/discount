import React, { Component } from 'react';

import { Alert, Button, ButtonWithIcon, Checkbox, TextInput } from '../Common';
import DiscountCodeService from '../Services/DiscountCodeService';

import './Payment.css';

import { TiLockClosed } from 'react-icons/lib/ti';

class Payment extends Component {

  constructor(props) {
    super(props);

    this.price = 59.88;

    this.state = {
      isDiscountCode: false,
      code: '',
      discount: null,
      discountProcessing: false,
      alertMessage: null,
      alertType: null
    };

    this.discountCodeService = new DiscountCodeService();
  }

  render() {
    let buttonState = Button.STATE_REGULAR;
    if (this.state.discountProcessing) {
      buttonState = Button.STATE_PROCESSING;
    } else if (this.state.code === '' && !this.state.discount) {
      buttonState = Button.STATE_INACTIVE;
    }

    const discountButton = this.state.discount
      ? (<Button wide label="Cancel discount" state={buttonState} onClick={this.cancelDiscount.bind(this)} />)
      : (<Button wide label="Apply discount" state={buttonState} onClick={this.applyDiscount.bind(this)} />)
    ;

    const alert = this.state.alertMessage ? (
      <Alert message={this.state.alertMessage} type={this.state.alertType} />
    ) : '';

    const hasDiscountElements = (
      <div className="row">
        <div className="col7">
          {this.state.discount
            ? this.state.discount.code 
            : <TextInput wide label="Enter it here" onChange={this.setCode.bind(this)} value={this.state.code} />
          }
        </div>
        <div className="col5">
          {discountButton}
        </div>
        <div className="col12">
          {alert}
        </div>
      </div>
    );

    return (
      <form className="Payment">
        <Checkbox name="isDiscountCode" label="Have a discount code" onChange={this.setIsDiscountCode.bind(this)} />
        {this.state.isDiscountCode
          ? hasDiscountElements
          : ''
        }
        <div className="row mg-t-2">
          <div className="col12 center">
            <ButtonWithIcon size="big" label={'Pay ' + (this.state.discount ? this.state.discount.priceAfterDiscount(this.price) : this.price) + ' USD'}>
              <TiLockClosed />
            </ButtonWithIcon>
          </div>
        </div>
      </form>
    ); //
  }

  setIsDiscountCode(checked) {
    const state = this.state;
    state.isDiscountCode = checked;
    if (!checked) {
      state.discount = null;
      state.alertMessage = null;
    }
    this.setState(state)
  }

  setCode(value) {
    const state = this.state;
    state.code = value;
    this.setState(state);
  }

  async applyDiscount() {
    const state = this.state;
    state.discountProcessing = true;
    this.setState(state);

    let discountCode = await this.discountCodeService.checkCode(state.code);

    state.discountProcessing = false;
    state.discount = discountCode;

    if (discountCode) {
      state.alertMessage = discountCode.discount + '% off discount was applied. Your cart has been updated.'
      state.alertType = 'success';
    } else {
      state.alertMessage = 'This discount code is invalid.'
      state.alertType = 'error';
    }
    this.setState(state);
  }

  cancelDiscount() {
    const state = this.state;
    state.discount = null;
    this.state.alertMessage = null;
    this.setState(state);
  }

}

export default Payment;
