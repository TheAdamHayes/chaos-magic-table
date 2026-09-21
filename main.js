const action = [
    "Transform $TARGET into",
    "Within 5 ft of $TARGET, summon a",
    "Make $TARGET unable to speak in any language other then that of a",
    "Teleport $TARGET to the closest",
    "Heal $TARGET of your choice by the maximum HP of a",
    "Make $TARGET believe they are and behave like a",
    "Damage $TARGET equal to the maximum HP of a",
    "Replace the brain of $TARGET with that of a"
]

const duration =  [
    "until the end of your next turn",
    "for 10 minutes",
    "for 1 hour",
    "until the next dawn",
    "until the next blue moon",
    "until Baldurs Gate 4 releases",
    "until the next SPG Office Hours",
    "until your next session on SPG begins",
    "for 1d4 hours",
    "for 1d12 hours",
    "for an indeterminate amount of time",
]

const object = [
    "potted plant",
    "crab",
    "flumph",
    "wolf",
    "flying sword",
    "giant venomous snake",
    "cockatrice",
    "magma mephit",
    "modron quadrone",
    "confused, alternate universe version of the target",
    "bandit",
    "nirnroot",
    "lich",
    "blade of grass",
    "a healing potion",
    "a legendary weapon",
    "fireball",
    "GM",
    "city guard",
    "secret spy",
    "platinum coin",
    "$100 AUD bill",
    "£100 GBP bill",
    "$100 USD",
    "swiss-cheese roll",
    "exactly one bitcoin",
    "a random GM on the SPG discord",
    "D6",
    "D4",
    "D20",
    "D10",
    "D12"
]

const target = [
    "one random creature somewhere within this dimension",
    "yourself",
    "one enemy of your choice within 60ft.",
    "one creature of your choice within 120ft.",
    "all creatures of your choice within 30ft.",
    "the nearest tree",
    "a bowl of lukewarm water",
    "a random GM on the SPG discord",
    "the nearest lich",
    "the nearest ally",
    "the nearest inanimate object",
    "a random inanimate object near you"
]

const behaviour = [
    "attack you",
    "run away", 
    "stare into the deep abyss of nothingness",
    "defend itself",
    "assist the target",
    "attack the target",
    "assist and obey you",
    "ponder the meaninglessness of life for the duration",
    "create an account on SPG",
    "roll on the actual wild magic table",
    "run a game of Cypher",
    "run a game of Pathfinder 2E",
    "run a game of Dungeons and Dragons",
]

/* BUTTONS */
const actionButton = document.getElementById("tab-action");
const durationButton = document.getElementById("tab-duration");
const objectButton = document.getElementById("tab-object");
const behaviourButton = document.getElementById("tab-behaviour");

/* END RESULT */
const selections = {
    action: null,
    object: null,
    duration: null,
    behaviour: null
}


/* SELECTORS */
actionButton.addEventListener("click", function() {

    let actionSelectedIndex = Math.floor(Math.random() * action.length);
    let actionSelected = action[actionSelectedIndex];

    let targetSelectedIndex = Math.floor(Math.random() * target.length);
    let targetSelected = target[targetSelectedIndex];

    let actionFinal = actionSelected.replace("$TARGET", targetSelected)

    selections.action = actionFinal;
    actionButton.textContent = actionFinal;
    displayEndResult();
});


durationButton.addEventListener("click", function() {

    let durationSelectedIndex = Math.floor(Math.random() * duration.length);
    let durationSelected = duration[durationSelectedIndex];

    selections.duration = durationSelected;
    durationButton.textContent = durationSelected;
    displayEndResult();
});

objectButton.addEventListener("click", function() {

    let objectSelectedIndex = Math.floor(Math.random() * object.length);
    let objectSelected = object[objectSelectedIndex];

    selections.object = objectSelected;
    objectButton.textContent = objectSelected;
    displayEndResult();
});


behaviourButton.addEventListener("click", function() {

    let behaviourSelectedIndex = Math.floor(Math.random() * behaviour.length);
    let behaviourSelected = behaviour[behaviourSelectedIndex];

    selections.behaviour = behaviourSelected;
    behaviourButton.textContent = behaviourSelected;
    displayEndResult();
});

/* DISPLAY FINAL RESULT */

const result = document.getElementById("result");

function displayEndResult() {
    if (selections.action
        && selections.object
        && selections.duration
        && selections.behaviour
    ) {

    var finalSentence = `${selections.action} ${selections.object} ${selections.duration} and it must ${selections.behaviour}.`;

    result.textContent = finalSentence;

    }
}