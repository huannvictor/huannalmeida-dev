'use client'

// export const content = {
//   en: {
//     heroTitle: 'Web Developer',
//     heroGreeting: 'Hello, my name is Huann Almeida',
//     heroPersonalPresentation: {
//       text: "Enthusiast of React and frontend, I'm on the lookout for exciting challenges to craft amazing experiences.",
//       invitation: "Let's build something awesome together?",
//     },
//     heroBtn: {
//       contact: 'Contact Me',
//       dialogTitle: 'Download my CV',
//       dialogDescription: 'Chose the language you prefer.',
//     },
//     heroBadges: {
//       experience: 'Years Of Experience',
//       interactiveDesigns: 'Interactive Designs',
//       repos: 'Repos Projects',
//     },
//   },
//   pt: {
//     heroTitle: 'Desenvolvedor Web',
//     heroGreeting: 'Olá, me chamo Huann Almeida',
//     heroPersonalPresentation: {
//       text: 'Entusiasta de React e frontend, estou sempre em busca de desafios empolgantes para criar experiências incríveis.',
//       invitation: 'Vamos construir algo incrível juntos?',
//     },
//     heroBtn: {
//       contact: 'Meu contato',
//       dialogTitle: 'Download meu CV',
//       dialogDescription: 'Escolha o idioma que preferir.',
//     },
//     heroBadges: {
//       experience: 'Anos de Experiência',
//       interactiveDesigns: 'Designs Interativos',
//       repos: 'Repositórios',
//     },
//   },
// }

export async function getRepos(): Promise<number> {
  const response = await fetch('https://api.github.com/users/huannvictor')
  const data = await response.json()
  const repos = Number(data.public_repos)
  return repos
}

export const repos = Number(getRepos())

console.log('content', repos)
