const Contacts = require("../model/contactModels");

const sendMessage = async (req, res) => {
    // Step 1: Check if data is coming or not
    console.log(req.body);

    // Step 2: Destructure the data
    const { contactName, contactEmail, contactMessage } = req.body;

    // Step 3: Validate the incoming data
    if (!contactName || !contactEmail || !contactMessage) {
        return res.json({
            success: false,
            message: "Please enter all the fields",
        });
    }

    try {
        // Save contact information to the database
        const newContact = await Contacts.create({
            contactName,
            contactEmail,
            contactMessage,
        });

        return res.json({
            success: true,
            message: 'Contact information saved successfully',
            data: newContact,
        });
    } catch (error) {
        console.error('Error saving message:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while saving the contact information',
        });
    }
};

const getAllContacts = async (req, res) => {
    try {
        const listOfContacts = await Contacts.find();
        res.json({
            success: true,
            message: "Contact fetched successfully",
            contacts: listOfContacts,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json("Server Error");
    }
};

const getSingleContact = async (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.json({
            message: 'No record with given id:',
            success: false,
        });
    }
    try {
        const singleContact = await Contacts.findById(id);
        res.json({
            success: true,
            message: 'Contact Fetched',
            contact: singleContact,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json('Server Error');
    }
};

const deleteContact = async (req, res) => {
    try {
        const deletedContact = await Contacts.findByIdAndDelete(req.params.id);
        if (!deletedContact) {
            return res.json({
                success: false,
                message: "Contact not found",
            });
        }
        res.json({
            success: true,
            message: "Contact deleted successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

module.exports = {
    sendMessage,
    getAllContacts,
    getSingleContact,
    deleteContact,
};
    