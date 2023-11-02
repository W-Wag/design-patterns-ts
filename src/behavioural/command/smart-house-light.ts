export class SmartHouseLight {
  private isTurnOn = false;
  private intensity = 50;

  constructor(public name: string) {}

  getPowerStatus(): string {
    return this.isTurnOn ? 'on' : 'off';
  }

  on(): boolean {
    this.isTurnOn = true;
    console.log(`SmartHouseLight ${this.name} is ${this.getPowerStatus()}`);
    return this.isTurnOn;
  }
  off(): boolean {
    this.isTurnOn = false;
    console.log(`SmartHouseLight ${this.name} is ${this.getPowerStatus()}`);
    return this.isTurnOn;
  }

  increaseIntensity(): number {
    if (this.intensity >= 100) return this.intensity;
    this.intensity += 1;
    return this.intensity;
  }
  decreaseIntensity(): number {
    if (this.intensity <= 0) return this.intensity;
    this.intensity -= 1;
    return this.intensity;
  }
}
