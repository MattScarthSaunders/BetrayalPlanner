//list of their rewards IN ORDER OF [T,F,R,I]
const betrayalMembers = {
    Aisling: {transportation: "Double-Veiled Weapons and Jewellery", fortification: "Double-Veiled Armour and Jewellery", research: "Veiled Chaos. T4: Remove a random mod and Add 1 Veiled mod", intervention: "Torment Scarab"},
    Cameria: {transportation:"1 Timeworn Unique", fortification: "Harbinger Orbs", research:"Orbs of Unmaking", intervention:"Sulphite Scarab"},
    Elreon: {transportation:"1, 2, 3 Unique Weapons", fortification: "1, 2, 3 Unique Armours", research:"1, 2, 3 Unique Jewellery", intervention:"Reliquary Scarab"},
    Gravicius: {transportation:"Stacks of Div Cards", fortification:"Random Div Cards", research:"Swap Div Cards for random ones", intervention:"Divination Scarab"},
    Guff: {transportation:"Timed Craft", fortification:"Timed Craft", research:"?, 30, ?, 40s Timed Craft", intervention:"Timed Craft"},
    Haku: {transportation:"Rare Items", fortification:"Magic, Rare, Unique Strongbox", research:"Rare Items with Quality", intervention:"Ambush Scarab"},
    Hillock: {transportation:"24, 26, 28, 30 Quality to Weapon", fortification:"24, 26, 28, 30 Quality to Armour", research:"22, 24, 26, 28 Quality to Flask", intervention:"Abyss Scarab"},
    ItThatFled: {transportation:"Breach Splinters", fortification:"Enchanted Maps (Breach)", research:"T1, T2, T3, 2xT3 Upgrade Breachstone", intervention:"Breach Scarab"},
    Janus: {transportation:"Quality Currency", fortification:"Currency Shards", research:"Expedition Currency", intervention:"Expedition Scarab"},
    Jorgin: {transportation:"1, 2, 3 Talismans", fortification:"1, 2, 3 Aspect Mod Rares", research:"Tier 1, 2, 3 Corrupt Amulet to Talisman", intervention:"Bestiary Scarab"},
    Korell: {transportation:"Essences", fortification:"Map Fragments", research:"Fossils", intervention:"Elder Scarab"},
    Leo: {transportation:"Catalysts", fortification:"Random Currency", research:"Blessed,Divine,Ex,2 Ex on an Item", intervention:"Metamorph Scarab"},
    Riker: {transportation:"Take One Currency (Timed)", fortification:"Take One Unique (Timed)", research:"Take One Veiled Rare (Timed)", intervention:"Blighted Scarab"},
    Rin: {transportation:"Normal Maps", fortification:"Rare Maps", research:"Unique Maps", intervention:"Cart. Scarab"},
    Tora: {transportation:"Take One Item (Timed)", fortification:"Lab enchanted Gloves/Boots/Helmets", research:"20, 70, 200M XP to a Gem", intervention:"Harbinger Scarab"},
    Vagan: {transportation:"Legion Splinters", fortification:"Legion Chests", research:"Incubators", intervention:"Legion Scarab"},
    Vorici: {transportation:"Random Quality Gems", fortification:"Socket Currency", research:"1, 1-2, 1-3, 1-6 White Sockets", intervention:"Shaper Scarab"}
};

function initialiser(){

    for(let element in betrayalMembers) {
        document.getElementById("syndicate").innerHTML +=
        `<div class="syndicateMember" id="${element}" draggable="true" ontouchstart="onDragStart(event)" ondragstart="onDragStart(event)">
        <div class="memberName"><p id="${element}">${element}</p></p></div>
        <div class="memberImg"><img src="images/${element}.png" id="${element}" class="profile"></div>
        <div class="reward"><p id="reward">rewards</p></div></div>`;  //populates syndicate list
    };  

}

function rewards(column, draggableElement) {
    const divName = column.getAttribute('id');      //get target column id
    const memberHTML = draggableElement;        //get dragged syndicate member info
    const memberName = memberHTML.getAttribute('id');       //get id of member
    const rewardEle = memberHTML.lastChild;     //laziness, from a previous iteration of code

    rewardEle.innerHTML = betrayalMembers[memberName][divName]; //sets new reward content to correct data
}

initialiser();
