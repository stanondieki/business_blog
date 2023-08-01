import Head from "next/head";
import Link from "next/link"
import Image from "next/image"

export default function faqspost() 
{
    return(
        <>
            <Head>
                <title>FAQs</title>
            </Head>
            <h1>FAQs</h1>
            <div>
            <Image
            src="/images/faqs.jpeg"
            width={120}
            height={90}
            />
            </div>
            <h2>Frequently Asked Questions(FAQs)</h2>
            <p>Here are some questions our customers ask:</p>
            <h3>1. How can I place an Order?</h3>
            <p>To place an order, simply visit our website and browse our product catalog. Select the items you wish to purchase and add them to your cart. Proceed to the checkout page, enter your shipping and payment information, and confirm your order. If you have any issues or need an assistance, our customer support team is ready to help.</p>
            <h3>2. What payment methods do you accept?</h3>
            <p>We aacept various payment methods including credit cards(Visa and Mastercard), PayPal and bank transfers. You can choose your preferred payment method during the checkout process. Rest assured that all payment transactions are secure and encrypted.</p>
            <h3>3. How long will it take to receive my order?</h3> 
            <p>The delivery time depends on your location and shipping method selected. Generally, orders are processed within 1-2 business days. Once shipped, the estimated delivery time is typically between 3 - 7 business days for domestic orders. International orders may take longer. You will receive a tracking number to monitor the progress of your shipment.</p> 
            <h3>4. What is your return policy?</h3>  
            <p>We have a hassle-free return policy. If you are not satisfied with your purchase, you can return the item(s) within 30 days of delivery for a full refund of exchange. The product must be in its original condition, unused and with all tags and packaging intact. Please refer to our returns and refunds page on our website for detailed instructions.</p> 
            <h3>5. Can I track my order?</h3> 
            <p>Yes, you can track your ordrer using the tracking number provided in the shipping confirmation email. Visit our website and go to the order Tracking page. Enter your tracking number and you will be able to see the current status and location of your package.</p>
            <p><b>If you have any other questions or concerns, please do not hesitate to reach out to us. We are here to assist you and provide the best possible customer experience.</b></p>   
            <h2>
                <Link href='/'>Back Home</Link>
            </h2>
        </>
    )
}