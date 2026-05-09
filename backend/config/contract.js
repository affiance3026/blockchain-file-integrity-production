require("dotenv").config();
const { ethers } = require("ethers");

// Provider (Sepolia)
const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

// Wallet
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// Contract Address
const contractAddress = process.env.CONTRACT_ADDRESS;

// ABI
const abi = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "certificates",
      "outputs": [
        {
          "internalType": "string",
          "name": "certificate_id",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "cid",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "issuer_id",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "user_id",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_certificate_id",
          "type": "string"
        }
      ],
      "name": "getCertificate",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_certificate_id",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_cid",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_issuer_id",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_user_id",
          "type": "string"
        }
      ],
      "name": "storeCertificate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
]

// Contract instance
const contract = new ethers.Contract(contractAddress, abi, wallet);

module.exports = contract;