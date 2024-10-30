class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    create() {
        // running checks
        console.log('%cPLAY SCENE :^)', testColor)

        this.cursors = this.input.keyboard.createCursorKeys()

        this.player = new Player(this, centerX, centerY)

        this.gameOverDisplay = this.add.text(centerX, centerY, 'game over', {fontSize: '200px'}).setOrigin(0.5).setAlpha(0)
        this.gameOver = false
    }

    update() {
        if (!this.gameOver && this.cursors.up.isDown) {
            this.player.alpha -= .006
        } else if (!this.gameOver && this.cursors.down.isDown) {
            this.player.alpha += .005
        }

        if (!this.gameOver && this.cursors.up.isDown) {
            this.player.setAccelerationY(-500)
        } else if (!this.gameOver && this.cursors.down.isDown) {
            this.player.setAccelerationY(500)
        } else {
            this.player.setAccelerationY(0)
        }

        if (this.player.alpha == 0) {
            this.gameOverDisplay.setAlpha(1)
            this.gameOver = true;
        }

        if (this.gameOver) {
            this.player.setAlpha(0)
            if (this.cursors.space.isDown) {
                this.reset()
            }
        }
    }

    reset() {
        this.player.setX(centerX)
        this.player.setY(centerY)
        this.player.setAlpha(1)
        this.player.setVelocityY(0)

        this.gameOverDisplay.setAlpha(0)
        this.gameOver = false
    }
}