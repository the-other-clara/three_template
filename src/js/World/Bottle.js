import { Object3D } from 'three'

export default class Bottle {
  constructor(options) {
    // Options
    this.time = options.time
    this.assets = options.assets

    // Set up
    this.container = new Object3D()
    this.container.name = 'bottle'

    this.createBottle()
    this.setMovement()
  }
  createBottle() {
    this.bottle = this.assets.models.bottle.scene

    this.cap = this.bottle.children[0].children[0]
    this.label = this.bottle.children[0].children[1]
    this.shape = this.bottle.children[0].children[2]

    this.container.add(this.cap, this.shape, this.label)
  }
  setMovement() {
    this.time.on('tick', () => {
      this.bottle.rotation.y += 0.005
    })
  }
}
