
import SectionTitle from "../../component/Shared/SectionTitle/SectionTitle";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from "../../component/Form/CheckOutForm";


//TODO: add published key(I will get a key when I create account in the stripe  )
const stripPromise = loadStripe("pk_test_51OEEFQJz4BJljXPPJ7Cu0q26sp26wg5NZ9E0YBD1Go5Lg7cCH156DalWuScQq2EfOM4YFyugked85M43O1mUikIL00gZFfZIow")
console.log(import.meta.env.VITE_Payment_Gateway_PK);
console.log(stripPromise);

const CheckoutContact = () => {
   
    return (
        <div>
            <SectionTitle subHeading={"checkout"} heading={"Request Contact Information"}></SectionTitle>
            <div>
                <Elements stripe={stripPromise}>
                    <CheckOutForm/>
                </Elements>
            </div>
        </div>
    );
};

export default CheckoutContact;