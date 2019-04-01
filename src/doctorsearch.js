export class DoctorSearch {
    getDoctorsByQuery(query) {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let apiKey = process.env.exports.apiKey;
            let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=47.608013%2C-122.335167%2C50&skip=0&limit=10&user_key=${apiKey}`;
            request.onload = function() {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }
            request.open("GET", url, true);
            request.send();
        });
    }
    getDoctorsByName(name) {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let apiKey = process.env.exports.apiKey;
            let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=47.608013%2C-122.335167%2C50&skip=0&limit=10&user_key=${apiKey}`;
            request.onload = function() {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }
            request.open("GET", url, true);
            request.send();
        });
    }
}