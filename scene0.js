class scene0 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'scene0'});
    }

    preload ()
    {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    }    
    
    create ()
    {
        this.text = this.add.text(200,100,"WELCOME TO MY DEMO", {font:"40px Impat"});
        this.text = this.add.text(250,200,"PRESS 1: level 1\nPRESS 2: level 2\nPRESS 0: manuel", {font:"30px Impat"});
        this.key_1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
        this.key_2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
        
        //  Our player animations, turning, walking left and walking right.
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        
    }
    update(delta)
    {
        if (this.key_1.isDown){
            this.scene.start("scene1");
        }
        
        if (this.key_2.isDown){
            this.scene.start("scene2");
        }
    }
    
}