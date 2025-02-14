export const collateralAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "lendingPool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token2",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "oracle",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "LTV",
        type: "uint256",
      },
    ],
    name: "CreateLendingPool",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "LendingPoolToken1",
        type: "address",
      },
      {
        internalType: "address",
        name: "LendingPoolToken2",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "LTV",
        type: "uint256",
      },
    ],
    name: "createLendingPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "oracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
