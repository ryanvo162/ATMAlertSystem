export interface Machine {
  id: number,
  info: {
    sim: number,
    status: string,
    name: string,
    typeDevice: string,
    address: string,
    activationDate: string,
    powerConnection: string,
    queryTime: string,
  },
  sensorStatus: {
    temperature: string
    vibration: string,
    aboveDoor: boolean,
    outsideDoor: boolean,
    safeDoor: boolean,
    backup: boolean,
    move: boolean,
    leak: boolean,
    smoke: boolean,
    battery: boolean,
    energy: string,
    warning: string,
  }
}
