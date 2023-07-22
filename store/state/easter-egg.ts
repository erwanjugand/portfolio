import { type EasterEggStep } from '../store'

const easterEggSteps: EasterEggStep[] = [
  {
    text: 'Launch mlp.exe',
    value: 0,
    duration: 500,
  },
  {
    text: 'Protocol initialization...',
    value: 10,
    duration: 1500,
  },
  {
    text: 'Recovery of user data...',
    value: 50,
    duration: 3500,
  },
  {
    text: "Sends data to Skynet's servers...",
    value: 80,
    duration: 5000,
  },
  {
    text: 'Program completed !',
    value: 100,
    duration: 6000,
  },
  {
    text: 'Good day ! <3',
    value: 100,
    duration: 6500,
  },
]

export default easterEggSteps
