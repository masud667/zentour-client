import { Link } from 'react-router';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaPlus, FaSync, FaSearch } from 'react-icons/fa';

const ManagePackages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
    price: '',
    duration: '',
    destination: '',
    departureLocation: '',
    departureDate: '',
  });

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3000/packages');
        setPackages(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch packages');
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (loading) return <p className="text-center py-10">Loading packages...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  return (
   <div>
    
     <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Manage My Packages</h1>
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-3 py-1 rounded flex items-center">
            <FaSync className="mr-1" />Refresh
          </button>
          <Link to="/add-package" className="bg-green-600 text-white px-3 py-1 rounded flex items-center">
            <FaPlus className="mr-1" />Add New
          </Link>
        </div>
      </div>

      <div className="mb-4 relative">
        <FaSearch className="absolute top-3 left-3 text-gray-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by name or destination..."
          className="pl-10 w-full border px-3 py-2 rounded"
        />
      </div>

      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left">Package</th>
              <th className="px-4 py-2 text-left">Destination</th>
              <th className="px-4 py-2 text-left">Departure</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Bookings</th>
              <th className="px-4 py-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {packages
              .filter(pkg =>
                pkg.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                pkg.destination.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map(pkg => (
                <tr key={pkg._id} className="border-t">
                  <td className="px-4 py-2">{pkg.name}</td>
                  <td className="px-4 py-2">{pkg.destination}</td>
                  <td className="px-4 py-2">
                    {pkg.departureLocation} <br /> {new Date(pkg.departureDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2">${pkg.price}</td>
                  <td className="px-4 py-2">{pkg.bookingCount || 0}</td>
                  <td className="px-4 py-2 text-right">
                    <button onClick={() => setShowEditModal(true)} className="text-blue-600 mr-2">
                      <FaEdit />
                    </button>
                    <button className="text-red-600">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded shadow-lg w-full max-w-2xl p-6 relative">
            <h2 className="text-xl font-bold mb-4">Edit Package</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="border px-3 py-2 rounded"
              />
              <input
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                placeholder="Image URL"
                className="border px-3 py-2 rounded"
              />
              <input
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                type="number"
                placeholder="Price"
                className="border px-3 py-2 rounded"
              />
              <input
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                placeholder="Duration"
                className="border px-3 py-2 rounded"
              />
              <input
                name="destination"
                value={formData.destination}
                onChange={handleInputChange}
                placeholder="Destination"
                className="border px-3 py-2 rounded"
              />
              <input
                name="departureLocation"
                value={formData.departureLocation}
                onChange={handleInputChange}
                placeholder="Departure Location"
                className="border px-3 py-2 rounded"
              />
              <input
                name="departureDate"
                value={formData.departureDate}
                onChange={handleInputChange}
                type="date"
                className="border px-3 py-2 rounded"
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Description"
                className="border px-3 py-2 rounded md:col-span-2"
                rows="3"
              ></textarea>
              <div className="md:col-span-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="border px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
   </div>
  );
};

export default ManagePackages;
