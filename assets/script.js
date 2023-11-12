var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

function listTopics() {
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

function selectTopic() {
    if (topic === 'HTML') {
    console.log("Lets Study HTML!");
} else if (topic === 'CSS') {
    console.log("Lets Study CSS!");
} else if (topic === 'Git') {
    console.log("Lets Study Git!");
}else if (topic === 'JavaScript') {
    console.log("Lets Study JavaScript!");
} else {
    console.log("Please Try Again!");
}
}



