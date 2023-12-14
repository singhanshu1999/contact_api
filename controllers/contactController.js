//@desc Get all contacts
//@route Get /api/contacts
//@access public
const getContact = async (req, res) => {
  res.json({ message: "get all contacts" });
};

//@desc Create new contacts
//@route Create /api/contacts
//@access public
const createContact = async (req, res) => {
  res.json({ message: "create new contacts" });
};

//@desc Update contacts
//@route Update /api/contacts
//@access public
const updateContact = async (req, res) => {
  res.json({ message: "update contacts by id" });
};

//@desc Delete contacts
//@route Delete /api/contacts
//@access public
const deleteContact = async (req, res) => {
  res.json({ message: "delete contacts by id" });
};

module.exports = { getContact, createContact };
