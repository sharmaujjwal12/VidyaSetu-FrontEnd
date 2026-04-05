import { useEffect } from "react";

function PaymentPage({ selectedMock, setShowPayment }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    const response = await fetch(
      "https://vidyasetu-backend-6bkr.onrender.com/api/createOrder",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

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
    <div className="h-auto flex items-center justify-center px-4 py-4">
      <div className="bg-white w-full max-w-sm rounded-3xl shadow-2xl border border-gray-200 overflow-hidden transform transition hover:shadow-3xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 p-8 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -ml-16 -mb-16"></div>

          <div className="relative z-10">
            <div className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full mb-4">
              <p className="text-xs font-semibold tracking-wider">
                PREMIUM ACCESS
              </p>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Unlock Your Potential
            </h1>
            <p className="text-blue-100 text-sm md:text-base opacity-90 px-2">
              Get access to premium {selectedMock} test
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Mock Details Card */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100">
            <p className="text-gray-600 text-sm font-medium mb-2">Test Type</p>
            <p className="text-gray-900 font-semibold text-lg">
              {selectedMock}
            </p>
          </div>

          {/* Price Section */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
            <p className="text-gray-600 text-sm font-medium mb-2">
              Special Offer Price
            </p>
            <div className="flex items-baseline gap-2">
              <h2 className="text-4xl md:text-5xl font-bold text-green-600">
                ₹1
              </h2>
              <span className="text-gray-500 line-through text-lg">₹999</span>
              <span className="text-xs font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                99% OFF
              </span>
            </div>
          </div>

          {/* Benefits List */}
          <div className="space-y-3">
            <p className="text-gray-700 font-semibold text-sm">What you get:</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">
                  ✓
                </span>
                Full length mock test
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">
                  ✓
                </span>
                Performance analytics
              </li>
            </ul>
          </div>

          {/* Payment Button */}
          <button
            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 
            hover:from-green-600 hover:to-emerald-600 
            text-white font-bold py-4 px-6 rounded-2xl 
            shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105
            text-lg md:text-base active:scale-95"
            onClick={handlePayment}
          >
            🔒 Proceed to Pay Securely
          </button>

          {/* Footer Note */}
          <p className="text-center text-xs text-gray-500 mt-4">
            💳 Secure payment powered by Razorpay | No commitment required
          </p>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
