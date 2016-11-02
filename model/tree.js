const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'gymnosperm',
        required: true
    },
    genus: {
        type: String,
        required: true
    }
// , {
    // schema level options here

	// this adds createdAt and updatedAt fields to our model
	// timestamps: true
});

module.exports = mongoose.model('Tree', schema);