function CalculateCurrentGrade(){
    var homework = document.getElementById("homework").value;
    var classwork = document.getElementById("classwork").value;
    var projects = document.getElementById("projects").value;
    var participation = document.getElementById("participation").value;
    var tests = document.getElementById("tests").value;

    var homeworkWeight = .01 * parseInt(document.getElementById("homeworkWeight").value);
    var classworkWeight = 0.1 * parseInt(document.getElementById("classworkWeight").value);
    var testsWeight = 0.1 * parseInt(document.getElementById("testsWeight").value);
    var projectsWeight = 0.1 * parseInt(document.getElementById("projectsWeight").value);
    var participationWeight = 0.1 * parseInt(document.getElementById("participationWeight").value);

    var homeworkAvg = average(convertToArray(homework));
    var classworkAvg = average(convertToArray(classwork));
    var testsAvg = average(convertToArray(tests));
    var projectsAvg = average(convertToArray(projects));
    var participationAvg = average(convertToArray(participation));

    var homeworkGrade = homeworkWeight * homeworkAvg;
    var classworkGrade = classworkWeight * classworkAvg;
    var testsGrade = testsWeight * testsAvg;
    var projectsGrade = projectsWeight * projectsAvg;
    var participationGrade = participationWeight * participationAvg;

    var grade = (homeworkGrade + classworkGrade + testsGrade + projectsGrade + participationGrade)/(homeworkWeight + classworkWeight + testsWeight + projectsWeight + participationWeight );
    document.getElementById("grade").innerHTML=grade;

    return grade;
}



function convertToArray(str){
    var scoresArray=str.split(",");
    for(var i=0; i<scoresArray.length; i++) {
        scoresArray[i] = parseInt(scoresArray[i]);
    }
    return scoresArray;
}

function average(arr){
    var sum=0;
    for(var i=0; i<arr.length; i++){
        sum=sum+arr[i];
    }
    return (sum)/(arr.length);
}

function gradeForFinal(){
    var finalWeight = 0.1*parseInt(document.getElementById("weightofFinal").value);
    var dreamGrade = parseInt(document.getElementById("dreamGrade").value);
    var currentGrade= CalculateCurrentGrade();
    var finalGradeRequired = (dreamGrade-(currentGrade * (1-finalWeight)))/finalWeight;
    document.getElementById("gradeRequired").innerHTML=finalGradeRequired;
}

