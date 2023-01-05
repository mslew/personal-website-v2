const allProjectFiles = import.meta.glob('./*.{svx,md}', { eager: true });
const allProjects = Object.entries(allProjectFiles)
const projects = allProjects.map(([name, item]) => {
  // @ts-ignore
  return {...item.metadata}
})

/**const fetchMarkdownPosts = async () => {
    const allProjectFiles = import.meta.glob('./*.{svx,md}')
    const iterableProjectFiles = Object.entries(allProjectFiles)
    
    const allProjects = await Promise.all(
      iterableProjectFiles.map(async ([path, resolver]) => {
        // @ts-ignore
        const { metadata } = await resolver()
        const projectPath = path.slice(11, -3)
  
        return {
          meta: metadata,
          path: projectPath,
        }
      })
    )
    return allProjects
}*/

export default projects;