import Parties from "../data/party";
import cloudinary from "cloudinary";
import "dotenv/config";

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});

const getAllParties = (req, res) => {
  return res.status(200).json({
    status: res.statusCode,
    data: Parties
  });
};

const getSpecificfParty = (req, res) => {
  const party = Parties.find(pty => pty.id == req.params.id);

  if (party) {
    return res.status(200).json({
      status: res.statusCode,
      data: party
    });
  }
  return res.status(404).json({
    status: res.statusCode,
    error: "party Not Found"
  });
};

const createParty = (req, res) => {
  const { name, hqAddress } = req.body;
  let logoUrl = "";

  if (req.files.logo) {
    cloudinary.uploader.upload(req.files.logo.path, (result, error) => {
      if (error) {
        return res.status(400).json({
          status: res.statusCode,
          error: error
        });
      }
      const newParty = {
        id: Parties.length + 1,
        name,
        hqAddress,
        logoUrl: result.url
      };
      Parties.push(newParty);
      return res.status(201).json({
        status: res.statusCode,
        data: newParty
      });
    });
  }
};

const deleteParty = (req, res) => {
  const partyToRemoveID = Parties.findIndex(pty => pty.id == req.params.id);

  if (partyToRemoveID != -1) {
    Parties.splice(partyToRemoveID, 1);
    return res.status(200).json({
      status: res.statusCode,
      message: "Party deleted"
    });
  }
  return res.status(404).json({
    status: res.statusCode,
    error: "Party Not Exist"
  });
};

const changePartyName = (req, res) => {
  const partyToUpdate = Parties.find(party => party.id == req.params.id);

  if (partyToUpdate) {
    partyToUpdate.name = req.body.name;

    return res.status(200).json({
      status: res.statusCode,
      data: partyToUpdate
    });
  }

  return res.status(404).json({
    status: res.statusCode,
    error: "Party Not Found"
  });
};

export {
  getAllParties,
  getSpecificfParty,
  deleteParty,
  createParty,
  changePartyName
};
