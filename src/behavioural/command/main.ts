import { LightIntensityCommand } from './light-intensity-command';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';

const bedroomLight = new SmartHouseLight('bedroom');
const bathroomLight = new SmartHouseLight('bathroom');

const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight);
const bedroomIntensityCommand = new LightIntensityCommand(bedroomLight);
const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight);

const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand('btn-1', bedroomLightPowerCommand);
smartHouseApp.addCommand('btn-3', bedroomIntensityCommand);
smartHouseApp.executeCommand('btn-1');

smartHouseApp.addCommand('btn-2', bathroomLightPowerCommand);
smartHouseApp.executeCommand('btn-2');

for (let i = 0; i < 5; i++) {
  smartHouseApp.executeCommand('btn-3');
}
for (let i = 0; i < 3; i++) {
  smartHouseApp.undoCommand('btn-3');
}
