/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";


const CheckOutForm = () => {
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const { register, formState: { errors } } = useForm();
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { id } = useParams()
    console.log(id);

    const { data: allBioData = [] } = useQuery({
        queryKey: ['premiumRequest'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allBioData')
            return res.data;
        }

    })
    console.log(allBioData);
    const userId = allBioData?.find(myId => myId?.userEmail == user?.email)?.biodataId;
    console.log(userId);
     const needUser = allBioData?.find(need=> need?.biodataId == id);
    console.log(needUser);
    // const requestData = {
    //     requesterId: userId,
    //     needId: id,
    //     requestEmail: user?.email,
    //     date: new Date().toLocaleDateString(),
    //     status: "pending",
    //     price: price,

    // }
    // console.log(requestData);
    let price = 500
    useEffect(() => {

        axiosSecure.post("/create-payment-intent", { price: price })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
            })

    }, [axiosSecure, price])


    const handleSubmit = async (event) => {
        // Handle form submission here
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('payment error', error);
            setError(error.message)
        } else {
            console.log('Payment Method', paymentMethod);
            setError("")
        }
        //confirm payment 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log("confirm error");
        } else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id)
            }
            //now save the payment in the database 
            const requestData = {
                requesterId: userId,
                needId: id,
                neededUser:needUser?.name,
                contactEmail:needUser?.contactEmail,
                mobileNumber:needUser?.mobileNumber,
                requesterName:user?.displayName,
                requestEmail: user?.email,
                date: new Date().toLocaleDateString(),
                status: "pending",
                price: price,
                transactionId:paymentIntent.id,

        
            }
            console.log(requestData);
            const res = await axiosSecure.post('/payments', requestData)
            console.log("payment success", res.data);
            if (res.data?.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Transaction done",
                    showConfirmButton: false,
                    timer: 1500
                });

            }
        }
    }
    return (

        <div>
            <div className="flex justify-center p-10 mx-auto">
                <div className=" bg-white">
                    <form onSubmit={handleSubmit} className="p-16 ">
                        <h1 className="text-center">Form</h1>
                        <div>
                            <label htmlFor="biodataId">Biodata Contact ID</label>
                            <input type="text" id="biodataId" value={id} {...register("biodataId")} readOnly className='w-full mt-2 mb-5 px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900' />
                        </div>
                        <div>
                            <label htmlFor="selfBiodataId">Self Biodata Contact ID</label>
                            <input type="text" id="selfBiodataId" value={userId} {...register('selfBiodataId')} readOnly className='w-full mb-5 mt-2 px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900' />
                        </div>
                        <div>
                            <label htmlFor="selfEmail">Self Email</label>
                            <input type="email" id="selfEmail" value={user?.email} {...register('selfEmail')} readOnly className='w-full px-3 mb-5 mt-2  py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900' />
                        </div>
                        <label htmlFor="cardNumber">Stripe Card Number</label>
                        <div style={{ border: '1px solid #d3d3d3', padding: '10px', borderRadius: '5px' }}>
                            <CardElement
                                options={{
                                    style: {
                                        base: {
                                            fontSize: '16px',
                                            color: '#424770',
                                            '::placeholder': {
                                                color: '#aab7c4',
                                            },
                                        },
                                        invalid: {
                                            color: '#9e2146',
                                        },
                                    },
                                }}
                            />
                        </div>
                        <button className="btn bg-green-500 my-4" type="submit"
                            disabled={!stripe || !clientSecret}>
                            Pay
                        </button>
                        <p className="text-red-800">{error}</p>
                        {
                            transactionId && <p className="text-green-600">Your transaction id:{transactionId}</p>
                        }


                    </form>
                </div>
            </div>
        </div>
    );
};
export default CheckOutForm;