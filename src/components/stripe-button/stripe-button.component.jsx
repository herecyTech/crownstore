import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const pubkey = 'pk_test_51GwkWmBhTFa8K7AsyfJOo9vdS0tggkuBqey9SMnDuMs0pFYAjVCnA97Z49MJ8BKIhFpapwWOYUa8TqsmBFXCLjR400KBO8zt3S'
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successfull')
    }
    return (
        <StripeCheckout
          label='Pay Now'
          name='Crwn Clothing'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={pubkey}
        />
    );
};

export default StripeCheckoutButton;