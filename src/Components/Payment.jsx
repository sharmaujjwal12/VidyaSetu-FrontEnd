import { useEffect } from "react";

function PaymentPage({ selectedMock, setShowPayment }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    const response = await fetch("http://localhost:3000/api/createOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    const options = {
      key: "rzp_test_SWz0B1XJYNWxyQ",
      amount: data.amount,
      currency: data.currency,
      order_id: data.id,
      name: "VidyaSetu",
      description: selectedMock,

      handler: function () {
        alert("Payment Successful");
        setShowPayment(false);
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      
      <div className="bg-white w-[380px] rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-6 text-white text-center">
          <h1 className="text-xl font-semibold">
            Unlock Premium Mock
          </h1>
          <p className="text-sm opacity-90 mt-1">
            {selectedMock}
          </p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 text-center">

          <div className="bg-gray-50 rounded-xl py-4">
            <p className="text-gray-500 text-sm">Amount</p>
            <h2 className="text-3xl font-bold text-gray-800">₹1</h2>
          </div>

          <button
            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 
            hover:from-green-600 hover:to-emerald-600 
            text-white font-semibold py-3 rounded-xl 
            shadow-md transition duration-300"
            onClick={handlePayment}
          >
            Proceed to Pay
          </button>

        </div>

      </div>

    </div>
  );
}

export default PaymentPage;