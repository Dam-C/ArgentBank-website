const axios = require("axios");
const signupApi = "http://localhost:3001/api/v1/user/signup";

const users = [
  {
    firstName: "Tony",
    lastName: "Stark",
    email: "tony@stark.com",
    password: "password123",
    userName: "Iron",
    userAccounts: [
      {
        accountName: "Argent Bank of America",
        currentBalance: 49098.43,
        Transactions: [
          {
            transactionID: "tr-ABOA1-ST-7768490JYFSBT-2023-05",
            Date: "date",
            Description: "Golden Sun Bakery",
            Amount: 8.0,
            Balance: 7954.0,
            transactionType: "Electronic",
            Category: "",
            Note: "",
          },
          {
            transactionID: "tr-ABOA1-ST-7768490JYFSBT-2023-04",
            Date: "date",
            Description: "Red Horse Sport Cars",
            Amount: 22999.0,
            Balance: 7954.0,
            transactionType: "Electronic",
            Category: "",
            Note: "",
          },
          {
            transactionID: "tr-ABOA1-ST-7768490JYFSBT-2023-03",
            Date: "date",
            Description: "Laudromatic",
            Amount: 13.5,
            Balance: 7954.0,
            transactionType: "Electronic",
            Category: "",
            Note: "",
          },
        ],
      },
      {
        accountName: "Avengers Initiative Fund",
        currentBalance: 48883540208.19,
        Transactions: [
          {
            transactionID: "tr-AIF1-ST-7768490JYFSBT-2023-05",
            Date: "date",
            Description: "Repairing New-Yoork",
            Amount: 19000000000.0,
            Balance: 60000000000.0,
            transactionType: "Electronic",
            Category: "",
            Note: "",
          },
          {
            transactionID: "tr-AIF1-ST-7768490JYFSBT-2023-04",
            Date: "date",
            Description: "Sokovia damages and interests",
            Amount: 30000000000.0,
            Balance: 60000000000.0,
            transactionType: "Electronic",
            Category: "",
            Note: "",
          },
          {
            transactionID: "tr-AIF1-ST-7768490JYFSBT-2023-03",
            Date: "date",
            Description: "Building spaceship",
            Amount: 4000000000.0,
            Balance: 60000000000.0,
            transactionType: "Electronic",
            Category: "",
            Note: "",
          },
        ],
      },
      {
        accountName: "Pepper Secrer Acccount",
        currentBalance: 967.22,
        Transactions: [
          {
            transactionID: "tr-PSA1-ST-7768490JYFSBT-2023-05",
            Date: "date",
            Description: "Diner in Paris",
            Amount: 600.0,
            Balance: 12000.0,
            transactionType: "Electronic",
            Category: "",
            Note: "",
          },
          {
            transactionID: "tr-PSA1-ST-7768490JYFSBT-2023-04",
            Date: "date",
            Description: "Lattes in the morning",
            Amount: 9.99,
            Balance: 12000.0,
            transactionType: "Electronic",
            Category: "",
            Note: "",
          },
          {
            transactionID: "tr-PSA1-ST-7768490JYFSBT-2023-03",
            Date: "date",
            Description: "Movie",
            Amount: 15.45,
            Balance: 12000.0,
            transactionType: "Electronic",
            Category: "",
            Note: "",
          },
        ],
      },
    ],
  },
  {
    firstName: "Steve",
    lastName: "Rogers",
    email: "steve@rogers.com",
    password: "password456",
    userName: "Captain",
    userAccounts: [
      {
        accountName: "Argent Bank of America",
        currentBalance: 49098.43,
        transactions: [
          {
            transactionID: "tr-ABOA1-RS-0987335KSIXXP-2023-05",
            Date: "date",
            Description: "Golden Sun Bakery",
            Amount: 8.0,
            Balance: 7954.0,
            transactionType: "Electronic",
            Category: "",
            Note: "",
          },
          {
            transactionID: "tr-ABOA1-RS-0987335KSIXXP-2023-04",
            Date: "date",
            Description: "Red Horse Sport Cars",
            Amount: 22999.0,
            Balance: 7954.0,
            transactionType: "Electronic",
            Category: "",
            Note: "",
          },
          {
            transactionID: "tr-ABOA1-RS-0987335KSIXXP-2023-03",
            Date: "date",
            Description: "Laudromatic",
            Amount: 13.5,
            Balance: 7954.0,
            transactionType: "Electronic",
            Category: "",
            Note: "",
          },
        ],
      },
      {
        accountName: "Avengers Initiative Fund",
        currentBalance: 48883540208.19,
        transactions: [
          {
            transactionID: "tr-AIF1-RS-0987335KSIXXP-2023-05",
            Date: "date",
            Description: "Repairing New-Yoork",
            Amount: 19000000000.0,
            Balance: 60000000000.0,
            transactionType: "Electronic",
            Category: "",
            Note: "",
          },
          {
            transactionID: "tr-AIF1-RS-0987335KSIXXP-2023-04",
            Date: "date",
            Description: "Sokovia damages and interests",
            Amount: 30000000000.0,
            Balance: 60000000000.0,
            transactionType: "Electronic",
            Category: "",
            Note: "",
          },
          {
            transactionID: "tr-AIF1-RS-0987335KSIXXP-2023-03",
            Date: "date",
            Description: "Building spaceship",
            Amount: 4000000000.0,
            Balance: 60000000000.0,
            transactionType: "Electronic",
            Category: "",
            Note: "",
          },
        ],
      },
      {
        accountName: "Brooklyn Neighborhood Fund",
        currentBalance: 76889.66,
        transactions: [
          {
            transactionID: "tr-PSA1-ST-7768490JYFSBT-2023-05",
            Date: "date",
            Description: "Diner in Paris",
            Amount: 600.0,
            Balance: 12000.0,
            transactionType: "Electronic",
            Category: "",
            Note: "",
          },
          {
            transactionID: "tr-PSA1-ST-7768490JYFSBT-2023-04",
            Date: "date",
            Description: "Lattes in the morning",
            Amount: 9.99,
            Balance: 12000.0,
            transactionType: "Electronic",
            Category: "",
            Note: "",
          },
          {
            transactionID: "tr-PSA1-ST-7768490JYFSBT-2023-03",
            Date: "date",
            Description: "Movie",
            Amount: 15.45,
            Balance: 12000.0,
            transactionType: "Electronic",
            Category: "",
            Note: "",
          },
        ],
      },
    ],
  },
];

users.forEach((user) => {
  axios
    .post(signupApi, user)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
});
