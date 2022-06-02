
//list of syndicate members
const nameArray = ["Aisling", "Cameria", "Elreon", "Gravicius", "Guff", "Haku", "Hillock", "ItThatFled", "Janus", "Jorgin", "Korell", "Leo", "Riker", "Rin", "Tora", "Vagan", "Vorici"];


//list of their rewards IN ORDER OF [T,F,R,I]
const rewardArray = [
    ["Double-Veiled Weapons and Jewellery", "Double-Veiled Armour and Jewellery", "Veiled Chaos. T4: Remove a random mod and Add 1 Veiled mod", "Torment Scarab"],
    ["1 Timeworn Unique", "Harbinger Orbs", "Orbs of Unmaking", "Sulphite Scarab"],
    ["1, 2, 3 Unique Weapons", "1, 2, 3 Unique Armours", "1, 2, 3 Unique Jewellery", "Reliquary Scarab"],
    ["Stacks of Div Cards", "Random Div Cards", "Swap Div Cards for random ones", "Divination Scarab"],
    ["Timed Craft", "Timed Craft", "?, 30, ?, 40s Timed Craft", "Timed Craft"],
    ["Rare Items", "Magic,Rare,Unique Strongbox", "Rare Items with Quality", "Ambush Scarab"],
    ["24, 26, 28, 30 Quality to Weapon", "24, 26, 28, 30 Quality to Armour", "22, 24, 26, 28 Quality to Flask", "Abyss Scarab"],
    ["Breach Splinters", "Enchanted Maps (Breach)", "T1, T2, T3, 2xT3 Upgrade Breachstone", "Breach Scarab"],
    ["Quality Currency", "Currency Shards", "Expedition Currency", "Expedition Scarab"],
    ["1, 2, 3 Talismans", "1, 2, 3 Aspect Mod Rares", "Tier 1,2,3 Corrupt Amulet to Talisman", "Bestiary Scarab"],
    ["Essences", "Map Fragments", "Fossils", "Elder Scarab"],
    ["Catalysts", "Random Currency", "Blessed,Divine,Ex,2 Ex on an Item", "Metamorph Scarab"],
    ["Take One Currency (Timed)", "Take One Unique (Timed)", "Take One Veiled Rare (Timed)", "Blighted Scarab"],
    ["Normal Maps", "Rare Maps", "Unique Maps", "Cart. Scarab"],
    ["Take One Item (Timed)", "Lab enchanted Gloves/Boots/Helmets", "20, 70, 200M XP to a Gem", "Harbinger Scarab"],
    ["Legion Splinters", "Legion Chests", "Incubators", "Legion Scarab"],
    ["Random Quality Gems", "Socket Currency", "1, 1-2, 1-3, 1-6 White Sockets", "Shaper Scarab"]
];

/*const transArray = [];
const fortArray = [];
const resArray = [];
const intArray = [];

const transIDArray = [];
const fortIDArray = [];
const resIDArray = [];
const intIDArray = [];*/


function initialiser(){

    nameArray.forEach(function(element) {

        document.getElementById("syndicate").innerHTML +=
        `<div class="syndicateMember" id="${element}" draggable="true" ontouchstart="onDragStart(event)" ondragstart="onDragStart(event)">
        <div class="memberName"><p id="${element}">${element}</p></p></div>
        <div class="memberImg"><img src="images/${element}.png" id="${element}" class="profile"></div>
        <div class="reward"><p id="reward">rewards</p></div></div>`;  //populates syndicate list

        
    });  

}


function rewards(column, draggableElement){
    const divName = column.getAttribute('id');      //get target column id
    const memberHTML = draggableElement;        //get dragged syndicate member info
    const memberName = memberHTML.getAttribute('id');       //get id of member
    const rewardEle = memberHTML.lastChild;     //laziness, from a previous iteration of code


    switch(divName){
        case "transportation":
            nameArray.forEach(function(element) {
                if(memberName === element){
                    const memberIndex = nameArray.indexOf(element);
                    rewardEle.innerHTML = rewardArray[memberIndex][0];
                    /*transArray.push(rewardArray[memberIndex][0]);
                    transIDArray.push(memberName);
                    document.getElementById("transRoundUp").innerHTML += `<p id=${memberName + 'trans'}>${rewardArray[memberIndex][0]}</p>`;*/
                }       //when in a new column, iterate over name array, get index of name, match to first index of 2D reward array, give corresponding reward.
            });
            break;
        case "fortification":
            nameArray.forEach(function(element) {
                if(memberName === element){
                    const memberIndex = nameArray.indexOf(element);
                    rewardEle.innerHTML = rewardArray[memberIndex][1];
                    /*fortArray.push(rewardArray[memberIndex][1]);
                    fortIDArray.push(memberName);
                    document.getElementById("fortRoundUp").innerHTML += `<p id=${memberName + 'fort'}>${rewardArray[memberIndex][1]}</p>`;*/
                }
            });
            break;
        case "research":
            nameArray.forEach(function(element) {
                if(memberName === element){
                    const memberIndex = nameArray.indexOf(element);
                    rewardEle.innerHTML = rewardArray[memberIndex][2];
                    /*resArray.push(rewardArray[memberIndex][2]);
                    resIDArray.push(memberName);
                    document.getElementById("resRoundUp").innerHTML += `<p id=${memberName + 'res'}>${rewardArray[memberIndex][2]}</p>`;*/
                }
            });
            break;
        case "intervention":
            nameArray.forEach(function(element) {
                if(memberName === element){
                    const memberIndex = nameArray.indexOf(element);
                    rewardEle.innerHTML = rewardArray[memberIndex][3];
                    /*intArray.push(rewardArray[memberIndex][3]);
                    intIDArray.push(memberName);
                    document.getElementById("intRoundUp").innerHTML += `<p id=${memberName + 'int'}>${rewardArray[memberIndex][3]}</p>`;*/
                }
            });
            break;
        default:
            memberHTML.lastChild.innerHTML = "Rewards";
            break;
    }
}


/*function arrayCleaner(draggableElement){
    const memberHTML = draggableElement;        //get dragged syndicate member info
    const divName = memberHTML.parentNode.getAttribute('id');
    const memberName = memberHTML.getAttribute('id');       //get id of member
    let memberIndex;
    let list;

    switch(divName){
        case 'transportation':
            memberIndex = transIDArray.indexOf(memberName);
            list = document.getElementById("transRoundUp");
            if(list.hasChildNodes()){
                list.removeChild(list.children[memberIndex])
            }
            transIDArray.splice(memberIndex, 1);
            transArray.splice(memberIndex, 1);
            break;
        case 'fortification':
            memberIndex = fortIDArray.indexOf(memberName);
            list = document.getElementById("fortRoundUp");
            if(list.hasChildNodes()){
                list.removeChild(list.children[memberIndex])
            }
            fortIDArray.splice(memberIndex, 1);
            fortArray.splice(memberIndex, 1);
            break;
        case 'research':
            memberIndex = resIDArray.indexOf(memberName);
            list = document.getElementById("resRoundUp");
            if(list.hasChildNodes()){
                list.removeChild(list.children[memberIndex])
            }
            resIDArray.splice(memberIndex, 1);
            resArray.splice(memberIndex, 1);
            break;
        case 'intervention':
            memberIndex = intIDArray.indexOf(memberName);
            list = document.getElementById("intRoundUp");
            if(list.hasChildNodes()){
                list.removeChild(list.children[memberIndex])
            }
            intIDArray.splice(memberIndex, 1);
            intArray.splice(memberIndex, 1);
            break;
        default:
            console.log("sheer bloody panic");
            break;          
    }



}*/



initialiser();
