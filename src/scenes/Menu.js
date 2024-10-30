class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene')
    }

    create() {
        // running checks
        console.log('%cMENU SCENE :^)', testColor)

        this.cursors = this.input.keyboard.createCursorKeys()

        this.menuDisplay = this.add.text(centerX, centerY, "getting up\n\n[up] to move up\n[down] to move down\n[space] to play", {fontSize: '200px'}).setOrigin(0.5)
    }

    update() {
        if (this.cursors.space.isDown) {
            this.scene.start('playScene')
        }
    }
}