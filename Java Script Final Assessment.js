/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let ourNfts = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT ( Id , name , age ,  gender) {
    const Nft = {
        "Id" : Id ,
        "name" : name ,
        "age" : age ,
        "gender" : gender
    };
    ourNfts.push(Nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    let i = 0;
    while (i < ourNfts.length) {
        console.log("\n");
        console.log("Id: " +  ourNfts[i].Id);
        console.log("name: " + ourNfts[i].name);
        console.log("age: " + ourNfts[i].age);
        console.log("gender: " + ourNfts[i].gender);
        i++;

    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal numbers of NFTs: " + ourNfts.length + "\n" );

}

// call your functions below this line

mintNFT(" 101 " , " Akash " , " 19 " , " Male ");
mintNFT(" 102 " , " Harsh " , " 22 " , " Male ");

//the list of NFTs
listNFTs();

//the total supply
getTotalSupply();
