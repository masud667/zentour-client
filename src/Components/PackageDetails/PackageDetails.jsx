import { useParams, useNavigate, useLoaderData } from "react-router";
import { useEffect, useState, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { motion } from "framer-motion";
import Navbar from "../../Components/Navber/Navber";

const PackageDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const allPackages = useLoaderData();
  const { user } = useContext(AuthContext);

  const [tourPackage, setTourPackage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [specialNote, setSpecialNote] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login", { state: { from: `/packages/${id}` } });
      return;
    }

    const foundPackage = allPackages.find(
      (pkg) => (pkg._id?.toString() || pkg.id?.toString()) === id
    );

    if (!foundPackage) {
      setError("Package not found");
      setLoading(false);
      return;
    }

    setTourPackage(foundPackage);
    setLoading(false);
  }, [id, user, allPackages, navigate]);

  const handleBooking = async () => {
    const bookingData = {
      packageId: id,
      tourName: tourPackage.name,
      price: tourPackage.price,
      buyerName: user.displayName,
      buyerEmail: user.email,
      bookingDate: new Date().toISOString(),
      specialNote,
      status: "pending",
    };

    try {
      await axios.post("http://localhost:3000/bookings", bookingData);

      Swal.fire({
        title: "Booking Confirmed!",
        text: "Your tour has been successfully booked.",
        icon: "success",
        confirmButtonColor: "#3B82F6",
        confirmButtonText: "View Bookings",
        showCancelButton: true,
        cancelButtonText: "Continue Browsing",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/bookings");
        }
      });

      setShowModal(false);
      setSpecialNote("");
    } catch (error) {
      console.error("Booking failed:", error);
      Swal.fire({
        title: "Booking Failed",
        text: "Please try again later.",
        icon: "error",
        confirmButtonColor: "#EF4444",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">
            Loading tour details...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md">
          <div className="text-5xl mb-4">😢</div>
          <h2 className="text-2xl font-bold text-red-500 mb-2">
            Package Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The tour package you're looking for doesn't exist or has been
            removed.
          </p>
          <button
            onClick={() => navigate("/packages")}
            className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-medium py-2 px-6 rounded-lg transition-all">
            Browse Other Tours
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pb-20">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-xl relative">
              <img
                src={tourPackage.image}
                alt={tourPackage.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h1 className="text-3xl font-bold text-white">
                  {tourPackage.name}
                </h1>
              </div>
            </div>

            <div className="mt-6 bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                Full Description
              </h2>
              <p className="text-gray-600 mt-2">
                Join our <span className="font-medium">{tourPackage.name}</span>{" "}
                tour to explore {tourPackage.destination} for{" "}
                {tourPackage.duration}. Guided by{" "}
                <span className="font-medium">{tourPackage.guide}</span>.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-4 text-center">
                <h3 className="text-xl font-bold text-white">Tour Details</h3>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-gray-600 block">Guide:</span>
                  <div className="flex items-center mt-2">
                    <img
                      src={tourPackage.guideImage}
                      alt={tourPackage.guide}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <p className="font-medium">{tourPackage.guide}</p>
                      <p className="text-sm text-gray-600">
                        Contact: {tourPackage.guideContact}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-gray-600">Duration:</span>
                  <p className="font-medium">{tourPackage.duration}</p>
                </div>
                <div className="mb-2">
                  <span className="text-gray-600">Price:</span>
                  <p className="font-medium">{tourPackage.price}</p>
                </div>
                <div className="mb-2">
                  <span className="text-gray-600">Booking Count:</span>
                  <p className="font-medium">{tourPackage.bookingCount}</p>
                </div>
                <div className="mb-2">
                  <span className="text-gray-600">
                    Departure Location & Date:
                  </span>
                  <p className="font-medium">
                    {tourPackage.departureLocation} — {tourPackage.departure}
                  </p>
                </div>
                <div className="mb-4">
                  <span className="text-gray-600">Destination:</span>
                  <p className="font-medium">{tourPackage.destination}</p>
                </div>

                <button
                  onClick={() => setShowModal(true)}
                  className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-teal-600 hover:to-cyan-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Booking Modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="bg-white rounded-2xl max-w-md w-full overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-4">
              <h3 className="text-xl font-bold text-white">
                Confirm Your Booking
              </h3>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <p className="font-medium">Tour Package:</p>
                <p>{tourPackage.name}</p>
              </div>
              <div className="mb-4">
                <p className="font-medium">Price:</p>
                <p>{tourPackage.price}</p>
              </div>
              <div className="mb-4">
                <p className="font-medium">Buyer Name:</p>
                <p>{user.displayName}</p>
              </div>
              <div className="mb-4">
                <p className="font-medium">Buyer Email:</p>
                <p>{user.email}</p>
              </div>
              <div className="mb-4">
                <p className="font-medium">Booking Date:</p>
                <p>{new Date().toLocaleDateString()}</p>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Special Note (optional)
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Any special request..."
                  rows="3"
                  value={specialNote}
                  onChange={(e) => setSpecialNote(e.target.value)}></textarea>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
                  Cancel
                </button>
                <button
                  onClick={handleBooking}
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-teal-600 hover:to-cyan-700 text-white font-medium rounded-lg shadow hover:shadow-md transition-all">
                  Confirm Booking
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default PackageDetails;
