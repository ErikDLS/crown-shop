import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { useState } from "react";

import { useSelector } from "react-redux";

import { selectCartTotal } from "../../store/cart/cart.selector";

import { selectCurrentUser } from "../../store/user/user.selector";

import { Button_Types_Classes } from "../button/button.component";

import {
  FormContainer,
  PaymentFormContainer,
  PaymentButton,
} from "./payment-form.styles";

const PaymentForm = () => {
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const stripe = useStripe();
  const elements = useElements();
  const [isProccessingPayment, setIsProccessingPayment] = useState(false);

  const paymentHandler = async e => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProccessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then(res => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProccessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      } else {
        alert("Payment?");
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement></CardElement>
        <PaymentButton
          disabled={isProccessingPayment}
          buttonType={Button_Types_Classes.inverted}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
