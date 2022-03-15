const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner()
let accounts;
if(window["ethereum"] !== undefined){

}
window.onload = function() {console.log("dApp is loaded");}

const listAddress = "0x3D7aB668610d8b3e50dA39cE94882Dec761d3769"; //polygon contract
const listAbi = [{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"TheOpListList","outputs":[{"internalType":"contract OpList","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"create","outputs":[{"internalType":"contract OpList","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"created","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"getList","outputs":[{"internalType":"address","name":"listAddress","type":"address"},{"internalType":"uint256","name":"timeCreated","type":"uint256"},{"internalType":"uint256","name":"txnTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oplists","outputs":[{"internalType":"contract OpList","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
const listContract = new ethers.Contract(listAddress, listAbi, provider);
//const listSigned = listContract.connect(signer);
const listWithSigner = new ethers.Contract(listAddress, listAbi, signer);
//when using local node
const myListAddress = "0x46e4c1cc5e5f76998e83f9dc477559bc0aa710cc";
const myListAbi = [{"inputs":[{"internalType":"address","name":"creator","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"creator","type":"address"},
{"indexed":false,"internalType":"string","name":"op","type":"string"},
{"indexed":false,"internalType":"uint256","name":"opTime","type":"uint256"}],"name":"OpCreated","type":"event"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"OWNER","type":"address"},
{"indexed":false,"internalType":"string","name":"op","type":"string"},
{"indexed":false,"internalType":"uint256","name":"reOpTime","type":"uint256"}],"name":"ReOpCreated","type":"event"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},
{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Rugged","type":"event"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"tipper","type":"address"},
{"indexed":false,"internalType":"uint256","name":"tipAmount","type":"uint256"},
{"indexed":false,"internalType":"bytes32","name":"tip","type":"bytes32"}],"name":"TipReceived","type":"event"},
{"stateMutability":"payable","type":"fallback"},
{"inputs":[],"name":"OWNER","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"ReOp","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"payable","type":"function"},
{"inputs":[],"name":"Rug","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"createdTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"lastPost","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},
{"internalType":"string","name":"opinion","type":"string"},
{"internalType":"uint256","name":"opTime","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"opId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"string","name":"_op","type":"string"}],"name":"postOp","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"posts","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},
{"internalType":"string","name":"opinion","type":"string"},
{"internalType":"uint256","name":"opTime","type":"uint256"}],"stateMutability":"view","type":"function"},
{"stateMutability":"payable","type":"receive"}];
//async uses await pattern "easier to read"
const enableEth = async () => {
    accounts = await window.ethereum.request({ method: 'eth_requestAccounts'}).catch((err)=>{
    console.log(err.code);
})
    console.log(accounts);
    
}//eip-1193 for error codes for rpc providers

const checkEthBalance = async () => {
    let balance = await window.ethereum.request({ method: 'eth_getBalance',
        params: [
            accounts[0]
        ]
    }).catch((err) => {
        console.log(err);

    });

    balance = parseInt(balance);
    balance = balance / Math.pow(10, 18);
    console.log(balance);

}




const createList = async() => {
    const tx = listWithSigner.create();
    document.getElementById("OpListAddress").innerHTML = tx;
}

const getList = async() => {
    var input = document.getElementById("getListWallet").value;
    console.log(input);
    var reinput = ethers.utils.getAddress(input);
    console.log(reinput);
    console.log(ethers.utils.getAddress(reinput));
    const tx = listWithSigner.getList(reinput);
    document.getElementById("OpListAddress").innerHTML = reinput;
    
}


const tossACoin = async() => {

    // Send 1 MATIC to an Jack
const tx = signer.sendTransaction({
    to: "0x178b869b332A23aD4e60657cdBe85dd9F23fa16B",
    value: ethers.utils.parseEther("1.0")
});
}
