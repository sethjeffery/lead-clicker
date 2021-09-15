const BASE_COST = 0;
const BASE_COST_MULT = 10;
const COST_INCREASE_MULT = 1.15;
const BASE_SPEED = 1000000;

const buildFactory = (args, leads) => (
  {
    leads,
    time: performance.now(),
    progress: 0.0,
    speed: 1000 + Math.pow(BASE_SPEED * leads, 0.4),
    cost: BASE_COST + leads * BASE_COST_MULT,
    count: 0,
    visible: false,
    ...args
  }
);

export default class Game {
  constructor() {
    this.leads = 0;
    this.factories = [
      buildFactory({ name: 'Client', description: 'Happy clients spread news to their friends.' }, 1),
      buildFactory({ name: 'Recruiter', description: 'We have people who will actively find new leads.' }, 10),
      buildFactory({ name: 'Lead Form', description: 'Now we can finally automate our lead flow.' }, 100),
      buildFactory({ name: 'Paid Ad', description: 'Google and Facebook bring customers to our site.' }, 1000),
      buildFactory({ name: 'TV Spot', description: 'National coverage of our campaign brings in lots of leads.' }, 10000)
    ]
  }

  tick() {
    this.factories.forEach(this.tickFactory.bind(this));
  }

  tickFactory(factory) {
    const timeSpent = performance.now() - factory.time;
    factory.time += timeSpent;

    if (factory.cost < this.leads * 2) { factory.visible = true; }
    if (!factory.count) { return; }

    const progress = factory.progress + timeSpent;
    const factor = Math.floor(progress / factory.speed);

    this.leads += factory.leads * factory.count * factor;
    factory.progress = progress - factory.speed * factor;
  }

  buyFactory(name) {
    const factory = this.factories.find(f => f.name === name);
    if(factory) {
      this.leads -= Math.round(factory.cost);
      factory.count += 1;
      factory.cost *= COST_INCREASE_MULT;
    }
  }  
}
