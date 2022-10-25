namespace SpriteKind {
    export const Ball = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ball, function (sprite, otherSprite) {
    otherSprite.vx = 0 - otherSprite.vx
    if (sprite == Player1) {
        otherSprite.left = sprite.right
        info.changeScoreBy(1)
    } else {
        otherSprite.right = sprite.left
        info.player2.changeScoreBy(1)
    }
})
function Create_ball () {
    my_ball = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Ball)
    my_ball.setBounceOnWall(true)
    my_ball.setVelocity(80, 80)
}
function Walls () {
    Player1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 8 8 8 . . . . . . . . . 
        . . . . 8 8 8 . . . . . . . . . 
        . . . . 8 8 8 . . . . . . . . . 
        . . . . 8 8 8 . . . . . . . . . 
        . . . . 8 8 8 . . . . . . . . . 
        . . . . 8 8 8 . . . . . . . . . 
        . . . . 8 8 8 . . . . . . . . . 
        . . . . 8 8 8 . . . . . . . . . 
        . . . . 8 8 8 . . . . . . . . . 
        . . . . 8 8 8 . . . . . . . . . 
        . . . . 8 8 8 . . . . . . . . . 
        . . . . 8 8 8 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(Player1, 0, 100)
    Player1.x = scene.screenWidth()
    Player1.setStayInScreen(true)
    info.setScore(0)
    Player2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Player2.x = 0
    Player2.setBounceOnWall(true)
    info.player2.setScore(0)
    controller.moveSprite(Player2, 0, 100)
}
let Player2: Sprite = null
let my_ball: Sprite = null
let Player1: Sprite = null
Create_ball()
Walls()
