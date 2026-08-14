import React from 'react'

const Order = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-neutral-100 px-6 md:px-16 py-12 relative overflow-hidden">
      {/* ambient background glow */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 bg-purple-700/20 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 -left-32 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px]" />

      <div className="relative">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-wide mb-10">
          MY ORDERS
        </h1>

        {/*
          TODO: wire this to your real orders endpoint once available.
          Expecting something like:

          const [orders, setOrders] = useState([]);
          const [loading, setLoading] = useState(true);

          useEffect(() => {
            const fetchOrders = async () => {
              try {
                const token = localStorage.getItem("token");
                const res = await axios.get(`${backendUrl}/api/order/list`, {
                  headers: { Authorization: `Bearer ${token}` },
                });
                setOrders(res.data.orders || []);
              } catch (err) {
                console.log(err);
              } finally {
                setLoading(false);
              }
            };
            fetchOrders();
          }, []);

          Then map `orders` into cards below, replacing the empty state.
        */}

        <div className="flex flex-col items-center justify-center text-center border border-neutral-800 rounded-2xl py-24 px-6 bg-white/[0.02]">
          <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-5">
            <svg
              className="w-7 h-7 text-purple-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <p className="text-neutral-300 font-medium mb-1">
            No orders yet
          </p>
          <p className="text-neutral-500 text-sm">
            Orders you place will show up here.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Order