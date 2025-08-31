class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain')
  }

  preload() {
    this.load.image("face", "./images/face.png")
    //this.load.image("boy", "./images/boy.png")
    // for multi frame images, use load.spritesheet instead
    this.load.spritesheet(
      "boy",
      "./images/boy.png",
      {
        frameWidth: 120, 
        frameHeight: 200, 
      }      
    )
    this.load.audio(
      'cat',
      [
        './meow/meow.mp3',
        './meow/meow.ogg',
      ]
    )
    this.load.image(
      'apple',
      './images/apple.png',      
    )
  }

  create() {
    //  this.loadTheFace()
    // this.loadTheBoy()
    // this.loadTheWelcomeTxt("Welcome")
    // this.loadGraphics()
    // this.loadSounds()
    // this.loadGroups()
    this.loadContainer()
  }

  update() {    
    // this.boy.x += 1
    // if (this.boy.x === game.config.width) {
    //   this.boy.x = 0
    // }
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

  onFaceClicked() {
    this.face.alpha = .5
  }

  onFaceReleased() {
    this.face.alpha = 1
  }

  loadTheBoy() {
    this.boy = this.add.sprite(game.config.width/2, game.config.height/2, "boy")
    let frameNames = this.anims.generateFrameNumbers("boy")    
    this.anims.create({
      key: 'walk',
      frames: frameNames,      
      frameRate: 8, 
      repeat : -1
    })
    this.boy.play('walk')    
    this.doWalk()
  }

  loadTheWelcomeTxt(txt) {
    this.txt = this.add.text(
      game.config.width/2,
      game.config.height/2,
      txt,
      {
        fontFamily: 'Anton', 
        color: '#ff8e8eff'
      }
    )
    this.txt.setOrigin(0.5, 0.5)
  }

  loadGraphics() {
    this.graphics = this.add.graphics()
    this.graphics.lineStyle(8, 0xff0000)
    // from 0,0, make a line w=100, h=300 and do it
    // this.graphics.moveTo(0, 0)
    // this.graphics.lineTo(100, 300)
    // this.graphics.strokePath()    
    // create a square
    // this.graphics.strokeRect(
    //   100, //positon
    //   200, //positon
    //   150,  //size
    //   50  //size
    // )    
    this.graphics.fillStyle(0xff9e9eff, .5)
    this.graphics.fillCircle(100, 200, 60)
    this.graphics.strokePath()
  }

  loadSounds() {
    this.catSound = this.sound.add('cat')
    this.catSound.play()
  }

  loadGroups() {
    let appleGroup = this.add.group()
    for (let i=0; i < 5; ++i) {
      let xx = Phaser.Math.Between(100, 400)
      let yy = Phaser.Math.Between(100, 400)
      let apple = this.add.image(xx, yy, 'apple')
      appleGroup.add(apple)
    }    
    testObj = appleGroup
    console.log(testObj)    
  }
  
  loadContainer() {
    let appleContainer = this.add.container()
    for (let i=0; i < 5; ++i) {
      let xx = Phaser.Math.Between(100, 400)
      let yy = Phaser.Math.Between(100, 400)
      let apple = this.add.image(xx, yy, 'apple')
      appleContainer.add(apple)
    }    
    testObj = appleContainer
    console.log(testObj)   
    setTimeout(() => {
      testObj.x = 200      
      testObj.x = -50      
    }, 5000);
  }

  doWalk() {
    this.tweens.add({
      targets: this.boy,
      duration: 1000, 
      x: game.config.width,
      // y: 0,
      alpha: 0,
      onComplete: this.onCompleteHandler.bind(this), 
    })
  }

  onCompleteHandler(tween, targets, custom) {
    let char = targets[0]
    char.x = 0
    char.y = game.config.height / 2
    char.alpha = 1
    this.doWalk()
  }

}