const Trip = require('../models/Trip');

const createTrip = async (req, res) => {
const { destination, startDate, endDate, description } = req.body;
const trip = await Trip.create({ user: req.user._id, destination, startDate, endDate, description });
res.status(201).json(trip);
};

const getTrips = async (req, res) => {
const trips = await Trip.find({ user: req.user._id });
res.json(trips);
};

const updateTrip = async (req, res) => {
const trip = await Trip.findById(req.params.id);
if (!trip) return res.status(404).json({ message: 'Trip not found' });
if (trip.user.toString() !== req.user._id.toString()) return res.status(401).json({ message: 'Not authorized' });

Object.assign(trip, req.body);
await trip.save();
res.json(trip);
};
const deleteTrip = async (req, res) => {
const trip = await Trip.findById(req.params.id);
if (!trip) return res.status(404).json({ message: 'Trip not found' });
if (trip.user.toString() !== req.user._id.toString()) return res.status(401).json({ message: 'Not authorized' });

await trip.remove();
res.json({ message: 'Trip removed' });
};


module.exports = { createTrip, getTrips, updateTrip, deleteTrip };