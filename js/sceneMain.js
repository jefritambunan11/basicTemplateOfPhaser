class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain')
  }

  preload() {
    this.load.image("face", "./images/face.png")
  }

  create() {
    this.loadTheFace()
  }

  update() {
  }

  loadTheFace() {
    this.face = this.add.image(100, 200, "face")
    //this.face.alpha = .5
    // this.face.angle = 45
    //this.face.scaleX = .5
    //this.face.scaleY = .5
    //this.face.setOrigin(0, 0)
    this.face.x = game.config.width/2
    this.face.y = game.config.height/2
    this.face.setInteractive()
    this.face.on('pointerdown', this.onFaceClicked, this)
    this.face.on('pointerup', this.onFaceReleased, this)
  }

}