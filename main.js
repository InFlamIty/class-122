y = 0
x = 0
draw_circle = ""
draw_rect  = ""
var SpeechRecognition = window.webkitSpeechRecognition
var keeb = new SpeechRecognition()
function start()
{
    document.getElementById("status").innerHTML = "The website is listening speak now."
    keeb.start()
}
keeb.onresult = function (event) {
    console.log(event)
    var content = event.results[0][0].transcript
    console.log(content)
    document.getElementById("status").innerHTML = "Your speech is recognised as " + content + "."
    if (content == "circle") {
        draw_circle = "set"
        y = Math.floor(Math.random() * 600)
        x = Math.floor(Math.random() * 900)
    }
    if (content == "rectangle") {
        draw_rect = "set"
        y = Math.floor(Math.random() * 600)
        x = Math.floor(Math.random() * 900)
    }
}
function setup()
{
    canvas = createCanvas(900 , 600)
}
function draw()
{
    if (draw_circle == "set") {
        radius = Math.floor(Math.random() * 100)
        circle(x , y , radius)
        document.getElementById("status").innerHTML = "Circle is drawn."
        draw_circle = ""
    }
    if (draw_rect == "set") {
        width = Math.floor(Math.random() * 100)
        height = Math.floor(Math.random() * 100)
        rect(x , y , width , height)
        document.getElementById("status").innerHTML = "Rectangle is drawn."
        draw_rect = ""
    }
}