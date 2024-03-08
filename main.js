window.addEventListener("scroll", function () {
  let nav = document.querySelector(".nav");
  nav.classList.toggle("active", window.scrollY > 0);
});

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
function register() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}
function login() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
}

var modal = document.getElementById("login-form");
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//1- connect metamask
let account;
const connectMetamask = async () => {
  if (window.ethereum !== "undefined") {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    account = accounts[0];
    document.getElementById("accountArea").innerHTML = account;
  }
};

//2- connect to smart contract
const connectContract = async () => {
  const ABI = [
    {
      inputs: [],
      name: "myCity",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  const Address = "0x1DCabB8360c16728f0ce5e41BF58ec5eA1a5bA45";
  window.web3 = await new Web3(window.ethereum);
  window.contract = await new window.web3.eth.Contract(ABI, Address);
  document.getElementById("contractArea").innerHTML =
    "connected to smart contract";
};

//3-read data from smart contract
const readContract = async () => {
  const data = await window.contract.methods.myCity().call();
  document.getElementById("dataArea").innerHTML = data;
};
