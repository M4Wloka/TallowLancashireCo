class ParallaxTiltEffect {
  constructor({element, tiltEffect}) {
    this.element = element;
    this.container = this.element.querySelector(".container-products");
    this.size = [300, 360];
    [this.w, this.h] = this.size;

    this.tiltEffect = tiltEffect || 'reverse';
    this.mouseOnComponent = false;

    // Bind methods
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.defaultStates = this.defaultStates.bind(this);
    this.setProperty = this.setProperty.bind(this);
    
    this.init();
  }

  handleMouseMove(event) {
    const {offsetX, offsetY} = event;
    const X = ((offsetX - (this.w/2)) / 3) / 3;
    const Y = (-(offsetY - (this.h/2)) / 3) / 3;

    this.setProperty('--rY', X.toFixed(2));
    this.setProperty('--rX', Y.toFixed(2));
    this.setProperty('--bY', (80 - (X/4).toFixed(2)) + '%');
    this.setProperty('--bX', (50 - (Y/4).toFixed(2)) + '%');
  }

  handleMouseEnter() {
    this.mouseOnComponent = true;
    this.container.classList.add("container-products--active");
  }

  handleMouseLeave() {
    this.mouseOnComponent = false;
    this.defaultStates();
  }

  defaultStates() {
    this.container.classList.remove("container-products--active");
    this.setProperty('--rY', 0);
    this.setProperty('--rX', 0);
    this.setProperty('--bY', '80%');
    this.setProperty('--bX', '50%');
  }

  setProperty(p, v) {
    this.container.style.setProperty(p, v);
  }

  init() {
    this.element.addEventListener('mousemove', this.handleMouseMove);
    this.element.addEventListener('mouseenter', this.handleMouseEnter);
    this.element.addEventListener('mouseleave', this.handleMouseLeave);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.wrap');
  cards.forEach((card) => {
    new ParallaxTiltEffect({
      element: card,
      tiltEffect: 'reverse' 
    });
  });
});