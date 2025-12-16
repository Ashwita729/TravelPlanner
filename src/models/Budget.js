const mongoose = require('mongoose');


const budgetSchema = mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
trip: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true },
amount: { type: Number, required: true },
}, { timestamps: true });


module.exports = mongoose.model('Budget', budgetSchema);