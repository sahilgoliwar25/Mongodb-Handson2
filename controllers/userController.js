const client = require("../db/connection");
const db = client.db("Human_Resource");
const collection = db.collection("employee");
const dataQuery = [
  {
    firstName: "John",
    lastName: "Doe",
    salary: "25000",
    department: "HR",
    lastCompany: "X",
    lastSalary: "10000",
    overallExp: "2",
    contactInfo: "1234567890",
    yearGrad: "2016",
    gradStream: "CSE",
  },
  {
    firstName: "Rohan",
    lastName: "Jame",
    salary: "30000",
    department: "Technical",
    lastCompany: "Y",
    lastSalary: "15000",
    overallExp: "1",
    contactInfo: "1234567860",
    yearGrad: "2015",
    gradStream: "CSE",
  },
  {
    firstName: "Jame",
    lastName: "Doe",
    salary: "35000",
    department: "Accounts",
    lastCompany: "Z",
    lastSalary: "20000",
    overallExp: "1",
    contactInfo: "123567890",
    yearGrad: "2019",
    gradStream: "ECE",
  },
  {
    firstName: "Sao",
    lastName: "Avika",
    salary: "30000",
    department: "Sales",
    lastCompany: "Y",
    lastSalary: "15000",
    overallExp: "2",
    contactInfo: "1234567860",
    yearGrad: "2015",
    gradStream: "CSE",
  },
  {
    firstName: "Jame",
    lastName: "roh",
    salary: "35000",
    department: "Accounts",
    lastCompany: "Z",
    lastSalary: "15000",
    overallExp: "2",
    contactInfo: "123567890",
    yearGrad: "2019",
    gradStream: "EEE",
  },
  {
    firstName: "Rohan",
    lastName: "Jame",
    salary: "30000",
    department: "Technical",
    lastCompany: "Y",
    lastSalary: "15000",
    overallExp: "1",
    contactInfo: "1234567860",
    yearGrad: "2015",
    gradStream: "CSE",
  },
  {
    firstName: "Jame",
    lastName: "Doe",
    salary: "35000",
    department: "Accounts",
    lastCompany: "Z",
    lastSalary: "20000",
    overallExp: "1",
    contactInfo: "123567890",
    yearGrad: "2019",
    gradStream: "ECE",
  },
  {
    firstName: "Sao",
    lastName: "Avika",
    salary: "30000",
    department: "Sales",
    lastCompany: "Y",
    lastSalary: "15000",
    overallExp: "2",
    contactInfo: "1234567860",
    yearGrad: "2015",
    gradStream: "CSE",
  },
  {
    firstName: "Jame",
    lastName: "Doe",
    salary: "35000",
    department: "Accounts",
    lastCompany: "Z",
    lastSalary: "15000",
    overallExp: "2",
    contactInfo: "123567890",
    yearGrad: "2019",
    gradStream: "EEE",
  },
  {
    firstName: "Rohan",
    lastName: "Jame",
    salary: "30000",
    department: "Technical",
    lastCompany: "Y",
    lastSalary: "15000",
    overallExp: "1",
    contactInfo: "1234567860",
    yearGrad: "2015",
    gradStream: "CSE",
  },
  {
    firstName: "Jame",
    lastName: "Doe",
    salary: "35000",
    department: "Accounts",
    lastCompany: "Z",
    lastSalary: "20000",
    overallExp: "1",
    contactInfo: "123567890",
    yearGrad: "2019",
    gradStream: "ECE",
  },
  {
    firstName: "Sao",
    lastName: "Avika",
    salary: "30000",
    department: "Sales",
    lastCompany: "Y",
    lastSalary: "15000",
    overallExp: "2",
    contactInfo: "1234567860",
    yearGrad: "2015",
    gradStream: "CSE",
  },
  {
    firstName: "Jame",
    lastName: "Doe",
    salary: "35000",
    department: "Accounts",
    lastCompany: "Z",
    lastSalary: "15000",
    overallExp: "2",
    contactInfo: "123567890",
    yearGrad: "2019",
    gradStream: "EEE",
  },
];
const options = { ordered: true };

//add new insertOne user
async function addNewUser(req, res) {
  try {
    const result = await collection.insertMany(dataQuery, options);

    res.status(200).send({ msg: "data inserted", users: result });
  } catch (e) {
    res.status(500).send("error occured", e);
  }
}

//find all user
async function query1(req, res) {
  try {
    const result = await collection.find().toArray();
    console.log(result);
    res.status(200).send({ msg: "All Employees", user: result });
  } catch (e) {
    res.status(500).send("error occured", e);
  }
}
//find employees who are having salary more than 30000
async function query2(req, res) {
  try {
    const result = await collection
      .find({ salary: { $gt: "30000" } })
      .toArray();
    console.log(result);
    res.status(200).send({
      msg: "Employees who are having salary more than 30000",
      user: result,
    });
  } catch (e) {
    res.status(500).send("error occured", e);
  }
}
//find employees who are having salary more than 30000
async function query3(req, res) {
  try {
    const result = await collection
      .find({ overallExp: { $gte: "2" } })
      .toArray();
    console.log(result);
    res.status(200).send({
      msg: "Employees who are having experience more than 2 years",
      user: result,
    });
  } catch (e) {
    res.status(500).send("error occured", e);
  }
}
//find employees who are having salary more than 30000
async function query4(req, res) {
  try {
    const result = await collection
      .find({ yearGrad: { $gt: "2015" }, overallExp: { $gt: "1" } })
      .toArray();
    console.log(result);
    res.status(200).send({
      msg: "Employees who are graduated after 2015 and having experience more than 1 year",
      user: result,
    });
  } catch (e) {
    res.status(500).send("error occured", e);
  }
}
//updateOne user
async function updateUser(req, res) {
  try {
    const result = await collection.updateMany(
      { salary: { $gt: "70000" } },
      { $set: { salary: "65000" } }
    );
    console.log(result);
    res.status(200).send({
      msg: "Updated the salary of the employee whose salary is greater than 70000 to 65000",
      user: result,
    });
  } catch (e) {
    res.status(500).send("error occured", e);
  }
}
//deleteOne user
async function deleteUser(req, res) {
  try {
    const result = await collection.deleteMany({ lastCompany: "Y" });
    console.log(result);
    res.status(200).send({
      msg: "Deleted Employees whos last company were Y",
      user: result,
    });
  } catch (e) {
    res.status(500).send("error occured", e);
  }
}
module.exports = {
  addNewUser,
  query1,
  query2,
  query3,
  query4,
  updateUser,
  deleteUser,
};
