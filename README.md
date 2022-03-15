# OpList
 Contracts and frontend for contract factory and created contracts. 

 The goal of OpList is to create the ability to form a decentralized network of contracts that each individual user owns and has custody of. 

The contracts include a contract factory, of which I *am* the owner. 

This contract is available on the Polygon Network (due to low gas fees of tenths, if not hundredths of a cent per transaction. )

Due to my being new to ethers.js as well as javascript in general, I am using simple functions to illustrate straightforward calls to contracts. 

The functions are as follows: 

(Provider)View Only:
View(Read), no arg


View(Read), 1 arg 
   

(signer)Writes to the state:
(TXN)write, no args 
    @dev Repost Op of another account
    @return data of delegateCall

(TXN)write, 1 arg 
    @dev Create a post to Post array
    @param _op Post of the new owner


