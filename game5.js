var arrayAudio = [];
var x = document.getElementById("audio3");
arrayAudio.push(x);
var x = document.getElementById("audio2");
arrayAudio.push(x);
var x = document.getElementById("audio4");
arrayAudio.push(x);
var x = document.getElementById("audio1");
arrayAudio.push(x);
var canvas = document.querySelector("canvas");
var arrayzombiespawn = [];
var arraybullet = [];
var spawnTime = 3000;
var set = 0;
var pushingIn = null;
var hp = 60;
var blueBullet = 0;
var purpleBullet = 0;
var redBullet = 0;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var p = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height / 2;
p.beginPath();
p.arc(x, y, 30, 0, Math.PI * 2, false);
p.fillStyle = "rgb(255, 255, 0)";
p.fill();
var time = null;
var space = null;
var xVelocity = 0;
var yVelocity = 0;
var bulletx = null;
var bullety = null;
var bulletTime = null;
var bulletxVelocity = null;
var bulletyVelocity = null;
var killDone = 0;
move = setInterval(function () {
    p.clearRect(0, 0, innerWidth, innerHeight);
    p.beginPath();
    x += xVelocity;
    y += yVelocity;
    p.arc(x, y, 30, 0, Math.PI * 2, false);
    p.strokeStyle = "blue";
    p.stroke();
    p.fill();
}, 10);
var zombieType = null;
var dmg = null;
window.addEventListener('click', function (event) {
    if (killDone == 0) {
        if (set == 0) {
            randomWeapons = setInterval(function () {
                typeGun = Math.floor(Math.random() * 3);
                gunx = Math.random() * window.innerWidth;
                guny = Math.random() * window.innerHeight;
            }, 10000)
            pushingIn = setInterval(function () {
                spawnTime -= 30;
                var check = Math.floor(Math.random() * 4);
                if (check == 0) {
                    zombiex = -30;
                    zombiey = Math.random() * window.innerHeight;
                }
                else if (check == 1) {
                    zombiex = window.innerWidth + 30;
                    zombiey = Math.random() * window.innerHeight;
                }
                else if (check == 2) {
                    zombiey = -30;
                    zombiex = Math.random() * window.innerWidth;
                }
                else if (check == 3) {
                    zombiey = window.innerHeight + 30;
                    zombiex = Math.random() * window.innerWidth;
                }
                zombieType = Math.floor(Math.random() * 3);
                if (zombieType == 0) {
                    var zombie = {
                        zombiex: zombiex,
                        zombiey: zombiey,
                        zombier: 20,
                        zombieendAngle: Math.PI * 2,
                        health: 40,
                        maxHealth: 40,
                        speed: 2,
                        dmg: 6
                    }
                }
                else if (zombieType == 1) {
                    var zombie = {
                        zombiex: zombiex,
                        zombiey: zombiey,
                        zombier: 15,
                        zombieendAngle: Math.PI * 2,
                        health: 30,
                        maxHealth: 30,
                        speed: 3,
                        dmg: 3
                    }
                }
                else if (zombieType == 2) {
                    var zombie = {
                        zombiex: zombiex,
                        zombiey: zombiey,
                        zombier: 30,
                        zombieendAngle: Math.PI * 2,
                        health: 60,
                        maxHealth: 60,
                        speed: 1.5,
                        dmg: 12
                    }
                }
                arrayzombiespawn.push(zombie);
            }, spawnTime)
        }
        set = 1;
        mousey = event.y;
        mousex = event.x;
        space = Math.sqrt((mousex - x) * (mousex - x) + (mousey - y) * (mousey - y));
        time = space / 3;
        bulletTime = space / 4;
        xVelocity = (mousex - x) / time;
        yVelocity = (mousey - y) / time;
        bulletxVelocity = (mousex - x) / bulletTime;
        bulletyVelocity = (mousey - y) / bulletTime;
        if (changeGun == 49) {
            bulletColor = "green";
            makeBullet();
            arraybullet.push(bullet);
            if (arrayAudio[3].paused == true) {
                arrayAudio[3].play();
            }
            else {
                arrayAudio[3].currentTime = 0
            }
            arrayAudio[3].play();
        }
        else if (changeGun == 50 && blueBullet > 0) {
            bulletColor = "blue";
            makeBullet();
            arraybullet.push(bullet);
            blueBullet -= 1;
            if (arrayAudio[2].paused == true) {
                arrayAudio[2].play();
            }
            else {
                arrayAudio[2].currentTime = 0
            }
            arrayAudio[2].play();
        }
        else if (changeGun == 51 && purpleBullet > 0) {
            bulletColor = "purple";
            makeBullet();
            arraybullet.push(bullet);
            purpleBullet -= 1;
            if (arrayAudio[1].paused == true) {
                arrayAudio[1].play();
            }
            else {
                arrayAudio[1].currentTime = 0
            }
            arrayAudio[1].play();
        }
        else if (changeGun == 52 && redBullet > 0) {
            bulletColor = "red";
            makeBullet();
            arraybullet.push(bullet);
            redBullet -= 1;
            if (arrayAudio[0].paused == true) {
                arrayAudio[0].play();
            }
            else {
                arrayAudio[0].currentTime = 0
            }
            arrayAudio[0].play();
        }
        clearInterval(move);
        animate();
    }
    else if (killDone == 2) {
        if (set == 1) {
            bossShoot = setInterval(function () {
                for (var i = 1; i <= 14; i += 1) {
                    if (i >= 1 && i <= 4) {
                        var bossBullet = {
                            bossBullety: -100,
                            bossBulletx: ((canvas.width / 4) * (i - 1)) + (canvas.width / 8),
                            bossBulletCheck: "top",
                            bossBulletDisplay: ("top" + i)

                        }
                    }
                    else if (i >= 5 && i <= 7) {
                        var bossBullet = {
                            bossBullety: ((canvas.height / 3) * (i - 5)) + (canvas.width / 12),
                            bossBulletx: -100,
                            bossBulletCheck: "left",
                            bossBulletDisplay: ("left" + (i - 4))
                        }
                    }
                    else if (i >= 8 && i <= 11) {
                        var bossBullet = {
                            bossBullety: canvas.height,
                            bossBulletx: ((canvas.width / 4) * (i - 8)) + (canvas.width / 8),
                            bossBulletCheck: "bottom",
                            bossBulletDisplay: ("bottom" + (i - 7))
                        }
                    }
                    else if (i >= 12 && i <= 14) {
                        var bossBullet = {
                            bossBullety: ((canvas.height / 3) * (i - 12)) + (canvas.width / 12),
                            bossBulletx: canvas.width,
                            bossBulletCheck: "right",
                            bossBulletDisplay: ("right" + (i - 11))
                        }
                    }
                    arrayBossBullet.push(bossBullet);
                }
            }, 1000);
            bosssnipe = setInterval(function () {
                var bulletSnipe = {
                    snipex: x,
                    snipey: y,
                    timeToShoot: 30,
                }
                ArrayBulletSnipe.push(bulletSnipe);
            }, 3000);
        }
        set = 2;
        mousey = event.y;
        mousex = event.x;
        space = Math.sqrt((mousex - x) * (mousex - x) + (mousey - y) * (mousey - y));
        time = space / 3;
        bulletTime = space / 4;
        xVelocity = (mousex - x) / time;
        yVelocity = (mousey - y) / time;
        bulletxVelocity = (mousex - x) / bulletTime;
        bulletyVelocity = (mousey - y) / bulletTime;
        bulletColor = "red";
        makeBullet();
        arraybullet.push(bullet);
        clearInterval(intothebossfight);
        intoTheBossFight();
    }
})
var ArrayBulletSnipe = [];
var bosssnipe = null;
var arrayBossBullet = [];
var bossShoot = null;
var killCount = 0;
var changeGun = 49;
var eat = null;
var pickup = null;
var chaseTime = null;
var shoot = null;
var damage = null;
var a = 0;
var da = 0;
var eaten = null;
function animate() {
    move = setInterval(function () {
        p.clearRect(0, 0, innerWidth, innerHeight);
        p.fillStyle = ("rgba(255, 0, 0, " + a + ")");
        p.fillRect(0, 0, window.innerWidth, window.innerHeight);
        p.beginPath();
        if (typeGun == 0) {
            p.strokeStyle = "blue";
        }
        else if (typeGun == 1) {
            p.strokeStyle = "purple";
        }
        else if (typeGun == 2) {
            p.strokeStyle = "red";
        }
        p.arc(gunx, guny, 30, 0, Math.PI * 2, false);
        p.stroke();
        pickup = Math.sqrt((x - gunx) * (x - gunx) + (y - guny) * (y - guny));
        for (var i = 0; i <= arraybullet.length - 1; i += 1) {
            arraybullet[i].count += 1;
            if (arraybullet[i].count <= 200) {
                p.beginPath();
                p.strokeStyle = arraybullet[i].str;
                p.arc(arraybullet[i].bulletx, arraybullet[i].bullety, 10, Math.PI * 2, false);
                p.stroke();
                arraybullet[i].bulletx += arraybullet[i].bulletxVelocity;
                arraybullet[i].bullety += arraybullet[i].bulletyVelocity;
            }
            else {
                arraybullet.splice(i, 1);
            }
        }
        for (var i = 0; i <= arrayzombiespawn.length - 1; i += 1) {
            for (var b = 0; b <= arraybullet.length - 1; b += 1) {
                shoot = Math.sqrt((arraybullet[b].bulletx - arrayzombiespawn[i].zombiex) * (arraybullet[b].bulletx - arrayzombiespawn[i].zombiex) + (arraybullet[b].bullety - arrayzombiespawn[i].zombiey) * (arraybullet[b].bullety - arrayzombiespawn[i].zombiey));
                if (shoot <= 30) {
                    if (arraybullet[b].str == "green") {
                        damage = 10;
                    }
                    else if (arraybullet[b].str == "blue") {
                        damage = 15;
                    }
                    else if (arraybullet[b].str == "purple") {
                        damage = 20;
                    }
                    else if (arraybullet[b].str == "red") {
                        damage = 40;
                    }
                    arraybullet.splice(b, 1);
                    arrayzombiespawn[i].health = arrayzombiespawn[i].health - damage;
                }
                if (arrayzombiespawn[i].health <= 0) {
                    arrayzombiespawn.splice(i, 1);
                    killCount += 1;
                }
            }
            eat = Math.sqrt((x - arrayzombiespawn[i].zombiex) * (x - arrayzombiespawn[i].zombiex) + (y - arrayzombiespawn[i].zombiey) * (y - arrayzombiespawn[i].zombiey));
            if (eat <= arrayzombiespawn[i].zombier + 30) {
                killCount += 1;
                hp -= arrayzombiespawn[i].dmg;
                arrayzombiespawn.splice(i, 1);
                clearInterval(eaten);
                eaten = setInterval(function () {
                    da += 0.01;
                    a += da;
                    if (a >= 0.21) {
                        a = 0;
                        da = 0;
                        clearInterval(eaten);
                    }
                }, 25)
            }
            chase = eat / arrayzombiespawn[i].speed;
            arrayzombiespawn[i].zombiex = arrayzombiespawn[i].zombiex + ((x - arrayzombiespawn[i].zombiex) / chase);
            arrayzombiespawn[i].zombiey = arrayzombiespawn[i].zombiey + ((y - arrayzombiespawn[i].zombiey) / chase);
            p.beginPath();
            p.arc(arrayzombiespawn[i].zombiex, arrayzombiespawn[i].zombiey, arrayzombiespawn[i].zombier, arrayzombiespawn[i].zombieendAngle, false);
            p.fillStyle = "darkGreen"
            p.fill();
            p.beginPath();
            p.rect(arrayzombiespawn[i].zombiex - arrayzombiespawn[i].zombier, arrayzombiespawn[i].zombiey - arrayzombiespawn[i].zombier - 5, arrayzombiespawn[i].health, 5);
            if (arrayzombiespawn[i].health <= arrayzombiespawn[i].maxHealth && arrayzombiespawn[i].health > arrayzombiespawn[i].maxHealth / 2) {
                p.fillStyle = "rgb(0, 255, 0)";
            }
            else if (arrayzombiespawn[i].health <= arrayzombiespawn[i].maxHealth / 2 && arrayzombiespawn[i].health > arrayzombiespawn[i].maxHealth / 4) {
                p.fillStyle = "rgb(255, 255, 0)";
            }
            else {
                p.fillStyle = "rgb(255, 0, 0)";
            }
            p.fill()
        }
        if (pickup <= 60) {
            gunx = -100;
            guny = -100;
            if (typeGun == 0) {
                blueBullet += 30;
            }
            else if (typeGun == 1) {
                purpleBullet += 20;
            }
            else if (typeGun == 2) {
                redBullet += 10;
            }
        }
        if (x < mousex + 1.5 && x > mousex - 1.5 && y < mousey + 1.5 && y > mousey - 1.5) {
            xVelocity = 0;
            yVelocity = 0;
        }
        x += xVelocity;
        y += yVelocity;
        p.beginPath();
        p.arc(x, y, 30, Math.PI * 2, false);
        p.fillStyle = "rgb(255, 255, 0)";
        p.fill();
        p.beginPath();
        p.rect(x - 30, y - 35, hp, 7.5);
        if (hp <= 60 && hp > 30) {
            p.fillStyle = "rgb(0, 255, 0)";
        }
        else if (hp <= 30 && hp > 15) {
            p.fillStyle = "rgb(255, 255, 0)";
        }
        else {
            p.fillStyle = "rgb(255, 0, 0)";
        }
        p.fill();
        p.beginPath();
        p.font = "30px Arial";
        p.fillStyle = "black";
        p.fillText(("enemies kill: " + killCount + " enemies spawned: " + arrayzombiespawn.length), 10, 40);
        if (changeGun == 49) {
            p.beginPath();
            p.font = "30px Arial";
            p.fillStyle = "green";
            p.fillText(("green bullet: unlimited"), window.innerWidth / 2, window.innerHeight - 50);
        }
        else if (changeGun == 50 && blueBullet > 0) {
            p.beginPath();
            p.font = "30px Arial";
            p.fillStyle = "blue";
            p.fillText(("blue bullet: " + blueBullet), window.innerWidth / 2, window.innerHeight - 50);
        }
        else if (changeGun == 51 && purpleBullet > 0) {
            p.beginPath();
            p.font = "30px Arial";
            p.fillStyle = "purple";
            p.fillText(("purple bullet: " + purpleBullet), window.innerWidth / 2, window.innerHeight - 50);
        }
        else if (changeGun == 52 && redBullet > 0) {
            p.beginPath();
            p.font = "30px Arial";
            p.fillStyle = "red";
            p.fillText(("red bullet:" + redBullet), window.innerWidth / 2, window.innerHeight - 50);
        }
        if (killCount + arrayzombiespawn.length == 10) {
            clearInterval(pushingIn);
            if (killCount == 10) {
                hp = 60;
                arraybullet = [];
                killDone = 1;
                boss();
                clearInterval(randomWeapons);
                clearInterval(move);
                clearInterval(move);
                clearInterval
                p.clearRect(0, 0, window.innerWidth, window.innerHeight);
            }
        }
        if (hp <= 0) {
            alert("bạn đã thua");
            clearInterval(randomWeapons);
            clearInterval(pushingIn);
            clearInterval(move);
            clearInterval(move);
            clearInterval
            p.clearRect(0, 0, window.innerWidth, window.innerHeight);
        }
    }, 10)
}
var typeGun = 0;
var gunx = canvas.width / 2;
var guny = canvas.height / 2;
window.addEventListener("keypress", function (Guns) {
    myFunction(Guns);
})
function myFunction(Guns) {
    changeGun = Guns.which;
}
var bullet = null;
function makeBullet() {
    bullet = {
        bulletx: x,
        bullety: y,
        bulletxVelocity: (mousex - x) / bulletTime,
        bulletyVelocity: (mousey - y) / bulletTime,
        count: 1,
        str: bulletColor
    }
}
var bossIncoming = null;
var redFont = 0;
var redFontIncrease = 0.01;
var blinkTime = 0;
function boss() {
    bossIncoming = setInterval(function () {
        p.clearRect(0, 0, window.innerWidth, window.innerHeight);
        redFont = redFont + redFontIncrease;
        if (redFont >= 1) {
            redFontIncrease = -0.01;
        }
        else if (redFont <= 0) {
            blinkTime += 1;
            redFontIncrease = 0.01;
        }
        p.beginPath();
        p.font = "40px Arial";
        p.fillStyle = ("rgba(255, 0, 0, " + redFont + ")");
        p.fillText("boss incoming", window.innerWidth / 2 - 150, window.innerHeight / 2 - 20);
        if (blinkTime == 3) {
            clearInterval(bossIncoming);
            fightBoss();
        }
    }, 10)
}
var bossAppear = null;
var xShake = null;
var yShake = null;
var shake = 20;
var arrayPartBoss = [];
for (var i = 1; i <= 14; i += 1) {
    if (i >= 1 && i <= 4) {
        var part = {
            health: 100,
            ypart: -100,
            xpart: (canvas.width / 4) * (i - 1),
            widthPart: canvas.width / 4,
            heightPart: 105,
            partCheck: ("top" + i)
        }
    }
    else if (i >= 5 && i <= 7) {
        var part = {
            health: 100,
            xpart: -100,
            ypart: (canvas.height / 3) * (i - 5),
            heightPart: canvas.height / 3,
            widthPart: 105,
            partCheck: ("left" + (i - 4))
        }
    }
    else if (i >= 8 && i <= 11) {
        var part = {
            health: 100,
            ypart: canvas.height,
            xpart: (canvas.width / 4) * (i - 8),
            widthPart: canvas.width / 4,
            heightPart: 105,
            partCheck: ("bottom" + (i - 7))
        }
    }
    else if (i >= 12 && i <= 14) {
        var part = {
            health: 100,
            xpart: canvas.width,
            ypart: (canvas.height / 3) * (i - 12),
            heightPart: canvas.height / 3,
            widthPart: 105,
            partCheck: ("right" + (i - 11))
        }
    }
    arrayPartBoss.push(part);
}
function fightBoss() {
    x = canvas.width / 2;
    y = canvas.height / 2;
    bossAppear = setInterval(function () {
        if (shake >= 0) {
            shake -= 0.2;
        }
        else {
            killDone = 2;
            intoTheBossFight();
            clearInterval(bossAppear);
        }
        p.clearRect(0, 0, window.innerWidth, window.innerHeight);
        p.beginPath();
        xShake = Math.random() * shake - 5;
        yShake = Math.random() * shake - 5;
        for (var i = 1; i <= arrayPartBoss.length; i += 1) {
            if (i >= 1 && i <= 4) {
                arrayPartBoss[i - 1].ypart += 0.75;
            }
            else if (i >= 5 && i <= 7) {
                arrayPartBoss[i - 1].xpart += 0.75;
            }
            else if (i >= 8 && i <= 11) {
                arrayPartBoss[i - 1].ypart -= 0.75;
            }
            else if (i >= 12 && i <= 14) {
                arrayPartBoss[i - 1].xpart -= 0.75;
            }
            p.beginPath();
            p.rect(arrayPartBoss[i - 1].xpart, arrayPartBoss[i - 1].ypart, arrayPartBoss[i - 1].widthPart, arrayPartBoss[i - 1].heightPart);
            p.fillStyle = "black";
            p.fill();
        }
        p.beginPath();
        x += xShake;
        y += yShake;
        p.arc(x, y, 30, 0, Math.PI * 2, false);
        x -= xShake;
        y -= yShake;
        p.fillStyle = "yellow";
        p.fill();
    }, 10)
}
var bossBulletChecking = 0;
var intothebossfight = null;
function intoTheBossFight() {
    intothebossfight = setInterval(function () {
        p.clearRect(0, 0, innerWidth, innerHeight);
        for (var i = 0; i <= arrayPartBoss.length - 1; i += 1) {
            if (arrayPartBoss[i].partCheck == "top1") {
                for (var b = 0; b <= arraybullet.length - 1; b += 1) {
                    if ((arraybullet[b].bulletx - 10 <= (arrayPartBoss[i].xpart + arrayPartBoss[i].widthPart)) && (arraybullet[b].bulletx + 10 >= arrayPartBoss[i].xpart) && (arraybullet[b].bullety - 10 <= (arrayPartBoss[i].ypart + arrayPartBoss[i].heightPart))) {
                        arraybullet.splice(b, 1);
                        arrayPartBoss[i].health -= 10;
                    }
                }
                if (arrayPartBoss[i].health <= 0) {
                    arrayPartBoss.splice(i, 1);
                }
                p.beginPath();
                p.rect(arrayPartBoss[i].xpart, arrayPartBoss[i].ypart, arrayPartBoss[i].widthPart, arrayPartBoss[i].heightPart);
                p.fillStyle = "black";
                p.fill();
            }
            else if (arrayPartBoss[i].partCheck == "top2") {
                for (var b = 0; b <= arraybullet.length - 1; b += 1) {
                    if ((arraybullet[b].bulletx - 10 <= (arrayPartBoss[i].xpart + arrayPartBoss[i].widthPart)) && (arraybullet[b].bulletx + 10 >= arrayPartBoss[i].xpart) && (arraybullet[b].bullety - 10 <= (arrayPartBoss[i].ypart + arrayPartBoss[i].heightPart))) {
                        arraybullet.splice(b, 1);
                        arrayPartBoss[i].health -= 10;
                    }
                }
                if (arrayPartBoss[i].health <= 0) {
                    arrayPartBoss.splice(i, 1);
                }
                p.beginPath();
                p.rect(arrayPartBoss[i].xpart, arrayPartBoss[i].ypart, arrayPartBoss[i].widthPart, arrayPartBoss[i].heightPart);
                p.fillStyle = "black";
                p.fill();
            }
            else if (arrayPartBoss[i].partCheck == "top3") {
                for (var b = 0; b <= arraybullet.length - 1; b += 1) {
                    if ((arraybullet[b].bulletx - 10 <= (arrayPartBoss[i].xpart + arrayPartBoss[i].widthPart)) && (arraybullet[b].bulletx + 10 >= arrayPartBoss[i].xpart) && (arraybullet[b].bullety - 10 <= (arrayPartBoss[i].ypart + arrayPartBoss[i].heightPart))) {
                        arraybullet.splice(b, 1);
                        arrayPartBoss[i].health -= 10;
                    }
                }
                if (arrayPartBoss[i].health <= 0) {
                    arrayPartBoss.splice(i, 1);
                }
                p.beginPath();
                p.rect(arrayPartBoss[i].xpart, arrayPartBoss[i].ypart, arrayPartBoss[i].widthPart, arrayPartBoss[i].heightPart);
                p.fillStyle = "black";
                p.fill();
            }
            else if (arrayPartBoss[i].partCheck == "top4") {
                for (var b = 0; b <= arraybullet.length - 1; b += 1) {
                    if ((arraybullet[b].bulletx - 10 <= (arrayPartBoss[i].xpart + arrayPartBoss[i].widthPart)) && (arraybullet[b].bulletx + 10 >= arrayPartBoss[i].xpart) && (arraybullet[b].bullety - 10 <= (arrayPartBoss[i].ypart + arrayPartBoss[i].heightPart))) {
                        arraybullet.splice(b, 1);
                        arrayPartBoss[i].health -= 10;
                    }
                }
                if (arrayPartBoss[i].health <= 0) {
                    arrayPartBoss.splice(i, 1);
                }
                p.beginPath();
                p.rect(arrayPartBoss[i].xpart, arrayPartBoss[i].ypart, arrayPartBoss[i].widthPart, arrayPartBoss[i].heightPart);
                p.fillStyle = "black";
                p.fill();
            }
            else if (arrayPartBoss[i].partCheck == "left1") {
                for (var b = 0; b <= arraybullet.length - 1; b += 1) {
                    if ((arraybullet[b].bulletx - 10 <= (arrayPartBoss[i].xpart + arrayPartBoss[i].widthPart)) && (arraybullet[b].bullety - 10 <= (arrayPartBoss[i].ypart + arrayPartBoss[i].heightPart)) && (arraybullet[b].bullety + 10 >= arrayPartBoss[i].ypart)) {
                        arraybullet.splice(b, 1);
                        arrayPartBoss[i].health -= 10;
                    }
                }
                if (arrayPartBoss[i].health <= 0) {
                    arrayPartBoss.splice(i, 1);
                }
                p.beginPath();
                p.rect(arrayPartBoss[i].xpart, arrayPartBoss[i].ypart, arrayPartBoss[i].widthPart, arrayPartBoss[i].heightPart);
                p.fillStyle = "black";
                p.fill();
            }
            else if (arrayPartBoss[i].partCheck == "left2") {
                for (var b = 0; b <= arraybullet.length - 1; b += 1) {
                    if ((arraybullet[b].bulletx - 10 <= (arrayPartBoss[i].xpart + arrayPartBoss[i].widthPart)) && (arraybullet[b].bullety - 10 <= (arrayPartBoss[i].ypart + arrayPartBoss[i].heightPart)) && (arraybullet[b].bullety + 10 >= arrayPartBoss[i].ypart)) {
                        arraybullet.splice(b, 1);
                        arrayPartBoss[i].health -= 10;
                    }
                }
                if (arrayPartBoss[i].health <= 0) {
                    arrayPartBoss.splice(i, 1);
                }
                p.beginPath();
                p.rect(arrayPartBoss[i].xpart, arrayPartBoss[i].ypart, arrayPartBoss[i].widthPart, arrayPartBoss[i].heightPart);
                p.fillStyle = "black";
                p.fill();
            }
            else if (arrayPartBoss[i].partCheck == "left3") {
                for (var b = 0; b <= arraybullet.length - 1; b += 1) {
                    if ((arraybullet[b].bulletx - 10 <= (arrayPartBoss[i].xpart + arrayPartBoss[i].widthPart)) && (arraybullet[b].bullety - 10 <= (arrayPartBoss[i].ypart + arrayPartBoss[i].heightPart)) && (arraybullet[b].bullety + 10 >= arrayPartBoss[i].ypart)) {
                        arraybullet.splice(b, 1);
                        arrayPartBoss[i].health -= 10;
                    }
                }
                if (arrayPartBoss[i].health <= 0) {
                    arrayPartBoss.splice(i, 1);
                }
                p.beginPath();
                p.rect(arrayPartBoss[i].xpart, arrayPartBoss[i].ypart, arrayPartBoss[i].widthPart, arrayPartBoss[i].heightPart);
                p.fillStyle = "black";
                p.fill();
            }
            else if (arrayPartBoss[i].partCheck == "bottom1") {
                for (var b = 0; b <= arraybullet.length - 1; b += 1) {
                    if ((arraybullet[b].bulletx + 10 >= arrayPartBoss[i].xpart) && (arraybullet[b].bullety + 10 >= arrayPartBoss[i].ypart) && (arraybullet[b].bulletx - 10 <= (arrayPartBoss[i].xpart + arrayPartBoss[i].widthPart))) {
                        arraybullet.splice(b, 1);
                        arrayPartBoss[i].health -= 10;
                    }
                }
                if (arrayPartBoss[i].health <= 0) {
                    arrayPartBoss.splice(i, 1);
                }
                p.beginPath();
                p.rect(arrayPartBoss[i].xpart, arrayPartBoss[i].ypart, arrayPartBoss[i].widthPart, arrayPartBoss[i].heightPart);
                p.fillStyle = "black";
                p.fill();
            }
            else if (arrayPartBoss[i].partCheck == "bottom2") {
                for (var b = 0; b <= arraybullet.length - 1; b += 1) {
                    if ((arraybullet[b].bulletx + 10 >= arrayPartBoss[i].xpart) && (arraybullet[b].bullety + 10 >= arrayPartBoss[i].ypart) && (arraybullet[b].bulletx - 10 <= (arrayPartBoss[i].xpart + arrayPartBoss[i].widthPart))) {
                        arraybullet.splice(b, 1);
                        arrayPartBoss[i].health -= 10;
                    }
                }
                if (arrayPartBoss[i].health <= 0) {
                    arrayPartBoss.splice(i, 1);
                }
                p.beginPath();
                p.rect(arrayPartBoss[i].xpart, arrayPartBoss[i].ypart, arrayPartBoss[i].widthPart, arrayPartBoss[i].heightPart);
                p.fillStyle = "black";
                p.fill();
            }
            else if (arrayPartBoss[i].partCheck == "bottom3") {
                for (var b = 0; b <= arraybullet.length - 1; b += 1) {
                    if ((arraybullet[b].bulletx + 10 >= arrayPartBoss[i].xpart) && (arraybullet[b].bullety + 10 >= arrayPartBoss[i].ypart) && (arraybullet[b].bulletx - 10 <= (arrayPartBoss[i].xpart + arrayPartBoss[i].widthPart))) {
                        arraybullet.splice(b, 1);
                        arrayPartBoss[i].health -= 10;
                    }
                }
                if (arrayPartBoss[i].health <= 0) {
                    arrayPartBoss.splice(i, 1);
                }
                p.beginPath();
                p.rect(arrayPartBoss[i].xpart, arrayPartBoss[i].ypart, arrayPartBoss[i].widthPart, arrayPartBoss[i].heightPart);
                p.fillStyle = "black";
                p.fill();
            }
            else if (arrayPartBoss[i].partCheck == "bottom4") {
                for (var b = 0; b <= arraybullet.length - 1; b += 1) {
                    if ((arraybullet[b].bulletx + 10 >= arrayPartBoss[i].xpart) && (arraybullet[b].bullety + 10 >= arrayPartBoss[i].ypart) && (arraybullet[b].bulletx - 10 <= (arrayPartBoss[i].xpart + arrayPartBoss[i].widthPart))) {
                        arraybullet.splice(b, 1);
                        arrayPartBoss[i].health -= 10;
                    }
                }
                if (arrayPartBoss[i].health <= 0) {
                    arrayPartBoss.splice(i, 1);
                }
                p.beginPath();
                p.rect(arrayPartBoss[i].xpart, arrayPartBoss[i].ypart, arrayPartBoss[i].widthPart, arrayPartBoss[i].heightPart);
                p.fillStyle = "black";
                p.fill();
            }
            else if (arrayPartBoss[i].partCheck == "right1") {
                for (var b = 0; b <= arraybullet.length - 1; b += 1) {
                    if ((arraybullet[b].bulletx + 10 >= arrayPartBoss[i].xpart) && (arraybullet[b].bullety - 10 <= (arrayPartBoss[i].ypart + arrayPartBoss[i].heightPart)) && (arraybullet[b].bullety + 10 >= arrayPartBoss[i].ypart)) {
                        arraybullet.splice(b, 1);
                        arrayPartBoss[i].health -= 10;
                    }
                }
                if (arrayPartBoss[i].health <= 0) {
                    arrayPartBoss.splice(i, 1);
                }
                p.beginPath();
                p.rect(arrayPartBoss[i].xpart, arrayPartBoss[i].ypart, arrayPartBoss[i].widthPart, arrayPartBoss[i].heightPart);
                p.fillStyle = "black";
                p.fill();
            }
            else if (arrayPartBoss[i].partCheck == "right2") {
                for (var b = 0; b <= arraybullet.length - 1; b += 1) {
                    if ((arraybullet[b].bulletx >= arrayPartBoss[i].xpart) && (arraybullet[b].bullety - 10 <= (arrayPartBoss[i].ypart + arrayPartBoss[i].heightPart)) && (arraybullet[b].bullety + 10 >= arrayPartBoss[i].ypart)) {
                        arraybullet.splice(b, 1);
                        arrayPartBoss[i].health -= 10;
                    }
                }
                if (arrayPartBoss[i].health <= 0) {
                    arrayPartBoss.splice(i, 1);
                }
                p.beginPath();
                p.rect(arrayPartBoss[i].xpart, arrayPartBoss[i].ypart, arrayPartBoss[i].widthPart, arrayPartBoss[i].heightPart);
                p.fillStyle = "black";
                p.fill();
            }
            else if (arrayPartBoss[i].partCheck == "right3") {
                for (var b = 0; b <= arraybullet.length - 1; b += 1) {
                    if ((arraybullet[b].bulletx + 10 >= arrayPartBoss[i].xpart) && (arraybullet[b].bullety - 10 <= (arrayPartBoss[i].ypart + arrayPartBoss[i].heightPart)) && (arraybullet[b].bullety + 10 >= arrayPartBoss[i].ypart)) {
                        arraybullet.splice(b, 1);
                        arrayPartBoss[i].health -= 10;
                    }
                }
                if (arrayPartBoss[i].health <= 0) {
                    arrayPartBoss.splice(i, 1);
                }
                p.beginPath();
                p.rect(arrayPartBoss[i].xpart, arrayPartBoss[i].ypart, arrayPartBoss[i].widthPart, arrayPartBoss[i].heightPart);
                p.fillStyle = "black";
                p.fill();
            }
        }
        for (var i = 0; i <= arrayBossBullet.length - 1; i += 1) {
            if (arrayBossBullet[i].bossBulletCheck == "top") {
                arrayBossBullet[i].bossBullety += 5;
                if (arrayBossBullet[i].bossBullety >= canvas.height) {
                    arrayBossBullet.splice(i, 1);
                }
            }
            else if (arrayBossBullet[i].bossBulletCheck == "left") {
                arrayBossBullet[i].bossBulletx += 5;
                if (arrayBossBullet[i].bossBulletx >= canvas.width) {
                    arrayBossBullet.splice(i, 1);
                }
            }
            else if (arrayBossBullet[i].bossBulletCheck == "bottom") {
                arrayBossBullet[i].bossBullety -= 5;
                if (arrayBossBullet[i].bossBullety <= 0) {
                    arrayBossBullet.splice(i, 1);
                }
            }
            else if (arrayBossBullet[i].bossBulletCheck == "right") {
                arrayBossBullet[i].bossBulletx -= 5;
                if (arrayBossBullet[i].bossBullety <= 0) {
                    arrayBossBullet.splice(i, 1);
                }
            }
            for (var b = 0; b <= arrayPartBoss.length - 1; b += 1) {
                if (arrayPartBoss[b].partCheck == arrayBossBullet[i].bossBulletDisplay) {
                    bossBulletChecking = 1;
                    break;
                }
            }
            if (bossBulletChecking == 1) {
                p.beginPath();
                p.arc(arrayBossBullet[i].bossBulletx, arrayBossBullet[i].bossBullety, 15, 0, Math.PI * 2, false);
                p.fillStyle = "red";
                p.fill();
                bossBulletChecking = 0;
            }
            else {
                arrayBossBullet.splice(i, 1);
            }
            if (Math.sqrt((x - arrayBossBullet[i].bossBulletx) * (x - arrayBossBullet[i].bossBulletx) + (y - arrayBossBullet[i].bossBullety) * (y - arrayBossBullet[i].bossBullety)) <= 45) {
                arrayBossBullet.splice(i, 1);
                hp -= 6;
            }
        }
        for (var i = 0; i <= arraybullet.length - 1; i += 1) {
            arraybullet[i].count += 1;
            if (arraybullet[i].count <= 200) {
                p.beginPath();
                p.strokeStyle = arraybullet[i].str;
                p.arc(arraybullet[i].bulletx, arraybullet[i].bullety, 10, Math.PI * 2, false);
                p.stroke();
                arraybullet[i].bulletx += arraybullet[i].bulletxVelocity;
                arraybullet[i].bullety += arraybullet[i].bulletyVelocity;
            }
            else {
                arraybullet.splice(i, 1);
            }
        }
        if (x < mousex + 1.5 && x > mousex - 1.5 && y < mousey + 1.5 && y > mousey - 1.5) {
            xVelocity = 0;
            yVelocity = 0;
        }
        x += xVelocity;
        y += yVelocity;
        p.beginPath();
        p.arc(x, y, 30, Math.PI * 2, false);
        p.fillStyle = "rgb(255, 255, 0)";
        p.fill();
        p.beginPath();
        p.rect(x - 30, y - 35, hp, 7.5);
        if (hp <= 60 && hp > 30) {
            p.fillStyle = "rgb(0, 255, 0)";
        }
        else if (hp <= 30 && hp > 15) {
            p.fillStyle = "rgb(255, 255, 0)";
        }
        else {
            p.fillStyle = "rgb(255, 0, 0)";
        }
        p.fill();
        for (var b = 0; b <= ArrayBulletSnipe.length - 1; b += 1) {
            p.beginPath();
            p.moveTo(ArrayBulletSnipe[b].snipex - 30, ArrayBulletSnipe[b].snipey);
            p.lineTo(ArrayBulletSnipe[b].snipex + 30, ArrayBulletSnipe[b].snipey);
            p.strokeStyle = "red";
            p.stroke();
            p.beginPath();
            p.moveTo(ArrayBulletSnipe[b].snipex, ArrayBulletSnipe[b].snipey - 30);
            p.lineTo(ArrayBulletSnipe[b].snipex, ArrayBulletSnipe[b].snipey + 30);
            p.stroke();
            p.beginPath();
            ArrayBulletSnipe[b].timeToShoot -= 0.4;
            if (ArrayBulletSnipe[b].timeToShoot <= 0) {
                if (Math.sqrt((x - ArrayBulletSnipe[b].snipex) * (x - ArrayBulletSnipe[b].snipex) + (y - ArrayBulletSnipe[b].snipey) * (y - ArrayBulletSnipe[b].snipey)) <= 30) {
                    hp += -20;
                }
                ArrayBulletSnipe.splice(b, 1);
            }
            p.arc(ArrayBulletSnipe[b].snipex, ArrayBulletSnipe[b].snipey, ArrayBulletSnipe[b].timeToShoot, 0, Math.PI * 2, false);
            p.stroke();
        }
        if (hp <= 0) {
            alert("bạn đã thua");
            clearInterval(bossShoot);
            clearInterval(intothebossfight);
            p.clearRect(0, 0, window.innerWidth, window.innerHeight);
        }
        if (arrayPartBoss == []) {
            alert("bạn đã thắng\n the lst code: r")
            clearInterval(bossShoot);
            clearInterval(intothebossfight);
            p.clearRect(0, 0, window.innerWidth, window.innerHeight);
        }
    }, 10)
}