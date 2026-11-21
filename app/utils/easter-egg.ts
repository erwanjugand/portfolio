interface EasterEggStep {
  text: string
  value: number
  duration: number
}

export const easterEggSteps = [
  {
    text: 'launch mlp.exe',
    value: 0,
    duration: 500,
  },
  {
    text: 'protocol initialization…',
    value: 10,
    duration: 1500,
  },
  {
    text: 'recovering user data…',
    value: 50,
    duration: 3500,
  },
  {
    text: "sending data to Skynet's servers…",
    value: 80,
    duration: 5000,
  },
  {
    text: 'program completed!',
    value: 100,
    duration: 6000,
  },
  {
    text: 'good day! <3',
    value: 100,
    duration: 6500,
  },
] as const satisfies EasterEggStep[]
