song = "";

function preload()
{
    song = loadSound("blackpink song.mp3");
}

scorerightWrist = 0;
scoreleftWristY = 0;

rightWristX = "";
leftWristX = "";

rightWristY = "";
leftWristY= "";

function setup()
{
    canvas = createCanvas(600,600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet( video , modelLoaded);
    posenet.on('pose' , gotPoses);
}

function modelLoaded()
{
    console.log("posenet is initilized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scorerightWrist = results[0].pose.keypoints[10].score;
        scoreleftWrist = results[0].pose.keypoints[9].score;

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose,rightWrist.y;

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

    }
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);

    

}

function draw()
{
     image(video, 0,0, 600,600);
    fill("blue");
    stroke("white");

    if(scorerightWrist > 0 )
    {
        circle(rightWristX, rightWristY , 20);

        if(rightWristY > 0 && rightWristY < 100)
        {
            document.getElementById("speed").innerHTML = "speed = 0.5x";
            song.rate(0.5);
        }

        else if(rightWristY > 100 && rightWristY < 200)
        {
            document.getElementById("speed").innerHTML = "speed = 1x";
            song.rate(1);
        }

        else if(rightWristY > 200 && rightWristY < 300)
        {
            document.getElementById("speed").innerHTML = "speed = 1.5x";
            song.rate(1.5);
        }

        else if(rightWristY > 300 && rightWristY < 400)
        {
            document.getElementById("speed").innerHTML = "speed = 2x";
            song.rate(2);
        }

        else if(rightWristY > 400 && rightWristY < 500)
        {
            document.getElementById("speed").innerHTML = "speed = 2.5x";
            song.rate(2.5);
        }

        else if(rightWristY > 500 )
        {
            document.getElementById("speed").innerHTML = "speed = 3x";
            song.rate(3);
        }

    }
}