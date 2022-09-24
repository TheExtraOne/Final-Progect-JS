'use strict'

function reset() {
    spheres = [];
    fireballs = [];
    gandalfDistanceTraveled = 0;
    backgroundObjects = [
        new Background(-20, 400, mossSlopes, 7163, 371),
        new Background(7143, 400, mossSlopes, 7163, 371),   
    ];
    backgroundImg = [
        new Background(0, 0, background, 769, 610),
        new Background(769, 0, sideBackground, 769, 610),
    ];
    if (level === 1) {
        gandalf = new Wizzard(stayRight, stayLeft, runRight, runLeft);
        mana = [
            new Flower(manaFlower, 100, 70, 338.8, 339, 200, 100),
            new Flower(manaFlower, 100, 70, 338.8, 339, 600, 100),
            new Flower(manaFlower, 100, 70, 338.8, 339, 1690, 100),
            new Flower(manaFlower, 100, 70, 338.8, 339, 2090, 100),
            new Flower(manaFlower, 100, 70, 338.8, 339, 2900, 100),
            new Flower(manaFlower, 100, 70, 338.8, 339, 3800, 100),
            new Flower(manaFlower, 100, 70, 338.8, 339, 4650, 100),
            new Flower(manaFlower, 100, 70, 338.8, 339, 5650, 100),
            new Flower(manaFlower, 100, 70, 338.8, 339, 6300, 400),
            new Flower(manaFlower, 100, 70, 338.8, 339, 7400, 100),
            new Flower(manaFlower, 100, 70, 338.8, 339, 8040, 100),
            new Flower(manaFlower, 100, 70, 338.8, 339, 8960, 10),
            new Flower(ring1, 80, 70, 98, 86, 9500, 400, true),
            
        ];
        slimes = [
            new Enemy(greenSlime, 100, 90, 302, 207, 800, 100, -0.3, 150),
            new Enemy(greenSlime, 100, 90, 302, 207, 2500, 400, -0.3, 150),
            new Enemy(greenSlime, 100, 90, 302, 207, 3580, 100, -0.3, 170),
            new Enemy(greenSlime, 100, 90, 302, 207, 3850, 100, -0.3, 170),
            new Enemy(greenSlime, 100, 90, 302, 207, 4160, 100, -0.3, 0),
            new Enemy(greenSlime, 100, 90, 302, 207, 5200, 400, -0.3, 0),
            new Enemy(greenSlime, 100, 90, 302, 207, 5600, 400, -0.3, 150),
            new Enemy(orangeSlime, 120, 120, 512, 340, 5800, 100, -0.3, 150, false),
            new Enemy(orangeSlime, 120, 120, 512, 340, 6600, 100, -0.3, 150, false),
            new Enemy(greenSlime, 100, 90, 302, 207, 6970, 300, -0.3, 100),
            new Enemy(orangeSlime, 120, 120, 512, 340, 7200, 100, -0.3, 150, false),
            new Enemy(orangeSlime, 120, 120, 512, 340, 7700, 10, -0.3, 100, false),
            new Enemy(orangeSlime, 120, 120, 512, 340, 7850, 300, -0.3, 0, false),
            new Enemy(greenSlime, 100, 90, 302, 207, 8300, 300, -0.3, 0),
            new Enemy(orangeSlime, 120, 120, 512, 340, 8780, 300, -0.3, 150, false),
        ];
        stages = [
            new Background(200, 230, platform, 273, 120),
            new Background(500, 300, platform, 273, 120),
            new Background(0, 540, stage, 231, 120),
            new Background(230, 540, stage, 231, 120),
            new Background(550, 540, stage, 231, 120),
            new Background(781, 540, stage, 231, 120),
            new Background(1143, 300, smallPlatform, 123, 122),
            new Background(1512, 540, stage, 231, 120),
            new Background(1743, 540, stage, 231, 120),
            new Background(1700, 150, smallPlatform, 123, 122),
            new Background(2100, 150, smallPlatform, 123, 122),
            new Background(2174, 540, stage, 231, 120),
            new Background(2400, 230, smallPlatform, 123, 122),
            new Background(2405, 540, stage, 231, 120),
            new Background(2700, 450, smallPlatform, 123, 122),
            new Background(2900, 540, stage, 231, 120),
            new Background(2950, 200, smallPlatform, 123, 122),
            new Background(3150, 400, platform, 273, 120),
            new Background(3400, 300, platform, 273, 120),
            new Background(3700, 250, platform, 273, 120),
            new Background(3900, 10, block, 119, 119, true),
            new Background(4000, 490, smallPlatform, 123, 122),
            new Background(4150, 450, smallPlatform, 123, 122),
            new Background(4600, 300, platform, 273, 120),
            new Background(4873, 540, stage, 231, 120),
            new Background(5104, 540, stage, 231, 120),
            new Background(5200, 300, block, 119, 119, true),
            new Background(5335, 540, stage, 231, 120),
            new Background(5566, 540, stage, 231, 120),
            new Background(5650, 400, platform, 273, 120),
            new Background(5797, 540, stage, 231, 120),
            new Background(5650, 150, smallPlatform, 123, 122),
            new Background(6100, 250, platform, 273, 120),
            new Background(6300, 500, smallPlatform, 123, 122),
            new Background(6450, 450, platform, 273, 120),
            new Background(6800, 390, platform, 273, 120),
            new Background(6450, 200, platform, 273, 120),
            new Background(6800, 110, smallPlatform, 123, 122),
            new Background(7100, 150, platform, 273, 120),
            new Background(7500, 150, platform, 273, 120),
            new Background(7730, 150, platform, 273, 120),
            new Background(7930, 150, platform, 273, 120),
            new Background(7920, 30, block, 119, 119, true),
            new Background(7400, 540, smallPlatform, 123, 122),
            new Background(7650, 540, smallPlatform, 123, 122),
            new Background(7850, 540, smallPlatform, 123, 122),
            new Background(8050, 540, smallPlatform, 123, 122),
            new Background(8300, 540, smallPlatform, 123, 122),
            new Background(8600, 490, platform, 273, 120),
            new Background(8950, 100, smallPlatform, 123, 122),
            new Background(9250, 540, stage, 231, 120),
            new Background(9481, 540, stage, 231, 120),
        ];
    }
    if (level === 2) {
        let prevScore = gandalf.score;
        gandalf = new Wizzard(stayRight, stayLeft, runRight, runLeft, prevScore);
        mana = [
            new Flower(manaFlower, 100, 70, 338.8, 339, 490, 100),
            new Flower(manaFlower, 100, 70, 338.8, 339, 1550, 400),
            new Flower(manaFlower, 100, 70, 338.8, 339, 2000, 100),
            new Flower(manaFlower, 100, 70, 338.8, 339, 2450, 100),
            new Flower(manaFlower, 100, 70, 338.8, 339, 3950, 100),
            new Flower(manaFlower, 100, 70, 338.8, 339, 4400, 100),
            new Flower(manaFlower, 100, 70, 338.8, 339, 5100, 100),
            new Flower(manaFlower, 100, 70, 338.8, 339, 5900, 100),
            new Flower(manaFlower, 100, 70, 338.8, 339, 7050, 100),
            new Flower(manaFlower, 100, 70, 338.8, 339, 8800, 50),
            new Flower(ring2, 80, 70, 98, 86, 9710, 200, true),            
        ];
        slimes = [
            new Enemy(greenSlime, 100, 90, 302, 207, 600, 400, -0.3, 450),
            new Enemy(greenSlime, 100, 90, 302, 207, 1160, 100, -0.3, 0),
            new Enemy(orangeSlime, 120, 120, 512, 340, 1700, 400, -0.3, 0, false),
            new Enemy(greenSlime, 100, 90, 302, 207, 1500, 100, -0.3, 0),
            new Enemy(orangeSlime, 120, 120, 512, 340, 2870, 100, -0.3, 100, false),
            new Enemy(orangeSlime, 120, 120, 512, 340, 3390, 400, -0.3, 300, false),
            new Enemy(greenSlime, 100, 90, 302, 207, 3793, 100, -0.3, 150),
            new Enemy(orangeSlime, 120, 120, 512, 340, 4300, 400, -0.3, 0, false),
            new Enemy(orangeSlime, 120, 120, 512, 340, 4450, 400, -0.3, 0, false),
            new Enemy(orangeSlime, 120, 120, 512, 340, 4620, 400, -0.3, 0, false),
            new Enemy(greenSlime, 100, 90, 302, 207, 5900, 400, -0.3, 150),
            new Enemy(orangeSlime, 120, 120, 512, 340, 6100, 400, -0.3, 0, false),
            new Enemy(greenSlime, 100, 90, 302, 207, 6400, 400, -0.3, 150),
            new Enemy(orangeSlime, 120, 120, 512, 340, 7000, 400, -0.3, 0, false),
            new Enemy(greenSlime, 100, 90, 302, 207, 7620, 400, -0.3, 100),
            new Enemy(orangeSlime, 120, 120, 512, 340, 7850, 400, -0.3, 0, false),
            new Enemy(orangeSlime, 120, 120, 512, 340, 8400, 100, -0.3, 0, false),
            new Enemy(orangeSlime, 120, 120, 512, 340, 8600, 100, -0.3, 0, false),
            new Enemy(greenSlime, 100, 90, 302, 207, 9010, 100, -0.3, 0),
            new Enemy(greenSlime, 100, 90, 302, 207, 9210, 100, -0.3, 0),
        ];
        stages = [
            new Background(0, 540, stage, 231, 120),
            new Background(230, 540, stage, 231, 120),
            new Background(462, 540, stage, 231, 120),
            new Background(500, 150, smallPlatform, 123, 122),
            new Background(693, 540, stage, 231, 120),
            new Background(924, 540, stage, 231, 120),
            new Background(930, 420, platform, 273, 120),
            new Background(1050, 300, smallPlatform, 123, 122),
            new Background(1150, 200, smallPlatform, 123, 122),
            new Background(1500, 200, smallPlatform, 123, 122),
            new Background(1550, 500, platform, 273, 120),
            new Background(1900, 520, smallPlatform, 123, 122),
            new Background(2000, 150, platform, 273, 120),
            new Background(2170, 520, smallPlatform, 123, 122),
            new Background(2450, 520, smallPlatform, 123, 122),
            new Background(2750, 350, platform, 273, 120),
            new Background(3150, 350, platform, 273, 120),
            new Background(3300, 200, block, 119, 119, true),
            new Background(3100, 540, stage, 231, 120),
            new Background(3331, 540, stage, 231, 120),
            new Background(3562, 540, stage, 231, 120),
            new Background(3793, 540, stage, 231, 120),
            new Background(3950, 150, smallPlatform, 123, 122),
            new Background(4273, 540, stage, 231, 120),
            new Background(4400, 150, smallPlatform, 123, 122),
            new Background(4504, 540, stage, 231, 120),
            new Background(5000, 200, platform, 273, 120),
            new Background(5400, 300, smallPlatform, 123, 122),
            new Background(5700, 200, block, 119, 119, true),
            new Background(5600, 540, stage, 231, 120),
            new Background(5900, 150, platform, 273, 120),
            new Background(5830, 540, stage, 231, 120),
            new Background(6060, 540, stage, 231, 120),
            new Background(6300, 540, stage, 231, 120),
            new Background(6000, 300, block, 119, 119, true),
            new Background(6200, 300, block, 119, 119, true),
            new Background(6000, 20, block, 119, 119, true),
            new Background(6700, 300, platform, 273, 120),
            new Background(7000, 300, platform, 273, 120),
            new Background(7400, 150, smallPlatform, 123, 122),
            new Background(7500, 540, stage, 231, 120),
            new Background(7850, 300, smallPlatform, 123, 122),
            new Background(8200, 150, smallPlatform, 123, 122),
            new Background(8400, 400, smallPlatform, 123, 122),
            new Background(8600, 400, smallPlatform, 123, 122),
            new Background(8800, 100, smallPlatform, 123, 122),
            new Background(9000, 400, smallPlatform, 123, 122),
            new Background(9200, 400, smallPlatform, 123, 122),
            new Background(9500, 200, smallPlatform, 123, 122),
            new Background(9700, 400, smallPlatform, 123, 122),
        ];
    }
}