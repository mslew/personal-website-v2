const allProjectFiles = import.meta.glob('./*.{svx,md}', { eager: true });
const allProjects = Object.entries(allProjectFiles)
const projects : string[] = allProjects.map(([name, item]) => {
    const path = name.split('/').at(-1).split('.')[0]
    return item
  })

export default projects;