import React from 'react'
import { StripeProvider, Elements, CardElement, injectStripe } from 'react-stripe-elements'
import Button from '../button/button.jsx'

export default class CreditCard extends React.Component {
  render() {
    return <div className="CreditCard">
      <StripeProvider apiKey={ this.props.apiKey }>
        <Elements>
          <CreditCardForm />
        </Elements>
      </StripeProvider>
    </div>
  }
}

CreditCard.defaultProps = {
  apiKey: "pk_test_03grKO9gVqL4keCrFVLM7dQG"
}

class CreditCardForm extends React.Component {
  onSubmit(event) {
    event.preventDefault()
    
    this.props.stripe.createToken({ name: 'Jenny Rosen' })
    .then(({ token }) => {
      console.log('Received Stripe token:', token)
    })
  }

  render() {
    return <form>
       <CardElement />
      <Button onClick={ (event) => this.onSubmit(event) }>Submit</Button>
    </form>
  }
}

CreditCardForm = injectStripe(CreditCardForm)