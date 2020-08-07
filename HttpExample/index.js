module.exports = function(context, req) {
    jsonData = {
        "basics": {
          "name": "Rishab Kumar",
          "label": "CloudOps/DevOps",
          "picture": "",
          "email": "rishabkumar7@gmail.com",
          "website": "http://rishabkumar.com",
          "summary": "AWS and Linux entusiast with some experience in the Cloud.",
          "location": {
            "address": "Virginia Street",
            "city": "Kingston",
            "countryCode": "CA",
            "region": "Ontario"
          },
          "profiles": [{
            "network": "Twitter",
            "username": "rishabk7",
            "url": "http://twitter.com/rishabk7"
          },
          {
            "network": "Linkedin",
            "username": "Rishab Kumar",
            "url": "https://www.linkedin.com/in/rishabkumar7/"
          },
          {
            "network": "GitHub",
            "username": "rishabkumar7",
            "url": "https://github.com/rishabkumar7"
          }]
        },
        "work": [{
          "company": "ECi Software Solutions",
          "position": "CloudOps Specialist",
          "startDate": "2013-05-01",
          "endDate": "Present",
          "summary": "Description...",
        }],
        "education": [{
          "institution": "St. Lawrence College",
          "area": "Computer Networking",
          "studyType": "Diploma",
          "startDate": "2016-05-01",
          "endDate": "2018-06-01",
          "gpa": "3.5/4.0"
        }],
        "awards": [{
          "title": "Dean's List Award",
          "date": "2017-11-01",
          "awarder": "St. Lawrence College",
          "summary": "There is no spoon."
        }],
        "skills": [
          {
            "name": "AWS",
            "level": "Intermediate",
            "keywords": [
              "Cloud",
              "Lambda",
              "S3",
              "CloudFront"
            ]
          },
          {
            "name": "JavaScript",
            "level": "Intermediate",
            "keywords": [
              "ECMAScript",
              "ES6",
              "Node.js",
              "Web",
              "Front End"
            ]
          },
          {
            "name": "React",
            "level": "Intermediate",
            "keywords": [
              "SPA",
              "Web",
              "Front End"
            ]
          },
          {
            "name": "Vue",
            "level": "Intermediate",
            "keywords": [
              "SPA",
              "Web",
              "Front End"
            ]
          },
          {
            "name": "Docker",
            "level": "Intermediate",
            "keywords": [
              "Containers"
            ]
          }
        ],
        "interests": [{
          "name": "Volleyball",
          "keywords": [
            "Beach",
            "Court"
          ]
        }]
      }

    context.res = {
       body: JSON.stringify(jsonData, null, 2)
    };
    context.done();
};