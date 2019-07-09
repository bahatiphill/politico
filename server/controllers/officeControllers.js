import Offices from "../data/office";

const getAllOffices = (req, res) => {
  return res.status(200).json({
    status: res.statusCode,
    data: Offices
  });
};

const getSpecificOffice = (req, res) => {
  const office = Offices.find(off => off.id == req.params.id);

  if (office) {
    return res.status(200).json({
      status: res.statusCode,
      data: office
    });
  }
  return res.status(404).json({
    status: res.statusCode,
    error: "Office not found"
  });
};

const createOffice = (req, res) => {
  const { name, type } = req.body;
  const newOffice = {
    id: Offices.length + 1,
    name,
    type
  };

  Offices.push(newOffice);

  return res.status(201).json({
    status: res.statusCode,
    data: newOffice
  });
};

export { getAllOffices, createOffice, getSpecificOffice };
