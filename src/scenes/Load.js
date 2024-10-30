class Load extends Phaser.Scene {
    constructor() {
        super('LoadScene')
    }

    preload() {
        // loading bar
        this.load.image('circle', './assets/images/circle.png')
    }

    create() {
        // running checks
        console.log('%cLOAD SCENE :^)', testColor)
        
        // moving through
        this.scene.start('menuScene')
    }
}