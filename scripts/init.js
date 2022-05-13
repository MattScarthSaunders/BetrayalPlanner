
//list of syndicate members
const nameArray = ["Aisling", "Cameria", "Elreon", "Gravicius", "Guff", "Haku", "Hillock", "ItThatFled", "Janus", "Jorgin", "Korell", "Leo", "Riker", "Rin", "Tora", "Vorici"];


//list of their rewards IN ORDER OF [T,F,R,I]
const rewardArray = [
    ["Double-Veiled Weapons and Jewellery", "Double-Veiled Armour and Jewellery", "Veiled Chaos. T4: Remove a random mod and Add 1 Veiled mod", "Torment Scarab"],
    ["1 Timeworn Unique", "Harbinger Orbs", "Orbs of Unmaking", "Sulphite Scarab"],
    ["1/​2/​3 Unique Weapons", "1/​2/​3 Unique Armours", "1/​2/​3 Unique Jewellery", "Reliquary Scarab"],
    ["Stacks of Div Cards", "Random Div Cards", "Swap Div Cards for random ones", "Divination Scarab"],
    ["Timed Craft", "Timed Craft", "?/​30/​?/​40s Timed Craft", "Timed Craft"],
    ["Rare Items", "Magic/​Rare/​Unique Strongbox", "Rare Items with Quality", "Ambush Scarab"],
    ["24/​26/​28/​30 Quality to Weapon", "24/​26/​28/​30 Quality to Armour", "22/​24/​26/​28 Quality to Flask", "Abyss Scarab"],
    ["Breach Splinters", "Enchanted Maps (Breach)", "T1/​T2/​T3/​2xT3 Upgrade Breachstone", "Breach Scarab"],
    ["Quality Currency", "Currency Shards", "Expedition Currency", "Expedition Scarab"],
    ["1/​2/​3Talismans", "1/​2/​3 Aspect Mod Rares", "Tier 1/​2/​3 Corrupt Amulet to Talisman", "Bestiary Scarab"],
    ["Essences", "Map Fragments", "Fossils", "Elder Scarab"],
    ["Catalysts", "Random Currency", "Blessed/​Divine/​Ex/​2 Ex on an Item", "Metamorph Scarab"],
    ["Take One Currency (Timed)", "Take One Unique (Timed)", "Take One Veiled Rare (Timed)", "Blighted Scarab"],
    ["Normal Maps", "Rare Maps", "Unique Maps", "Cartography Scarab"],
    ["Take One Item (Timed)", "Lab enchanted Gloves/​Boots/​Helmets", "20/​70/​200M XP to a Gem", "Harbinger Scarab"],
    ["Legion Splinters", "Legion Chests", "Incubators", "Legion Scarab"],
    ["Random Quality Gems", "Socket Currency", "1/​1-2/​1-3/​1-6 White Sockets", "Shaper Scarab"]
];


function initialiser(){

    nameArray.forEach(function(element) {

        document.getElementById("syndicate").innerHTML +=
        `<div class="syndicateMember" id="${element}" draggable="true" ondragstart="onDragStart(event)">
        <div class="memberName"><p id="${element}">${element}</p></p></div>
        <div class="memberImg"><img src="images/${element}.png" id="${element}" class="profile"></div>
        <div class="reward"><p id="reward">rewards</p></div></div>`;  //populates syndicate list

        //document.getElementById(`${element}`).style.transform = 'scale(0.5, 0.5)';
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
                }       //when in a new column, iterate over name array, get index of name, match to first index of 2D reward array, give corresponding reward.
            });
            break;
        case "fortification":
            nameArray.forEach(function(element) {
                if(memberName === element){
                    const memberIndex = nameArray.indexOf(element);
                    rewardEle.innerHTML = rewardArray[memberIndex][1];
                }
            });
            break;
        case "research":
            nameArray.forEach(function(element) {
                if(memberName === element){
                    const memberIndex = nameArray.indexOf(element);
                    rewardEle.innerHTML = rewardArray[memberIndex][2];
                }
            });
            break;
        case "investigation":
            nameArray.forEach(function(element) {
                if(memberName === element){
                    const memberIndex = nameArray.indexOf(element);
                    rewardEle.innerHTML = rewardArray[memberIndex][3];
                }
            });
            break;
        default:
            memberHTML.lastChild.innerHTML = "Rewards";
            break;
    }
}


initialiser();
