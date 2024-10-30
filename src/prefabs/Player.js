class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'circle')

        // body
        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.body.setCollideWorldBounds(true)
        this.body.setDamping(true)
        this.body.setDrag(.5)
    }
}