var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

function listTopics() {
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

function selectTopic() {
    if (topics[0] === 'HTML') {
    console.log("Lets Study HTML!");
} else if (topics[0] === 'CSS') {
    console.log("Lets Study CSS!");
} else if (topics[0] === 'Git') {
    console.log("Lets Study Git!");
}else if (topics[0] === 'JavaScript') {
    console.log("Lets Study JavaScript!");
} else {
    console.log("Please Try Again!");
}
}

listTopics()
selectTopic()
