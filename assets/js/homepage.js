var getUserRepos = function(user) {
    // format the GitHub API URL
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    // make a request to the apiUrl
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};
console.log("outside");


var response = fetch("https://api.github.com/users/octocat/repos");
console.log(response);

getUserRepos();