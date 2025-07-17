import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      const token = await user.getIdToken();

      try {
        const res = await axios.get("https://zen-tour-server.vercel.app/bookings", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setBookings(res.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch bookings.");
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchBookings();
    }
  }, [user]);

  const handleConfirm = async (id) => {
    try {
      // Get Firebase ID token
      const token = await user.getIdToken();
      await axios.patch(
        `https://zen-tour-server.vercel.app/bookings/${id}`,
        { status: "completed" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      Swal.fire("Confirmed!", "Booking marked as completed.", "success");

      // Reload updated bookings
      const res = await axios.get(`https://zen-tour-server.vercel.app/bookings`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBookings(res.data);
    } catch (error) {
      console.error("Error confirming booking:", error);
      Swal.fire("Error", "Failed to confirm booking.", "error");
    }
  };

  if (loading)
    return <p className="text-center py-10">Loading your bookings...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Bookings</h1>

      {bookings.length === 0 ? (
        <p className="text-center py-6 text-cyan-500">No bookings found.</p>
      ) : (
        <div className="bg-base-100 shadow rounded overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-base-100">
              <tr>
                <th className="px-4 py-2 text-left">Tour Name</th>
                <th className="px-4 py-2 text-left">Guide Info</th>
                <th className="px-4 py-2 text-left">Departure</th>
                <th className="px-4 py-2 text-left">Destination</th>
                <th className="px-4 py-2 text-left">Note</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id} className="border-t">
                  <td className="px-4 py-2">{booking.tourName}</td>
                  <td className="px-4 py-2">
                    {booking.buyerName} <br />
                    {booking.buyerEmail}
                  </td>
                  <td className="px-4 py-2">
                    {booking.departureLocation} <br />
                    {new Date(booking.bookingDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2">{booking.destination}</td>
                  <td className="px-4 py-2">{booking.specialNote || "-"}</td>
                  <td className="px-4 py-2 capitalize">{booking.status}</td>
                  <td className="px-4 py-2 text-right">
                    {booking.status !== "completed" && (
                      <button
                        onClick={() => handleConfirm(booking._id)}
                        className="bg-green-600 text-white px-3 py-1 rounded">
                        Confirm
                      </button>
                    )}
                    {booking.status === "completed" && (
                      <span className="text-green-600 font-semibold">Done</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
