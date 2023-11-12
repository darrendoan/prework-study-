var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

function selectTopic() {
    if (randomTopic === 'HTML') {
    console.log("Lets Study HTML!");
} else if (randomTopic === 'CSS') {
    console.log("Lets Study CSS!");
} else if (randomTopic === 'Git') {
    console.log("Lets Study Git!");
}else if (randomTopic === 'JavaScript') {
    console.log("Lets Study JavaScript!");
} else {
    console.log("Please Try Again!");
}
}

listTopics()
selectTopic()
